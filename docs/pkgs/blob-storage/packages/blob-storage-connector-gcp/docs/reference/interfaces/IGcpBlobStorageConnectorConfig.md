# Interface: IGcpBlobStorageConnectorConfig

Configuration for the GCP Blob Storage Connector.

## Properties

### projectId

> **projectId**: `string`

The GCP project ID.

***

### credentials?

> `optional` **credentials**: `string`

The GCP credentials, a base64 encoded version of the JWTInput data type.

***

### bucketName

> **bucketName**: `string`

The GCP bucket name.

***

### apiEndpoint?

> `optional` **apiEndpoint**: `string`

Optional endpoint for GCP Storage emulator.
