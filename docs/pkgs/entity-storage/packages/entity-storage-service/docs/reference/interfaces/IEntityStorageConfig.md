# Interface: IEntityStorageConfig

Configuration for the entity storage service.

## Properties

### partitionPerUser?

> `optional` **partitionPerUser**: `boolean`

Include the user identity when performing storage operations, this allow separation of data per user.

#### Default

```ts
false
```
