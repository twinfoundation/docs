# Interface: IDidPresentationVerification

Interface describing the result of checking verifiable presentation.

## Properties

### holder

• `Optional` **holder**: `Object`

Who was the holder.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `document?` | [`IDidDocument`](IDidDocument.md) | The DID document for the holder. |
| `id` | `string` | The id of the holder. |
| `isVerified` | `boolean` | Is the holder verified. |

___

### isVerified

• **isVerified**: `boolean`

Is the whole presentation verified.
