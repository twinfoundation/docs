# Interface: ILoggingConnector

Interface describing a logging connector.

## Extends

- `IComponent`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The name of the component.

#### Inherited from

`IComponent.CLASS_NAME`

## Methods

### bootstrap()?

> `optional` **bootstrap**(`nodeLoggingConnectorType`?): `Promise`\<`boolean`\>

Bootstrap the component by creating and initializing any resources it needs.

#### Parameters

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`boolean`\>

True if the bootstrapping process was successful.

#### Inherited from

`IComponent.bootstrap`

***

### start()?

> `optional` **start**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node starting the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.start`

***

### stop()?

> `optional` **stop**(`nodeIdentity`, `nodeLoggingConnectorType`?): `Promise`\<`void`\>

The component needs to be stopped when the node is closed.

#### Parameters

• **nodeIdentity**: `string`

The identity of the node stopping the component.

• **nodeLoggingConnectorType?**: `string`

The node logging connector type, defaults to "node-logging".

#### Returns

`Promise`\<`void`\>

Nothing.

#### Inherited from

`IComponent.stop`

***

### log()

> **log**(`logEntry`): `Promise`\<`void`\>

Log an entry to the connector.

#### Parameters

• **logEntry**: [`ILogEntry`](ILogEntry.md)

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

***

### query()

> **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<`object`\>

Query the log entries.

#### Parameters

• **conditions?**: `EntityCondition`\<[`ILogEntry`](ILogEntry.md)\>

The conditions to match for the entities.

• **sortProperties?**: `object`[]

The optional sort order.

• **properties?**: keyof [`ILogEntry`](ILogEntry.md)[]

The optional keys to return, defaults to all.

• **cursor?**: `string`

The cursor to request the next page of entities.

• **pageSize?**: `number`

The maximum number of entities in a page.

#### Returns

`Promise`\<`object`\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

##### entities

> **entities**: `Partial`\<[`ILogEntry`](ILogEntry.md)\>[]

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

#### Throws

NotImplementedError if the implementation does not support retrieval.
