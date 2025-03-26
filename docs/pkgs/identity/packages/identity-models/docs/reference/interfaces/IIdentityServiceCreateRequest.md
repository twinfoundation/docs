# Interface: IIdentityServiceCreateRequest

Request to create a service.

## Properties

### pathParams

> **pathParams**: `object`

The path parameters.

#### identity

> **identity**: `string`

The identity to create the service for.

***

### body

> **body**: `object`

The data for the request.

#### serviceId

> **serviceId**: `string`

The id of the service.

#### type

> **type**: `string` \| `string`[]

The type of the service.

#### endpoint

> **endpoint**: `string` \| `string`[]

The endpoint for the service.
