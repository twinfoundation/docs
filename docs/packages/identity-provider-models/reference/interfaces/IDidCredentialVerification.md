# Interface: IDidCredentialVerification

Interface describing the result of checking verifiable credential.

## Properties

### isVerified

• **isVerified**: `boolean`

Is the whole credential verified.

___

### issuer

• `Optional` **issuer**: `Object`

Who was the issuer.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `document?` | [`IDidDocument`](IDidDocument.md) | The DID document for the issuer. |
| `id` | `string` | The id of the issuer. |
| `isVerified` | `boolean` | Is the issuer verified. |

___

### subjects

• `Optional` **subjects**: \{ `document?`: [`IDidDocument`](IDidDocument.md) ; `id`: `string` ; `isVerified`: `boolean`  }[]

The subjects of the verifications.
