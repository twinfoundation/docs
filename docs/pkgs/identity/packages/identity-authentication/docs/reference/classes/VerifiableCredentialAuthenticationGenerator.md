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

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IAuthenticationGenerator.CLASS_NAME`

## Methods

### start()

> **start**(`nodeIdentity`, `nodeLoggingComponentType`): `Promise`\<`void`\>

The component needs to be started when the node is initialized.

#### Parameters

##### nodeIdentity

`string`

The identity of the node starting the component.

##### nodeLoggingComponentType

The node logging component type.

`undefined` | `string`

#### Returns

`Promise`\<`void`\>

Nothing.

#### Implementation of

`IAuthenticationGenerator.start`

***

### addAuthentication()

> **addAuthentication**(`requestHeaders`, `authData`): `Promise`\<`void`\>

Adds authentication information to the request headers.

#### Parameters

##### requestHeaders

`IHttpHeaders`

The request headers to add authentication information to.

##### authData

`IJsonLdNodeObject`

Optional authentication data passed from the request.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the authentication information has been added.

#### Implementation of

`IAuthenticationGenerator.addAuthentication`
