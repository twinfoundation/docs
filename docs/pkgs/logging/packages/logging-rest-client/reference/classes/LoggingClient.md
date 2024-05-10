# Class: LoggingClient

Client for performing logging through to REST endpoints.

## Hierarchy

- `BaseRestClient`

  ↳ **`LoggingClient`**

## Implements

- `ILogging`

## Constructors

### constructor

• **new LoggingClient**(`config`): [`LoggingClient`](LoggingClient.md)

Create a new instance of LoggingClient.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `IBaseRestClientConfig` | The configuration for the client. |

#### Returns

[`LoggingClient`](LoggingClient.md)

#### Overrides

BaseRestClient.constructor

## Methods

### fetch

▸ **fetch**\<`T`, `U`\>(`requestContext`, `route`, `method`, `request?`): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `IHttpRequest`\<`unknown`\> |
| `U` | extends `IHttpResponse`\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `route` | `string` | The route of the request. |
| `method` | `HttpMethods` | The http method. |
| `request?` | `T` | Request to send to the endpoint. |

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

BaseRestClient.fetch

___

### getEndpointWithPrefix

▸ **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

#### Inherited from

BaseRestClient.getEndpointWithPrefix

___

### log

▸ **log**(`requestContext`, `logEntry`): `Promise`\<`undefined` \| `string`\>

Log an entry to the connector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `logEntry` | `ILogEntry` | The entry to log. |

#### Returns

`Promise`\<`undefined` \| `string`\>

An identifier if one was allocated during the logging process.

#### Implementation of

ILogging.log

___

### query

▸ **query**(`requestContext`, `level?`, `source?`, `timeStart?`, `timeEnd?`, `cursor?`, `pageSize?`): `Promise`\<\{ `cursor?`: `string` ; `entities`: `ILogEntry`[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

Query the log entries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestContext` | `IRequestContext` | The context for the request. |
| `level?` | `LogLevel` | The level of the log entries. |
| `source?` | `string` | The source of the log entries. |
| `timeStart?` | `number` | The inclusive time as the start of the log entries. |
| `timeEnd?` | `number` | The inclusive time as the end of the log entries. |
| `cursor?` | `string` | The cursor to request the next page of entities. |
| `pageSize?` | `number` | The maximum number of entities in a page. |

#### Returns

`Promise`\<\{ `cursor?`: `string` ; `entities`: `ILogEntry`[] ; `pageSize?`: `number` ; `totalEntities`: `number`  }\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

**`Throws`**

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

ILogging.query
