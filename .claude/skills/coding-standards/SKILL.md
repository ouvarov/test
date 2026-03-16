---
name: coding-standards
description: Project coding standards and naming conventions for TypeScript, SCSS/CSS, and React. Apply these rules whenever writing or reviewing code in this project — including file naming, variable naming, typing, and style rules.
user-invocable: false
---

# Coding Standards

Conventions and rules for this project. Claude should follow these automatically when writing or modifying code.

## Naming Conventions

### TypeScript / JavaScript — camelCase everywhere

- **Files**: `userProfile.ts`, `authService.ts`, `formatDate.ts`
- **Variables and functions**: `const userName`, `function getUserById()`
- **React components**: PascalCase exception — `UserProfile.tsx`, `const UserProfile: React.FC`
- **Interfaces and types**: PascalCase — `interface UserProps`, `type ApiResponse`

### SCSS / CSS — snake_case everywhere

- **Files**: `user_profile.scss`, `auth_form.css`
- **Classes**: `.user_card`, `.nav_item_active`
- **Variables**: `$primary_color`, `$font_size_large`
- **Mixins**: `@mixin flex_center`, `@mixin responsive_grid`

## Strict Typing

- **`any` is forbidden** — never use `any` in any context
- Always use explicit, strict types
- Prefer specific types (`string`, `number`, custom interfaces) over loose ones
- For unknown data (e.g., API responses), use `unknown` and narrow with type guards

**Example — correct:**
```ts
function parseResponse(data: unknown): User {
  // validate and narrow type
}
```

**Example — forbidden:**
```ts
function parseResponse(data: any): any { // NEVER do this
}
```

## CSS/SCSS Rules

- **`!important` is forbidden** — solve specificity issues through proper selector structure, not brute force
- If a style isn't applying, refactor selectors or increase specificity naturally

## Summary Table

| Context | Convention | Example |
|---------|-----------|---------|
| TS/JS files | camelCase | `userService.ts` |
| TS/JS variables, functions | camelCase | `getUserById()` |
| React components, interfaces | PascalCase | `UserProfile.tsx` |
| SCSS/CSS files | snake_case | `user_profile.scss` |
| CSS classes, variables, mixins | snake_case | `.nav_item`, `$primary_color` |
| TypeScript typing | strict, no `any` | `unknown` + type guards |
| CSS specificity | no `!important` | refactor selectors |