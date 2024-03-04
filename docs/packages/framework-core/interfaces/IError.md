[@gtsc/core](../README.md) / [Exports](../modules.md) / IError

# Interface: IError

Model to describe serialized error.

## Implemented by

- [`BaseError`](../classes/BaseError.md)

## Table of contents

### Properties

- [inner](IError.md#inner)
- [message](IError.md#message)
- [name](IError.md#name)
- [properties](IError.md#properties)
- [source](IError.md#source)
- [stack](IError.md#stack)

## Properties

### inner

• `Optional` **inner**: [`IError`](IError.md)

The inner error if there was one.

#### Defined in

[packages/core/src/models/IError.ts:36](https://github.com/gtscio/framework/blob/ed1186b/packages/core/src/models/IError.ts#L36)

___

### message

• **message**: `string`

The message for the error.

#### Defined in

[packages/core/src/models/IError.ts:16](https://github.com/gtscio/framework/blob/ed1186b/packages/core/src/models/IError.ts#L16)

___

### name

• **name**: `string`

The name for the error.

#### Defined in

[packages/core/src/models/IError.ts:11](https://github.com/gtscio/framework/blob/ed1186b/packages/core/src/models/IError.ts#L11)

___

### properties

• `Optional` **properties**: `Object`

Any additional information for the error.

#### Index signature

▪ [id: `string`]: `unknown`

#### Defined in

[packages/core/src/models/IError.ts:26](https://github.com/gtscio/framework/blob/ed1186b/packages/core/src/models/IError.ts#L26)

___

### source

• `Optional` **source**: `string`

The source of the error.

#### Defined in

[packages/core/src/models/IError.ts:21](https://github.com/gtscio/framework/blob/ed1186b/packages/core/src/models/IError.ts#L21)

___

### stack

• `Optional` **stack**: `string`

The stack trace for the error.

#### Defined in

[packages/core/src/models/IError.ts:31](https://github.com/gtscio/framework/blob/ed1186b/packages/core/src/models/IError.ts#L31)
