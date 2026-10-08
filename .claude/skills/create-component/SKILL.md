---
name: create-component
description: Create a new React component with styles, tests, and barrel export following the project's established patterns. Use this skill whenever the user asks to create a component, add a UI element, scaffold a new widget, or build any React component — even if they don't say "component" explicitly.
argument-hint: <ComponentName>
disable-model-invocation: true
---

# Create React Component

Create a new React component following the project's established file structure and conventions, as seen in existing components like `Button`.

## Component Structure

Every component lives in its own directory under `src/components/` with exactly four files:

```
src/components/{ComponentName}/
├── {ComponentName}.tsx            # Component + Props interface
├── {ComponentName}.module.css     # CSS Module styles
├── {ComponentName}.test.tsx       # Tests with RTL
└── index.ts                       # Barrel re-export
```

## Step-by-Step Process

### 1. Create the component directory

```bash
mkdir -p src/components/$ARGUMENTS
```

### 2. Create {ComponentName}.tsx

```tsx
import React from 'react';
import styles from './{ComponentName}.module.css';

export interface {ComponentName}Props {
  // Define props relevant to the component's purpose
  // Use camelCase for prop names
  // Mark optional props with `?`
}

export const {ComponentName}: React.FC<{ComponentName}Props> = ({ ...props }) => {
  return (
    <div className={styles.container}>
      {/* Component content */}
    </div>
  );
};
```

Conventions:
- Export the Props interface alongside the component (both named exports)
- Use `React.FC<Props>` type annotation
- Destructure props in the function signature
- Use `styles.container` as the root CSS class

### 3. Create {ComponentName}.module.css

```css
.container {
  /* Root element styles */
}
```

Conventions:
- Always use `.container` as the root class name
- Add hover/focus/disabled states as needed
- Keep styles scoped — CSS Modules handle isolation

### 4. Create {ComponentName}.test.tsx

```tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { {ComponentName} } from './{ComponentName}';

describe('{ComponentName}', () => {
  it('renders without crashing', () => {
    render(<{ComponentName} /* required props */ />);
    // Assert something visible is in the document
  });

  // Add interaction tests if the component has callbacks (onClick, onChange, etc.)
  // Add edge case tests for conditional rendering or disabled states
});
```

Conventions:
- Import from the component file directly (not from index)
- Always include a "renders without crashing" test
- Use `screen` queries and `fireEvent` for interactions
- Test each interactive prop (onClick, onChange, etc.)

### 5. Create index.ts

```ts
export { {ComponentName} } from './{ComponentName}';
export type { {ComponentName}Props } from './{ComponentName}';
```

This barrel file re-exports both the component and its Props type for clean imports elsewhere.

## Naming Conventions

- **Directory and files**: PascalCase matching the component name (`Card/Card.tsx`)
- **Props interface**: `{ComponentName}Props` (PascalCase + "Props" suffix)
- **CSS classes**: camelCase (`.container`, `.titleText`)
- **Prop names**: camelCase (`onClick`, `isDisabled`)

## Example

For `$ARGUMENTS` = `Card`:

```
src/components/Card/
├── Card.tsx            → exports Card and CardProps
├── Card.module.css     → .container root class
├── Card.test.tsx       → describe('Card', ...)
└── index.ts            → re-exports Card + CardProps
```