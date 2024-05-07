# Class: FetchError

Class to represent errors from fetch.

## Hierarchy

- `BaseError`

  ↳ **`FetchError`**

## Constructors

### constructor

• **new FetchError**(`source`, `message`, `httpStatus`, `properties?`, `inner?`): [`FetchError`](FetchError.md)

Create a new instance of FetchError.

#### Parameters

| Name          | Type                                    | Description                                       |
| :------------ | :-------------------------------------- | :------------------------------------------------ |
| `source`      | `string`                                | The source of the error.                          |
| `message`     | `string`                                | The message as a code.                            |
| `httpStatus`  | [`HttpStatusCodes`](HttpStatusCodes.md) | The http status code.                             |
| `properties?` | `Object`                                | Any additional information for the error.         |
| `inner?`      | `unknown`                               | The inner error if we have wrapped another error. |

#### Returns

[`FetchError`](FetchError.md)

#### Overrides

BaseError.constructor

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

BaseError.cause

---

### inner

• `Optional` **inner**: `IError`

The inner error if there was one.

#### Inherited from

BaseError.inner

---

### message

• **message**: `string`

#### Inherited from

BaseError.message

---

### name

• **name**: `string`

#### Inherited from

BaseError.name

---

### properties

• `Optional` **properties**: `Object`

Any additional information for the error.

#### Index signature

▪ [id: `string`]: `unknown`

#### Inherited from

BaseError.properties

---

### source

• `Optional` **source**: `string`

The source of the error.

#### Inherited from

BaseError.source

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

BaseError.stack

---

### CLASS_NAME

▪ `Static` `Readonly` **CLASS_NAME**: `string`

Runtime name for the class.

## Methods

### toJsonObject

▸ **toJsonObject**(`includeStack?`): `IError`

Serialize the error to the error model.

#### Parameters

| Name            | Type      | Description                     |
| :-------------- | :-------- | :------------------------------ |
| `includeStack?` | `boolean` | Include the stack in the error. |

#### Returns

`IError`

The error model.

#### Inherited from

BaseError.toJsonObject

---

### expand

▸ **expand**(`errors`): `undefined` \| `IError`

Expand an error tree.

#### Parameters

| Name     | Type                      | Description                   |
| :------- | :------------------------ | :---------------------------- |
| `errors` | `undefined` \| `IError`[] | The list of errors to expand. |

#### Returns

`undefined` \| `IError`

The first level error.

#### Inherited from

BaseError.expand

---

### flatten

▸ **flatten**(`err`): `IError`[]

Flatten an error tree.

#### Parameters

| Name  | Type      | Description         |
| :---- | :-------- | :------------------ |
| `err` | `unknown` | The starting error. |

#### Returns

`IError`[]

The list of all internal errors.

#### Inherited from

BaseError.flatten

---

### fromError

▸ **fromError**(`err`): `BaseError`

Construct an error from an existing one.

#### Parameters

| Name  | Type      | Description         |
| :---- | :-------- | :------------------ |
| `err` | `unknown` | The existing error. |

#### Returns

`BaseError`

The new instance.

#### Inherited from

BaseError.fromError

---

### isErrorCode

▸ **isErrorCode**(`error`, `code`): `boolean`

Test to see if the error has the specified error code.

#### Parameters

| Name    | Type                 | Description            |
| :------ | :------------------- | :--------------------- |
| `error` | `unknown`            | The error to test.     |
| `code`  | `string` \| `RegExp` | The code to check for. |

#### Returns

`boolean`

True if the error has the code.

#### Inherited from

BaseError.isErrorCode

---

### isErrorMessage

▸ **isErrorMessage**(`error`, `message`): error is BaseError

Test to see if the error has the specified error message.

#### Parameters

| Name      | Type                 | Description               |
| :-------- | :------------------- | :------------------------ |
| `error`   | `unknown`            | The error to test.        |
| `message` | `string` \| `RegExp` | The message to check for. |

#### Returns

error is BaseError

True if the error has the name.

#### Inherited from

BaseError.isErrorMessage

---

### isErrorName

▸ **isErrorName**(`error`, `name`): error is BaseError

Test to see if the error has the specified error name.

#### Parameters

| Name    | Type                 | Description            |
| :------ | :------------------- | :--------------------- |
| `error` | `unknown`            | The error to test.     |
| `name`  | `string` \| `RegExp` | The name to check for. |

#### Returns

error is BaseError

True if the error has the name.

#### Inherited from

BaseError.isErrorName

---

### someErrorCode

▸ **someErrorCode**(`error`, `code`): error is BaseError

Test to see if any of the errors or children have the given error code.

#### Parameters

| Name    | Type                 | Description            |
| :------ | :------------------- | :--------------------- |
| `error` | `unknown`            | The error to test.     |
| `code`  | `string` \| `RegExp` | The code to check for. |

#### Returns

error is BaseError

True if the error has the name.

#### Inherited from

BaseError.someErrorCode

---

### someErrorMessage

▸ **someErrorMessage**(`error`, `message`): error is BaseError

Test to see if any of the errors or children have the given error message.

#### Parameters

| Name      | Type                 | Description               |
| :-------- | :------------------- | :------------------------ |
| `error`   | `unknown`            | The error to test.        |
| `message` | `string` \| `RegExp` | The message to check for. |

#### Returns

error is BaseError

True if the error has the name.

#### Inherited from

BaseError.someErrorMessage

---

### someErrorName

▸ **someErrorName**(`error`, `name`): error is BaseError

Test to see if any of the errors or children have the given error name.

#### Parameters

| Name    | Type                 | Description            |
| :------ | :------------------- | :--------------------- |
| `error` | `unknown`            | The error to test.     |
| `name`  | `string` \| `RegExp` | The name to check for. |

#### Returns

error is BaseError

True if the error has the name.

#### Inherited from

BaseError.someErrorName
