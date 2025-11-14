# Class: VerifiableCredentialAuthenticationProcessor

Handle a JWT token in the authorization header and verify the credential.

## Implements

- `IBaseRouteProcessor`

## Constructors

### Constructor

> **new VerifiableCredentialAuthenticationProcessor**(`options?`): `VerifiableCredentialAuthenticationProcessor`

Create a new instance of AuthCookiePreProcessor.

#### Parameters

##### options?

[`IVerifiableCredentialAuthenticationProcessorConstructorOptions`](../interfaces/IVerifiableCredentialAuthenticationProcessorConstructorOptions.md)

Options for the processor.

#### Returns

`VerifiableCredentialAuthenticationProcessor`

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

`IBaseRouteProcessor.className`

***

### features()

> **features**(): `string`[]

Features supported by this processor.
If a route has any of these features listed, this processor will be run for that route.
If this is not implemented, the processor will run for all routes.

#### Returns

`string`[]

The features supported by this processor.

#### Implementation of

`IBaseRouteProcessor.features`

***

### pre()

> **pre**(`request`, `response`, `route`, `contextIds`, `processorState`): `Promise`\<`void`\>

Pre process the REST request for the specified route.

#### Parameters

##### request

`IHttpServerRequest`

The incoming request.

##### response

`IHttpResponse`

The outgoing response.

##### route

The route to process.

`IBaseRoute` | `undefined`

##### contextIds

`IContextIds`

The context IDs of the request.

##### processorState

The state handed through the processors.

#### Returns

`Promise`\<`void`\>

Nothing

#### Implementation of

`IBaseRouteProcessor.pre`
