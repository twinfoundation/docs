# Interface: IS3BlobStorageConnectorConfig

Configuration for the S3 Blob Storage Connector.

## Properties

### region

> **region**: `string`

The AWS region.

***

### bucketName

> **bucketName**: `string`

The S3 bucket name.

***

### authMode?

> `optional` **authMode**: `"credentials"` \| `"pod"`

The authentication mode.
- "credentials": Use access key ID and secret access key.
- "pod": Use IAM role attached to the pod (e.g., in EKS).

#### Default

```ts
credentials
```

***

### accessKeyId?

> `optional` **accessKeyId**: `string`

The AWS access key ID.

***

### secretAccessKey?

> `optional` **secretAccessKey**: `string`

The AWS secret access key.

***

### endpoint?

> `optional` **endpoint**: `string`

Optional endpoint for S3-compatible storage (e.g., MinIO).
