# Interface: IBaseRoute

Interface which defines a route.

## Hierarchy

- **`IBaseRoute`**

  ↳ [`IRestRoute`](IRestRoute.md)

  ↳ [`ISocketRoute`](ISocketRoute.md)

## Properties

### operationId

• **operationId**: `string`

The id of the operation.

---

### path

• **path**: `string`

The path to use for routing.

---

### skipSubjectAuth

• `Optional` **skipSubjectAuth**: `boolean`

Skips the subject authentication for this route.

---

### skipTenantAuth

• `Optional` **skipTenantAuth**: `boolean`

Skips the tenant authentication for this route.
