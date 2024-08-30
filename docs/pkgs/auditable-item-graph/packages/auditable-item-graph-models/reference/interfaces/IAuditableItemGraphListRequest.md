# Interface: IAuditableItemGraphListRequest

Get the a list of the vertices with matching ids or aliases.

## Properties

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

> `optional` **orderBy**: `"created"` \| `"updated"`

The order for the results, default to created.

#### orderByDirection?

> `optional` **orderByDirection**: `SortDirection`

The direction for the order, defaults to desc.

#### properties?

> `optional` **properties**: `string`

The properties to return as a comma separated list, defaults to "id,created,aliases,metadata".

#### cursor?

> `optional` **cursor**: `string`

The optional cursor to get next chunk.

#### pageSize?

> `optional` **pageSize**: `number`

The maximum number of entities in a page.
