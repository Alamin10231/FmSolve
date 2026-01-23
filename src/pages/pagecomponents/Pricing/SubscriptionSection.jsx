import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const Card = ({ price, sub, title, desc, includes, rules }) => {
  // Single accent to keep consistent look
  const accentColor = "border-blue-500";
  return (
    <div
      className={`relative flex flex-col h-full border-t-4 ${accentColor} bg-card border border-border rounded-3xl p-6 text-foreground py-10`}
    >
      {sub && (
        <span className="absolute text-xs text-gray-400 top-6 right-6">
          {sub}
        </span>
      )}
      <div className="text-3xl font-bold text-foreground">{price}</div>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>

      {includes && (
        <div className="p-3 mt-4 text-xs border bg-muted text-muted-foreground rounded-xl border-border">
          {includes}
        </div>
      )}

      <p className="mt-5 text-xs font-bold tracking-widest text-gray-400">
        IMPORTANT RULES
      </p>
      <ul className="mt-2 space-y-2">
        {rules.map((r, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <FiCheckCircle className="text-blue-400" />
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SubscriptionSection = () => {
  const single = [
    {
      price: "£10",
      title: "Diagnostic / Root Cause Report",
      desc: "Understand the problem, confirm scope, and define the right solution.",
      includes:
        "Includes Diagnostic Answer + Report + Exec/KPI Blueprint ( £5 saving vs buying separately )",
      rules: [
        "Pack apply per FS-ID per problem",
        "Pack do not expire",
        "Pack are company-level, not user-level",
      ],
      accent: "blue",
    },
    {
      price: "£20",
      title: "Executive + KPI Blueprint",
      desc: "Understand the problem, confirm scope, and define the right solution.",
      includes:
        "Includes Diagnostic Answer + Report + Exec/KPI Blueprint ( £5 saving vs buying separately )",
      rules: [
        "Pack apply per FS-ID per problem",
        "Pack do not expire",
        "Pack are company-level, not user-level",
      ],
      accent: "blue",
    },
    {
      price: "£25",
      title: "Full Triage Pack",
      desc: "Understand the problem, confirm scope, and define the right solution.",
      includes:
        "Includes Diagnostic Answer + Report + Exec/KPI Blueprint ( £5 saving vs buying separately )",
      rules: [
        "Pack apply per FS-ID per problem",
        "Pack do not expire",
        "Pack are company-level, not user-level",
      ],
      accent: "blue",
    },
  ];

  const multi = [
    {
      price: "£115",
      sub: "(£23/case)",
      title: "5 × Full Triage Packs",
      includes:
        "Includes Diagnostic Answer + Report + Exec/KPI Blueprint ( £5 saving vs buying separately )",
      rules: [
        "Pack apply per FS-ID per problem",
        "Pack do not expire",
        "Pack are company-level, not user-level",
      ],
      accent: "blue",
    },
    {
      price: "£220",
      sub: "(£22/case)",
      title: "10 × Full Triage Packs",
      includes:
        "Includes Diagnostic Answer + Report + Exec/KPI Blueprint ( £5 saving vs buying separately )",
      rules: [
        "Pack apply per FS-ID per problem",
        "Pack do not expire",
        "Pack are company-level, not user-level",
      ],
      accent: "blue",
    },
    {
      price: "£400",
      sub: "(£20/case)",
      title: "20 × Full Triage Packs",
      includes:
        "Includes Diagnostic Answer + Report + Exec/KPI Blueprint ( £5 saving vs buying separately )",
      rules: [
        "Pack apply per FS-ID per problem",
        "Pack do not expire",
        "Pack are company-level, not user-level",
      ],
      accent: "blue",
    },
  ];

  const cards = [...single, ...multi];

  return (
    <div className="w-full transition-colors duration-300 bg-background">
      <section className="max-w-6xl px-6 py-12 mx-auto">
        <div className="grid items-stretch grid-cols-1 gap-6 mt-2 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {cards.map((c, i) => (
            <div key={i} className="h-full">
              <Card {...c} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SubscriptionSection;
