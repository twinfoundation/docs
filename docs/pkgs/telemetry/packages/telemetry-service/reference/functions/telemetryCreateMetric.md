# Function: telemetryCreateMetric()

> **telemetryCreateMetric**(`httpRequestContext`, `componentName`, `request`): `Promise`\<`ICreatedResponse`\>

Create a new telemetry metric.

## Parameters

• **httpRequestContext**: `IHttpRequestContext`

The request context for the API.

• **componentName**: `string`

The name of the component to use in the routes.

• **request**: `ITelemetryCreateMetricRequest`

The request.

## Returns

`Promise`\<`ICreatedResponse`\>

The response object with additional http response properties.
