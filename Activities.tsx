import { ActivityCard } from "@/components/ui/ActivityCard";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
} as const;

const activities = [
  {
    code: "ОКВЭД 01.11 / 01.13",
    title: "Растениеводство",
    description: "Зерновые, зернобобовые и масличные культуры, овощи, бахчевые и картофель.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2C9 6 8 9 8 12c0 3.5 1.8 6 4 8 2.2-2 4-4.5 4-8 0-3-1-6-4-10Z" />
        <path d="M12 4.5c-1.4 2.6-2.1 4.7-2.1 7 0 2.6 1.2 4.7 2.1 6" />
      </svg>
    ),
  },
  {
    code: "ОКВЭД 01.25 / 01.30",
    title: "Сады и питомники",
    description: "Плодовые деревья, кустарники, орехи и выращивание рассады.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v11" />
        <path d="M12 8c-3-1-5-4-5-4s0 4 3 6c1 .7 2 .8 2 .8" />
        <path d="M12 11c3-1 5-4 5-4s0 4-3 6c-1 .7-2 .8-2 .8" />
        <circle cx="12" cy="19" r="2.6" />
      </svg>
    ),
  },
  {
    code: "ОКВЭД 01.41 / 01.43",
    title: "Животноводство",
    description: "Крупный рогатый скот, овцы, козы и лошади; производство сырого молока.",
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="14" rx="7" ry="5" />
        <circle cx="7" cy="10" r="2" />
        <path d="M9 9.5c0-1.5 1-2.5 2-2.5" />
      </svg>
    ),
  },
  {
    code: "ОКВЭД 46.21 / 46.31 / 46.32",
    title: "Оптовая торговля",
    description: "Зерно, фрукты и овощи, мясная и молочная продукция, живые животные.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 8h18l-2 11H5L3 8Z" />
        <path d="M7 8V6a5 5 0 0 1 10 0v2" />
      </svg>
    ),
  },
  {
    code: "ОКВЭД 41.20 / 68.20",
    title: "Недвижимость и стройка",
    description: "Строительство зданий, аренда и управление собственными площадями.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 21V10l8-6 8 6v11" />
        <path d="M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    code: "Реестр МСП",
    title: "Микропредприятие",
    description: "С 2025 года — в государственном реестре субъектов малого и среднего бизнеса.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path d="M3 9h18" />
        <path d="M8 4v5" />
      </svg>
    ),
  },
];

export function Activities() {
  return (
    <section id="activities" className="py-22">
      <div className="mx-auto max-w-container px-8">
        <div className="mb-12 max-w-[60ch]">
          <h2 className="text-[clamp(1.8rem,3.4vw,2.5rem)]">Чем занимается хозяйство</h2>
          <p className="mt-3 text-ink/75">
            Полный цикл — от поля и фермы до оптовой поставки покупателю.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <ActivityCard
              key={a.title}
              icon={a.icon}
              code={a.code}
              title={a.title}
              description={a.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
