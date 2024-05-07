# Interface: IIdentityProfile

Interface representing profile details for the identity.

## Properties

### identity

• **identity**: `string`

The id for the identity.

---

### keyIndexes

• `Optional` **keyIndexes**: `Object`

Indexes for the current issuing keys.

#### Index signature

▪ [id: `string`]: \{ `allocated`: `number` ; `index`: `number` }

---

### nextRevocationIndex

• `Optional` **nextRevocationIndex**: `string`

The next index to map to a verifiable credential id.
Used for revocation of VCs.

---

### properties

• `Optional` **properties**: `IProperty`[]

The properties for the profile.

---

### role

• **role**: `IdentityRole`

The role for the identity.

---

### verifiableCredentials

• `Optional` **verifiableCredentials**: \{ `id`: `string` ; `issuer`: `string` ; `type`: `string` }[]

Issued verifiable credential ids.
