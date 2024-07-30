# Class: IdentityClient

Client for performing identity through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IIdentity`

## Constructors

### new IdentityClient()

> **new IdentityClient**(`config`): [`IdentityClient`](IdentityClient.md)

Create a new instance of IdentityClient.

#### Parameters

• **config**: `IBaseRestClientConfig`

The configuration for the client.

#### Returns

[`IdentityClient`](IdentityClient.md)

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentity.CLASS_NAME`

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

> **fetch**\<`T`, `U`\>(`route`, `method`, `request`?): `Promise`\<`U`\>

Perform a request in json format.

#### Type parameters

• **T** *extends* `IHttpRequest`\<`any`\>

• **U** *extends* `IHttpResponse`\<`any`\>

#### Parameters

• **route**: `string`

The route of the request.

• **method**: `HttpMethod`

The http method.

• **request?**: `T`

Request to send to the endpoint.

#### Returns

`Promise`\<`U`\>

The response.

#### Inherited from

`BaseRestClient.fetch`

***

### create()

> **create**(`controller`, `options`?): `Promise`\<`object`\>

Create a new identity.

#### Parameters

• **controller**: `string`

The controller for the identity.

• **options?**

Additional options for the identity service.

• **options.namespace?**: `string`

The namespace of the connector to use for the identity, defaults to service configured namespace.

#### Returns

`Promise`\<`object`\>

The created identity details.

##### identity

> **identity**: `string`

The identity created.

#### Implementation of

`IIdentity.create`

***

### resolve()

> **resolve**(`documentId`): `Promise`\<`IDidDocument`\>

Resolve an identity.

#### Parameters

• **documentId**: `string`

The id of the document to resolve.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.

#### Implementation of

`IIdentity.resolve`
