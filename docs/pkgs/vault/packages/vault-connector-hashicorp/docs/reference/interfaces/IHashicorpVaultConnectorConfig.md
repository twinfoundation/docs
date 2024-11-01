# Interface: IHashicorpVaultConnectorConfig

Configuration for the Hashicorp Vault Connector.

## Properties

### endpoint

> **endpoint**: `string`

The address of the Hashicorp Vault (e.g., "http://localhost:8200").

***

### token

> **token**: `string`

The authentication token for the Hashicorp Vault.

***

### kvMountPath?

> `optional` **kvMountPath**: `string`

The mount path for the KV Secrets Engine (e.g., "secret)

***

### transitMountPath?

> `optional` **transitMountPath**: `string`

The mount path for the Transit Secrets Engine (e.g., "transit").

***

### apiVersion?

> `optional` **apiVersion**: `string`

The version of the Hashicorp Vault API (e.g., "v1").

***

### timeout?

> `optional` **timeout**: `number`

The request timeout in milliseconds.

***

### namespace?

> `optional` **namespace**: `string`

The namespace for the Hashicorp Vault if using Vault Enterprise.
