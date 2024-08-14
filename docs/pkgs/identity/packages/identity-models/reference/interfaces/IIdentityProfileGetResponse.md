# Interface: IIdentityProfileGetResponse

Response to get an identity details.

## Properties

### body

> **body**: `object`

The response payload.

#### identity

> **identity**: `string`

The identity of the profile, this is the authenticated user identity.

#### properties?

> `optional` **properties**: [`IIdentityProfileProperty`](IIdentityProfileProperty.md)[]

The properties for the identity.
