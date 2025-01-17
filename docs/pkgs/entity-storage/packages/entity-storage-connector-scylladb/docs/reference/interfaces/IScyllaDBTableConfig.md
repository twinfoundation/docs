# Interface: IScyllaDBTableConfig

Definition of MySQL DB configuration.

## Extends

- [`IScyllaDBConfig`](IScyllaDBConfig.md)

## Extended by

- [`IScyllaDBViewConfig`](IScyllaDBViewConfig.md)

## Properties

### hosts

> **hosts**: `string`[]

The host to contact to.

#### Inherited from

[`IScyllaDBConfig`](IScyllaDBConfig.md).[`hosts`](IScyllaDBConfig.md#hosts)

***

### localDataCenter

> **localDataCenter**: `string`

The local data center.

#### Inherited from

[`IScyllaDBConfig`](IScyllaDBConfig.md).[`localDataCenter`](IScyllaDBConfig.md#localdatacenter)

***

### keyspace

> **keyspace**: `string`

The keyspace to use.

#### Inherited from

[`IScyllaDBConfig`](IScyllaDBConfig.md).[`keyspace`](IScyllaDBConfig.md#keyspace)

***

### tableName?

> `optional` **tableName**: `string`

The name of the table for the storage.

#### Default

```ts
To the camel case of the entity name.
```
