# Interface: IDidVerifiableCredential\<T\>

Interface describing a verifiable credential.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Properties

### @context

• **@context**: `string` \| `string`[]

The context for the verifiable credential.

___

### credentialStatus

• `Optional` **credentialStatus**: [`IDidCredentialStatus`](IDidCredentialStatus.md)

Used to discover information about the current status of the
verifiable credential, such as whether it is suspended or revoked.

___

### credentialSubject

• **credentialSubject**: `T` \| `T`[]

The data for the verifiable credential.

___

### id

• **id**: `string`

The identifier for the verifiable credential.

___

### issuanceDate

• **issuanceDate**: `string`

The date the verifiable credential was issued.

___

### issuer

• **issuer**: `string`

The issuing identity.

___

### type

• **type**: `string`[]

The types of the data stored in the verifiable credential.
