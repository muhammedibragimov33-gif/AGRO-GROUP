import { Button } from "@/components/ui/Button";
import { WheatField } from "@/components/sections/WheatField";

export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-soil via-soil-2 to-soil-2 pt-24 text-parchment"
    >
      <div className="relative z-10 mx-auto max-w-container px-8 pb-16">
        <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-wheat/40 px-3.5 py-1.5 font-mono text-[0.8rem] tracking-wide text-wheat-soft before:h-1.5 before:w-1.5 before:rounded-full before:bg-wheat before:content-['']">
          ОКВЭД 01.11 · выращивание зерновых культур
        </span>
        <h1 className="max-w-[15ch] text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.04] text-parchment">
          Земля работает, <em className="font-normal italic text-wheat-soft">пока вы спите</em>
        </h1>
        <p className="mt-6 max-w-[46ch] text-[1.1rem] font-light text-parchment/78">
          Агро-Групп — хозяйство полного цикла в Чеченской Республике: от посевной до
          прилавка. Зерновые, сады, животноводство и оптовая торговля — под одной крышей
          с 2015 года.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#activities" variant="primary">
            Направления работы
          </Button>
          <Button href="mailto:spk-900@mail.ru" variant="ghost">
            Связаться
          </Button>
        </div>
      </div>
      <WheatField />
    </header>
  );
}
