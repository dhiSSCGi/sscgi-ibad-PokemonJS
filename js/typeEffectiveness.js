const typeEffectiveness = {
  Normal: {
    Normal: 1,
    Fire: 1,
    Water: 1,
    Electric: 1,
    Grass: 1,
    Ice: 1,
    Fighting: 2,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 1,
    Bug: 1,
    Rock: 1,
    Ghost: 0,
    Dragon: 1,
    Dark: 1,
    Steel: 1,
  },
  Fire: {
    Normal: 1,
    Fire: 0.5,
    Water: 2,
    Electric: 1,
    Grass: 2,
    Ice: 2,
    Fighting: 1,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 1,
    Bug: 2,
    Rock: 1,
    Ghost: 1,
    Dragon: 1,
    Dark: 1,
    Steel: 2,
  },
  Water: {
    Normal: 1,
    Fire: 1,
    Water: 0.5,
    Electric: 2,
    Grass: 0.5,
    Ice: 1,
    Fighting: 1,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 1,
    Bug: 1,
    Rock: 1,
    Ghost: 1,
    Dragon: 1,
    Dark: 1,
    Steel: 1,
  },
  Electric: {
    Normal: 1,
    Fire: 1,
    Water: 1,
    Electric: 0.5,
    Grass: 1,
    Ice: 1,
    Fighting: 1,
    Poison: 1,
    Ground: 2,
    Flying: 1,
    Psychic: 1,
    Bug: 1,
    Rock: 1,
    Ghost: 1,
    Dragon: 2,
    Dark: 1,
    Steel: 1,
  },
  Grass: {
    Normal: 1,
    Fire: 2,
    Water: 1,
    Electric: 1,
    Grass: 0.5,
    Ice: 2,
    Fighting: 1,
    Poison: 2,
    Ground: 1,
    Flying: 2,
    Psychic: 1,
    Bug: 2,
    Rock: 1,
    Ghost: 1,
    Dragon: 1,
    Dark: 1,
    Steel: 1,
  },
  Ice: {
    Normal: 1,
    Fire: 2,
    Water: 2,
    Electric: 1,
    Grass: 1,
    Ice: 0.5,
    Fighting: 1,
    Poison: 1,
    Ground: 2,
    Flying: 1,
    Psychic: 1,
    Bug: 1,
    Rock: 1,
    Ghost: 1,
    Dragon: 2,
    Dark: 1,
    Steel: 2,
  },
  Fighting: {
    Normal: 2,
    Fire: 1,
    Water: 1,
    Electric: 1,
    Grass: 1,
    Ice: 1,
    Fighting: 1,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 1,
    Bug: 1,
    Rock: 2,
    Ghost: 0,
    Dragon: 1,
    Dark: 2,
    Steel: 2,
  },
  Poison: {
    Normal: 1,
    Fire: 1,
    Water: 1,
    Electric: 1,
    Grass: 2,
    Ice: 1,
    Fighting: 1,
    Poison: 0.5,
    Ground: 2,
    Flying: 1,
    Psychic: 2,
    Bug: 1,
    Rock: 1,
    Ghost: 1,
    Dragon: 1,
    Dark: 1,
    Steel: 0.5,
  },
  Ground: {
    Normal: 1,
    Fire: 1,
    Water: 1,
    Electric: 2,
    Grass: 2,
    Ice: 1,
    Fighting: 1,
    Poison: 1,
    Ground: 1,
    Flying: 0,
    Psychic: 1,
    Bug: 1,
    Rock: 2,
    Ghost: 1,
    Dragon: 1,
    Dark: 1,
    Steel: 2,
  },
  Flying: {
    Normal: 1,
    Fire: 1,
    Water: 1,
    Electric: 1,
    Grass: 1,
    Ice: 1,
    Fighting: 2,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 1,
    Bug: 2,
    Rock: 2,
    Ghost: 1,
    Dragon: 1,
    Dark: 1,
    Steel: 1,
  },
  Psychic: {
    Normal: 1,
    Fire: 1,
    Water: 1,
    Electric: 1,
    Grass: 1,
    Ice: 1,
    Fighting: 1,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 0.5,
    Bug: 1,
    Rock: 1,
    Ghost: 2,
    Dragon: 1,
    Dark: 0,
    Steel: 1,
  },
  Bug: {
    Normal: 1,
    Fire: 2,
    Water: 1,
    Electric: 1,
    Grass: 2,
    Ice: 1,
    Fighting: 1,
    Poison: 1,
    Ground: 1,
    Flying: 2,
    Psychic: 2,
    Bug: 1,
    Rock: 1,
    Ghost: 1,
    Dragon: 1,
    Dark: 2,
    Steel: 0.5,
  },
  Rock: {
    Normal: 1,
    Fire: 1,
    Water: 1,
    Electric: 1,
    Grass: 1,
    Ice: 1,
    Fighting: 1,
    Poison: 1,
    Ground: 1,
    Flying: 2,
    Psychic: 1,
    Bug: 2,
    Rock: 1,
    Ghost: 1,
    Dragon: 1,
    Dark: 1,
    Steel: 2,
  },
  Ghost: {
    Normal: 0,
    Fire: 1,
    Water: 1,
    Electric: 1,
    Grass: 1,
    Ice: 1,
    Fighting: 2,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 1,
    Bug: 1,
    Rock: 1,
    Ghost: 2,
    Dragon: 1,
    Dark: 2,
    Steel: 1,
  },
  Dragon: {
    Normal: 1,
    Fire: 1,
    Water: 1,
    Electric: 1,
    Grass: 1,
    Ice: 1,
    Fighting: 1,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 1,
    Bug: 1,
    Rock: 1,
    Ghost: 1,
    Dragon: 2,
    Dark: 1,
    Steel: 0.5,
  },
  Dark: {
    Normal: 1,
    Fire: 1,
    Water: 1,
    Electric: 1,
    Grass: 1,
    Ice: 1,
    Fighting: 2,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 2,
    Bug: 1,
    Rock: 1,
    Ghost: 2,
    Dragon: 1,
    Dark: 1,
    Steel: 1,
  },
  Steel: {
    Normal: 1,
    Fire: 2,
    Water: 1,
    Electric: 1,
    Grass: 1,
    Ice: 1,
    Fighting: 2,
    Poison: 1,
    Ground: 1,
    Flying: 1,
    Psychic: 1,
    Bug: 1,
    Rock: 1,
    Ghost: 1,
    Dragon: 1,
    Dark: 1,
    Steel: 0.5,
  },
};
