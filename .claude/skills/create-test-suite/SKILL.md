---
name: create-test-suite
description: Create or extend a Jest + React Testing Library test suite for a component or module. Use this skill when the user asks to write tests, add test coverage, create a test file, or cover edge cases.
argument-hint: <path-to-file-or-component>
disable-model-invocation: true
---

# Create Test Suite

Write a comprehensive Jest + RTL test suite for a given component or module, following the project's established testing patterns.

## Step 1: Analyze the Target

Read the target file (`$ARGUMENTS`) to understand:
- What props/parameters it accepts
- Which props are optional and their default values
- What interactions are possible (onClick, onChange, etc.)
- What conditional rendering logic exists

## Step 2: Plan Test Categories

Organize tests in this order, from basic to advanced:

1. **Rendering** — does it render without crashing?
2. **Content** — does it display the right text/elements?
3. **Props** — does each prop affect the output correctly?
4. **Defaults** — are default values applied when optional props are omitted?
5. **Interactions** — do callbacks fire on user actions?
6. **Edge cases** — disabled states, empty inputs, boundary values
7. **Semantics** — correct roles, accessibility attributes

## Step 3: Write the Test File

Place the test file next to the source: `{ComponentName}.test.tsx`

```tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  // Rendering
  it('renders without crashing', () => { ... });

  // Content
  it('displays the provided [prop]', () => { ... });

  // Interactions
  it('calls [callback] when [action]', () => { ... });

  // Edge cases
  it('does not call [callback] when disabled', () => { ... });

  // Defaults
  it('[prop] defaults to [value]', () => { ... });

  // Semantics
  it('renders as a [role] element', () => { ... });
});
```

## Step 4: Verify Coverage

After writing tests, check that each category has at least one test:
- Every required prop is tested
- Every optional prop has a default-value test
- Every callback prop has both a "fires" and an "edge case" test
- At least one `getByRole` test for semantic HTML

## Conventions

- Import from the component file directly (not from index)
- Use `jest.fn()` for callback mocks
- Use `screen` queries over container queries
- Use `fireEvent` for interactions
- One assertion per test when possible — keeps failures clear
- Describe block matches the component/module name

## Example

For a `Button` component with `label: string`, `onClick?: () => void`, `disabled?: boolean`:

```
renders without crashing         → render + getByText
calls onClick when clicked       → fireEvent.click + toHaveBeenCalledTimes
is disabled when disabled=true   → toBeDisabled
does not call onClick when disabled → fireEvent.click + not.toHaveBeenCalled
is not disabled by default       → not.toBeDisabled
renders as a button element      → getByRole('button')
```