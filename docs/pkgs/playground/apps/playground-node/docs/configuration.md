# @twin.org/playground-node - Configuration

## Environment Variables

The following properties are read from environment variables when the server is launched, the file `.env` is also read if you want to store them all in one file.

| Variable             | Description                                        | Default                     | Example                 |
| -------------------- | -------------------------------------------------- | --------------------------- | ----------------------- |
| PORT                 | The port to listen on for the server               | 3000                        | 4000                    |
| HOST                 | The host name for the server                       | localhost                   | example.com             |
| HTTP_METHODS         | The HTTP Methods that are allowed                  | GET,PUT,POST,DELETE,OPTIONS | GET,POST,OPTIONS        |
| HTTP_ALLOWED_HEADERS | Any additional HTTP Headers that should be allowed |                             | X-Custom-Header         |
| HTTP_EXPOSED_HEADERS | Any additional HTTP Headers that should be exposed |                             | X-Custom-Header         |
| CORS_ORIGINS         | CORS origins                                       | \*                          | example.com,example.org |
| DEBUG                | Should the server run in debug mode                | false                       | true                    |
