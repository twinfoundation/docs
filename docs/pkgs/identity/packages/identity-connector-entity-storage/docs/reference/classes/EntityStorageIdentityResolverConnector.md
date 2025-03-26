# Class: EntityStorageIdentityResolverConnector

Class for performing identity operations using entity storage.

## Implements

- `IIdentityResolverConnector`

## Constructors

### new EntityStorageIdentityResolverConnector()

> **new EntityStorageIdentityResolverConnector**(`options`?): [`EntityStorageIdentityResolverConnector`](EntityStorageIdentityResolverConnector.md)

Create a new instance of EntityStorageIdentityResolverConnector.

#### Parameters

##### options?

[`IEntityStorageIdentityResolverConnectorConstructorOptions`](../interfaces/IEntityStorageIdentityResolverConnectorConstructorOptions.md)

The options for the identity connector.

#### Returns

[`EntityStorageIdentityResolverConnector`](EntityStorageIdentityResolverConnector.md)

## Properties

### NAMESPACE

> `readonly` `static` **NAMESPACE**: `string` = `"entity-storage"`

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
