# Interface: IRule

Rule defining how to extract data from an object.

## Properties

### source

> **source**: `string`

The path to the data in the document to extract.
should be in JSONPath format https://www.rfc-editor.org/rfc/rfc9535.html.

***

### target

> **target**: `string`

The target path of where to store the extracted data.
Supports simple dotted path notation, and numeric index notation.

#### Example

```ts
"path.to.data" or "path.to.data.0"
```

***

### retainPathDepth?

> `optional` **retainPathDepth**: `number`

When extracting objects, how much of the original path should be maintained in the target object.

***

### coerce?

> `optional` **coerce**: `CoerceType`

Should the data be coerced to a specific type.
