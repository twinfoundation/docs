# Variable: NodeFeatures

> `const` **NodeFeatures**: `object`

The features that can be enabled on the node.

## Type Declaration

### NodeId

> `readonly` **NodeId**: `"node-identity"` = `"node-identity"`

NodeId - generates an identity for the node if not provided in config.

### NodeAdminUser

> `readonly` **NodeAdminUser**: `"node-admin-user"` = `"node-admin-user"`

NodeAdminUser - generates an admin user for the node if not provided in config.

### NodeWallet

> `readonly` **NodeWallet**: `"node-wallet"` = `"node-wallet"`

NodeWallet - generates wallets for any identities that need them.
