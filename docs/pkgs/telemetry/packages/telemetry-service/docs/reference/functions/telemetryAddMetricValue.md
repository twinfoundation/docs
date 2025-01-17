# Function: telemetryAddMetricValue()

> **telemetryAddMetricValue**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`ICreatedResponse`\>

Add a telemetry metric value.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`ITelemetryAddMetricValueRequest`

The request.

## Returns

`Promise`\<`ICreatedResponse`\>

The response object with additional http response properties.
