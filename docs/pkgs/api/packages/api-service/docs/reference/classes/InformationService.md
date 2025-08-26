# Class: InformationService

The information service for the server.

## Implements

- `IInformationComponent`

## Constructors

### Constructor

> **new InformationService**(`options`): `InformationService`

Create a new instance of InformationService.

#### Parameters

##### options

[`IInformationServiceConstructorOptions`](../interfaces/IInformationServiceConstructorOptions.md)

The options to create the service.

#### Returns

`InformationService`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IInformationComponent.CLASS_NAME`

## Methods

### start()

> **start**(): `Promise`\<`void`\>

The service needs to be started when the application is initialized.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IInformationComponent.start`

***

### root()

> **root**(): `Promise`\<`string`\>

Get the root information.

#### Returns

`Promise`\<`string`\>

The root information.

#### Implementation of

`IInformationComponent.root`

***

### info()

> **info**(): `Promise`\<`IServerInfo`\>

Get the server information.

#### Returns

`Promise`\<`IServerInfo`\>

The service information.

#### Implementation of

`IInformationComponent.info`

***

### favicon()

> **favicon**(): `Promise`\<`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>\>

Get the favicon.

#### Returns

`Promise`\<`undefined` \| `Uint8Array`\<`ArrayBufferLike`\>\>

The favicon.

#### Implementation of

`IInformationComponent.favicon`

***

### spec()

> **spec**(): `Promise`\<`unknown`\>

Get the OpenAPI spec.

#### Returns

`Promise`\<`unknown`\>

The OpenAPI spec.

#### Implementation of

`IInformationComponent.spec`

***

### health()

> **health**(): `Promise`\<`IHealthInfo`\>

Get the server health.

#### Returns

`Promise`\<`IHealthInfo`\>

The service health.

#### Implementation of

`IInformationComponent.health`

***

### setComponentHealth()

> **setComponentHealth**(`name`, `status`, `details?`): `Promise`\<`void`\>

Set the status of a component.

#### Parameters

##### name

`string`

The component name.

##### status

`HealthStatus`

The status of the component.

##### details?

`string`

The details for the status.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IInformationComponent.setComponentHealth`

***

### removeComponentHealth()

> **removeComponentHealth**(`name`): `Promise`\<`void`\>

Remove the status of a component.

#### Parameters

##### name

`string`

The component name.

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IInformationComponent.removeComponentHealth`
