# Interface: ISyncChangeSetRequest

Request a trusted node to perform a sync request for a changeset.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept?

> `optional` **accept**: `"application/ld+json"` \| `"application/json"`

#### authorization?

> `optional` **authorization**: `string`

***

### body

> **body**: [`ISyncChangeSet`](ISyncChangeSet.md)

The body of the request.

***

### authentication

> **authentication**: `IIdentityAuthenticationActionRequest`

The action request used in the verifiable credential.
