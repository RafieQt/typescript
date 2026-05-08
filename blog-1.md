# Why is `any` Called a "Type Safety Hole" and Why is `unknown` Safer?

## Introduction

In TypeScript, the main goal is to catch errors before runtime. But when we use the `any` type, we can use methods that are not applicable for that type. `unknown` also works similarly to `any` and accepts any value, but we cannot apply methods directly. Instead, we have to verify the type first and then use methods for that specific type.

---

## Example for `any`

```ts
let value: any = "Hello";
value.toFixed(2);
```

Here, even though `toFixed()` is only applicable for number types, TypeScript is still letting us use it for a string. That's why `any` is called a "type safety hole".

---

## Example for `unknown`

```ts
let value: unknown = "Hello";

if(typeof value === "string"){
    console.log(value.toUpperCase());
}
```

Here, we have to verify the type first before applying any method.

---

## Type Narrowing

Type narrowing means narrowing down a broad type into a more specific type.

Example:

```ts
let value: unknown = "TypeScript";

if(typeof value === "string"){
    // inside this block:
    // TypeScript now knows value is string
    console.log(value.toUpperCase());
}
```

Here, initially the type of `value` was `unknown`, but later we narrowed it down to a `string` type.

---

## Conclusion

The `any` type removes TypeScript's safety checking, which can lead to runtime errors. On the other hand, `unknown` is safer because it forces developers to verify the type before using it. Type narrowing helps TypeScript understand the exact type during runtime checks, making the code safer and more reliable.