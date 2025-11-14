# Class: MimeTypeHelper

Class to help with mime types.

## Constructors

### Constructor

> **new MimeTypeHelper**(): `MimeTypeHelper`

#### Returns

`MimeTypeHelper`

## Methods

### detect()

> `static` **detect**(`data`): `Promise`\<`string` \| `undefined`\>

Detect the mime type from a byte array.

#### Parameters

##### data

`Uint8Array`

The data to test.

#### Returns

`Promise`\<`string` \| `undefined`\>

The mime type if detected.

***

### defaultExtension()

> `static` **defaultExtension**(`mimeType`): `string` \| `undefined`

Return the default extension for a mime type.

#### Parameters

##### mimeType

The mimetype to get the extension for.

`string` | `undefined`

#### Returns

`string` \| `undefined`

The extension for the mime type.
