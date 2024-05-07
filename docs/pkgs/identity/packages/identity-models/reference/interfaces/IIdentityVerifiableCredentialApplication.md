# Interface: IIdentityVerifiableCredentialApplication

Interface representing the state of an verifiable credential application.

## Properties

### created

• **created**: `number`

The timestamp when the verifiable credential application was created.

---

### id

• **id**: `string`

The id of the verifiable credential application.

---

### issuer

• **issuer**: `string`

The identity that is issuing the verifiable credential.

---

### privateClaims

• `Optional` **privateClaims**: `IProperty`[]

Properties supplied for the verifiable credential claims that are private.

---

### publicClaims

• `Optional` **publicClaims**: `IProperty`[]

Properties supplied for the verifiable credential claims that can be public.

---

### rejectedCode

• `Optional` **rejectedCode**: `string`

The code for why the verifiable credential application was rejected.

---

### state

• **state**: [`VerifiableCredentialState`](../enums/VerifiableCredentialState.md)

The current state of the verifiable credential application.

---

### subject

• **subject**: `string`

The identity that is the target of the verifiable credential.

---

### updated

• **updated**: `number`

The timestamp when the verifiable credential application was updated.

---

### verifiableCredential

• `Optional` **verifiableCredential**: `IDidVerifiableCredential`\<`unknown`\>

The verifiable credential.

---

### verifiableCredentialType

• **verifiableCredentialType**: `string`

The type of verifiable credential being requested.
