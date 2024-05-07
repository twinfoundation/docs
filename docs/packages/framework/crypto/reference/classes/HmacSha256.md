# Class: HmacSha256

Class to help with HmacSha256 scheme.
TypeScript conversion from https://github.com/emn178/js-sha256.

## Constructors

### constructor

• **new HmacSha256**(`key`, `bits?`): [`HmacSha256`](HmacSha256.md)

Create a new instance of HmacSha256.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `key` | `Uint8Array` | `undefined` | The key for the hmac. |
| `bits` | `number` | `256` | The number of bits. |

#### Returns

[`HmacSha256`](HmacSha256.md)

## Methods

### digest

▸ **digest**(): `Uint8Array`

Get the digest.

#### Returns

`Uint8Array`

The digest.

___

### update

▸ **update**(`message`): [`HmacSha256`](HmacSha256.md)

Update the hash with the data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `Uint8Array` | The data to update the hash with. |

#### Returns

[`HmacSha256`](HmacSha256.md)

The instance for chaining.

___

### sum256

▸ **sum256**(`key`, `data`): `Uint8Array`

Perform Sum 256 on the data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `Uint8Array` | The key for the hmac. |
| `data` | `Uint8Array` | The data to operate on. |

#### Returns

`Uint8Array`

The sum 256 of the data.
