# Interface: IIdentityProfile

Interface representing profile details for the identity.

## Properties

### emailAddress

• **emailAddress**: `string`

The email address for the identity.

___

### identity

• **identity**: `string`

The id for the identity.

___

### imageBlobId

• `Optional` **imageBlobId**: `string`

The id of the image in blob storage.

___

### keyIndexes

• `Optional` **keyIndexes**: `Object`

Indexes for the current issuing keys.

#### Index signature

▪ [id: `string`]: \{ `allocated`: `number` ; `index`: `number`  }

___

### nextRevocationIndex

• `Optional` **nextRevocationIndex**: `string`

The next index to map to a verifiable credential id.
Used for revocation of VCs.

___

### properties

• `Optional` **properties**: `IProperty`[]

The properties for the profile.

___

### verifiableCredentials

• `Optional` **verifiableCredentials**: \{ `id`: `string` ; `issuer`: `string` ; `type`: `string`  }[]

Issued verifiable credential ids.
