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