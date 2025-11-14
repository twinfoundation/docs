# Abstract Class: BaseRestClient

Abstract client class for common REST processing.

## Constructors

### Constructor

> **new BaseRestClient**(`implementationName`, `config`, `pathPrefix`): `BaseRestClient`

Create a new instance of BaseRestClient.

#### Parameters

##### implementationName

`string`

The name of the class implementation REST calls.

##### config

`IBaseRestClientConfig`

The configuration for the client.

##### pathPrefix

`string`

The default prefix to use if none in configuration.

#### Returns

`BaseRestClient`

## Methods

### getEndpointWithPrefix()

> **getEndpointWithPrefix**(): `string`

Get the endpoint with the prefix for the namespace.

#### Returns

`string`

The endpoint with namespace prefix attached.

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
