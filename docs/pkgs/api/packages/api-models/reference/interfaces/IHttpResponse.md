# Interface: IHttpResponse

Model used when a REST route wants to return custom response.

## Properties

### data

• `Optional` **data**: `unknown`

Data to return as the main payload.

---

### headers

• `Optional` **headers**: [`IHttpRequestQuery`](IHttpRequestQuery.md)

Additional response headers.

---

### options

• `Optional` **options**: `Object`

Additional options.

#### Index signature

▪ [id: `string`]: `string` \| `number` \| `boolean`

---

### statusCode

• `Optional` **statusCode**: `HttpStatusCodes`

Alternative response status code.
