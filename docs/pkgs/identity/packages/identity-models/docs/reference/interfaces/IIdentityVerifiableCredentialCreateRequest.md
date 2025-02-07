# Interface: IIdentityVerifiableCredentialCreateRequest

Request to create a verifiable credential.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### identity

> **identity**: `string`

The identity to create the verification credential for.

#### verificationMethodId

> **verificationMethodId**: `string`

The verification method id to use.

***

### body

> **body**: `object`

The data for the request.

#### credentialId?

> `optional` **credentialId**: `string`

The id of the credential.

#### subject

> **subject**: `IJsonLdNodeObject`

The credential subject to store in the verifiable credential.

#### revocationIndex?

> `optional` **revocationIndex**: `number`

The bitmap revocation index of the credential, if undefined will not have revocation status.
