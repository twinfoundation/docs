---
id: twin-iota-dlt-obtain-token
---

# How to Obtain a Token

First, you need to authenticate with the API to get an access token. The token is returned in the `set-cookie` header of the response.

> **Note**: Replace `YOUR_EMAIL` and `YOUR_PASSWORD` with your actual credentials. To obtain credentials, contact the TWIN team or check the playground documentation.

**Standard Playground API Call:**

```sh
curl -i --location 'https://playground-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "YOUR_EMAIL",
    "password": "YOUR_PASSWORD"
}'
```

**Sandbox API Call:**

```sh
curl -i --location 'https://playground-aws-api.twindev.org/authentication/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "YOUR_EMAIL",
    "password": "YOUR_PASSWORD"
}'
```

After running the command, extract the `access_token` from the `set-cookie` header for use in subsequent requests.

## Troubleshooting Token Acquisition

- If you don't see a token, make sure your `curl` command includes the `-i` flag to show response headers.
- Tokens expire, so you may need to re-authenticate to get a new one.

---
