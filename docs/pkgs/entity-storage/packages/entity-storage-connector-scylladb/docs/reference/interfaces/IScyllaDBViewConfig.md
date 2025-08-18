# Interface: IScyllaDBViewConfig

Definition of MySQL DB configuration.

## Extends

- [`IScyllaDBTableConfig`](IScyllaDBTableConfig.md)

## Properties

### hosts

> **hosts**: `string`[]

The host to contact to.

#### Inherited from

[`IScyllaDBTableConfig`](IScyllaDBTableConfig.md).[`hosts`](IScyllaDBTableConfig.md#hosts)

***

### localDataCenter

> **localDataCenter**: `string`

The local data center.

#### Inherited from

[`IScyllaDBTableConfig`](IScyllaDBTableConfig.md).[`localDataCenter`](IScyllaDBTableConfig.md#localdatacenter)

***

### keyspace

> **keyspace**: `string`

The keyspace to use.

#### Inherited from

[`IScyllaDBTableConfig`](IScyllaDBTableConfig.md).[`keyspace`](IScyllaDBTableConfig.md#keyspace)

***

### port?

> `optional` **port**: `number`

The port to connect to.

#### Default

```ts
9042
```

#### Inherited from

[`IScyllaDBTableConfig`](IScyllaDBTableConfig.md).[`port`](IScyllaDBTableConfig.md#port)

***

### tableName?

> `optional` **tableName**: `string`

The name of the table for the storage.

#### Default

```ts
To the camel case of the entity name.
```

#### Inherited from

[`IScyllaDBTableConfig`](IScyllaDBTableConfig.md).[`tableName`](IScyllaDBTableConfig.md#tablename)

***

### viewName?

> `optional` **viewName**: `string`

The name of view.

#### Default

```ts
To the camel case of the entity name with View appended.
```
