# Interface: IInputPath

The resulting details for a REST path.

## Properties

### method

• **method**: `HttpMethods`

The REST method.

___

### operationId

• **operationId**: `string`

The id of the operation.

___

### path

• **path**: `string`

The path.

___

### pathParameters

• **pathParameters**: `string`[]

The parameters contained in the path.

___

### requestExamples

• `Optional` **requestExamples**: \{ `description?`: `string` ; `id`: `string` ; `request`: `unknown`  }[]

Example objects for the request.

___

### requestType

• `Optional` **requestType**: `string`

The request type.

___

### responseCodes

• **responseCodes**: `string`[]

Response codes.

___

### responseType

• **responseType**: \{ `description?`: `string` ; `examples?`: \{ `description?`: `string` ; `id`: `string` ; `response`: `unknown`  }[] ; `mimeType?`: `string` ; `statusCode`: `HttpStatusCodes` ; `type?`: `string`  }[]

The response type.

___

### summary

• **summary**: `string`

Summary of what task the operation performs.

___

### tag

• **tag**: `string`

Tags for the operation.
