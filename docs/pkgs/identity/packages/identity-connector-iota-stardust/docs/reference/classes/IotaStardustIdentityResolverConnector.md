# Class: IotaStardustIdentityResolverConnector

Class for performing identity operations on IOTA Stardust.

## Implements

- `IIdentityResolverConnector`

## Constructors

### Constructor

> **new IotaStardustIdentityResolverConnector**(`options`): `IotaStardustIdentityResolverConnector`

Create a new instance of IotaStardustIdentityResolverConnector.

#### Parameters

##### options

[`IIotaStardustIdentityResolverConnectorConstructorOptions`](../interfaces/IIotaStardustIdentityResolverConnectorConstructorOptions.md)

The options for the identity connector.

#### Returns

`IotaStardustIdentityResolverConnector`

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota-stardust"`

The namespace supported by the identity connector.

***

### CLASS\_NAME

> `readonly` **CLASS\_NAME**: `string`

Runtime name for the class.

#### Implementation of

`IIdentityResolverConnector.CLASS_NAME`

## Methods

### resolveDocument()

> **resolveDocument**(`documentId`): `Promise`\<`IDidDocument`\>

Resolve a document from its id.

#### Parameters

##### documentId

`string`

The id of the document to resolve.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.

#### Throws

NotFoundError if the id can not be resolved.

#### Implementation of

`IIdentityResolverConnector.resolveDocument`
