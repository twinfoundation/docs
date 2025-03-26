# Interface: IAzureBlobStorageConnectorConfig

Configuration for the Azure Blob Storage Connector.

## Properties

### accountName

> **accountName**: `string`

Storage account name.

***

### accountKey

> **accountKey**: `string`

Account key.

***

### containerName

> **containerName**: `string`

The Azure container name.

***

### endpoint?

> `optional` **endpoint**: `string`

Endpoint defaults to `https://{accountName}.blob.core.windows.net/` where accountName will be
substituted.
