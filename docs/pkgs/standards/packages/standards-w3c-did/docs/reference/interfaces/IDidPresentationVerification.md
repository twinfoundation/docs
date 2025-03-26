# Interface: IDidPresentationVerification

Interface describing the result of checking verifiable presentation.

## Properties

### isVerified

> **isVerified**: `boolean`

Is the whole presentation verified.

***

### holder?

> `optional` **holder**: `object`

Who was the holder.

#### id

> **id**: `string`

The id of the holder.

#### isVerified

> **isVerified**: `boolean`

Is the holder verified.

#### document?

> `optional` **document**: [`IDidDocument`](IDidDocument.md)

The DID document for the holder.
