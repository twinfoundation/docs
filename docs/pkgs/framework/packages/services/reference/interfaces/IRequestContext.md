# Interface: IRequestContext

The context for the request.

## Properties

### identity

• `Optional` **identity**: `string`

The identity of the requestor if there is an authenticated user.

---

### locale

• `Optional` **locale**: `string`

The locale of the context as a code e.g. es-ES, defaults to en.

---

### tenantId

• `Optional` **tenantId**: `string`

The tenant id for partitioning data, correlated from the api key making the request.
