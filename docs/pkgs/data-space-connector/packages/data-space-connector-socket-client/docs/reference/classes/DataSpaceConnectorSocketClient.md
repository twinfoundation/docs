# Class: DataSpaceConnectorSocketClient

Data space connector which publishes using REST API and websockets.

## Extends

- `BaseSocketClient`

## Implements

- `IDataSpaceConnector`

## Constructors

### Constructor

> **new DataSpaceConnectorSocketClient**(`options`): `DataSpaceConnectorSocketClient`

Create a new instance of DataSpaceConnectorSocketClient.

#### Parameters

##### options

[`IDataSpaceConnectorSocketClientConstructorOptions`](../interfaces/IDataSpaceConnectorSocketClientConstructorOptions.md)

Options for the client.

#### Returns

`DataSpaceConnectorSocketClient`

#### Overrides

`BaseSocketClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IDataSpaceConnector.className`

***

### notifyActivity()

> **notifyActivity**(`activity`): `Promise`\<`string`\>

Notify an Activity to the DS Connector Activity Stream - implemented in REST Client.

#### Parameters

##### activity

`IActivity`

The Activity notified.

#### Returns

`Promise`\<`string`\>

The Activity's identifier.

#### Implementation of

`IDataSpaceConnector.notifyActivity`

***

### subscribeToActivityLog()

> **subscribeToActivityLog**(`callback`, `subscriptionId?`): `Promise`\<`string`\>

Subscribes to the activity log.

#### Parameters

##### callback

(`notification`) => `Promise`\<`void`\>

The callback to be called when Activity Log is called.

##### subscriptionId?

`string`

The subscription Id.

#### Returns

`Promise`\<`string`\>

The subscription Id.

#### Implementation of

`IDataSpaceConnector.subscribeToActivityLog`

***

### unSubscribeToActivityLog()

> **unSubscribeToActivityLog**(`subscriptionId`): `Promise`\<`void`\>

Unsubscribes to the activity log.

#### Parameters

##### subscriptionId

`string`

The subscription Id.

#### Returns

`Promise`\<`void`\>

The subscription Id.

#### Implementation of

`IDataSpaceConnector.unSubscribeToActivityLog`

***

### getActivityLogEntry()

> **getActivityLogEntry**(`logEntryId`): `Promise`\<`IActivityLogEntry`\>

Returns Activity Log Entry which contains the Activity processing details - implemented in REST Client.

#### Parameters

##### logEntryId

`string`

The Id of the Activity Log Entry (a URI).

#### Returns

`Promise`\<`IActivityLogEntry`\>

the Activity Log Entry with the processing details.

#### Throws

NotFoundError if activity log entry is not known.

#### Implementation of

`IDataSpaceConnector.getActivityLogEntry`

***

### registerApp()

> **registerApp**(`appId`, `app`): `Promise`\<`void`\>

Registers a Data Space Connector App.

#### Parameters

##### appId

`string`

The Id of the App to be registered.

##### app

`IDataSpaceConnectorApp`

The app to be registered.

#### Returns

`Promise`\<`void`\>

nothing.

#### Implementation of

`IDataSpaceConnector.registerApp`

***

### unregisterApp()

> **unregisterApp**(`appId`): `Promise`\<`void`\>

Un-registers a Data Space Connector App.

#### Parameters

##### appId

`string`

The Id of the App to be registered.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IDataSpaceConnector.unregisterApp`

***

### getDataAssetEntities()

> **getDataAssetEntities**(`dataAsset`, `entitySet`, `cursor?`, `limit?`): `Promise`\<`IDataAssetItemList`\>

Get Data Asset entities. Allows to retrieve entities by their type or id.

#### Parameters

##### dataAsset

`IDataAssetDescription`

The data asset being referred. It can be left empty and let the system to locate a proper one.

##### entitySet

`IEntitySet` & `object`

The set of entities to be retrieved.

##### cursor?

`string`

Pagination details - cursor.

##### limit?

`number`

Pagination details - max number of entities.

#### Returns

`Promise`\<`IDataAssetItemList`\>

The entities requested as a JSON-LD Document.

#### Implementation of

`IDataSpaceConnector.getDataAssetEntities`

***

### queryDataAsset()

> **queryDataAsset**(`dataAsset`, `query`, `cursor?`, `limit?`): `Promise`\<`IDataAssetItemList`\>

Queries a data asset controlled by this DS Connector App.

#### Parameters

##### dataAsset

`IDataAssetDescription`

The data asset being referred.

##### query

`IFilteringQuery`

The filtering query.

##### cursor?

`string`

Pagination details - cursor.

##### limit?

`number`

Pagination details - max number of entities.

#### Returns

`Promise`\<`IDataAssetItemList`\>

The entities requested as a JSON-LD Document.

#### Implementation of

`IDataSpaceConnector.queryDataAsset`

***

### handleConnected()

> `protected` **handleConnected**(): `Promise`\<`void`\>

Handle the socket connection.

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseSocketClient.handleConnected`

***

### handleError()

> `protected` **handleError**(`err`): `Promise`\<`void`\>

Handle an error.

#### Parameters

##### err

`IError`

The error to handle.

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseSocketClient.handleError`
