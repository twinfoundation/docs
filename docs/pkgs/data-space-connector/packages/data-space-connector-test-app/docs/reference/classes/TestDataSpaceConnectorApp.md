# Class: TestDataSpaceConnectorApp

Test App Activity Handler.

## Implements

- `IDataSpaceConnectorApp`

## Constructors

### Constructor

> **new TestDataSpaceConnectorApp**(`options?`): `TestDataSpaceConnectorApp`

Create a new instance of TestDataSpaceConnectorApp.

#### Parameters

##### options?

[`ITestAppConstructorOptions`](../interfaces/ITestAppConstructorOptions.md)

The constructor options.

#### Returns

`TestDataSpaceConnectorApp`

## Properties

### APP\_ID

> `readonly` `static` **APP\_ID**: `"https://twin.example.org/app1"` = `"https://twin.example.org/app1"`

App Name.

***

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

`IDataSpaceConnectorApp.className`

***

### dataServicesHandled()

> **dataServicesHandled**(): `IDataAssetQuery`[]

Data Services handled.

#### Returns

`IDataAssetQuery`[]

Ids.

#### Implementation of

`IDataSpaceConnectorApp.dataServicesHandled`

***

### supportedQueryTypes()

> **supportedQueryTypes**(): `string`[]

Supported query types.

#### Returns

`string`[]

Types.

#### Implementation of

`IDataSpaceConnectorApp.supportedQueryTypes`

***

### start()

> **start**(`nodeLoggingComponentType?`): `Promise`\<`void`\>

Start method.

#### Parameters

##### nodeLoggingComponentType?

`string`

the logging component type of such a node.

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IDataSpaceConnectorApp.start`

***

### activitiesHandled()

> **activitiesHandled**(): `IActivityQuery`[]

The activities handled by the App.

#### Returns

`IActivityQuery`[]

The activities handled by the App.

#### Implementation of

`IDataSpaceConnectorApp.activitiesHandled`

***

### handleActivity()

> **handleActivity**\<`T`\>(`activity`): `Promise`\<`T`\>

Handle Activity.

#### Type Parameters

##### T

`T`

#### Parameters

##### activity

`IActivity`

Activity

#### Returns

`Promise`\<`T`\>

Activity processing result

#### Implementation of

`IDataSpaceConnectorApp.handleActivity`

***

### handleDataRequest()

> **handleDataRequest**(`dataRequest`): `Promise`\<\{ `data`: `IJsonLdDocument`; `cursor?`: `string`; \}\>

Handles the Data Request.

#### Parameters

##### dataRequest

`IDataRequest`

The data request

#### Returns

`Promise`\<\{ `data`: `IJsonLdDocument`; `cursor?`: `string`; \}\>

the Data.

#### Implementation of

`IDataSpaceConnectorApp.handleDataRequest`
