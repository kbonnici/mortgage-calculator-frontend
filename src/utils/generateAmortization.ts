export default function generateAmortization(n: number) {
  return {
    text: `${n} Years`,
    value: n,
  };
}

export function generateAmortizationPeriodOptions() {
  let amortizationPeriodOptions: { text: string; value: number }[] = [];
  for (let i = 5; i < 35; i += 5) {
    amortizationPeriodOptions.push(generateAmortization(i));
  }

  return amortizationPeriodOptions;
}
