# Interface: IDidVerifiablePresentation

Interface describing a verifiable presentation.

## Properties

### @context

• **@context**: `string` \| `string`[]

The context for the verifiable credential.

---

### holder

• `Optional` **holder**: `string`

The entity generating the presentation.

---

### id

• `Optional` **id**: `string`

Provide a unique identifier for the presentation.

---

### type

• **type**: `string`[]

The types of the data stored in the verifiable credential.

---

### verifiableCredential

• **verifiableCredential**: `string`[]

The data for the verifiable credentials.
