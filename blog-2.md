# How Pick and Omit Utility Types Keep TypeScript Code DRY

## Introduction

In TypeScript, creating multiple variations of the same interface can lead to repetitive code. To solve this problem, TypeScript provides utility types like `Pick` and `Omit`. These utility types help developers create specialized "slices" of a master interface without rewriting properties manually.

Using these utility types helps maintain the DRY (Don't Repeat Yourself) principle and makes code easier to maintain.

---

## The Problem Without Pick and Omit

Suppose we have a master interface:

```ts
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}
```

Now imagine we need another type that only contains `id`, `name`, and `email`.

One option is to create another interface manually:

```ts
interface PublicUser {
    id: number;
    name: string;
    email: string;
}
```

This works, but it repeats code unnecessarily. If the `User` interface changes later, we must also update `PublicUser`, which increases maintenance complexity and violates the DRY principle.

---

## Using Pick Utility Type

The `Pick` utility type allows us to select only specific properties from an existing interface.

Example:

```ts
type PublicUser = Pick<User, "id" | "name" | "email">;
```

This creates a new type containing only:
- `id`
- `name`
- `email`

without rewriting them manually.

---

## Using Omit Utility Type

The `Omit` utility type creates a new type by removing specific properties from an existing interface.

Example:

```ts
type SafeUser = Omit<User, "password">;
```

This creates a new type containing every property except `password`.

---

## Benefits of Pick and Omit

Using `Pick` and `Omit` provides several advantages:

- Reduces code duplication
- Keeps code DRY
- Makes interfaces easier to maintain
- Creates reusable type structures
- Automatically reflects updates from the master interface

These utility types are especially useful in large-scale applications where multiple versions of the same data structure are needed.

---

## Conclusion

`Pick` and `Omit` are powerful TypeScript utility types that help developers create reusable and maintainable type structures. Instead of creating multiple duplicate interfaces, developers can derive smaller or modified versions from a master interface. This approach follows the DRY principle and improves code scalability and readability.