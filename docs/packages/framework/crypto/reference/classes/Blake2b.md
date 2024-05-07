# Class: Blake2b

Class to help with Blake2B Signature scheme.
TypeScript conversion from https://github.com/dcposch/blakejs.

## Constructors

### constructor

• **new Blake2b**(`outLen`, `key?`): [`Blake2b`](Blake2b.md)

Create a new instance of Blake2b.

#### Parameters

| Name     | Type         | Description                           |
| :------- | :----------- | :------------------------------------ |
| `outLen` | `number`     | Output length between 1 and 64 bytes. |
| `key?`   | `Uint8Array` | Optional key.                         |

#### Returns

[`Blake2b`](Blake2b.md)

## Properties

### SIZE_160

▪ `Static` **SIZE_160**: `number` = `20`

Blake2b 160.

---

### SIZE_256

▪ `Static` **SIZE_256**: `number` = `32`

Blake2b 256.

---

### SIZE_512

▪ `Static` **SIZE_512**: `number` = `64`

Blake2b 512.

## Methods

### final

▸ **final**(): `Uint8Array`

Completes a BLAKE2b streaming hash.

#### Returns

`Uint8Array`

The final data.

---

### init

▸ **init**(`outputLength`, `key?`): `void`

Creates a BLAKE2b hashing context.

#### Parameters

| Name           | Type         | Description                           |
| :------------- | :----------- | :------------------------------------ |
| `outputLength` | `number`     | Output length between 1 and 64 bytes. |
| `key?`         | `Uint8Array` | Optional key.                         |

#### Returns

`void`

**`Throws`**

Error if the output length is not between 1 and 64 bytes.

---

### update

▸ **update**(`input`): `void`

Updates a BLAKE2b streaming hash.

#### Parameters

| Name    | Type         | Description       |
| :------ | :----------- | :---------------- |
| `input` | `Uint8Array` | The data to hash. |

#### Returns

`void`

---

### sum160

▸ **sum160**(`data`, `key?`): `Uint8Array`

Perform Sum 160 on the data.

#### Parameters

| Name   | Type         | Description                |
| :----- | :----------- | :------------------------- |
| `data` | `Uint8Array` | The data to operate on.    |
| `key?` | `Uint8Array` | Optional key for the hash. |

#### Returns

`Uint8Array`

The sum 160 of the data.

---

### sum256

▸ **sum256**(`data`, `key?`): `Uint8Array`

Perform Sum 256 on the data.

#### Parameters

| Name   | Type         | Description                |
| :----- | :----------- | :------------------------- |
| `data` | `Uint8Array` | The data to operate on.    |
| `key?` | `Uint8Array` | Optional key for the hash. |

#### Returns

`Uint8Array`

The sum 256 of the data.

---

### sum512

▸ **sum512**(`data`, `key?`): `Uint8Array`

Perform Sum 512 on the data.

#### Parameters

| Name   | Type         | Description                |
| :----- | :----------- | :------------------------- |
| `data` | `Uint8Array` | The data to operate on.    |
| `key?` | `Uint8Array` | Optional key for the hash. |

#### Returns

`Uint8Array`

The sum 512 of the data.
