# Class: UniversalResolverConnector

Class for performing identity operations on universal resolver.

## Implements

- `IIdentityResolverConnector`

## Constructors

### new UniversalResolverConnector()

> **new UniversalResolverConnector**(`options`): [`UniversalResolverConnector`](UniversalResolverConnector.md)

Create a new instance of UniversalResolverConnector.

#### Parameters

##### options

[`IUniversalResolverConnectorConstructorOptions`](../interfaces/IUniversalResolverConnectorConstructorOptions.md)

The options for the identity connector.

#### Returns

[`UniversalResolverConnector`](UniversalResolverConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"universal"`

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
