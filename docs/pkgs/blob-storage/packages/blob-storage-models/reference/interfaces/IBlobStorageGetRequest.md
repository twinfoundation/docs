# Interface: IBlobStorageGetRequest

Request to get an entry from blob storage.

## Properties

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
