# Class: EntityStorageLoggingConnector

Class for performing logging operations in entity storage.

## Implements

- `ILoggingConnector`

## Constructors

### new EntityStorageLoggingConnector()

> **new EntityStorageLoggingConnector**(`options`?): [`EntityStorageLoggingConnector`](EntityStorageLoggingConnector.md)

Create a new instance of EntityStorageLoggingConnector.

#### Parameters

##### options?

[`IEntityStorageLoggingConnectorConstructorOptions`](../interfaces/IEntityStorageLoggingConnectorConstructorOptions.md)

The options for the connector.

#### Returns

[`EntityStorageLoggingConnector`](EntityStorageLoggingConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

The namespace for the logging connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`ILoggingConnector.CLASS_NAME`

## Methods

### log()

> **log**(`logEntry`): `Promise`\<`void`\>

Log an entry to the connector.

#### Parameters

##### logEntry

`ILogEntry`

The entry to log.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`ILoggingConnector.log`

***

### query()

> **query**(`conditions`?, `sortProperties`?, `properties`?, `cursor`?, `pageSize`?): `Promise`\<\{ `entities`: `Partial`\<`ILogEntry`\>[]; `cursor`: `string`; \}\>

Query the log entries.

#### Parameters

##### conditions?

`EntityCondition`\<`ILogEntry`\>

The conditions to match for the entities.

##### sortProperties?

`object`[]

The optional sort order.

##### properties?

keyof `ILogEntry`[]

The optional keys to return, defaults to all.

##### cursor?

`string`

The cursor to request the next page of entities.

##### pageSize?

`number`

The maximum number of entities in a page.

#### Returns

`Promise`\<\{ `entities`: `Partial`\<`ILogEntry`\>[]; `cursor`: `string`; \}\>

All the entities for the storage matching the conditions,
and a cursor which can be used to request more entities.

#### Throws

NotImplementedError if the implementation does not support retrieval.

#### Implementation of

`ILoggingConnector.query`
