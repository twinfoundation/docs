# Interface: IDynamoDbEntityStorageConnectorConfig

Configuration for the Dynamo DB Entity Storage Connector.

## Properties

### region

> **region**: `string`

The region for the AWS connection.

***

### accessKeyId

> **accessKeyId**: `string`

The AWS access key.

***

### secretAccessKey

> **secretAccessKey**: `string`

The AWS secret access key.

***

### tableName

> **tableName**: `string`

The name of the table for the storage.

***

### endpoint?

> `optional` **endpoint**: `string`

AWS endpoint, not usually required but could be used for local DynamoDB instance e.g. http://localhost:8000.
