import { StatCard } from "@/components/ui/StatCard";

const stats = [
  { num: "11", desc: "лет на рынке, с 2015 года" },
  { num: "18", desc: "видов деятельности по ОКВЭД" },
  { num: "120", desc: "человек в команде" },
  { num: "100%", desc: "доля в собственности учредителя" },
];

export function About() {
  return (
    <section id="about" className="bg-parchment-2 py-22">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-14 px-8 md:grid-cols-2">
        <div>
          <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">
            Хозяйство, где решения принимают быстро
          </h2>
          <p className="mt-4 text-ink/80">
            Команда из 120 человек ведёт весь цикл сама — от посевной до отгрузки
            оптовому покупателю: полеводы, садоводы, животноводы и логисты работают
            на общий результат.
          </p>
          <p className="mt-4 text-ink/80">
            Мы работаем на земле Чеченской Республики с 2015 года и продолжаем
            расширять список направлений — от зерна и молока до строительства
            собственных объектов.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {stats.map((s) => (
            <StatCard key={s.desc} num={s.num} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
