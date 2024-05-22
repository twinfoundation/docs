# Interface: IIdentityListResponse

Response to get a list of identities.

## Properties

### body

> **body**: `object`

The response payload.

#### identities

> **identities**: `object`[]

The identities.

#### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

#### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

#### totalEntities

> **totalEntities**: `number`

Total entities length.
