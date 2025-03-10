# Class: IotaUniversalResolverConnector

Class for performing identity operations on IOTA universal resolver.

## Implements

- `IIdentityResolverConnector`

## Constructors

### new IotaUniversalResolverConnector()

> **new IotaUniversalResolverConnector**(`options`): [`IotaUniversalResolverConnector`](IotaUniversalResolverConnector.md)

Create a new instance of IotaUniversalResolverConnector.

#### Parameters

##### options

[`IIotaUniversalResolverConnectorConstructorOptions`](../interfaces/IIotaUniversalResolverConnectorConstructorOptions.md)

The options for the identity connector.

#### Returns

[`IotaUniversalResolverConnector`](IotaUniversalResolverConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"iota"`

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
