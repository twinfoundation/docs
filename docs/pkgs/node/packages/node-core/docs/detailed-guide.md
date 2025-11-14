# TWIN Node - Detailed Documentation

## Overview

TWIN Node provides the foundational components for running TWIN nodes, including dynamic extension loading, protocol-based module resolution, and lifecycle management.

## Protocol-Based Extension Loading

The TWIN Node supports dynamic extension loading from multiple sources:

### Local Files

Load extensions from your filesystem:

```bash
TWIN_EXTENSIONS="./my-extension.mjs"
```

### NPM Packages

Automatically install and load npm packages:

```bash
TWIN_EXTENSIONS="npm:@twin.org/package"
```

### HTTPS URLs

Download and cache remote extensions:

```bash
TWIN_EXTENSIONS="https://example.com/extension.mjs"
```

## Extension Lifecycle Hooks

Extensions can implement lifecycle hooks to customize node behavior at different stages:

- **`extensionInitialise`** - Called before engine initialization
- **`extensionInitialiseEngine`** - Called during engine initialization
- **`extensionInitialiseEngineServer`** - Called during server initialization
- **`extensionShutdown`** - Called during graceful shutdown

### Example Extension

```javascript
// my-extension.mjs
export function extensionInitialise() {
  console.log('Extension initializing...');
}

export function extensionInitialiseEngine(engine) {
  console.log('Configuring engine...');
  // Add custom components, routes, etc.
}

export function extensionInitialiseEngineServer(server) {
  console.log('Configuring server...');
  // Add middleware, routes, etc.
}

export function extensionShutdown() {
  console.log('Extension shutting down...');
  // Cleanup resources
}
```

## Configuration Options

### Cache Management

- `TWIN_EXTENSIONS_CACHE_TTL_HOURS` - TTL for HTTPS extensions cache (default: 24)
- `TWIN_EXTENSIONS_FORCE_REFRESH` - Force refresh all cached extensions (default: false)
- `TWIN_EXTENSIONS_CACHE_DIRECTORY` - Custom cache directory (default: ".tmp")

### Security

- `TWIN_EXTENSIONS_MAX_SIZE_MB` - Maximum size for HTTPS downloads (default: 10)
- `TWIN_EXTENSIONS_CLEAR_CACHE` - Clear cache on startup (default: false)

## API Reference

### Core Functions

#### `overrideModuleImport(executionDirectory, envVars)`

Sets up protocol-based module resolution for extensions.

#### `buildConfiguration(options)`

Builds node configuration from environment variables and options.

#### `start(options)`

Starts the TWIN node with the specified configuration.

### Utility Functions

#### `parseModuleProtocol(moduleName)`

Parses module name to determine protocol type (npm, https, local, etc.).

#### `handleNpmProtocol(packageName, executionDirectory, cacheDirectory)`

Handles installation and resolution of npm packages.

#### `handleHttpsProtocol(url, executionDirectory, maxSizeMb, cacheDirectory, ttlHours, forceRefresh)`

Handles download and caching of HTTPS extensions.

## Security Considerations

- **HTTPS Only**: Remote extensions must use HTTPS protocol
- **Size Limits**: Downloads are limited by `TWIN_EXTENSIONS_MAX_SIZE_MB`
- **Cache TTL**: Extensions are automatically refreshed based on TTL
- **Security Warnings**: Warnings are displayed when loading remote extensions

## Troubleshooting

### Common Issues

1. **Extension not found**: Check that the path/URL is correct and accessible
2. **Cache issues**: Use `TWIN_EXTENSIONS_FORCE_REFRESH=true` to force refresh
3. **Size limit exceeded**: Increase `TWIN_EXTENSIONS_MAX_SIZE_MB` if needed
4. **Network issues**: Ensure HTTPS URLs are accessible and not blocked by firewall

### Debug Mode

Set `NODE_ENV=development` for additional debug output during extension loading.
