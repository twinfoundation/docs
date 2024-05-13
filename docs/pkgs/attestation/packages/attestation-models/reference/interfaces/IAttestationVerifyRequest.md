# Interface: IAttestationVerifyRequest

Verify that the proof is valid for the data set.

## Properties

### body

• **body**: `Object`

The parameters to be used in the verification.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `unknown` | The data set that was signed. |
| `proof` | `IDidProof` | The proof for the data set. |
