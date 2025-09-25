# Interface: IDataAccessRequestWithObject

The JSON-LD definition for the data access request with object.

## Properties

### @context

> **@context**: `"https://schema.twindev.org/rights-management"`

The JSON-LD context.

***

### type

> **type**: `"DataAccessRequestWithObject"`

The type of the request.

***

### assetType?

> `optional` **assetType**: `string`

The asset type being requested.

***

### object

> **object**: `IJsonLdNodeObject`

The object being sent with the request.
