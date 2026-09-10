const links = [
  { href: "#ledger", label: "Реквизиты" },
  { href: "#activities", label: "Направления" },
  { href: "#about", label: "О компании" },
  { href: "#contacts", label: "Контакты" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-parchment/16 bg-soil/92 backdrop-blur-sm">
      <div className="mx-auto flex max-w-container items-center justify-between px-8 py-[18px]">
        <a href="#top" className="flex items-center gap-2.5 font-serif text-[1.15rem] font-semibold text-parchment no-underline">
          <svg viewBox="0 0 24 24" fill="none" className="h-[26px] w-[26px] shrink-0">
            <path
              d="M12 2C9 6 8 9 8 12c0 3.5 1.8 6 4 8 2.2-2 4-4.5 4-8 0-3-1-6-4-10Z"
              stroke="#D9A227"
              strokeWidth={1.4}
            />
            <path
              d="M12 4.5c-1.4 2.6-2.1 4.7-2.1 7 0 2.6 1.2 4.7 2.1 6"
              stroke="#D9A227"
              strokeWidth={1}
            />
          </svg>
          Агро-Групп
        </a>
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.92rem] tracking-wide text-parchment-2 no-underline transition-colors hover:text-wheat-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
