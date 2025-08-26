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

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IDataSpaceConnector.CLASS_NAME`

## Methods

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

### registerDataSpaceConnectorApp()

> **registerDataSpaceConnectorApp**(`app`): `Promise`\<`void`\>

Registers a Data Space Connector App - Not available from client.

#### Parameters

##### app

`IDataSpaceConnectorAppDescriptor`

The descriptor of the App to be registered.

#### Returns

`Promise`\<`void`\>

nothing.

#### Implementation of

`IDataSpaceConnector.registerDataSpaceConnectorApp`

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
