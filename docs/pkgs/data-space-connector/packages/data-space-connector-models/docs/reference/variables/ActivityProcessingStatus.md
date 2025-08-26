# Variable: ActivityProcessingStatus

> `const` **ActivityProcessingStatus**: `object`

Activity processing statuses.

## Type Declaration

### Pending

> `readonly` **Pending**: `"pending"` = `"pending"`

Pending: Activity Processing has not started yet.

### Running

> `readonly` **Running**: `"running"` = `"running"`

Running Activity processing is running.

### Completed

> `readonly` **Completed**: `"completed"` = `"completed"`

Completed: Activity processing completed without error.

### Error

> `readonly` **Error**: `"error"` = `"error"`

Error: Activity processing cannot be performed and marked as in error. (Depends on application).

### Registering

> `readonly` **Registering**: `"registering"` = `"registering"`

Transient state. The background tasks associated with the activity are still being registered.
