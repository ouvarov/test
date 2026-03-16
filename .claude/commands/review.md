---
name: review
description: Code review of a specified file
---

# Command: Review

## Arguments
File to review: $ARGUMENTS

## Instructions

1. Read the specified file completely
2. Check compliance with project coding standards (use skill `coding-standards`)
3. Analyze for common issues:
   - Unused variables and imports
   - Code duplication
   - Excessive cyclomatic complexity
   - Functions longer than 30 lines
4. Check for bugs — potential runtime errors, incorrect logic, unhandled edge cases
5. Check for security issues — injections, data leaks, unsafe operations (OWASP Top 10)
6. Check for performance problems — suboptimal algorithms, unnecessary allocations, memory leaks
7. Verify type correctness — usage of `any`, missing types, incorrect generics

## Response format

For each finding, specify:
- **File and line** — `file.ts:42`
- **Severity** — 🔴 critical / 🟡 important / 🔵 suggestion
- **Description** — what is wrong and why
- **Fix** — a concrete example of how to fix it

At the end, provide an overall code quality assessment and a brief summary.