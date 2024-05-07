# Interface: IVerifyDataRequest

Verify some signed data.

## Properties

### data

• **data**: `Object`

The data to be used in the verification.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `string` | The bytes for the document encoded as hex. |
| `signatureType` | `string` | The type of the signature. |
| `signatureValue` | `string` | The value of the signature. |
| `verificationMethod` | `string` | The verification method to use for verification. |

___

### identity

• **identity**: `string`

The identity to verify the data for.
