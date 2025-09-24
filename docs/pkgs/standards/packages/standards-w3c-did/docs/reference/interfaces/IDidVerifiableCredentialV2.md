# Interface: IDidVerifiableCredentialV2

Interface describing a verifiable credential.
https://www.w3.org/TR/vc-data-model-2.0

## Extends

- [`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md)

## Properties

### id?

> `optional` **id**: `string`

The identifier for the verifiable credential.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`id`](IDidVerifiableCredentialCommon.md#id)

***

### type

> **type**: `string` \| `string`[]

The types of the data stored in the verifiable credential.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`type`](IDidVerifiableCredentialCommon.md#type)

***

### credentialSubject?

> `optional` **credentialSubject**: `IJsonLdNodeObject` \| `IJsonLdNodeObject`[]

The data for the verifiable credential.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`credentialSubject`](IDidVerifiableCredentialCommon.md#credentialsubject)

***

### credentialStatus?

> `optional` **credentialStatus**: [`IDidCredentialStatus`](IDidCredentialStatus.md) \| [`IDidCredentialStatus`](IDidCredentialStatus.md)[]

Used to discover information about the current status of the
verifiable credential, such as whether it is suspended or revoked.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`credentialStatus`](IDidVerifiableCredentialCommon.md#credentialstatus)

***

### credentialSchema?

> `optional` **credentialSchema**: [`IDidCredentialSchema`](IDidCredentialSchema.md) \| [`IDidCredentialSchema`](IDidCredentialSchema.md)[]

Annotate type definitions or lock them to specific versions of the vocabulary.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`credentialSchema`](IDidVerifiableCredentialCommon.md#credentialschema)

***

### issuer?

> `optional` **issuer**: `string` \| \{ `id`: `string`; `name?`: `string` \| [`IDidLabel`](IDidLabel.md)[]; `description?`: `string` \| [`IDidLabel`](IDidLabel.md)[]; \}

The issuing identity.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`issuer`](IDidVerifiableCredentialCommon.md#issuer)

***

### name?

> `optional` **name**: `string` \| [`IDidLabel`](IDidLabel.md)[]

The name of the credential.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`name`](IDidVerifiableCredentialCommon.md#name)

***

### description?

> `optional` **description**: `string` \| [`IDidLabel`](IDidLabel.md)[]

The description of the credential.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`description`](IDidVerifiableCredentialCommon.md#description)

***

### evidence?

> `optional` **evidence**: `IJsonLdNodeObject` \| `IJsonLdNodeObject`[]

Evidence associated with the Credential.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`evidence`](IDidVerifiableCredentialCommon.md#evidence)

***

### proof?

> `optional` **proof**: [`IProof`](../type-aliases/IProof.md) \| [`IProof`](../type-aliases/IProof.md)[]

Proofs that the verifiable credential is valid.
Optional if a different proof method is used, such as JWT.

#### Inherited from

[`IDidVerifiableCredentialCommon`](IDidVerifiableCredentialCommon.md).[`proof`](IDidVerifiableCredentialCommon.md#proof)

***

### @context

> **@context**: `"https://www.w3.org/ns/credentials/v2"` \| \[`"https://www.w3.org/ns/credentials/v2"`, `...IJsonLdContextDefinitionElement[]`\]

The context for the verifiable credential.

***

### validFrom?

> `optional` **validFrom**: `string`

The date the verifiable credential is valid from.

***

### validUntil?

> `optional` **validUntil**: `string`

The date the verifiable credential is valid until.
