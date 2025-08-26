# Interface: IPepInterceptRequest

The request structure for intercepting a request and enforcing a policy.

## Properties

### body

> **body**: `object`

The body parameters of the request.

#### assetType

> **assetType**: `string`

The type of the asset to enforce the policy on.

#### action

> **action**: `string`

The action to perform on the asset.

#### data

> **data**: `unknown`

The data to include in the request.
