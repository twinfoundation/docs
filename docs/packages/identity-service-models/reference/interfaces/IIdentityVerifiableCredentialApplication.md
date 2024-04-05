# Interface: IIdentityVerifiableCredentialApplication

Interface representing the state of an verifiable credential application.

## Properties

### created

• **created**: `number`

The timestamp when the verifiable credential application was created.

___

### id

• **id**: `string`

The id of the verifiable credential application.

___

### issuer

• **issuer**: `string`

The identity that is issuing the verifiable credential.

___

### privateClaims

• `Optional` **privateClaims**: `IProperty`[]

Properties supplied for the verifiable credential claims that are private.

___

### publicClaims

• `Optional` **publicClaims**: `IProperty`[]

Properties supplied for the verifiable credential claims that can be public.

___

### rejectedCode

• `Optional` **rejectedCode**: `string`

The code for why the verifiable credential application was rejected.

___

### state

• **state**: [`VerifiableCredentialState`](../enums/VerifiableCredentialState.md)

The current state of the verifiable credential application.

___

### subject

• **subject**: `string`

The identity that is the target of the verifiable credential.

___

### updated

• **updated**: `number`

The timestamp when the verifiable credential application was updated.

___

### verifiableCredential

• `Optional` **verifiableCredential**: `IDidVerifiableCredential`\<`unknown`\>

The verifiable credential.

___

### verifiableCredentialType

• **verifiableCredentialType**: `string`

The type of verifiable credential being requested.
