# @gtsc/vault-models

## Interfaces

- [IVaultConnector](interfaces/IVaultConnector.md)

## Type Aliases

### VaultEncryptionType

Ƭ **VaultEncryptionType**: `"ChaCha20Poly1305"`

The types of encryption that can be performed in the vault.

---

### VaultKeyType

Ƭ **VaultKeyType**: `"Ed25519"`

The types of keys that can be created in the vault.

## Variables

### VaultConnectorFactory

• `Const` **VaultConnectorFactory**: `Factory`\<[`IVaultConnector`](interfaces/IVaultConnector.md)\>

Factory for creating vault connectors.
