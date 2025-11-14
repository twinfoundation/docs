# Interface: INodeEnvironmentVariables

The environment variables for the node.

## Extends

- [`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md)

## Properties

### debug?

> `optional` **debug**: `string`

Start the engine in debug mode.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`debug`](IEngineServerEnvironmentVariables.md#debug)

***

### storageFileRoot?

> `optional` **storageFileRoot**: `string`

The root directory for storing items like state file.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`storageFileRoot`](IEngineServerEnvironmentVariables.md#storagefileroot)

***

### stateFilename?

> `optional` **stateFilename**: `string`

The name of the state file.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`stateFilename`](IEngineServerEnvironmentVariables.md#statefilename)

***

### tenantEnabled?

> `optional` **tenantEnabled**: `string`

Is multi-tenant support enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`tenantEnabled`](IEngineServerEnvironmentVariables.md#tenantenabled)

***

### tenantId?

> `optional` **tenantId**: `string`

A tenant id to use as a default for the node.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`tenantId`](IEngineServerEnvironmentVariables.md#tenantid)

***

### tenantApiKey?

> `optional` **tenantApiKey**: `string`

A tenant api key to use as a default for the node.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`tenantApiKey`](IEngineServerEnvironmentVariables.md#tenantapikey)

***

### entityStorageConnectorType?

> `optional` **entityStorageConnectorType**: `string`

The type of the entity storage to create, comma separate for more than one connector.
values: file, memory, aws-dynamodb, azure-cosmosdb, gcp-firestoredb, scylladb, mysql, mongodb, postgresql

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`entityStorageConnectorType`](IEngineServerEnvironmentVariables.md#entitystorageconnectortype)

***

### entityStorageConnectorDefault?

> `optional` **entityStorageConnectorDefault**: `string`

The default entity storage connector to use, defaults to the first one in the list.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`entityStorageConnectorDefault`](IEngineServerEnvironmentVariables.md#entitystorageconnectordefault)

***

### entityStorageTablePrefix?

> `optional` **entityStorageTablePrefix**: `string`

A prefix for all the table in entity-storage, can be empty.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`entityStorageTablePrefix`](IEngineServerEnvironmentVariables.md#entitystoragetableprefix)

***

### awsDynamodbAuthMode?

> `optional` **awsDynamodbAuthMode**: `string`

AWS DynamoDB auth mode, either credentials or pod.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsDynamodbAuthMode`](IEngineServerEnvironmentVariables.md#awsdynamodbauthmode)

***

### awsDynamodbAccessKeyId?

> `optional` **awsDynamodbAccessKeyId**: `string`

AWS Dynamo DB access key id.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsDynamodbAccessKeyId`](IEngineServerEnvironmentVariables.md#awsdynamodbaccesskeyid)

***

### awsDynamodbEndpoint?

> `optional` **awsDynamodbEndpoint**: `string`

AWS Dynamo DB Endpoint if running local instance.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsDynamodbEndpoint`](IEngineServerEnvironmentVariables.md#awsdynamodbendpoint)

***

### awsDynamodbRegion?

> `optional` **awsDynamodbRegion**: `string`

AWS Dynamo DB region.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsDynamodbRegion`](IEngineServerEnvironmentVariables.md#awsdynamodbregion)

***

### awsDynamodbSecretAccessKey?

> `optional` **awsDynamodbSecretAccessKey**: `string`

AWS Dynamo DB secret access key.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsDynamodbSecretAccessKey`](IEngineServerEnvironmentVariables.md#awsdynamodbsecretaccesskey)

***

### azureCosmosdbKey?

> `optional` **azureCosmosdbKey**: `string`

Azure Cosmos DB key.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`azureCosmosdbKey`](IEngineServerEnvironmentVariables.md#azurecosmosdbkey)

***

### azureCosmosdbContainerId?

> `optional` **azureCosmosdbContainerId**: `string`

Azure Cosmos DB container id.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`azureCosmosdbContainerId`](IEngineServerEnvironmentVariables.md#azurecosmosdbcontainerid)

***

### azureCosmosdbDatabaseId?

> `optional` **azureCosmosdbDatabaseId**: `string`

Azure Cosmos DB database id.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`azureCosmosdbDatabaseId`](IEngineServerEnvironmentVariables.md#azurecosmosdbdatabaseid)

***

### azureCosmosdbEndpoint?

> `optional` **azureCosmosdbEndpoint**: `string`

Azure Cosmos DB endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`azureCosmosdbEndpoint`](IEngineServerEnvironmentVariables.md#azurecosmosdbendpoint)

***

### gcpFirestoreCollectionName?

> `optional` **gcpFirestoreCollectionName**: `string`

GCP Firestore collection name.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`gcpFirestoreCollectionName`](IEngineServerEnvironmentVariables.md#gcpfirestorecollectionname)

***

### gcpFirestoreCredentials?

> `optional` **gcpFirestoreCredentials**: `string`

GCP Firestore credentials.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`gcpFirestoreCredentials`](IEngineServerEnvironmentVariables.md#gcpfirestorecredentials)

***

### gcpFirestoreDatabaseId?

> `optional` **gcpFirestoreDatabaseId**: `string`

GCP Firestore database id.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`gcpFirestoreDatabaseId`](IEngineServerEnvironmentVariables.md#gcpfirestoredatabaseid)

***

### gcpFirestoreApiEndpoint?

> `optional` **gcpFirestoreApiEndpoint**: `string`

GCP Firestore endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`gcpFirestoreApiEndpoint`](IEngineServerEnvironmentVariables.md#gcpfirestoreapiendpoint)

***

### gcpFirestoreProjectId?

> `optional` **gcpFirestoreProjectId**: `string`

GCP Firestore project id.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`gcpFirestoreProjectId`](IEngineServerEnvironmentVariables.md#gcpfirestoreprojectid)

***

### scylladbHosts?

> `optional` **scylladbHosts**: `string`

ScyllaDB hosts as comma separated string.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`scylladbHosts`](IEngineServerEnvironmentVariables.md#scylladbhosts)

***

### scylladbKeyspace?

> `optional` **scylladbKeyspace**: `string`

ScyllaDB keyspace.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`scylladbKeyspace`](IEngineServerEnvironmentVariables.md#scylladbkeyspace)

***

### scylladbLocalDataCenter?

> `optional` **scylladbLocalDataCenter**: `string`

ScyllaDB local data center.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`scylladbLocalDataCenter`](IEngineServerEnvironmentVariables.md#scylladblocaldatacenter)

***

### scylladbPort?

> `optional` **scylladbPort**: `string`

ScyllaDB port.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`scylladbPort`](IEngineServerEnvironmentVariables.md#scylladbport)

***

### mySqlHost?

> `optional` **mySqlHost**: `string`

MySQL host.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mySqlHost`](IEngineServerEnvironmentVariables.md#mysqlhost)

***

### mySqlPort?

> `optional` **mySqlPort**: `number`

MySQL port.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mySqlPort`](IEngineServerEnvironmentVariables.md#mysqlport)

***

### mySqlUser?

> `optional` **mySqlUser**: `string`

MySQL username.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mySqlUser`](IEngineServerEnvironmentVariables.md#mysqluser)

***

### mySqlPassword?

> `optional` **mySqlPassword**: `string`

MySQL password.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mySqlPassword`](IEngineServerEnvironmentVariables.md#mysqlpassword)

***

### mySqlDatabase?

> `optional` **mySqlDatabase**: `string`

MySQL Database.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mySqlDatabase`](IEngineServerEnvironmentVariables.md#mysqldatabase)

***

### mongoDbHost?

> `optional` **mongoDbHost**: `string`

MongoDB host.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mongoDbHost`](IEngineServerEnvironmentVariables.md#mongodbhost)

***

### mongoDbPort?

> `optional` **mongoDbPort**: `number`

MongoDB port.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mongoDbPort`](IEngineServerEnvironmentVariables.md#mongodbport)

***

### mongoDbUser?

> `optional` **mongoDbUser**: `string`

MongoDB username.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mongoDbUser`](IEngineServerEnvironmentVariables.md#mongodbuser)

***

### mongoDbPassword?

> `optional` **mongoDbPassword**: `string`

MongoDB password.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mongoDbPassword`](IEngineServerEnvironmentVariables.md#mongodbpassword)

***

### mongoDbDatabase?

> `optional` **mongoDbDatabase**: `string`

MongoDB Database.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mongoDbDatabase`](IEngineServerEnvironmentVariables.md#mongodbdatabase)

***

### postgreSqlHost?

> `optional` **postgreSqlHost**: `string`

PostgreSQl host.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`postgreSqlHost`](IEngineServerEnvironmentVariables.md#postgresqlhost)

***

### postgreSqlPort?

> `optional` **postgreSqlPort**: `number`

PostgreSQl port.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`postgreSqlPort`](IEngineServerEnvironmentVariables.md#postgresqlport)

***

### postgreSqlUser?

> `optional` **postgreSqlUser**: `string`

PostgreSQl username.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`postgreSqlUser`](IEngineServerEnvironmentVariables.md#postgresqluser)

***

### postgreSqlPassword?

> `optional` **postgreSqlPassword**: `string`

PostgreSQl password.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`postgreSqlPassword`](IEngineServerEnvironmentVariables.md#postgresqlpassword)

***

### postgreSqlDatabase?

> `optional` **postgreSqlDatabase**: `string`

PostgreSQl Database.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`postgreSqlDatabase`](IEngineServerEnvironmentVariables.md#postgresqldatabase)

***

### ipfsBearerToken?

> `optional` **ipfsBearerToken**: `string`

The security token for accessing IPFS API.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`ipfsBearerToken`](IEngineServerEnvironmentVariables.md#ipfsbearertoken)

***

### ipfsApiUrl?

> `optional` **ipfsApiUrl**: `string`

The url for accessing IPFS API.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`ipfsApiUrl`](IEngineServerEnvironmentVariables.md#ipfsapiurl)

***

### blobStorageConnectorType?

> `optional` **blobStorageConnectorType**: `string`

The type of the entity storage to create, comma separate for more than one connector.
values: memory, file, ipfs, aws-s3, azure-storage, gcp-storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`blobStorageConnectorType`](IEngineServerEnvironmentVariables.md#blobstorageconnectortype)

***

### blobStorageConnectorDefault?

> `optional` **blobStorageConnectorDefault**: `string`

The default blob storage connector to use, defaults to the first one in the list.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`blobStorageConnectorDefault`](IEngineServerEnvironmentVariables.md#blobstorageconnectordefault)

***

### blobStorageConnectorPublic?

> `optional` **blobStorageConnectorPublic**: `string`

Blog storage connector which has public access.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`blobStorageConnectorPublic`](IEngineServerEnvironmentVariables.md#blobstorageconnectorpublic)

***

### blobStorageEnableEncryption?

> `optional` **blobStorageEnableEncryption**: `string`

Enable encryption for the blob storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`blobStorageEnableEncryption`](IEngineServerEnvironmentVariables.md#blobstorageenableencryption)

***

### blobStorageEncryptionKeyId?

> `optional` **blobStorageEncryptionKeyId**: `string`

The id of the encryption key for the blob storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`blobStorageEncryptionKeyId`](IEngineServerEnvironmentVariables.md#blobstorageencryptionkeyid)

***

### blobStorageSymmetricEncryptionKey?

> `optional` **blobStorageSymmetricEncryptionKey**: `string`

A symmetric encryption key for the blob storage, should be ChaCha20Poly1305 in base64 format.
If encryption is enabled but a key is not provided one will be generated.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`blobStorageSymmetricEncryptionKey`](IEngineServerEnvironmentVariables.md#blobstoragesymmetricencryptionkey)

***

### blobStoragePrefix?

> `optional` **blobStoragePrefix**: `string`

A prefix for all the blobs in blob-storage, can be empty.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`blobStoragePrefix`](IEngineServerEnvironmentVariables.md#blobstorageprefix)

***

### awsS3Region?

> `optional` **awsS3Region**: `string`

AWS S3 region.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsS3Region`](IEngineServerEnvironmentVariables.md#awss3region)

***

### awsS3BucketName?

> `optional` **awsS3BucketName**: `string`

AWS S3 bucket name.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsS3BucketName`](IEngineServerEnvironmentVariables.md#awss3bucketname)

***

### awsS3AuthMode?

> `optional` **awsS3AuthMode**: `string`

AWS S3 auth mode, either credentials or pod, defaults to credentials.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsS3AuthMode`](IEngineServerEnvironmentVariables.md#awss3authmode)

***

### awsS3AccessKeyId?

> `optional` **awsS3AccessKeyId**: `string`

AWS S3 access key id.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsS3AccessKeyId`](IEngineServerEnvironmentVariables.md#awss3accesskeyid)

***

### awsS3SecretAccessKey?

> `optional` **awsS3SecretAccessKey**: `string`

AWS S3 secret access key.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsS3SecretAccessKey`](IEngineServerEnvironmentVariables.md#awss3secretaccesskey)

***

### awsS3Endpoint?

> `optional` **awsS3Endpoint**: `string`

AWS S3 endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsS3Endpoint`](IEngineServerEnvironmentVariables.md#awss3endpoint)

***

### azureStorageAccountKey?

> `optional` **azureStorageAccountKey**: `string`

Azure Storage account key.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`azureStorageAccountKey`](IEngineServerEnvironmentVariables.md#azurestorageaccountkey)

***

### azureStorageAccountName?

> `optional` **azureStorageAccountName**: `string`

Azure Storage account name.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`azureStorageAccountName`](IEngineServerEnvironmentVariables.md#azurestorageaccountname)

***

### azureStorageContainerName?

> `optional` **azureStorageContainerName**: `string`

Azure Storage container.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`azureStorageContainerName`](IEngineServerEnvironmentVariables.md#azurestoragecontainername)

***

### azureStorageEndpoint?

> `optional` **azureStorageEndpoint**: `string`

Azure Storage endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`azureStorageEndpoint`](IEngineServerEnvironmentVariables.md#azurestorageendpoint)

***

### gcpStorageBucketName?

> `optional` **gcpStorageBucketName**: `string`

GCP Storage bucket.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`gcpStorageBucketName`](IEngineServerEnvironmentVariables.md#gcpstoragebucketname)

***

### gcpStorageCredentials?

> `optional` **gcpStorageCredentials**: `string`

GCP Storage credentials.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`gcpStorageCredentials`](IEngineServerEnvironmentVariables.md#gcpstoragecredentials)

***

### gcpStorageEndpoint?

> `optional` **gcpStorageEndpoint**: `string`

GCP Storage endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`gcpStorageEndpoint`](IEngineServerEnvironmentVariables.md#gcpstorageendpoint)

***

### gcpStorageProjectId?

> `optional` **gcpStorageProjectId**: `string`

GCP Storage project id.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`gcpStorageProjectId`](IEngineServerEnvironmentVariables.md#gcpstorageprojectid)

***

### vaultConnector?

> `optional` **vaultConnector**: `string`

The type of the default vault connector: entity-storage, hashicorp.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`vaultConnector`](IEngineServerEnvironmentVariables.md#vaultconnector)

***

### hashicorpVaultToken?

> `optional` **hashicorpVaultToken**: `string`

Hashicorp Vault token.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`hashicorpVaultToken`](IEngineServerEnvironmentVariables.md#hashicorpvaulttoken)

***

### hashicorpVaultEndpoint?

> `optional` **hashicorpVaultEndpoint**: `string`

Hashicorp Vault endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`hashicorpVaultEndpoint`](IEngineServerEnvironmentVariables.md#hashicorpvaultendpoint)

***

### loggingConnector?

> `optional` **loggingConnector**: `string`

The type of logging task connector, can be a comma separated list: console, entity-storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`loggingConnector`](IEngineServerEnvironmentVariables.md#loggingconnector)

***

### backgroundTaskConnector?

> `optional` **backgroundTaskConnector**: `string`

The type of background task connector: entity-storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`backgroundTaskConnector`](IEngineServerEnvironmentVariables.md#backgroundtaskconnector)

***

### eventBusConnector?

> `optional` **eventBusConnector**: `string`

The type of event bus connector: local.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`eventBusConnector`](IEngineServerEnvironmentVariables.md#eventbusconnector)

***

### eventBusComponent?

> `optional` **eventBusComponent**: `string`

The type of event bus component: service.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`eventBusComponent`](IEngineServerEnvironmentVariables.md#eventbuscomponent)

***

### messagingEnabled?

> `optional` **messagingEnabled**: `string`

Are the messaging components enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`messagingEnabled`](IEngineServerEnvironmentVariables.md#messagingenabled)

***

### awsSesRegion?

> `optional` **awsSesRegion**: `string`

AWS SES region.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsSesRegion`](IEngineServerEnvironmentVariables.md#awssesregion)

***

### awsSesAuthMode?

> `optional` **awsSesAuthMode**: `string`

AWS SES auth mode, either credentials or pod, defaults to credentials.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsSesAuthMode`](IEngineServerEnvironmentVariables.md#awssesauthmode)

***

### awsSesSecretAccessKey?

> `optional` **awsSesSecretAccessKey**: `string`

AWS SES secret access key.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsSesSecretAccessKey`](IEngineServerEnvironmentVariables.md#awssessecretaccesskey)

***

### awsSesAccessKeyId?

> `optional` **awsSesAccessKeyId**: `string`

AWS SES access key id.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsSesAccessKeyId`](IEngineServerEnvironmentVariables.md#awssesaccesskeyid)

***

### awsSesEndpoint?

> `optional` **awsSesEndpoint**: `string`

AWS SES endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsSesEndpoint`](IEngineServerEnvironmentVariables.md#awssesendpoint)

***

### awsMessagingPushNotificationApplications?

> `optional` **awsMessagingPushNotificationApplications**: `string`

The applications for the push notifications JSON stringified array of IAwsApplicationSettings.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`awsMessagingPushNotificationApplications`](IEngineServerEnvironmentVariables.md#awsmessagingpushnotificationapplications)

***

### messagingEmailConnector?

> `optional` **messagingEmailConnector**: `string`

The type of messaging email connector: entity-storage, aws.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`messagingEmailConnector`](IEngineServerEnvironmentVariables.md#messagingemailconnector)

***

### messagingSmsConnector?

> `optional` **messagingSmsConnector**: `string`

The type of messaging sms connector: entity-storage, aws.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`messagingSmsConnector`](IEngineServerEnvironmentVariables.md#messagingsmsconnector)

***

### messagingPushNotificationConnector?

> `optional` **messagingPushNotificationConnector**: `string`

The type of messaging push notification connector: entity-storage, aws.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`messagingPushNotificationConnector`](IEngineServerEnvironmentVariables.md#messagingpushnotificationconnector)

***

### telemetryConnector?

> `optional` **telemetryConnector**: `string`

The type of telemetry connector: entity-storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`telemetryConnector`](IEngineServerEnvironmentVariables.md#telemetryconnector)

***

### faucetConnector?

> `optional` **faucetConnector**: `string`

The type of faucet connector: entity-storage, iota.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`faucetConnector`](IEngineServerEnvironmentVariables.md#faucetconnector)

***

### walletConnector?

> `optional` **walletConnector**: `string`

The type of wallet connector: entity-storage, iota.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`walletConnector`](IEngineServerEnvironmentVariables.md#walletconnector)

***

### nftConnector?

> `optional` **nftConnector**: `string`

The type of NFT connector: entity-storage, iota.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`nftConnector`](IEngineServerEnvironmentVariables.md#nftconnector)

***

### identityConnector?

> `optional` **identityConnector**: `string`

The type of identity connector: entity-storage, iota.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`identityConnector`](IEngineServerEnvironmentVariables.md#identityconnector)

***

### identityResolverConnector?

> `optional` **identityResolverConnector**: `string`

The type of identity resolver connector: entity-storage, iota.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`identityResolverConnector`](IEngineServerEnvironmentVariables.md#identityresolverconnector)

***

### verifiableStorageConnector?

> `optional` **verifiableStorageConnector**: `string`

The type of verifiable storage connector: entity-storage, iota.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`verifiableStorageConnector`](IEngineServerEnvironmentVariables.md#verifiablestorageconnector)

***

### iotaFaucetEndpoint?

> `optional` **iotaFaucetEndpoint**: `string`

IOTA Faucet Endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`iotaFaucetEndpoint`](IEngineServerEnvironmentVariables.md#iotafaucetendpoint)

***

### iotaNodeEndpoint?

> `optional` **iotaNodeEndpoint**: `string`

IOTA Node Endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`iotaNodeEndpoint`](IEngineServerEnvironmentVariables.md#iotanodeendpoint)

***

### iotaNetwork?

> `optional` **iotaNetwork**: `string`

IOTA network.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`iotaNetwork`](IEngineServerEnvironmentVariables.md#iotanetwork)

***

### iotaCoinType?

> `optional` **iotaCoinType**: `string`

IOTA coin type.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`iotaCoinType`](IEngineServerEnvironmentVariables.md#iotacointype)

***

### iotaExplorerEndpoint?

> `optional` **iotaExplorerEndpoint**: `string`

IOTA Explorer Endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`iotaExplorerEndpoint`](IEngineServerEnvironmentVariables.md#iotaexplorerendpoint)

***

### iotaGasStationEndpoint?

> `optional` **iotaGasStationEndpoint**: `string`

IOTA Gas Station Endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`iotaGasStationEndpoint`](IEngineServerEnvironmentVariables.md#iotagasstationendpoint)

***

### iotaGasStationAuthToken?

> `optional` **iotaGasStationAuthToken**: `string`

IOTA Gas Station Authentication Token.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`iotaGasStationAuthToken`](IEngineServerEnvironmentVariables.md#iotagasstationauthtoken)

***

### universalResolverEndpoint?

> `optional` **universalResolverEndpoint**: `string`

Universal Resolver Endpoint.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`universalResolverEndpoint`](IEngineServerEnvironmentVariables.md#universalresolverendpoint)

***

### identityProfileConnector?

> `optional` **identityProfileConnector**: `string`

The type of identity profile connector: entity-storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`identityProfileConnector`](IEngineServerEnvironmentVariables.md#identityprofileconnector)

***

### immutableProofVerificationMethodId?

> `optional` **immutableProofVerificationMethodId**: `string`

The identity verification method id to use with immutable proofs.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`immutableProofVerificationMethodId`](IEngineServerEnvironmentVariables.md#immutableproofverificationmethodid)

***

### attestationConnector?

> `optional` **attestationConnector**: `string`

The type of attestation connector: entity-storage, iota.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`attestationConnector`](IEngineServerEnvironmentVariables.md#attestationconnector)

***

### attestationVerificationMethodId?

> `optional` **attestationVerificationMethodId**: `string`

The identity verification method id to use with attestation.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`attestationVerificationMethodId`](IEngineServerEnvironmentVariables.md#attestationverificationmethodid)

***

### dataProcessingEnabled?

> `optional` **dataProcessingEnabled**: `string`

Is the data processing enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`dataProcessingEnabled`](IEngineServerEnvironmentVariables.md#dataprocessingenabled)

***

### dataConverterConnectors?

> `optional` **dataConverterConnectors**: `string`

The type of the default data converters, can be a comma separated list: json, xml.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`dataConverterConnectors`](IEngineServerEnvironmentVariables.md#dataconverterconnectors)

***

### dataExtractorConnectors?

> `optional` **dataExtractorConnectors**: `string`

The type of the default data extractor, can be a comma separated list: json-path.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`dataExtractorConnectors`](IEngineServerEnvironmentVariables.md#dataextractorconnectors)

***

### auditableItemGraphEnabled?

> `optional` **auditableItemGraphEnabled**: `string`

Is the auditable item graph enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`auditableItemGraphEnabled`](IEngineServerEnvironmentVariables.md#auditableitemgraphenabled)

***

### auditableItemStreamEnabled?

> `optional` **auditableItemStreamEnabled**: `string`

Is the auditable item stream enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`auditableItemStreamEnabled`](IEngineServerEnvironmentVariables.md#auditableitemstreamenabled)

***

### documentManagementEnabled?

> `optional` **documentManagementEnabled**: `string`

Is the document management enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`documentManagementEnabled`](IEngineServerEnvironmentVariables.md#documentmanagementenabled)

***

### synchronisedStorageEnabled?

> `optional` **synchronisedStorageEnabled**: `string`

Is the synchronised storage enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`synchronisedStorageEnabled`](IEngineServerEnvironmentVariables.md#synchronisedstorageenabled)

***

### synchronisedStorageTrustedUrl?

> `optional` **synchronisedStorageTrustedUrl**: `string`

Url which points to the api for a trusted synchronised storage node, not required if this is a trusted node.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`synchronisedStorageTrustedUrl`](IEngineServerEnvironmentVariables.md#synchronisedstoragetrustedurl)

***

### synchronisedStorageVerifiableStorageKeyId?

> `optional` **synchronisedStorageVerifiableStorageKeyId**: `string`

The key for the smart contract which contains the verifiable storage pointer store for synchronised storage.
This only required if using a custom verifiable storage item, otherwise it will default to the network name.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`synchronisedStorageVerifiableStorageKeyId`](IEngineServerEnvironmentVariables.md#synchronisedstorageverifiablestoragekeyid)

***

### synchronisedStorageBlobStorageEncryptionKeyId?

> `optional` **synchronisedStorageBlobStorageEncryptionKeyId**: `string`

The key from the vault which is used to encrypt the synchronised storage blobs.
Only required for trusted nodes, as regular nodes will request from the trusted nodes.
Defaults to synchronised-storage-blob-encryption

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`synchronisedStorageBlobStorageEncryptionKeyId`](IEngineServerEnvironmentVariables.md#synchronisedstorageblobstorageencryptionkeyid)

***

### synchronisedStorageBlobStorageKey?

> `optional` **synchronisedStorageBlobStorageKey**: `string`

The key used for blob encryption, should be ChaCha20Poly1305 encoded as base64.
Only required for trusted nodes, as regular nodes will not write encrypted data.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`synchronisedStorageBlobStorageKey`](IEngineServerEnvironmentVariables.md#synchronisedstorageblobstoragekey)

***

### synchronisedStorageEntityUpdateIntervalMinutes?

> `optional` **synchronisedStorageEntityUpdateIntervalMinutes**: `string`

How often to check for entity updates in minutes.

#### Default

```ts
5
```

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`synchronisedStorageEntityUpdateIntervalMinutes`](IEngineServerEnvironmentVariables.md#synchronisedstorageentityupdateintervalminutes)

***

### synchronisedStorageConsolidationIntervalMinutes?

> `optional` **synchronisedStorageConsolidationIntervalMinutes**: `string`

Interval to perform consolidation of changesets, only used if this is a trusted node.

#### Default

```ts
60
```

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`synchronisedStorageConsolidationIntervalMinutes`](IEngineServerEnvironmentVariables.md#synchronisedstorageconsolidationintervalminutes)

***

### synchronisedStorageConsolidationBatchSize?

> `optional` **synchronisedStorageConsolidationBatchSize**: `string`

The number of entities to process in a single consolidation batch, only used if this is a trusted node.

#### Default

```ts
1000
```

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`synchronisedStorageConsolidationBatchSize`](IEngineServerEnvironmentVariables.md#synchronisedstorageconsolidationbatchsize)

***

### synchronisedStorageMaxConsolidations?

> `optional` **synchronisedStorageMaxConsolidations**: `string`

The maximum number of consolidations to keep in storage, only used if this is a trusted node.

#### Default

```ts
5
```

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`synchronisedStorageMaxConsolidations`](IEngineServerEnvironmentVariables.md#synchronisedstoragemaxconsolidations)

***

### federatedCatalogueEnabled?

> `optional` **federatedCatalogueEnabled**: `string`

Is the federated catalogue enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`federatedCatalogueEnabled`](IEngineServerEnvironmentVariables.md#federatedcatalogueenabled)

***

### federatedCatalogueCacheTtlMs?

> `optional` **federatedCatalogueCacheTtlMs**: `number`

Federated catalog TTL for the cache.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`federatedCatalogueCacheTtlMs`](IEngineServerEnvironmentVariables.md#federatedcataloguecachettlms)

***

### federatedCatalogueClearingHouseApproverList?

> `optional` **federatedCatalogueClearingHouseApproverList**: `string`

Federated catalog clearing house approver list, stringified array of DIDs.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`federatedCatalogueClearingHouseApproverList`](IEngineServerEnvironmentVariables.md#federatedcatalogueclearinghouseapproverlist)

***

### rightsManagementEnabled?

> `optional` **rightsManagementEnabled**: `string`

Is the rights management enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`rightsManagementEnabled`](IEngineServerEnvironmentVariables.md#rightsmanagementenabled)

***

### rightsManagementBaseCallbackUrl?

> `optional` **rightsManagementBaseCallbackUrl**: `string`

What is the base callback url for rights management negotiations e.g. https://my-node/rights-management.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`rightsManagementBaseCallbackUrl`](IEngineServerEnvironmentVariables.md#rightsmanagementbasecallbackurl)

***

### rightsManagementInformationSources?

> `optional` **rightsManagementInformationSources**: `string`

The rights management configuration which includes the information sources modules to load.
Use the @json: prefix to specify the path to the JSON configuration file.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`rightsManagementInformationSources`](IEngineServerEnvironmentVariables.md#rightsmanagementinformationsources)

***

### rightsManagementNegotiators?

> `optional` **rightsManagementNegotiators**: `string`

The rights management configuration which includes the negotiator modules to load.
Use the @json: prefix to specify the path to the JSON configuration file.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`rightsManagementNegotiators`](IEngineServerEnvironmentVariables.md#rightsmanagementnegotiators)

***

### rightsManagementRequesters?

> `optional` **rightsManagementRequesters**: `string`

The rights management configuration which includes the requester modules to load.
Use the @json: prefix to specify the path to the JSON configuration file.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`rightsManagementRequesters`](IEngineServerEnvironmentVariables.md#rightsmanagementrequesters)

***

### rightsManagementExecutionActions?

> `optional` **rightsManagementExecutionActions**: `string`

The rights management configuration which includes the execution actions modules to load.
Use the @json: prefix to specify the path to the JSON configuration file.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`rightsManagementExecutionActions`](IEngineServerEnvironmentVariables.md#rightsmanagementexecutionactions)

***

### rightsManagementEnforcementProcessors?

> `optional` **rightsManagementEnforcementProcessors**: `string`

The rights management configuration which includes the enforcement processor modules to load.
Use the @json: prefix to specify the path to the JSON configuration file.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`rightsManagementEnforcementProcessors`](IEngineServerEnvironmentVariables.md#rightsmanagementenforcementprocessors)

***

### rightsManagementArbiters?

> `optional` **rightsManagementArbiters**: `string`

The rights management configuration which includes the arbiter modules to load.
Use the @json: prefix to specify the path to the JSON configuration file.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`rightsManagementArbiters`](IEngineServerEnvironmentVariables.md#rightsmanagementarbiters)

***

### rightsManagementOffers?

> `optional` **rightsManagementOffers**: `string`

The rights management configuration which includes the offer modules to load.
Use the @json: prefix to specify the path to the JSON configuration file.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`rightsManagementOffers`](IEngineServerEnvironmentVariables.md#rightsmanagementoffers)

***

### taskSchedulerEnabled?

> `optional` **taskSchedulerEnabled**: `string`

Is the task scheduler enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`taskSchedulerEnabled`](IEngineServerEnvironmentVariables.md#taskschedulerenabled)

***

### dataSpaceConnectorEnabled?

> `optional` **dataSpaceConnectorEnabled**: `string`

Is the data space connector enabled, defaults to false.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`dataSpaceConnectorEnabled`](IEngineServerEnvironmentVariables.md#dataspaceconnectorenabled)

***

### dataSpaceConnectorRetainActivityLogsFor?

> `optional` **dataSpaceConnectorRetainActivityLogsFor**: `string`

The length of time to retain the activity logs for in minutes, set to -1 to keep forever.

#### Default

```ts
10
```

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`dataSpaceConnectorRetainActivityLogsFor`](IEngineServerEnvironmentVariables.md#dataspaceconnectorretainactivitylogsfor)

***

### dataSpaceConnectorActivityLogsCleanUpInterval?

> `optional` **dataSpaceConnectorActivityLogsCleanUpInterval**: `string`

The interval for cleaning up the activity logs.

#### Default

```ts
60
```

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`dataSpaceConnectorActivityLogsCleanUpInterval`](IEngineServerEnvironmentVariables.md#dataspaceconnectoractivitylogscleanupinterval)

***

### vcAuthenticationEnabled?

> `optional` **vcAuthenticationEnabled**: `string`

Enable verifiable credential authentication for the API.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`vcAuthenticationEnabled`](IEngineServerEnvironmentVariables.md#vcauthenticationenabled)

***

### vcAuthenticationVerificationMethodId?

> `optional` **vcAuthenticationVerificationMethodId**: `string`

Verifiable credential assertion for node to node communication.
Defaults to node-authentication-assertion.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`vcAuthenticationVerificationMethodId`](IEngineServerEnvironmentVariables.md#vcauthenticationverificationmethodid)

***

### extensions?

> `optional` **extensions**: `string`

A comma separated list of additional node extensions to load, the initialiseExtension method will be called for each extension.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`extensions`](IEngineServerEnvironmentVariables.md#extensions)

***

### port?

> `optional` **port**: `string`

The port to serve the API from.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`port`](IEngineServerEnvironmentVariables.md#port)

***

### host?

> `optional` **host**: `string`

The host to serve the API from.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`host`](IEngineServerEnvironmentVariables.md#host)

***

### corsOrigins?

> `optional` **corsOrigins**: `string`

The CORS origins to allow, defaults to *.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`corsOrigins`](IEngineServerEnvironmentVariables.md#corsorigins)

***

### httpMethods?

> `optional` **httpMethods**: `string`

The CORS methods to allow, defaults to GET, POST, PUT, DELETE, OPTIONS.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`httpMethods`](IEngineServerEnvironmentVariables.md#httpmethods)

***

### httpAllowedHeaders?

> `optional` **httpAllowedHeaders**: `string`

The CORS headers to allow.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`httpAllowedHeaders`](IEngineServerEnvironmentVariables.md#httpallowedheaders)

***

### httpExposedHeaders?

> `optional` **httpExposedHeaders**: `string`

The CORS headers to expose.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`httpExposedHeaders`](IEngineServerEnvironmentVariables.md#httpexposedheaders)

***

### authAdminProcessorType?

> `optional` **authAdminProcessorType**: `string`

The type of auth admin processor to use on the API: entity-storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`authAdminProcessorType`](IEngineServerEnvironmentVariables.md#authadminprocessortype)

***

### authProcessorType?

> `optional` **authProcessorType**: `string`

The type of auth processor to use on the API: entity-storage.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`authProcessorType`](IEngineServerEnvironmentVariables.md#authprocessortype)

***

### authSigningKeyId?

> `optional` **authSigningKeyId**: `string`

The id of the key in the vault to use for signing in auth operations.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`authSigningKeyId`](IEngineServerEnvironmentVariables.md#authsigningkeyid)

***

### mimeTypeProcessors?

> `optional` **mimeTypeProcessors**: `string`

Additional MIME type processors to include, comma separated.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`mimeTypeProcessors`](IEngineServerEnvironmentVariables.md#mimetypeprocessors)

***

### routeLoggingIncludeBody?

> `optional` **routeLoggingIncludeBody**: `string`

Include the body in the REST logging output, useful for debugging.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`routeLoggingIncludeBody`](IEngineServerEnvironmentVariables.md#routeloggingincludebody)

***

### routeLoggingFullBase64?

> `optional` **routeLoggingFullBase64**: `string`

Include the full base 64 output in the REST logging output, useful for debugging.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`routeLoggingFullBase64`](IEngineServerEnvironmentVariables.md#routeloggingfullbase64)

***

### routeLoggingObfuscateProperties?

> `optional` **routeLoggingObfuscateProperties**: `string`

List of properties to obfuscate in the REST logging output, comma separated.

#### Inherited from

[`IEngineServerEnvironmentVariables`](IEngineServerEnvironmentVariables.md).[`routeLoggingObfuscateProperties`](IEngineServerEnvironmentVariables.md#routeloggingobfuscateproperties)

***

### features?

> `optional` **features**: `string`

The features that are enabled on the node.

#### Default

```ts
[]
```

***

### nodeIdentity?

> `optional` **nodeIdentity**: `string`

The identity of the node which, if empty and node-identity feature is enabled it will be generated.

***

### nodeMnemonic?

> `optional` **nodeMnemonic**: `string`

The mnemonic for the identity, if empty and node-identity feature is enabled it will be randomly generated.

***

### organizationIdentity?

> `optional` **organizationIdentity**: `string`

If the node-admin-user feature is enabled, this will be the organization of the user, if one is not provided it will be generated

***

### organizationMnemonic?

> `optional` **organizationMnemonic**: `string`

The mnemonic for the organization, if empty and node-admin-user feature is enabled it will be randomly generated.

***

### adminUserIdentity?

> `optional` **adminUserIdentity**: `string`

If the node-admin-user feature is enabled, this will be the identity of the user, if one is not provided it will be generated

***

### adminUserMnemonic?

> `optional` **adminUserMnemonic**: `string`

The mnemonic for the admin user, if empty and node-admin-user feature is enabled it will be randomly generated.

***

### adminUserName?

> `optional` **adminUserName**: `string`

If the node-admin-user feature is enabled, this will be the name of the user.

#### Default

```ts
admin@node
```

***

### adminUserPassword?

> `optional` **adminUserPassword**: `string`

If the node-admin-user feature is enabled, this will be the password of the user, if empty it will be randomly generated.

***

### extensionsMaxSizeMb?

> `optional` **extensionsMaxSizeMb**: `number`

Maximum size in MB for HTTPS extensions downloads.

#### Default

```ts
10
```

***

### extensionsClearCache?

> `optional` **extensionsClearCache**: `boolean`

Whether to clear the extensions cache on startup.

#### Default

```ts
false
```

***

### extensionsCacheDirectory?

> `optional` **extensionsCacheDirectory**: `string`

Custom directory for extensions cache storage.

#### Default

```ts
".tmp"
```

***

### extensionsCacheTtlHours?

> `optional` **extensionsCacheTtlHours**: `number`

TTL in hours for HTTPS extensions cache.

#### Default

```ts
24
```

***

### extensionsForceRefresh?

> `optional` **extensionsForceRefresh**: `boolean`

Force refresh of all cached extensions.

#### Default

```ts
false
```
