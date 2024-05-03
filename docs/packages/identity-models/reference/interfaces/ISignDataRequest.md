# Interface: ISignDataRequest

Sign the requested data.

## Properties

### data

• **data**: `Object`

The data to be used in the signing.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `string` | The bytes for the document encoded as hex. |
| `verificationMethod` | `string` | The verification method to use for signing. |

___

### identity

• **identity**: `string`

The identity to sign the data with.
