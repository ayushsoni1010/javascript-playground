// 1. Uppercase
type Role1 = "admin" | "user" | "guest";
// Bad practice 💩
type UppercaseRole1 = "ADMIN" | "USER" | "GUEST";
// Good practice ✅
type UppercaseRole2 = Uppercase<Role1>; // "ADMIN" | "USER" | "GUEST"

/*******************************************************************************/

// 2. Lowercase
type Role2 = "ADMIN" | "USER" | "GUEST";
// Bad practice 💩
type LowercaseRole1 = "admin" | "user" | "guest";
// Good practice ✅
type LowercaseRole2 = Lowercase<Role2>; // "admin" | "user" | "guest"

/*******************************************************************************/

// 3. Capitalize
type Role3 = "admin" | "user" | "guest";
// Bad practice 💩
type CapitalizeRole1 = "Admin" | "User" | "Guest";
// Good practice ✅
type CapitalizeRole2 = Capitalize<Role3>; // "Admin" | "User" | "Guest"

/*******************************************************************************/

// 4. Uncapitalize
type Role4 = "Admin" | "User" | "Guest";
// Bad practice 💩
type UncapitalizeRole1 = "admin" | "user" | "guest";
// Good practice ✅
type UncapitalizeRole2 = Uncapitalize<Role4>; // "admin" | "user" | "guest"

/*******************************************************************************/

// 5. Partial
interface User5 {
  name: string;
  age: number;
  password: string;
}
// Bad practice 💩
interface PartialUser1 {
  name?: string;
  age?: number;
  password?: string;
}
// Good practice ✅
type PartialUser2 = Partial<User5>;

/*******************************************************************************/

// 6. Required
interface User6 {
  name?: string;
  age?: number;
  password?: string;
}
// Bad practice 💩
interface RequiredUser1 {
  name: string;
  age: number;
  password: string;
}
// Good practice ✅
type RequiredUser2 = Required<User6>;

/*******************************************************************************/

// 7. Readonly
interface User7 {
  role: string;
}
// Bad practice 💩
const user7: User7 = { role: "ADMIN" };
user7.role = "USER";
// Good practice ✅
type ReadonlyUser = Readonly<User7>;
const user: ReadonlyUser = { role: "ADMIN" };
user7.role = "USER"; // Error: Cannot assign to 'role' because it is a read-only property.

/*******************************************************************************/

// 8. Record
interface Address {
  street: string;
  pin: number;
}
interface Addresses {
  home: Address;
  office: Address;
}
// Alternative ✅
type AddressesRecord = Record<"home" | "office", Address>;

/*******************************************************************************/

// 9. NonNullable
type Role9 = "ADMIN" | "USER" | null;
// Bad practice 💩
type NonNullableRole1 = "ADMIN" | "USER";
// Good practice ✅
type NonNullableRole2 = NonNullable<Role9>; // "ADMIN" | "USER"

/*******************************************************************************/

// 10. Pick
interface User10 {
  name: string;
  age: number;
  password: string;
}
// Bad practice 💩
interface UserPartial10 {
  name: string;
  age: number;
}
// Good practice ✅
type UserPartial2 = Pick<User10, "name" | "age">;

/*******************************************************************************/

// 11. Omit
interface User11 {
  name: string;
  age: number;
  password: string;
}
// Bad practice 💩
interface UserPartial1 {
  name: string;
  age: number;
}
// Good practice ✅
type UserPartial11 = Omit<User11, "password">;

/*******************************************************************************/

// 12. Exclude
type Role12 = "ADMIN" | "USER" | "GUEST";
// Bad practice 💩
type NonAdminRole = "USER" | "GUEST";
// Good practice ✅
type NonAdmin = Exclude<Role12, "ADMIN">; // "USER" | "GUEST"

/*******************************************************************************/

// 13. Extract
type Role13 = "ADMIN" | "USER" | "GUEST";
// Bad practice 💩
type AdminRole = "ADMIN";
// Good practice ✅
type Admin = Extract<Role13, "ADMIN">; // "ADMIN"

/*******************************************************************************/
