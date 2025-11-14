# Interface: IDataSpaceConnectorListRequest

Get the a list of the data space connector entries.

## Extends

- [`IFederatedCatalogueGetRequest`](IFederatedCatalogueGetRequest.md)

## Properties

### query?

> `optional` **query**: `object`

The query parameters.

#### id?

> `optional` **id**: `string`

The id of the Data Space Connector.

#### maintainedBy?

> `optional` **maintainedBy**: `string`

The maintainer

#### cursor?

> `optional` **cursor**: `string`

The optional cursor to get next chunk.

#### limit?

> `optional` **limit**: `string`

Limit the number of entities to return.

***

### headers?

> `optional` **headers**: `object`

The headers which can be used to determine the response data type.

#### accept

> **accept**: `"application/json"` \| `"application/ld+json"`

#### Inherited from

[`IFederatedCatalogueGetRequest`](IFederatedCatalogueGetRequest.md).[`headers`](IFederatedCatalogueGetRequest.md#headers)
