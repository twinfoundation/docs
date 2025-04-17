# Class: DocumentHelper

Helper methods for documents.

## Constructors

### Constructor

> **new DocumentHelper**(): `DocumentHelper`

#### Returns

`DocumentHelper`

## Properties

### CLASS\_NAME

> `readonly` `static` **CLASS\_NAME**: `string`

Runtime name for the class.

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

> `static` **joinId**(`documentId`, `fragment?`): `string`

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

***

### getVerificationMethod()

> `static` **getVerificationMethod**(`didDocument`, `methodName`, `methodType?`): `IDidDocumentVerificationMethod`

Get a verification method from a DID document.

#### Parameters

##### didDocument

`IDidDocument`

The DID Document to get the method from.

##### methodName

`string`

The name of the method to get the JWK from.

##### methodType?

`DidVerificationMethodType`

The type of the method, defaults to verificationMethod.

#### Returns

`IDidDocumentVerificationMethod`

The verification method if found.

#### Throws

Error if the method is not found.

***

### getJwk()

> `static` **getJwk**(`didDocument`, `methodName`, `methodType?`): `IJwk`

Gets a JWK from a DID document verification method.

#### Parameters

##### didDocument

`IDidDocument`

The DID Document to get the method from.

##### methodName

`string`

The name of the method to get the JWK from.

##### methodType?

`DidVerificationMethodType`

The type of the method, defaults to verificationMethod.

#### Returns

`IJwk`

The JWK if found.

#### Throws

Error if the method is not found.
