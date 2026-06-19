export type Gender = "male" | "female";
export type Goal = "maintenance" | "moderate" | "aggressive";
export type ProteinFactor = 2.0 | 2.2 | 2.4;
export type FatMode = "minimum" | "standard";

export interface CalcInput {
  gender: Gender;
  age: number;
  weight: number;
  height: number;
  targetWeight?: number;
  activityFactor: number;
  goal: Goal;
  proteinFactor: ProteinFactor;
  fatMode: FatMode;
}

export function calcBMI(weight: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return weight / (heightM * heightM);
}

export interface CalcResult {
  bmi: number;
  usedProteinWeight: number;
  useTargetWeight: boolean;
  bmr1: number;
  bmr2: number;
  bmrAvg: number;
  tdee: number;
  deficitModerate: number;
  deficitAggressive: number;
  deficitMinus500: number;
  targetCalories: number;
  proteinG: number;
  proteinKcal: number;
  fatG: number;
  fatKcal: number;
  carbsG: number;
  carbsKcal: number;
}

/** Mifflin-St Jeor */
export function calcBMR1(gender: Gender, weight: number, height: number, age: number): number {
  const base = 10 * weight + 6.25 * height - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

/** Harris-Benedict (revised) */
export function calcBMR2(gender: Gender, weight: number, height: number, age: number): number {
  if (gender === "male") {
    return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  }
  return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
}

export function calculateAll(input: CalcInput): CalcResult {
  const { gender, age, weight, height, targetWeight, activityFactor, goal, proteinFactor, fatMode } = input;

  const bmi = calcBMI(weight, height);
  const useTargetWeight = bmi >= 30 && targetWeight !== undefined && targetWeight > 0;
  const proteinWeight = useTargetWeight ? targetWeight! : weight;

  const bmr1 = calcBMR1(gender, weight, height, age);
  const bmr2 = calcBMR2(gender, weight, height, age);
  const bmrAvg = (bmr1 + bmr2) / 2;

  const tdee = bmrAvg * activityFactor;
  const deficitModerate = tdee * 0.8;
  const deficitAggressive = tdee * 0.7;
  const deficitMinus500 = tdee - 500;

  const targetCalories =
    goal === "maintenance" ? tdee :
    goal === "moderate" ? deficitModerate :
    deficitAggressive;

  const proteinG = proteinWeight * proteinFactor;
  const proteinKcal = proteinG * 4;

  let fatKcal: number;
  let fatG: number;
  if (fatMode === "minimum") {
    fatG = weight * 0.5;
    fatKcal = fatG * 9;
  } else {
    const fatPct = gender === "male" ? 0.2 : 0.3;
    fatKcal = targetCalories * fatPct;
    fatG = fatKcal / 9;
  }

  const carbsKcal = Math.max(0, targetCalories - proteinKcal - fatKcal);
  const carbsG = carbsKcal / 4;

  return {
    bmi, usedProteinWeight: proteinWeight, useTargetWeight,
    bmr1, bmr2, bmrAvg, tdee,
    deficitModerate, deficitAggressive, deficitMinus500,
    targetCalories, proteinG, proteinKcal, fatG, fatKcal, carbsG, carbsKcal,
  };
}
