# Class: DataSpaceConnectorService

Data Space Connector Service.

## Implements

- `IDataSpaceConnector`

## Constructors

### Constructor

> **new DataSpaceConnectorService**(`options`): `DataSpaceConnectorService`

Create a new instance of FederatedCatalogue service.

#### Parameters

##### options

[`IDataSpaceConnectorServiceConstructorOptions`](../interfaces/IDataSpaceConnectorServiceConstructorOptions.md)

The options for the connector.

#### Returns

`DataSpaceConnectorService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IDataSpaceConnector.CLASS_NAME`

## Methods

### start()

> **start**(`nodeIdentity`, `nodeLoggingComponentType?`): `Promise`\<`void`\>

Start step. It just registers the Data Space Connector Apps initial descriptors.

#### Parameters

##### nodeIdentity

`string`

Node Identity

##### nodeLoggingComponentType?

`string`

Node Logging Component type.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IDataSpaceConnector.start`

***

### notifyActivity()

> **notifyActivity**(`activity`): `Promise`\<`string`\>

Notify an Activity.

#### Parameters

##### activity

`IActivity`

The Activity notified.

#### Returns

`Promise`\<`string`\>

The Activity's Log Entry identifier.

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

The Subscription Id.

#### Returns

`Promise`\<`string`\>

The subscription Id.

#### Implementation of

`IDataSpaceConnector.subscribeToActivityLog`

***

### unSubscribeToActivityLog()

> **unSubscribeToActivityLog**(`subscriptionId`): `Promise`\<`void`\>

Subscribes to the activity log.

#### Parameters

##### subscriptionId

`string`

The Subscription Id.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IDataSpaceConnector.unSubscribeToActivityLog`

***

### getActivityLogEntry()

> **getActivityLogEntry**(`logEntryId`): `Promise`\<`IActivityLogEntry`\>

Returns the activity processing details of an activity.

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

The App to be registered.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IDataSpaceConnector.registerDataSpaceConnectorApp`
