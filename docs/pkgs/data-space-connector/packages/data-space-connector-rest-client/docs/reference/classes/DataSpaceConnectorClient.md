# Class: DataSpaceConnectorClient

The client to connect to the data space connector service.

## Extends

- `BaseRestClient`

## Implements

- `IDataSpaceConnector`

## Constructors

### Constructor

> **new DataSpaceConnectorClient**(`config`): `DataSpaceConnectorClient`

Create a new instance of DataSpaceConnectorClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`DataSpaceConnectorClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IDataSpaceConnector.CLASS_NAME`

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

#### Implementation of

`IDataSpaceConnector.notifyActivity`

***

### subscribeToActivityLog()

> **subscribeToActivityLog**(`callback`, `subscriptionId?`): `Promise`\<`string`\>

Subscribes to the activity log - implemented in Socket Client.

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

Unsubscribes to the activity log - implemented in Socket Client.

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

Returns Activity Log Entry which contains the Activity processing details.

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

### registerDataSpaceConnectorApp()

> **registerDataSpaceConnectorApp**(`app`): `Promise`\<`void`\>

Registers a Data Space Connector App.

#### Parameters

##### app

`IDataSpaceConnectorAppDescriptor`

The descriptor of the App to be registered.

#### Returns

`Promise`\<`void`\>

nothing.

#### Implementation of

`IDataSpaceConnector.registerDataSpaceConnectorApp`
