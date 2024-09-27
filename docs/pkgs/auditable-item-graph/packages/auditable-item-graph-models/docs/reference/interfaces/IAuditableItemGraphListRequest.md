# Interface: IAuditableItemGraphListRequest

Get the a list of the vertices with matching ids or aliases.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept

> **accept**: `"application/json"` \| `"application/ld+json"`

***

### query?

> `optional` **query**: `object`

The query parameters.

#### id?

> `optional` **id**: `string`

The id or alias to try and find.

#### idMode?

> `optional` **idMode**: `"both"` \| `"id"` \| `"alias"`

Which field to look in with the id, defaults to both.

#### orderBy?

> `optional` **orderBy**: `"dateCreated"` \| `"dateModified"`

The order for the results, default to dateCreated.

#### orderByDirection?

> `optional` **orderByDirection**: `SortDirection`

The direction for the order, defaults to desc.

#### properties?

> `optional` **properties**: `string`

The properties to return as a comma separated list, defaults to "id,dateCreated,aliases,vertexObject".

#### cursor?

> `optional` **cursor**: `string`

The optional cursor to get next chunk.

#### pageSize?

> `optional` **pageSize**: `number`

The maximum number of entities in a page.
