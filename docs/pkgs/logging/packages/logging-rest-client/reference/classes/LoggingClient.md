# Class: LoggingClient

Client for performing logging through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `ILogging`

## Constructors

### new LoggingClient()

> **new LoggingClient**(`config`): [`LoggingClient`](LoggingClient.md)

Create a new instance of LoggingClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`LoggingClient`](LoggingClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string` = `LoggingClient._CLASS_NAME`

Runtime name for the class.

#### Implementation of

`ILogging.CLASS_NAME`

## Methods

### getEndpointWithPrefix()

> **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

#### Inherited from

`BaseRestClient.getEndpointWithPrefix`

***

### fetch()

> **fetch**\<`T`, `U`\>(`route`, `method`, `request`?): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

• **T** *extends* `IHttpRequest`\<`any`\>

• **U** *extends* `IHttpResponse`\<`any`\>

#### Parameters

• **route**: `string`

The route of the request.

• **method**: `HttpMethod`

The http method.

• **request?**: `T`

Request to send to the endpoint.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

***

### log()

> **log**(`logEntry`): `Promise`\<`void`\>

Log an entry to the connector.

#### Parameters

• **logEntry**: `ILogEntry`

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ILogging.log`

***

### query()

> **query**(`level`?, `source`?, `timeStart`?, `timeEnd`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query the log entries.

#### Parameters

• **level?**: `LogLevel`

The level of the log entries.

• **source?**: `string`

The source of the log entries.

• **timeStart?**: `number`

The inclusive time as the start of the log entries.

• **timeEnd?**: `number`

The inclusive time as the end of the log entries.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

#### Returns

`Promise`\<`object`\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

##### entities

> **entities**: `ILogEntry`[]

The entities, which can be partial if a limited keys list was provided.

##### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

##### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

##### totalEntities

> **totalEntities**: `number`

Total entities length.

#### Implementation of

`ILogging.query`

#### Throws

NotImplementedError if the implementation does not support retrieval.
