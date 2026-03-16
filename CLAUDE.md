# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Учебный проект для освоения возможностей Claude Code: настройка окружения, написание skills и commands, работа с хуками, MCP-серверами и агентами. Проект используется в рамках курса Claude Code и постепенно наращивается от модуля к модулю.

## Tech Stack

- **Language:** JavaScript/TypeScript (Node.js)
- **Package manager:** npm
- **Testing:** Jest
- **Linting:** ESLint + Prettier
- **IDE:** JetBrains (WebStorm/IntelliJ)

## Common Commands

```bash
npm install          # установка зависимостей
npm test             # запуск всех тестов
npm run test:watch   # тесты в watch-режиме
npm run lint         # проверка кода линтером
npm run lint:fix     # автоисправление линтером
npm run build        # сборка проекта
npm run dev          # запуск dev-сервера
```

## Conventions

- **Naming conventions**: см. skill `coding-standards` — единый источник правил именования для TS/JS, CSS/SCSS, React
- Структура: исходный код в `src/`, тесты рядом с файлами (`*.test.ts`)
- Коммуникация с пользователем на русском языке, если пользователь пишет по-русски
- Секреты и ключи исключены через `.claudeignore` — никогда не коммитить credentials

## Multi-Agent Patterns for This Project

### Pattern: Parallel Feature Development

**Use when**: Implementing independent features simultaneously

**Setup**:
```bash
git worktree add ../education-feature-a feature-a
git worktree add ../education-feature-b feature-b
```

**Workflow**:
1. Create branches and worktrees
2. Launch Claude in each worktree with independent task
3. Review completed work
4. Merge branches
5. Clean up worktrees

### Pattern: Implementation + Review

**Use when**: Want quality assurance on generated code

**Workflow**:
1. First agent implements feature
2. Second agent reviews and suggests improvements
3. First agent applies feedback