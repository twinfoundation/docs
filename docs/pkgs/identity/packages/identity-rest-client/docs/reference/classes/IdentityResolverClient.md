# Class: IdentityResolverClient

Client for performing identity through to REST endpoints.

## Extends

- `BaseRestClient`

## Implements

- `IIdentityResolverComponent`

## Constructors

### Constructor

> **new IdentityResolverClient**(`config`): `IdentityResolverClient`

Create a new instance of IdentityClient.

#### Parameters

##### config

`IBaseRestClientConfig`

The configuration for the client.

#### Returns

`IdentityResolverClient`

#### Overrides

`BaseRestClient.constructor`

## Properties

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityResolverComponent.CLASS_NAME`

## Methods

### identityResolve()

> **identityResolve**(`documentId`): `Promise`\<`IDidDocument`\>

Resolve an identity.

#### Parameters

##### documentId

`string`

The id of the document to resolve.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.

#### Implementation of

`IIdentityResolverComponent.identityResolve`
