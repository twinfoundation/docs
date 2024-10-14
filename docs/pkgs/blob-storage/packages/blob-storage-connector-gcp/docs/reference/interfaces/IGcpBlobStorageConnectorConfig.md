# Interface: IGcpBlobStorageConnectorConfig

Configuration for the GCP Blob Storage Connector.

## Properties

### projectId

> **projectId**: `string`

The GCP project ID.

***

### bucketName

> **bucketName**: `string`

The GCP bucket name.

***

### apiEndpoint?

> `optional` **apiEndpoint**: `string`

Optional endpoint for GCP Storage emulator.

***

### protocol?

> `optional` **protocol**: `"http"` \| `"https"`

The protocol to use for GCP Storage (e.g., 'http' or 'https').
Defaults to 'https' if not specified.
