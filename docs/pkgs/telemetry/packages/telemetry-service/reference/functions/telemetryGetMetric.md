# Function: telemetryGetMetric()

> **telemetryGetMetric**(`httpRequestContext`, `factoryServiceName`, `request`): `Promise`\<`ITelemetryGetMetricResponse`\>

Gets a telemetry metric.

## Parameters

• **httpRequestContext**: `IHttpRequestContext`

The request context for the API.

• **factoryServiceName**: `string`

The name of the service to use in the routes.

• **request**: `ITelemetryGetMetricRequest`

The request.

## Returns

`Promise`\<`ITelemetryGetMetricResponse`\>

The response object with additional http response properties.
