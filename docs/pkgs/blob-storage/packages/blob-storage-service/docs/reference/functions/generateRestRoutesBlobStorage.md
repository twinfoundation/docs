# Function: generateRestRoutesBlobStorage()

> **generateRestRoutesBlobStorage**(`baseRouteName`, `componentName`, `options`?): `IRestRoute`[]

The REST routes for blob storage.

## Parameters

### baseRouteName

`string`

Prefix to prepend to the paths.

### componentName

`string`

The name of the component to use in the routes stored in the ComponentFactory.

### options?

Additional options for the routes.

#### typeName

`string`

Optional type name to use in the routes, defaults to Blob Storage.

#### tagName

`string`

Optional name to use in OpenAPI spec for tag.

## Returns

`IRestRoute`[]

The generated routes.
