#!/bin/bash
set -e

echo "Running Claude to fix lint errors..."

claude -p "Find and fix all linting errors in the codebase.
Apply our coding standards from CLAUDE.md.
Commit each fix separately with descriptive messages." \
  --print --max-turns 20 > /tmp/claude-lint-output.txt

echo "Done. Output:"
cat /tmp/claude-lint-output.txt