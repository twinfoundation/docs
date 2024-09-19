# Variable: AuditableItemStreamVerificationState

> `const` **AuditableItemStreamVerificationState**: `object`

The state of the verification.

## Type declaration

### Ok

> `readonly` **Ok**: `"ok"` = `"ok"`

OK.

### HashMismatch

> `readonly` **HashMismatch**: `"hashMismatch"` = `"hashMismatch"`

The stored hash does not matched the calculated one.

### SignatureNotVerified

> `readonly` **SignatureNotVerified**: `"signatureNotVerified"` = `"signatureNotVerified"`

The signature verification failed.

### CredentialRevoked

> `readonly` **CredentialRevoked**: `"credentialRevoked"` = `"credentialRevoked"`

The credential in the immutable storage was revoked.

### ImmutableHashMismatch

> `readonly` **ImmutableHashMismatch**: `"immutableHashMismatch"` = `"immutableHashMismatch"`

Immutable hash mismatch.

### ImmutableSignatureMismatch

> `readonly` **ImmutableSignatureMismatch**: `"immutableSignatureMismatch"` = `"immutableSignatureMismatch"`

Immutable signature mismatch.

### IndexMismatch

> `readonly` **IndexMismatch**: `"indexMismatch"` = `"indexMismatch"`

Index mismatch.
