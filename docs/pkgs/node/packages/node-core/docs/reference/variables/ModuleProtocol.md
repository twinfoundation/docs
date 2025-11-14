# Variable: ModuleProtocol

> `const` **ModuleProtocol**: `object`

The protocol types for modules.

## Type Declaration

### Local

> `readonly` **Local**: `"local"` = `"local"`

Local module (starts with . or / or file://).

### Npm

> `readonly` **Npm**: `"npm"` = `"npm"`

NPM package (starts with npm:).

### Https

> `readonly` **Https**: `"https"` = `"https"`

HTTPS URL (starts with https://).

### Http

> `readonly` **Http**: `"http"` = `"http"`

HTTP URL (starts with http://).

### Default

> `readonly` **Default**: `"default"` = `"default"`

Default/standard module resolution.
