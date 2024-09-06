# Interface: IIdentityProfileListRequest

Request to get a list of identities.

## Properties

### query?

> `optional` **query**: `object`

The query parameters.

#### publicFilters?

> `optional` **publicFilters**: `string`

The public filters to apply to the list, comma separated list with color between key and value for each pair e.g. prop1:value1,prop2:value2.

#### publicPropertyNames?

> `optional` **publicPropertyNames**: `string`

The public properties to get for the profile, defaults to all, should be a comma separated list.

#### cursor?

> `optional` **cursor**: `string`

The cursor for paged requests.

#### pageSize?

> `optional` **pageSize**: `number`

Number of items to return.
