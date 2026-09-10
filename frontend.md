# Правила фронтенда

Читать при любой работе с `app/`, `components/`, стилями или версткой.

## Структура
- `app/` — роуты (App Router); сайт одностраничный, всё на `app/page.tsx`
  + секции якорями (`#ledger`, `#activities`, `#about`, `#contacts`)
- `components/sections/` — секции страницы (Nav, Hero, WheatField, Ledger,
  Activities, About, Footer)
- `components/ui/` — мелкие переиспользуемые элементы (Button, StatCard, ActivityCard)
- `lib/` — утилиты
- `public/` — статика, favicon

## Дизайн-система (взять из `reference/agro-grupp-site.html` один в один)
Цвета (заведены в `app/globals.css` как токены Tailwind v4 `@theme`):
- soil `#1B1712`, soil-2 `#241E17` (тёмный фон hero/footer)
- wheat `#D9A227`, wheat-soft `#E9C15E` (акцент)
- sage `#7C8B5B`
- parchment `#F2E9D8`, parchment-2 `#E8DCC4` (светлый фон)
- clay `#A34A2E`

Общая ширина контента секций — токен `max-w-container` (1120px), не хардкодить
`max-w-[1120px]` заново.

Шрифты (Google Fonts, подключены в `app/layout.tsx` через `next/font/google`):
- заголовки — `Spectral` (переменная `--font-fraunces`; заменяет Fraunces —
  тот не поддерживает кириллицу)
- текст — `Manrope` (переменная `--font-work-sans`; заменяет Work Sans —
  та же причина)
- реквизиты/код — `JetBrains Mono` (переменная `--font-jetbrains-mono`)

Хекс-коды и px-значения из макета переносить в токены, не хардкодить в JSX
повторно.

## Правила кода
- TypeScript strict, без `any`
- Server Components по умолчанию, `"use client"` только там, где есть
  интерактивность (сейчас — только `WheatField.tsx`)
- Никакого `Math.random()`/`Date.now()` и т.п. внутри тела рендер-функции
  компонента (React 19 требует чистоты рендера) — если нужна псевдослучайность,
  генерировать детерминированно вне рендера (см. `WheatField.tsx`)
- Стилизация — только Tailwind-классы на основе токенов дизайн-системы выше
- Один длинный `page.tsx` — нормально для одностраничника, но секции выносить
  в отдельные компоненты для читаемости
- Семантика: `dt`/`dd` всегда внутри `dl`, заголовки — `h1`/`h2`/`h3` по иерархии
- Именование: компоненты `PascalCase.tsx`, утилиты `camelCase.ts`

## Проверка перед тем как считать задачу готовой
- `npm run lint` — обязателен, без ошибок
- `npx tsc --noEmit` — обязателен, без ошибок
  (полный `npm run build` в песочнице без сети до fonts.googleapis.com не
  проходит — это ограничение среды, не индикатор реальной проблемы)
