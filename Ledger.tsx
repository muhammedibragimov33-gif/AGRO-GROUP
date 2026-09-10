import { Fragment } from "react";

const registry = [
  { term: "Наименование", value: "ООО «Агро-Групп»" },
  { term: "ИНН / КПП", value: "2001001770 / 200101001", mono: true },
  { term: "ОГРН", value: "1152036002832", mono: true },
  { term: "Дата регистрации", value: "08.04.2015" },
  { term: "Юр. адрес", value: "г. Грозный, ул. Мира, д. 64, офис 01/07" },
  { term: "Директор", value: "Мухаммед Ибрагимов" },
];

export function Ledger() {
  return (
    <section id="ledger" className="border-b border-ink/14 bg-parchment py-22">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-14 px-8 md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex justify-center">
          <svg viewBox="0 0 200 200" className="h-[230px] w-[230px]">
            <circle cx="100" cy="100" r="94" fill="none" stroke="#A34A2E" strokeWidth={2} />
            <circle cx="100" cy="100" r="82" fill="none" stroke="#A34A2E" strokeWidth={1} />
            <path id="circlePath" d="M 100,18 A 82,82 0 1 1 99.9,18" fill="none" />
            <text
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9.2"
              fill="#A34A2E"
              letterSpacing="2"
            >
              <textPath href="#circlePath" startOffset="2%">
                ОГРН 1152036002832 · ИНН 2001001770 · С 2015 ГОДА ·
              </textPath>
            </text>
            <g transform="translate(100,100)">
              <path
                d="M0 -38C-16 -14 -20 4 -20 20c0 18 9 30 20 40 11 -10 20 -22 20 -40 0 -16 -4 -34 -20 -58Z"
                fill="none"
                stroke="#A34A2E"
                strokeWidth={2}
              />
              <path
                d="M0 -30c-7 13 -10 24 -10 35 0 13 4.5 23 10 30"
                fill="none"
                stroke="#A34A2E"
                strokeWidth={1}
              />
            </g>
          </svg>
        </div>
        <div>
          <span className="mb-3.5 block font-mono text-[0.78rem] uppercase tracking-[0.08em] text-clay">
            Реестровая запись
          </span>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">
            Официально зарегистрированное хозяйство
          </h2>
          <p className="mt-4 max-w-[60ch] text-ink/80">
            Компания работает как юридическое лицо с 2015 года и внесена в реестр
            субъектов МСП как микропредприятие. Все данные — из открытых
            государственных реестров.
          </p>
          <dl className="mt-8 grid grid-cols-[max-content_1fr] gap-x-6 gap-y-3">
            {registry.map((row) => (
              <Fragment key={row.term}>
                <dt className="font-mono text-[0.78rem] uppercase tracking-wide text-ink/50">
                  {row.term}
                </dt>
                <dd className={row.mono ? "font-mono" : ""}>{row.value}</dd>
              </Fragment>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
