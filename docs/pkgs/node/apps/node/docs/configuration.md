# @twin.org/node - Configuration

## Extension Loading

The TWIN Node supports loading extensions dynamically to extend its functionality. Extensions can be loaded from multiple sources using protocol-based syntax.

### Extension Loading Syntax

Extensions are configured via the `TWIN_EXTENSIONS` environment variable. Multiple extensions can be specified as a comma-separated list.

#### Local File Extensions

Load extensions from the local filesystem:

```bash
# Relative path
TWIN_EXTENSIONS="./my-extension.mjs"

# Absolute path
TWIN_EXTENSIONS="/path/to/extension.mjs"
```

#### NPM Package Extensions

Load extensions from npm packages. The package will be automatically downloaded and installed if not already cached:

```bash
# Basic npm package
TWIN_EXTENSIONS="npm:@twin.org/identity-management-service"

# Scoped package
TWIN_EXTENSIONS="npm:@org/custom-extension"
```

**Note:** Version pinning (e.g., `npm:@twin.org/pkg@1.2.3`) is planned for a future release. Currently, the latest version is installed.

#### HTTPS URL Extensions

Load extensions from remote HTTPS URLs:

```bash
TWIN_EXTENSIONS="https://example.twin.org/extensions/my-module.mjs"
```

**⚠️ SECURITY WARNING:** Loading code from HTTPS URLs introduces security risks. Only load extensions from trusted sources that you control or verify.

Security features:

- Only HTTPS is allowed (HTTP is rejected)
- Default 10 MB size limit to prevent DoS attacks
- Downloaded modules are cached locally
- Security warning is displayed when loading

#### Multiple Extensions

Load multiple extensions from different sources:

```bash
TWIN_EXTENSIONS="@twin.org/identity-management-service,npm:@twin.org/custom-service,./local-extension.mjs,https://example.com/remote.mjs"
```

### Extension Configuration Options

#### Maximum Download Size

Configure the maximum size (in MB) for HTTPS extension downloads:

```bash
TWIN_EXTENSIONS_MAX_SIZE_MB=10  # Default is 10 MB
```

#### Cache Management

By default, downloaded extensions are cached in `.tmp/extensions/` directory to speed up subsequent startups. To clear the cache on each startup:

```bash
TWIN_EXTENSIONS_CLEAR_CACHE=true  # Default is false
```

#### Custom Cache Directory

You can configure a custom directory for extension caching:

```bash
TWIN_EXTENSIONS_CACHE_DIRECTORY="cache"  # Default is ".tmp"
```

This allows you to:

- Use a dedicated partition with more space
- Separate cache by environment (dev/staging/prod)
- Follow corporate storage policies
- Create persistent cache directories for better performance

### Extension API

Extensions must export specific lifecycle methods to integrate with the node:

#### `extensionInitialise(envVars, nodeEngineConfig)`

Called during configuration phase. Allows the extension to modify environment variables and engine configuration.

```typescript
export async function extensionInitialise(
  envVars: INodeEnvironmentVariables,
  nodeEngineConfig: INodeEngineConfig
): Promise<void> {
  // Modify configuration here
}
```

#### `extensionInitialiseEngine(engineCore)`

Called after the engine is created but before the server starts.

```typescript
export async function extensionInitialiseEngine(engineCore: IEngineCore): Promise<void> {
  // Register components, set up services, etc.
}
```

#### `extensionInitialiseEngineServer(engineCore, engineServer)`

Called after the engine server is created but before it starts listening.

```typescript
export async function extensionInitialiseEngineServer(
  engineCore: IEngineCore,
  engineServer: IEngineServer
): Promise<void> {
  // Add routes, configure server, etc.
}
```

#### `extensionShutdown()`

Called when the node is shutting down. Clean up resources here.

```typescript
export async function extensionShutdown(): Promise<void> {
  // Clean up resources
}
```

### Example Extension

```typescript
// my-extension.mjs
export async function extensionInitialise(envVars, nodeEngineConfig) {
  console.log('Extension initializing with config');
}

export async function extensionInitialiseEngine(engineCore) {
  engineCore.logInfo('Custom extension loaded');
}

export async function extensionInitialiseEngineServer(engineCore, engineServer) {
  // Add custom routes
  engineServer.addRestRoute({
    path: '/custom/endpoint',
    method: 'GET',
    handler: async () => ({ body: { message: 'Hello from extension!' } })
  });
}

export async function extensionShutdown() {
  console.log('Extension shutting down');
}
```

### Cache Directory Structure

Downloaded extensions are stored in:

```text
<execution-directory>/<cache-directory>/extensions/
  ├── npm/                      # NPM packages
  │   └── node_modules/
  │       └── @twin.org/...
  └── https/                    # HTTPS downloads
      └── <hashed-filename>.mjs
```

Where `<cache-directory>` is:

- `.tmp` by default
- Configurable via `TWIN_EXTENSIONS_CACHE_DIRECTORY`

Examples:

- Default: `./.tmp/extensions/`
- Custom: `./cache/extensions/` (if `TWIN_EXTENSIONS_CACHE_DIRECTORY="cache"`)
- Absolute: `/var/cache/twin-node/extensions/` (if `TWIN_EXTENSIONS_CACHE_DIRECTORY="/var/cache/twin-node"`)

### Security Best Practices

1. **Prefer npm: protocol** over https: for third-party extensions (npm has package verification and malware scanning)
2. **Use local files** (`./extension.mjs`) for maximum security and control
3. **Verify HTTPS sources** before using - only load from domains you trust
4. **Review extension code** before deployment, especially for HTTPS sources
5. **Monitor cache directory** - review what's been downloaded to `.tmp/extensions/`
6. **Use environment-specific configuration** - different extensions for dev/staging/prod

### Troubleshooting

#### Extension fails to load

- Check that npm is installed and accessible in PATH (required for npm: protocol)
- Verify the extension file/URL is accessible
- Check `.tmp/extensions/` cache for partially downloaded files
- Review node logs for specific error messages

#### Clear extension cache manually

```bash
rm -rf .tmp/extensions
```

#### NPM package not found

- Verify the package name is correct
- Check network connectivity
- Ensure npm registry is accessible
