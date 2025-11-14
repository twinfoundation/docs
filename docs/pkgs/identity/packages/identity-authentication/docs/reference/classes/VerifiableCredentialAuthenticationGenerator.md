# Class: VerifiableCredentialAuthenticationGenerator

Class performing verifiable credential authentication generation.

## Implements

- `IAuthenticationGenerator`

## Constructors

### Constructor

> **new VerifiableCredentialAuthenticationGenerator**(`options`): `VerifiableCredentialAuthenticationGenerator`

Create a new instance of VerifiableCredentialAuthenticationGenerator.

#### Parameters

##### options

[`IVerifiableCredentialAuthenticationGeneratorConstructorOptions`](../interfaces/IVerifiableCredentialAuthenticationGeneratorConstructorOptions.md)

The options for the service.

#### Returns

`VerifiableCredentialAuthenticationGenerator`

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

`IAuthenticationGenerator.className`

***

### addAuthentication()

> **addAuthentication**(`requestHeaders`, `authData`): `Promise`\<`void`\>

Adds authentication information to the request headers.

#### Parameters

##### requestHeaders

`IHttpHeaders`

The request headers to add authentication information to.

##### authData

Optional authentication data passed from the request.

###### contextId

`string`

The context ID for the authentication.

###### subject?

`IJsonLdNodeObject`

The subject for the authentication.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the authentication information has been added.

#### Implementation of

`IAuthenticationGenerator.addAuthentication`
