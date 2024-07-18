# Interface: IIdentityProfileListRequest

Request to get a list of identities.

## Properties

### query

> **query**: `object`

The query parameters.

#### filters?

> `optional` **filters**: `string`

The filters to apply to the list, comma separated list with color between key and value for each pair e.g. prop1:value1,prop2:value2.

#### propertyNames?

> `optional` **propertyNames**: `string`

The properties to get for the profile, defaults to all, should be a comma separated list.

#### cursor?

> `optional` **cursor**: `string`

The cursor for paged requests.

#### pageSize?

> `optional` **pageSize**: `number`

Number of items to return.
