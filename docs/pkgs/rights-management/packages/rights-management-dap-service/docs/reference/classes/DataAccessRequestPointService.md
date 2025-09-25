# Class: DataAccessRequestPointService

Class implementation of Data Access Request Point Component.

## Implements

- `IDataAccessRequestPointComponent`

## Constructors

### Constructor

> **new DataAccessRequestPointService**(`options`): `DataAccessRequestPointService`

Create a new instance of DataAccessRequestPointService (DARP).

#### Parameters

##### options

[`IDataAccessRequestPointServiceConstructorOptions`](../interfaces/IDataAccessRequestPointServiceConstructorOptions.md)

The options for the component.

#### Returns

`DataAccessRequestPointService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

The class name of the Data Access Request Point Service.

#### Implementation of

`IDataAccessRequestPointComponent.CLASS_NAME`

## Methods

### start()

> **start**(`nodeIdentity`, `nodeLoggingComponentType`): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

##### nodeIdentity

`string`

The identity of the node starting the component.

##### nodeLoggingComponentType

The node logging component type.

`undefined` | `string`

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataAccessRequestPointComponent.start`

***

### create()

> **create**(`url`, `assetType`, `item`): `Promise`\<`string`\>

Create an item.

#### Parameters

##### url

`string`

The URL of the data access point.

##### assetType

`string`

The type of the item to create.

##### item

`IJsonLdNodeObject`

The item to create.

#### Returns

`Promise`\<`string`\>

The id of the item created, for some items this is supplied in the `item`.

#### Implementation of

`IDataAccessRequestPointComponent.create`

***

### get()

> **get**(`url`, `assetType`, `id`): `Promise`\<`IJsonLdNodeObject`\>

Get an item.

#### Parameters

##### url

`string`

The URL of the data access point.

##### assetType

`string`

The type of the item to retrieve.

##### id

`string`

The ID of the item to retrieve.

#### Returns

`Promise`\<`IJsonLdNodeObject`\>

The item retrieved if the policies allow it.

#### Implementation of

`IDataAccessRequestPointComponent.get`

***

### update()

> **update**(`url`, `assetType`, `item`): `Promise`\<`void`\>

Update an item.

#### Parameters

##### url

`string`

The URL of the data access point.

##### assetType

`string`

The type of the item to update.

##### item

`IJsonLdNodeObject`

The item to update.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataAccessRequestPointComponent.update`

***

### remove()

> **remove**(`url`, `assetType`, `id`): `Promise`\<`void`\>

Remove an item.

#### Parameters

##### url

`string`

The URL of the data access point.

##### assetType

`string`

The type of the item to remove.

##### id

`string`

The id of the item to remove.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataAccessRequestPointComponent.remove`

***

### query()

> **query**(`url`, `assetType`, `conditions`, `cursor`, `options`): `Promise`\<\{ `items`: `IJsonLdNodeObject`[]; `cursor?`: `string`; \}\>

Query for items.

#### Parameters

##### url

`string`

The URL of the data access point.

##### assetType

`string`

The type of the item to query.

##### conditions

The conditions to apply to the query.

`undefined` | `EntityCondition`\<`IJsonLdNodeObject`\>

##### cursor

The cursor for pagination.

`undefined` | `string`

##### options

`unknown`

Additional options which might be supported by the handler.

#### Returns

`Promise`\<\{ `items`: `IJsonLdNodeObject`[]; `cursor?`: `string`; \}\>

The items matching the query and cursor if there are more items.

#### Implementation of

`IDataAccessRequestPointComponent.query`
