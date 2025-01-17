# Function: telemetryMetricList()

> **telemetryMetricList**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`ITelemetryListResponse`\>

Get a list of the telemetry metrics.

## Parameters

### httpRequestContext

`IHttpRequestContext`

The request context for the API.

### componentName

`string`

The name of the component to use in the routes.

### request

`ITelemetryListRequest`

The request.

## Returns

`Promise`\<`ITelemetryListResponse`\>

The response object with additional http response properties.
