#!/bin/bash
set -e

TARGET=${1:-.}

echo "Reviewing: $TARGET"

claude -p "Review the code in '$TARGET' for:
- Code quality issues
- Potential bugs
- Security vulnerabilities
Provide specific file:line references." \
  --print --max-turns 10