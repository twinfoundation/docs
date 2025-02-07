# Interface: IIdentityVerificationMethodCreateRequest

Request to create a verification method.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### identity

> **identity**: `string`

The identity to create the verification method for.

***

### body

> **body**: `object`

The data for the request.

#### verificationMethodType

> **verificationMethodType**: `DidVerificationMethodType`

The type of the verification method to create.

#### verificationMethodId?

> `optional` **verificationMethodId**: `string`

The optional id for the verification method, will be allocated if not supplied.
