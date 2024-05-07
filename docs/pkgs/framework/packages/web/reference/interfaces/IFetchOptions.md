# Interface: IFetchOptions

Options for call to the fetch helper.

## Properties

### headers

• `Optional` **headers**: [`IHttpRequestHeaders`](IHttpRequestHeaders.md)

**`Param`**

The headers for the request.

---

### includeCredentials

• `Optional` **includeCredentials**: `boolean`

Include credentials in the requests.

---

### retryCount

• `Optional` **retryCount**: `number`

The number of times to retry fetching defaults to no retries.

---

### retryDelayMs

• `Optional` **retryDelayMs**: `number`

The number of milliseconds we should delay before any retry.

---

### timeoutMs

• `Optional` **timeoutMs**: `number`

Timeout for requests in milliseconds.
