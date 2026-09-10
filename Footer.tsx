export function Footer() {
  return (
    <footer id="contacts" className="bg-soil px-8 py-16 text-parchment">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2.5 font-serif text-[1.1rem] font-semibold">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path
                  d="M12 2C9 6 8 9 8 12c0 3.5 1.8 6 4 8 2.2-2 4-4.5 4-8 0-3-1-6-4-10Z"
                  stroke="#D9A227"
                  strokeWidth={1.4}
                />
              </svg>
              Агро-Групп
            </div>
            <dl>
              <dt className="mb-1 font-mono text-[0.72rem] uppercase tracking-wide text-sage">
                Адрес
              </dt>
              <dd className="mb-3.5 max-w-[32ch]">
                364024, Чеченская Республика, г. Грозный, ул. Мира (Ахматовский р-н),
                д. 64, офис 01/07
              </dd>
              <dt className="mb-1 font-mono text-[0.72rem] uppercase tracking-wide text-sage">
                Почта
              </dt>
              <dd className="mb-1">
                <a href="mailto:spk-900@mail.ru" className="hover:text-wheat-soft">
                  spk-900@mail.ru
                </a>
              </dd>
              <dd>
                <a href="mailto:comp.agro@mail.ru" className="hover:text-wheat-soft">
                  comp.agro@mail.ru
                </a>
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt className="mb-1 font-mono text-[0.72rem] uppercase tracking-wide text-sage">
                Реквизиты
              </dt>
              <dd className="font-mono">
                ИНН 2001001770
                <br />
                ОГРН 1152036002832
              </dd>
            </dl>
          </div>
          <div>
            <dl>
              <dt className="mb-1 font-mono text-[0.72rem] uppercase tracking-wide text-sage">
                Директор
              </dt>
              <dd>Мухаммед Ибрагимов</dd>
            </dl>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-3 text-[0.78rem] text-parchment/40">
          <span>© 2026 ООО «Агро-Групп»</span>
          <span>Данные — из ЕГРЮЛ</span>
        </div>
      </div>
    </footer>
  );
}
