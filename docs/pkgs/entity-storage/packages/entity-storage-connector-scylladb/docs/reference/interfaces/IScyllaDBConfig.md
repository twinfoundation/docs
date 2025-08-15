# Interface: IScyllaDBConfig

ScyllaDB Configuration.

## Extended by

- [`IScyllaDBTableConfig`](IScyllaDBTableConfig.md)

## Properties

### hosts

> **hosts**: `string`[]

The host to contact to.

***

### localDataCenter

> **localDataCenter**: `string`

The local data center.

***

### keyspace

> **keyspace**: `string`

The keyspace to use.

***

### port?

> `optional` **port**: `number`

The port to connect to.

#### Default

```ts
9042
```
