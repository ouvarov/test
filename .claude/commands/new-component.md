---
name: new-component
description: Создание нового React-компонента со стилями и тестами
---

Создай новый React-компонент с именем `$ARGUMENTS`.

Структура файлов:
1. `src/components/$ARGUMENTS/$ARGUMENTS.tsx` — сам компонент
2. `src/components/$ARGUMENTS/$ARGUMENTS.module.css` — стили (CSS Modules)
3. `src/components/$ARGUMENTS/$ARGUMENTS.test.tsx` — тесты (Jest + React Testing Library)
4. `src/components/$ARGUMENTS/index.ts` — реэкспорт

Требования:
- Компонент должен быть функциональным (FC) с типизированными пропсами
- Интерфейс пропсов назвать `${ARGUMENTS}Props`
- Экспорт компонента — именованный (не default)
- В тестах: рендер компонента, проверка наличия в DOM, проверка переданных пропсов
- Именование файлов в kebab-case, компонента в PascalCase
- Стили подключить через CSS Modules
