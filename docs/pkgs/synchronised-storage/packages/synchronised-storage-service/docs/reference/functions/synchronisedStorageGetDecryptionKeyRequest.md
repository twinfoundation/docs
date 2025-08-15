# Function: synchronisedStorageGetDecryptionKeyRequest()

> **synchronisedStorageGetDecryptionKeyRequest**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`ISyncDecryptionKeyResponse`\>

Request the decryption key.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`ISyncDecryptionKeyRequest`

The request.

## Returns

`Promise`\<`ISyncDecryptionKeyResponse`\>

The response object with additional http response properties.
