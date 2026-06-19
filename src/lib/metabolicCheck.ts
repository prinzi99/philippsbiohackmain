export interface CheckAnswers {
  [key: number]: boolean | null;
}

export interface AreaResult {
  label: string;
  questions: number[];
  yesCount: number;
  total: number;
  status: "unauffällig" | "im Blick behalten" | "auffällig";
}

export interface CheckResult {
  totalScore: number;
  level: 0 | 1 | 2;
  areas: AreaResult[];
}

export const questions = [
  "Wachst du morgens oft erschöpft auf, obwohl du ausreichend geschlafen hast?",
  "Hast du regelmäßig starken Heißhunger, besonders abends?",
  "Stagniert dein Gewicht seit mehr als 3 Wochen trotz Kaloriendefizit?",
  "Ist deine Trainingsleistung in den letzten Wochen gesunken?",
  "Denkst du häufig und obsessiv an Essen?",
  "Bist du oft gereizt, antriebslos oder emotional erschöpft?",
  "Hast du deinen Kalorienplan in letzter Zeit mehrfach weiter verschärft?",
  "Schläfst du weniger als 7 Stunden pro Nacht?",
];

const areas = [
  { label: "Energie & Hunger", questions: [1, 4, 6, 7] }, // Fragen 2,5,7,8 (0-indexed)
  { label: "Leistung & Regulation", questions: [0, 2, 3] }, // Fragen 1,3,4
  { label: "Stress & Belastung", questions: [5] }, // Frage 6
];

function getAreaStatus(yesCount: number, total: number): AreaResult["status"] {
  const ratio = yesCount / total;
  if (ratio === 0) return "unauffällig";
  if (ratio < 0.5) return "im Blick behalten";
  return "auffällig";
}

export function evaluateCheck(answers: CheckAnswers): CheckResult {
  const totalScore = Object.values(answers).filter((v) => v === true).length;

  let level: CheckResult["level"] = 0;
  if (totalScore >= 6) level = 2;
  else if (totalScore >= 3) level = 1;

  const areaResults: AreaResult[] = areas.map((area) => {
    const yesCount = area.questions.filter((q) => answers[q] === true).length;
    return {
      label: area.label,
      questions: area.questions,
      yesCount,
      total: area.questions.length,
      status: getAreaStatus(yesCount, area.questions.length),
    };
  });

  return { totalScore, level, areas: areaResults };
}

export const levelData = [
  {
    title: "Dein System wirkt aktuell eher stabil",
    text: "Deine Antworten zeigen derzeit keine deutlichen Hinweise auf einen ausgeprägten Reset-Bedarf. Das bedeutet nicht, dass alles perfekt ist – aber dein System sendet aktuell keine starke Alarmmeldung.",
    hint: "Beobachte dein System weiter, ohne unnötig zu eskalieren. Stabilität ist ein guter Ausgangspunkt.",
    steps: [
      "Alltag weiter beobachten",
      "Defizite nicht unnötig verschärfen",
      "Schlaf und Struktur beibehalten",
    ],
  },
  {
    title: "Dein System zeigt erste Anpassungssignale",
    text: "Deine Antworten deuten darauf hin, dass dein Stoffwechsel unter Druck stehen könnte. Es kann sinnvoll sein, Regeneration, Schlaf, Energiezufuhr und Trainingsbelastung genauer zu betrachten.",
    hint: "Es könnte sinnvoll sein, Training, Schlaf, Kalorienhöhe und Alltagsstress bewusst zu überprüfen.",
    steps: [
      "Schlaf prüfen",
      "Kalorienhöhe prüfen",
      "Training nicht reflexartig erhöhen",
      "Hunger und Energie ernst nehmen",
    ],
  },
  {
    title: "Dein System steht wahrscheinlich deutlich unter Belastung",
    text: "Deine Antworten sprechen für einen erhöhten metabolischen Stress. Ein strukturierter Reset oder eine Phase mit mehr Stabilität kann sinnvoll sein, bevor weiterer Druck aufgebaut wird.",
    hint: "Mehr Druck ist hier wahrscheinlich nicht die beste Antwort. Oft ist zuerst Stabilisierung sinnvoller als weitere Restriktion.",
    steps: [
      "Belastung reduzieren",
      "Mehr Stabilität vor mehr Druck",
      "Eine Reset-Phase in Betracht ziehen",
      "Ernährung und Regeneration priorisieren",
    ],
  },
];
