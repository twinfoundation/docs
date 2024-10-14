# Interface: IEntityStorageListRequest

Query the entries from entity storage.

## Properties

### query?

> `optional` **query**: `object`

The parameters from the query.

#### conditions?

> `optional` **conditions**: `string`

The condition for the query as JSON version of EntityCondition type.

#### sortProperties?

> `optional` **sortProperties**: `string`

The sort property array as JSON serialization of property,direction.

#### properties?

> `optional` **properties**: `string`

The properties to return in the response as a comma separated list, by default returns all properties.

#### pageSize?

> `optional` **pageSize**: `number`

The number of entries to return per page.

#### cursor?

> `optional` **cursor**: `string`

The cursor to get next chunk of data, returned in previous response.
