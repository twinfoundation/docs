# Function: generateRestRoutesEntityStorage()

> **generateRestRoutesEntityStorage**(`baseRouteName`, `componentName`, `options`?): `IRestRoute`\<`any`, `any`\>[]

The REST routes for entity storage.

## Parameters

### baseRouteName

`string`

Prefix to prepend to the paths.

### componentName

`string`

The name of the component to use in the routes stored in the ComponentFactory.

### options?

Additional options for the routes.

#### typeName?

`string`

Optional type name to use in the routes, defaults to Entity Storage.

#### tagName?

`string`

Optional name to use in OpenAPI spec for tag.

#### examples?

[`IEntityStorageRoutesExamples`](../interfaces/IEntityStorageRoutesExamples.md)

Optional examples to use in the routes.

## Returns

`IRestRoute`\<`any`, `any`\>[]

The generated routes.
