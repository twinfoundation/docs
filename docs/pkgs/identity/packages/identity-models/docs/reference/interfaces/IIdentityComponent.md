# Interface: IIdentityComponent

Interface describing a contract which provides identity operations.

## Extends

- `IComponent`

## Methods

### resolve()

> **resolve**(`documentId`): `Promise`\<`IDidDocument`\>

Resolve an identity.

#### Parameters

• **documentId**: `string`

The id of the document to resolve.

#### Returns

`Promise`\<`IDidDocument`\>

The resolved document.
