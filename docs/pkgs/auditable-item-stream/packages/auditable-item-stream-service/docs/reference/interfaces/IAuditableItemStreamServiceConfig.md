# Interface: IAuditableItemStreamServiceConfig

Configuration for the auditable item stream service.

## Properties

### defaultImmutableInterval?

> `optional` **defaultImmutableInterval**: `number`

After how many entries do we add immutable checks, defaults to service configured value.
A value of 0 will disable integrity checks, 1 will be every item, or any other integer for an interval.
You can override this value on stream creation.

#### Default

```ts
10
```
