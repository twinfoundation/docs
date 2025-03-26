# Interface: IIdentityResolverServiceConstructorOptions

Options for the identity resolver service constructor.

## Properties

### fallbackResolverConnectorType?

> `optional` **fallbackResolverConnectorType**: `string`

Fallback connector type to use if the namespace connector is not available.

#### Default

```ts
universal
```

***

### config?

> `optional` **config**: [`IIdentityResolverServiceConfig`](IIdentityResolverServiceConfig.md)

The configuration for the identity service.
