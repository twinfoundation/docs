# Interface: IBlobStorageGetRequest

Request to get an entry from blob storage.

## Properties

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept

> **accept**: `"application/json"` \| `"application/ld+json"`

***

### pathParams

> **pathParams**: `object`

The path parameters.

#### id

> **id**: `string`

The id of the blob to get in urn format.

***

### query?

> `optional` **query**: `object`

The query parameters.

#### includeContent?

> `optional` **includeContent**: `boolean`

Include the content in the response, otherwise only metadata is returned.

##### Default

```ts
false
```
