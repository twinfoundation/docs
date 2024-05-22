# Interface: IIdentityListResponse

Response to get a list of identities.

## Properties

### body

> **body**: `object`

The response payload.

#### cursor?

> `optional` **cursor**: `string`

An optional cursor, when defined can be used to call find to get more entities.

#### identities

> **identities**: `object`[]

The identities.

#### pageSize?

> `optional` **pageSize**: `number`

Number of entities to return.

#### totalEntities

> **totalEntities**: `number`

Total entities length.
