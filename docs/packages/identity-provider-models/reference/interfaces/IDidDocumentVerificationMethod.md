# Interface: IDidDocumentVerificationMethod

Interface describing a DID document verification method.

## Properties

### controller

• **controller**: `string`

The controller for the entry.

___

### id

• **id**: `string`

The id of the entry.

___

### publicKeyJwk

• `Optional` **publicKeyJwk**: `Object`

The public key for the entry as a JWK.
Spec https://datatracker.ietf.org/doc/html/rfc7517 .

#### Index signature

▪ [id: `string`]: `string`

___

### publicKeyMultibase

• `Optional` **publicKeyMultibase**: `string`

The public key for the entry.
Spec https://datatracker.ietf.org/doc/html/draft-multiformats-multibase-03 .

___

### revocation

• `Optional` **revocation**: `string`

Multi key partial revocation.

___

### type

• **type**: `string`

The type of the entry.
