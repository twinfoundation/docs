# Interface: IScyllaDBTableConfig

Definition of MySQL DB configuration.

## Extends

- `IScyllaDBConfig`

## Extended by

- [`IScyllaDBViewConfig`](IScyllaDBViewConfig.md)

## Properties

### hosts

> **hosts**: `string`[]

The host to contact to.

#### Inherited from

`IScyllaDBConfig.hosts`

***

### localDataCenter

> **localDataCenter**: `string`

The local data center.

#### Inherited from

`IScyllaDBConfig.localDataCenter`

***

### keyspace

> **keyspace**: `string`

The keyspace to use.

#### Inherited from

`IScyllaDBConfig.keyspace`

***

### tableName?

> `optional` **tableName**: `string`

The name of the table for the storage.

#### Default

```ts
To the camel case of the entity name.
```
