type sex = "Male" | "Female";

export function vo2Peak({ sex, weight, height, age }: { sex: sex, weight: number, height: number, age: number }): number {
  switch (sex) {
    case "Male":
      return male(age, weight, height);
    case "Female":
      return female(age, weight, height);
  }
}

function male(age: number, weight: number, height: number): number {
  const predictedWeight = 0.79 * height - 60.7;

  if (weight >= predictedWeight) {
    return predictedWeight * (50.75 - (0.37 * age));
  } else {
    return weight * (50.75 - (0.37 * age));
  }
}

function female(age: number, weight: number, height: number): number {
  const predictedWeight = 0.65 * height - 42.8;

  if (weight >= predictedWeight) {
    return (predictedWeight + 43) * (22.78 - (0.17 * age));
  }
}