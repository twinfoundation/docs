# @gtsc/ts-to-openapi - Examples

## Command Line Tool

First install the tool with the following script.

```shell
npm install @gtsc/ts-to-openapi
```

You can then run the tool from the command line e.g.

```shell
ts-to-openapi
```

You should see the following response:

```shell
TypeScript to OpenAPI
=====================

Usage:
        ts-to-openapi <config-json> <output-api-json>
Error: You must specify the config json
```

As you can see you must provide both a configuration file, and an output file.

An example configuration file looks as follows:

```json
{
  "title": "Global Trade and Supply Chain - Test Endpoints",
  "version": "1.0.0",
  "description": "REST API for Global Trade and Supply Chain - Test Endpoints.",
  "licenseName": "Apache 2.0 License",
  "licenseUrl": "https://opensource.org/licenses/Apache-2.0",
  "servers": ["https://localhost"],
  "authMethods": ["jwtBearer"],
  "restRoutes": [
    {
      "package": "@gtsc/logging-service",
      "version": "next",
      "pathRoot": "/logging"
    },
    {
      "package": "@gtsc/identity-service",
      "version": "next",
      "pathRoot": "/identity"
    }
  ]
}
```

If you save the example as `config.json` and then want the output in `output.json` you would use the following command line:

```shell
ts-to-openapi config.json output.json
```

When running this command you should see the following output:

```shell
TypeScript to OpenAPI
=====================

Config JSON: config.json
Output API JSON: output.json
Loading Config JSON: config.json
Creating security schemas
Loading Modules: @gtsc/logging-service@next @gtsc/identity-service@next

added 43 packages, and audited 44 packages in 2s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Reading Package JSON: @gtsc/logging-service
Importing Module: @gtsc/logging-service
Reading Package JSON: @gtsc/identity-service
Importing Module: @gtsc/identity-service
  Route loggingEntryCreate POST /logging/
  Route loggingListEntries GET /logging/
  Route identityCreate POST /identity/
  Route identityUpdate PUT /identity/:identity
  Route identityGet GET /identity/:identity
  Route identitiesList GET /identity/

Generating Schemas
Processing Models //work/node_modules/@gtsc/api-models/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/core/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/core/dist/types/errors/**/*.ts
Processing Models //work/node_modules/@gtsc/entity/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/logging-models/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/services/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/web/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/web/dist/types/errors/**/*.ts
Processing Models //work/node_modules/@gtsc/identity-service/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/api-models/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/core/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/core/dist/types/errors/**/*.ts
Processing Models //work/node_modules/@gtsc/crypto/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/entity/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/entity-storage-connector-memory/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/entity-storage-models/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/identity-connector-entity-storage/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/identity-models/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/schema/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/services/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/vault-connector-entity-storage/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/vault-models/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/web/dist/types/models/**/*.ts
Processing Models //work/node_modules/@gtsc/web/dist/types/errors/**/*.ts

Finalising Schemas
Writing Output: output.json
```

The generated `output.json` should be:

```json
{
  "openapi": "3.1.0",
  "info": {
    "title": "Global Trade and Supply Chain - Test Endpoints",
    "description": "REST API for Global Trade and Supply Chain - Test Endpoints.",
    "version": "1.0.0",
    "license": {
      "name": "Apache 2.0 License",
      "url": "https://opensource.org/licenses/Apache-2.0"
    }
  },
  "servers": [
    {
      "url": "https://localhost"
    }
  ],
  "tags": [],
  "paths": {
    "/logging": {
      "post": {
        "operationId": "loggingEntryCreate",
        "summary": "Create a log entry",
        "tags": ["Logging"],
        "security": [
          {
            "jwtBearerAuthScheme": []
          }
        ],
        "responses": {
          "200": {
            "description": "The rest request ended in created response.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreatedResponse"
                }
              }
            },
            "headers": {
              "location": {
                "schema": {
                  "type": "string"
                },
                "description": "e.g. c57d94b088f4c6d2cb32ded014813d0c786aa00134c8ee22f84b1e2545602a70"
              }
            }
          }
        },
        "requestBody": {
          "description": "Create a new log entry.",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LogEntry"
              },
              "examples": {
                "loggingEntryCreateInfoExample": {
                  "value": {
                    "level": "info",
                    "message": "This is an information message",
                    "source": "source",
                    "ts": 1715252922273
                  }
                },
                "loggingEntryCreateErrorExample": {
                  "value": {
                    "level": "info",
                    "message": "This is an error message",
                    "source": "source",
                    "ts": 1715252922273,
                    "error": {
                      "name": "GeneralError",
                      "message": "component.error",
                      "properties": {
                        "foo": "bar"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "get": {
        "operationId": "loggingListEntries",
        "summary": "Get a list of the log entries",
        "tags": ["Logging"],
        "parameters": [
          {
            "name": "level",
            "description": "The level of the log entries to retrieve.",
            "in": "query",
            "required": false,
            "schema": {},
            "example": "info"
          },
          {
            "name": "source",
            "description": "The source of the log entries to retrieve.",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "timeStart",
            "description": "The start time of the metrics to retrieve as a timestamp in ms.",
            "in": "query",
            "required": false,
            "schema": {
              "type": "number"
            }
          },
          {
            "name": "timeEnd",
            "description": "The end time of the metrics to retrieve as a timestamp in ms.",
            "in": "query",
            "required": false,
            "schema": {
              "type": "number"
            }
          },
          {
            "name": "cursor",
            "description": "The optional cursor to get next chunk.",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "pageSize",
            "description": "The maximum number of entities in a page.",
            "in": "query",
            "required": false,
            "schema": {
              "type": "number"
            }
          }
        ],
        "security": [
          {
            "jwtBearerAuthScheme": []
          }
        ],
        "responses": {
          "200": {
            "description": "Response for log entry list request.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoggingListResponse"
                },
                "examples": {
                  "listResponseExample": {
                    "value": {
                      "entities": [
                        {
                          "level": "info",
                          "message": "This is an information message",
                          "source": "source",
                          "ts": 1715252922273
                        }
                      ],
                      "cursor": "1",
                      "pageSize": 10,
                      "totalEntities": 20
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/identity": {
      "post": {
        "operationId": "identityCreate",
        "summary": "Create a new identity",
        "tags": ["Identity"],
        "security": [
          {
            "jwtBearerAuthScheme": []
          }
        ],
        "responses": {
          "200": {
            "description": "The rest request ended in created response.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreatedResponse"
                }
              }
            },
            "headers": {
              "location": {
                "schema": {
                  "type": "string"
                },
                "description": "e.g. did:gtsc:0xc57d94b088f4c6d2cb32ded014813d0c786aa00134c8ee22f84b1e2545602a70"
              }
            }
          }
        },
        "requestBody": {
          "description": "Create a new identity.",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/IdentityCreateRequest"
              },
              "examples": {
                "identityCreateRequestExample": {
                  "value": {
                    "role": "user",
                    "properties": [
                      {
                        "key": "email",
                        "type": "https://schema.org/Text",
                        "value": "john@example.com"
                      },
                      {
                        "key": "name",
                        "type": "https://schema.org/Text",
                        "value": "John Doe"
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "get": {
        "operationId": "identitiesList",
        "summary": "Get the list of identities based on the provided criteria",
        "tags": ["Identity"],
        "parameters": [
          {
            "name": "role",
            "description": "The property name to use for lookup.",
            "in": "query",
            "required": false,
            "schema": {},
            "example": "user"
          },
          {
            "name": "propertyNames",
            "description": "The properties to get for the profile, defaults to all. should be a comma separated list.",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "cursor",
            "description": "The cursor for paged requests.",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "pageSize",
            "description": "Number of items to return.",
            "in": "query",
            "required": false,
            "schema": {
              "type": "number"
            }
          }
        ],
        "security": [
          {
            "jwtBearerAuthScheme": []
          }
        ],
        "responses": {
          "200": {
            "description": "Response to get a list of identities.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityListResponse"
                },
                "examples": {
                  "identitiesListResponseExample": {
                    "value": {
                      "identities": [
                        {
                          "identity": "did:gtsc:0xc57d94b088f4c6d2cb32ded014813d0c786aa00134c8ee22f84b1e2545602a70",
                          "properties": [
                            {
                              "key": "email",
                              "type": "https://schema.org/Text",
                              "value": "john@example.com"
                            }
                          ]
                        }
                      ],
                      "cursor": "1",
                      "pageSize": 10,
                      "totalEntities": 20
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/identity/{identity}": {
      "put": {
        "operationId": "identityUpdate",
        "summary": "Update an identity",
        "tags": ["Identity"],
        "parameters": [
          {
            "name": "identity",
            "description": "The identity to update the profile for.",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            },
            "style": "simple",
            "example": "did:gtsc:0xc57d94b088f4c6d2cb32ded014813d0c786aa00134c8ee22f84b1e2545602a70"
          }
        ],
        "security": [
          {
            "jwtBearerAuthScheme": []
          }
        ],
        "responses": {
          "200": {
            "description": "The resource you tried to access does not exist, see the error field for more details.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/NotFoundResponse"
                }
              }
            }
          }
        },
        "requestBody": {
          "description": "Request to update an identity.",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/IdentityUpdateRequest"
              },
              "examples": {
                "identityUpdateRequestExample": {
                  "value": {
                    "properties": [
                      {
                        "key": "email",
                        "type": "https://schema.org/Text",
                        "value": "john@example.com"
                      },
                      {
                        "key": "name",
                        "type": "https://schema.org/Text",
                        "value": "John Smith"
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "get": {
        "operationId": "identityGet",
        "summary": "Get the identity details",
        "tags": ["Identity"],
        "parameters": [
          {
            "name": "identity",
            "description": "The identity to get the profile for.",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            },
            "style": "simple",
            "example": "did:gtsc:0xc57d94b088f4c6d2cb32ded014813d0c786aa00134c8ee22f84b1e2545602a70"
          },
          {
            "name": "propertyNames",
            "description": "The properties to get for the profile, defaults to all. should be a comma separated list.",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "example": "email,name"
          }
        ],
        "security": [
          {
            "jwtBearerAuthScheme": []
          }
        ],
        "responses": {
          "200": {
            "description": "The resource you tried to access does not exist, see the error field for more details.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/NotFoundResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "LogEntry": {
        "type": "object",
        "properties": {
          "level": {
            "$ref": "#/components/schemas/LogLevel"
          },
          "source": {
            "type": "string",
            "description": "The source of the log entry."
          },
          "ts": {
            "type": "number",
            "description": "The timestamp of the log entry, if left blank will be populated by the connector."
          },
          "message": {
            "type": "string",
            "description": "The message."
          },
          "error": {
            "$ref": "#/components/schemas/Error"
          },
          "data": {
            "description": "Optional data for the message."
          }
        },
        "required": ["level", "source", "message"],
        "additionalProperties": false,
        "description": "Interface describing a log entry."
      },
      "LogLevel": {
        "type": "string",
        "enum": ["info", "error", "warn", "trace", "debug"],
        "description": "Log level."
      },
      "Error": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "The name for the error."
          },
          "message": {
            "type": "string",
            "description": "The message for the error."
          },
          "source": {
            "type": "string",
            "description": "The source of the error."
          },
          "properties": {
            "type": "object",
            "additionalProperties": {},
            "description": "Any additional information for the error."
          },
          "stack": {
            "type": "string",
            "description": "The stack trace for the error."
          },
          "inner": {
            "$ref": "#/components/schemas/Error"
          }
        },
        "required": ["name", "message"],
        "additionalProperties": false,
        "description": "Model to describe serialized error."
      },
      "CreatedResponse": {
        "type": "object",
        "properties": {
          "statusCode": {
            "$ref": "#/components/schemas/HttpStatusCodes"
          },
          "headers": {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
                "description": "The location where the resource was created."
              }
            },
            "required": ["location"],
            "additionalProperties": false,
            "description": "Additional response headers."
          }
        },
        "required": ["statusCode", "headers"],
        "additionalProperties": false,
        "description": "The rest request ended in created response."
      },
      "HttpStatusCodes": {
        "type": "object",
        "additionalProperties": false,
        "description": "Standard HTTP status codes."
      },
      "LoggingListResponse": {
        "type": "object",
        "properties": {
          "entities": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LogEntry"
            },
            "description": "The entities, which can be partial if a limited keys list was provided."
          },
          "cursor": {
            "type": "string",
            "description": "An optional cursor, when defined can be used to call find to get more entities."
          },
          "pageSize": {
            "type": "number",
            "description": "Number of entities to return."
          },
          "totalEntities": {
            "type": "number",
            "description": "Total entities length."
          }
        },
        "required": ["entities", "totalEntities"],
        "additionalProperties": false,
        "description": "The response payload."
      },
      "IdentityCreateRequest": {
        "type": "object",
        "properties": {
          "role": {
            "$ref": "#/components/schemas/IdentityRole"
          },
          "properties": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Property"
            },
            "description": "Initial properties for the identity."
          }
        },
        "required": ["role"],
        "additionalProperties": false,
        "description": "The data for the request."
      },
      "IdentityRole": {
        "type": "string",
        "enum": ["node", "organization", "user"],
        "description": "The roles that an identity can have."
      },
      "Property": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "description": "The key for the item."
          },
          "type": {
            "type": "string",
            "description": "The type for the item."
          },
          "value": {
            "description": "The value for the item."
          }
        },
        "required": ["key", "type", "value"],
        "additionalProperties": false,
        "description": "Interface describing a property."
      },
      "IdentityUpdateRequest": {
        "type": "object",
        "properties": {
          "properties": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Property"
            },
            "description": "Properties for the identity."
          }
        },
        "required": ["properties"],
        "additionalProperties": false,
        "description": "The data for the request."
      },
      "NoContentResponse": {
        "type": "object",
        "additionalProperties": false,
        "description": "The rest request ended in success with no data."
      },
      "NotFoundResponse": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "The name for the error."
          },
          "message": {
            "type": "string",
            "description": "The message for the error."
          },
          "source": {
            "type": "string",
            "description": "The source of the error."
          },
          "properties": {
            "type": "object",
            "additionalProperties": {},
            "description": "Any additional information for the error."
          },
          "stack": {
            "type": "string",
            "description": "The stack trace for the error."
          },
          "inner": {
            "$ref": "#/components/schemas/Error"
          },
          "notFoundId": {
            "type": "string",
            "description": "The id if the item that was not found."
          }
        },
        "additionalProperties": false,
        "required": ["message", "name"],
        "description": "The resource you tried to access does not exist, see the error field for more details."
      },
      "IdentityGetResponse": {
        "type": "object",
        "properties": {
          "role": {
            "$ref": "#/components/schemas/IdentityRole"
          },
          "properties": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Property"
            },
            "description": "The properties for the identity."
          }
        },
        "required": ["role"],
        "additionalProperties": false,
        "description": "The response payload."
      },
      "IdentityListResponse": {
        "type": "object",
        "properties": {
          "identities": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "identity": {
                  "type": "string"
                },
                "properties": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Property"
                  }
                }
              },
              "required": ["identity"],
              "additionalProperties": false
            },
            "description": "The identities."
          },
          "cursor": {
            "type": "string",
            "description": "An optional cursor, when defined can be used to call find to get more entities."
          },
          "pageSize": {
            "type": "number",
            "description": "Number of entities to return."
          },
          "totalEntities": {
            "type": "number",
            "description": "Total entities length."
          }
        },
        "required": ["identities", "totalEntities"],
        "additionalProperties": false,
        "description": "The response payload."
      }
    },
    "securitySchemes": {
      "jwtBearerAuthScheme": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    }
  }
}
```

You can use a tool such as [https://editor-next.swagger.io/](https://editor-next.swagger.io/) to validate that the schema is correct.

## Programatically

You can also use the package programatically as follows:

```typescript
import { rm, mkdir } from 'node:fs/promises';
import { CLI, type ITsToOpenApiConfig } from '@gtsc/ts-to-openapi';

const config: ITsToOpenApiConfig = {
  title: 'Global Trade and Supply Chain - Test Endpoints',
  version: '1.0.0',
  description: 'REST API for Global Trade and Supply Chain - Test Endpoints.',
  licenseName: 'Apache 2.0 License',
  licenseUrl: 'https://opensource.org/licenses/Apache-2.0',
  servers: ['https://localhost'],
  authMethods: ['jwtBearer'],
  restRoutes: [
    {
      package: '@gtsc/logging-service',
      version: 'next',
      pathRoot: '/logging'
    },
    {
      package: '@gtsc/identity-service',
      version: 'next',
      pathRoot: '/identity'
    }
  ]
};

// Create a working directory for the processing.
await mkdir('./working');

try {
  // Process the config and store in output.json
  const cli = new CLI();
  await cli.process(config, './output.json', './working');
} catch (err) {
  console.log(err);
} finally {
  // Remove the working directory
  await rm('./working');
}
```
