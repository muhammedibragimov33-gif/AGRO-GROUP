# Правила базы данных

Читать при любой работе с Supabase, SQL-миграциями или переменными окружения БД.

## Текущий статус
На сайте сейчас нет БД и нет формы, которая бы её требовала — Supabase **не
подключён**. Этот файл — заготовка на случай, если позже добавится форма
обратной связи или другой функционал с хранением данных. Не подключать
Supabase самостоятельно, пока не попросят явно.

## Когда БД понадобится — структура клиентов
- `lib/supabase/client.ts` — клиент для браузера (`createBrowserClient`)
- `lib/supabase/server.ts` — клиент для Server Components/Actions
  (`createServerClient`, работа с cookies)
- Все запросы к Supabase — только через эти централизованные клиенты,
  не создавать клиент inline в компонентах

## Переменные окружения
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` — только на сервере, никогда не импортировать
  в клиентский код и не префиксовать `NEXT_PUBLIC_`
- Не коммитить `.env.local`; актуальный шаблон переменных держать в
  `.env.local.example`

## Миграции и данные
- Перед изменением схемы — предлагать SQL-миграцию отдельным блоком,
  не менять данные в проде напрямую через дашборд без миграции
- Новые таблицы — с включённым RLS и явными политиками доступа
  (например `insert` для `anon`, если это публичная форма)
- Не менять регистрационные данные компании (ИНН, ОГРН, адрес, директор) —
  они фиксированы в `CLAUDE.md`, а не в БД

## Пример: таблица заявок с контактной формы (если понадобится)
```sql
create table contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text,
  message text not null
);

alter table contact_submissions enable row level security;

create policy "Allow public insert"
  on contact_submissions for insert
  to anon
  with check (true);
```
