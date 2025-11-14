# Interface: IDataSpaceConnector

Data Space Connector service interface.

## Extends

- `IComponent`

## Methods

### notifyActivity()

> **notifyActivity**(`activity`): `Promise`\<`string`\>

Notify an Activity to the DS Connector Activity Stream.

#### Parameters

##### activity

`IActivity`

The Activity notified.

#### Returns

`Promise`\<`string`\>

The Activity's identifier.

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

***

### getActivityLogEntry()

> **getActivityLogEntry**(`logEntryId`): `Promise`\<[`IActivityLogEntry`](IActivityLogEntry.md)\>

Returns Activity Log Entry which contains the Activity processing details.

#### Parameters

##### logEntryId

`string`

The Id of the Activity Log Entry (a URI).

#### Returns

`Promise`\<[`IActivityLogEntry`](IActivityLogEntry.md)\>

the Activity Log Entry with the processing details.

#### Throws

NotFoundError if activity log entry is not known.

***

### registerApp()

> **registerApp**(`appId`, `app`): `Promise`\<`void`\>

Registers a Data Space Connector App.

#### Parameters

##### appId

`string`

The Id of the App to be registered.

##### app

[`IDataSpaceConnectorApp`](IDataSpaceConnectorApp.md)

The app to be registered.

#### Returns

`Promise`\<`void`\>

Nothing.

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

***

### getDataAssetEntities()

> **getDataAssetEntities**(`dataAsset`, `entitySet`, `cursor`, `limit`): `Promise`\<[`IDataAssetItemList`](IDataAssetItemList.md)\>

Get Data Asset entities. Allows to retrieve entities by their type or id

#### Parameters

##### dataAsset

[`IDataAssetDescription`](IDataAssetDescription.md)

The data asset being referred. It can be left empty and let the system to locate a proper one.

##### entitySet

[`IEntitySet`](IEntitySet.md) & `object`

The set of entities to be retrieved.

##### cursor

Pagination details - cursor.

`string` | `undefined`

##### limit

Pagination details - max number of entities.

`number` | `undefined`

#### Returns

`Promise`\<[`IDataAssetItemList`](IDataAssetItemList.md)\>

The entities requested as a JSON-LD Document.

***

### queryDataAsset()

> **queryDataAsset**(`dataAsset`, `query`, `cursor`, `limit`): `Promise`\<[`IDataAssetItemList`](IDataAssetItemList.md)\>

Queries a data asset controlled by this DS Connector App.

#### Parameters

##### dataAsset

[`IDataAssetDescription`](IDataAssetDescription.md)

The data asset being referred.

##### query

[`IFilteringQuery`](IFilteringQuery.md)

The filtering query.

##### cursor

Pagination details - cursor.

`string` | `undefined`

##### limit

Pagination details - max number of entities.

`number` | `undefined`

#### Returns

`Promise`\<[`IDataAssetItemList`](IDataAssetItemList.md)\>

The entities requested as a JSON-LD Document.
