# @twin.org/workbench-server - Deployment Amazon AWS EC2

## Amazon AWS EC2 Instance

To run the server on an AWS EC2 instance follow the steps below:

First follow one of the many online guides to create your EC2 instance with the ability to connect to it in terminal mode.

Network requirements are for the `https` port to be open to any address range i.e. `0.0.0.0`.

You should alias a domain name to the IP address of the instance e.g. `workbench-api.example.com` using your DNS provider e.g. Cloudflare.

## Install Git

For retrieving the code from the repo.

```shell
sudo yum install git -y
git -version
```

## Install NVM and Node

For building and running the application.

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 20
node -v
```

## Install nginx

To serve the app through an https reverse proxy.

```shell
sudo yum install nginx -y
nginx -v
```

## Install certbot

To generate and install the certificate. The certbot command will prompt you for the name of the server i.e. the domain you aliased to the instance `workbench-api.example.com`

```shell
sudo python3 -m venv /opt/certbot/
sudo /opt/certbot/bin/pip install --upgrade pip
sudo /opt/certbot/bin/pip install certbot certbot-nginx
sudo certbot --nginx
```

## Configuring nginx

We need to configure nginx to use the certificate and reverse proxy https traffic to the node server.

```shell
sudo nano /etc/nginx/nginx.conf
```

The configuration should be along the lines of:

```shell
server {
    listen 80;
    server_name workbench-api.example.com;

    # Redirect all traffic
    return 301 https://$server_name$request_uri;
}

server {
    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;

    server_name workbench-api.example.com;

    ssl_certificate /etc/letsencrypt/live/workbench-api.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/workbench-api.example.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        # Redirect the https traffic to the node instance
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Once configured you can restart nginx with `sudo systemctl restart nginx`

## Building the server

We clone the repo, build it and then make a copy of the relevant .env file.

```shell
git clone https://github.com/twinfoundation/workbench.git
cd apps
npm install
cd apps/workbench-server
npm run dist
cp .env.example-entity-storage .env
```

The .env file can be modified to suit your own use case. For example to set the location for the storage.

```shell
WORKBENCH_STORAGE_FILE_ROOT="/home/ec2-user/workbench/"
```

## Bootstrapping the server

You can now bootstrap the server, this will initialise all the required services and generate an initial configuration file. You should take note of the information in the logging as it will display information such as node admin passwords which will only be displayed once.

```shell
node ./dist/es/index.js
```

You should also now be able to access the server at `https://workbench-api.example.com`

## Configure the server to restart with server

We now need to install the server as a service, so that after any reboot it will continue to run.

Stop the server with `Ctrl-C`.

Create a service file e.g. `workbench.service`

You might need to modify the location for the node version, you can find this out using `whereis node`

```shell
[Unit]
Description=Workbench Server
After=network.target

[Service]
ExecStart=/home/ec2-user/.nvm/versions/node/v20.16.0/bin/node /home/ec2-user/workbench/apps/workbench-server/dist/es/index.js
Restart=always
User=ec2-user
Group=ec2-user
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
WorkingDirectory=/home/ec2-user/workbench/apps/workbench-server/

[Install]
WantedBy=multi-user.target
```

Reload systemd and start the service.

```shell
sudo systemctl daemon-reload
sudo systemctl enable ./workbench.service
sudo systemctl start workbench.service
```

To check the status of the service.

```shell
sudo systemctl status workbench.service
```

or

```shell
sudo journalctl -u workbench | tail
```

## Upgrade EC2 Instance

To upgrade a previous installation on an EC2 instance with the latest version.

```shell
sudo systemctl stop workbench.service
cd apps
git pull
npm i
cd apps/workbench-server
npm run dist

# Update any env vars if necessary
# nano .env

# To perform a test run before launching the service permanently
# npm run start

sudo systemctl start workbench.service
```
