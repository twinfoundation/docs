# Class: InformationRestClient

The client to connect to the information service.

## Extends

- `BaseRestClient`

## Implements

- `IInformationComponent`

## Constructors

### Constructor

> **new InformationRestClient**(`config`): `InformationRestClient`

Create a new instance of InformationRestClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`InformationRestClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

## Methods

### getEndpointWithPrefix()

> **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

#### Inherited from

`BaseRestClient.getEndpointWithPrefix`

***

### fetch()

> **fetch**\<`T`, `U`\>(`route`, `method`, `request?`, `options?`): `Promise`\<`U`\>

Perform a request in json format.

#### Type Parameters

##### T

`T` *extends* `IHttpRequest`\<`any`\>

##### U

`U` *extends* `IHttpResponse`\<`any`\>

#### Parameters

##### route

`string`

The route of the request.

##### method

`HttpMethod`

The http method.

##### request?

`T`

Request to send to the endpoint.

##### options?

Additional options for the request.

###### authenticationGeneratorType?

`string`

Use a custom authentication type for the request.

###### authenticationData?

`unknown`

Used to authenticate and will be passed to the configured authentication provider for the request.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

***

### className()

> **className**(): `string`

Returns the class name of the component.

#### Returns

`string`

The class name of the component.

#### Implementation of

`IInformationComponent.className`

***

### root()

> **root**(): `Promise`\<`string`\>

Get the server root.

#### Returns

`Promise`\<`string`\>

The root root.

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

> **favicon**(): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`\>

Get the favicon.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\> \| `undefined`\>

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
