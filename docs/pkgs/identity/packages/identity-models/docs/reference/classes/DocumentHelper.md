# Class: DocumentHelper

Helper methods for documents.

## Constructors

### new DocumentHelper()

> **new DocumentHelper**(): [`DocumentHelper`](DocumentHelper.md)

#### Returns

[`DocumentHelper`](DocumentHelper.md)

## Methods

### parseId()

> `static` **parseId**(`documentId`): `object`

Parse the document id into its parts.

#### Parameters

##### documentId

`string`

The full document id.

#### Returns

`object`

The parsed document id.

##### id

> **id**: `string`

##### fragment

> **fragment**: `undefined` \| `string`

***

### joinId()

> `static` **joinId**(`documentId`, `fragment`?): `string`

Join the document id parts.

#### Parameters

##### documentId

`string`

The document id.

##### fragment?

`string`

The fragment part for the identifier.

#### Returns

`string`

The full id.
