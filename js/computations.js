// Determine which player attacks first based on priority or speed
function determineFirstAttacker(
  player1Pokemon,
  pokemon1Move,
  player2Pokemon,
  pokemon2Move
) {
  if (pokemon1Move.effect === "Priority") {
    styledLog(`${player1Pokemon.name} attacks first due to priority!`);
    return player1Pokemon;
  } else if (pokemon2Move.effect === "Priority") {
    styledLog(`${player2Pokemon.name} attacks first due to priority!`);
    return player2Pokemon;
  }

  const firstAttacker =
    player1Pokemon.speed >= player2Pokemon.speed
      ? player1Pokemon
      : player2Pokemon;
  styledLog(`${firstAttacker.name} attacks first due to speed!`);
  return firstAttacker;
}

// Apply the effects of a status move (e.g., Burn, Heal)
function applyStatusEffect(move, attacker, defender) {
  let addedAttack, addedDefense, addedSpAtt, addedSpDef, addedSpeed;

  switch (move.effect) {
    case "Burn":
      if (move.type == defender.type) {
        styledLog(`${move.name}  has no effect on ${defender.name}`);
        return;
      }
      if (
        defender.status &&
        ["Burned", "Poisoned", "Paralyzed", "Freezed", "Sleep"].includes(
          defender.status
        )
      ) {
        styledLog(`${defender.name} already has a status effect`);
        return;
      }
      defender.status = "Burned";
      attacker.attack *= 0.5;
      styledLog(`${defender.name} is burned!`);
      break;
    case "Poison":
      if (move.type == defender.type) {
        styledLog(`${move.name}  has no effect on ${defender.name}`);
        return;
      }
      if (
        defender.status &&
        ["Burned", "Poisoned", "Paralyzed", "Freezed", "Sleep"].includes(
          defender.status
        )
      ) {
        styledLog(`${defender.name} already has a status effect`);
        return;
      }
      defender.status = "Poisoned";
      styledLog(`${defender.name} is poisoned!`);
      break;
    case "Paralyzed":
      if (move.type == defender.type) {
        styledLog(`${move.name}  has no effect on ${defender.name}`);
        return;
      }
      if (
        defender.status &&
        ["Burned", "Poisoned", "Paralyzed", "Freezed", "Sleep"].includes(
          defender.status
        )
      ) {
        styledLog(`${defender.name} already has a status effect`);
        return;
      }
      defender.status = "Paralyzed";
      styledLog(`${defender.name} is paralyzed!`);
      defender.speed *= 0.5;
      break;
    case "Freeze":
      if (
        defender.status &&
        ["Burned", "Poisoned", "Paralyzed", "Freezed", "Sleep"].includes(
          defender.status
        )
      ) {
        styledLog(`${defender.name} already has a status effect`);
        return;
      }
      defender.status = "Freezed";
      styledLog(`${defender.name} is freezed!`);
      break;
    case "Sleep":
      if (
        defender.status &&
        ["Burned", "Poisoned", "Paralyzed", "Freezed", "Sleep"].includes(
          defender.status
        )
      ) {
        styledLog(`${defender.name} already has a status effect`);
        return;
      }
      defender.status = "Sleep";
      styledLog(`${defender.name} fell asleep!`);
      break;

    case "Heal":
      const healedHp = attacker.baseHp / 2;
      attacker.hp += healedHp;
      styledLog(`${attacker.name} healed ${healedHp} HP!`);
      break;

    case "Attack&Defense":
      addedAttack = attacker.baseAttack * 0.5;
      addedDefense = attacker.baseDefense * 0.5;
      attacker.attack += addedAttack;
      attacker.defense *= addedDefense;
      styledLog(`${attacker.name}'s Attack and Defense increased!`);
      break;
    case "Special Attackx2":
      addedSpAtt = attacker.baseSpAttack;

      attacker.spAttack += addedSpAtt;
      styledLog(`${attacker.name}'s Special Attack doubled!`);
      break;
    case "SpecialAttack&SpecialDefense":
      addedSpAtt = attacker.baseSpAttack * 0.5;
      addedSpDef = attacker.baseSpDefense * 0.5;
      attacker.spAttack += addedSpAtt;
      attacker.spDefense += addedSpDef;
      styledLog(
        `${attacker.name}'s Special Attack and Special Defense increased!`
      );
      break;
    case "SpecialAttack&SpecialDefense&Speed":
      addedSpAtt = attacker.baseSpAttack * 0.5;
      addedSpDef = attacker.baseSpDefense * 0.5;
      addedSpeed = attacker.baseSpeed * 0.5;
      attacker.spAttack += addedSpAtt;
      attacker.spDefense += addedSpDef;
      attacker.speed += addedSpeed;

      styledLog(
        `${attacker.name}'s Special Attack,Special Defense and Speed increased!`
      );
      break;
    case "Attack&Speed":
      addedAttack = attacker.baseAttack * 0.5;
      addedSpeed = attacker.baseSpeed * 0.5;
      attacker.attack += addedAttack;
      attacker.speed += addedSpeed;

      styledLog(`${attacker.name}'s  Attack and Speed increased!`);
      break;

    case "Attackx2":
      addedAttack = attacker.baseAttack;
      attacker.attack += addedAttack;
      styledLog(`${attacker.name}'s  Attack doubled!`);
      break;
    default:
      break;
  }
}

// Calculate and apply the damage
function applyDamage(move, attacker, defender) {
  let damage = computeDamage(move, attacker, defender);
  const critChance = getRandomNumber(100);
  const moveEffectChance = getRandomNumber(100);

  if (move.effect == "Critical") {
    if (critChance >= 50) {
      damage *= 1.5;
      styledLog("Critical Hit");
    }
  } else {
    if (critChance >= 93.75) {
      damage *= 1.5;
      styledLog("Critical Hit");
    }
  }

  defender.hp -= damage;
  styledLog(
    `${attacker.name} used ${move.name}, -${damage.toFixed(1)} HP`,
    "moves"
  );

  if (moveEffectChance >= 93.75) {
    applyMoveEffect(move.effect, defender);
  }

  if (move.effect == "Heal") {
    let healedHp = damage / 2;
    attacker.hp += healedHp;
    styledLog(`${attacker.name} absorb ${healedHp.toFixed(1)} HP`);
  }
  return damage;
}

function applyMoveEffect(effect, defender) {
  let minusSpDef, minusDef, minusSpeed;
  switch (effect) {
    case "Burn":
      defender.status = "burned";
      defender.hp -= defender.baseHp * 0.1;
      styledLog(`${defender.name} is now burned!`);
      break;

    case "Freeze":
      defender.status = "frozen";
      styledLog(`${defender.name} is now frozen!`);
      break;

    case "Paralyzed":
      defender.status = "paralyzed";
      styledLog(`${defender.name} is now paralyzed!`);
      break;

    case "Poison":
      defender.status = "poisoned";
      styledLog(`${defender.name} is now poisoned!`);
      break;

    case "Sleep":
      defender.status = "asleep";
      styledLog(`${defender.name} fell asleep!`);
      break;

    case "Minus Special Defense":
      minusSpDef = defender.baseSpDefense * 0.125;
      defender.spDefense -= minusSpDef;
      styledLog(`${defender.name} lowers Special Defense!`);
      break;

    case "Minus Defense":
      minusDef = defender.baseDefense * 0.125;
      defender.defense -= minusDef;
      styledLog(`${defender.name} lowers Defense!`);
      break;

    case "Minus Speed":
      minusSpeed = defender.baseSpeed * 0.125;
      defender.speed -= minusSpeed;
      styledLog(`${defender.name} lowers Defense!`);
      break;

    default:
      break;
  }
}

function pokemonAttack(
  player1Pokemon,
  pokemon1Move,
  player2Pokemon,
  pokemon2Move
) {
  const firstAttacker = determineFirstAttacker(
    player1Pokemon,
    pokemon1Move,
    player2Pokemon,
    pokemon2Move
  );
  const firstDefender =
    firstAttacker === player1Pokemon ? player2Pokemon : player1Pokemon;

  // Determine the move to use based on who the first attacker is
  const firstAttackerMove =
    firstAttacker === player1Pokemon ? pokemon1Move : pokemon2Move;
  const firstDefenderMove =
    firstDefender === player1Pokemon ? pokemon1Move : pokemon2Move;

  // Apply the first attacker's move
  if (firstAttacker.status === "Paralyzed") {
    if (Math.random() < 0.25) {
      styledLog(`${firstAttacker.name} is paralyzed and cannot move!`);
    } else {
      if (firstAttackerMove.category === "Status") {
        styledLog(
          `${firstAttacker.name} used ${firstAttackerMove.name}`,
          "moves"
        );
        applyStatusEffect(firstAttackerMove, firstAttacker, firstDefender);
      } else {
        applyDamage(firstAttackerMove, firstAttacker, firstDefender);
      }
    }
  } else if (firstAttacker.status === "Frozen") {
    if (Math.random() < 0.33) {
      styledLog(`${firstAttacker.name} thawed out and can move!`);
      if (firstAttackerMove.category === "Status") {
        styledLog(
          `${firstAttacker.name} used ${firstAttackerMove.name}`,
          "moves"
        );
        applyStatusEffect(firstAttackerMove, firstAttacker, firstDefender);
      } else {
        applyDamage(firstAttackerMove, firstAttacker, firstDefender);
      }
    } else {
      styledLog(`${firstAttacker.name} is frozen solid and can't move!`);
    }
  } else if (firstAttacker.status === "Asleep") {
    if (Math.random() < 0.33) {
      styledLog(`${firstAttacker.name} woke up and can move!`);
      if (firstAttackerMove.category === "Status") {
        styledLog(
          `${firstAttacker.name} used ${firstAttackerMove.name}`,
          "moves"
        );
        applyStatusEffect(firstAttackerMove, firstAttacker, firstDefender);
      } else {
        applyDamage(firstAttackerMove, firstAttacker, firstDefender);
      }
    } else {
      styledLog(`${firstAttacker.name} is asleep and can't move!`);
    }
  } else {
    if (firstAttackerMove.category === "Status") {
      styledLog(
        `${firstAttacker.name} used ${firstAttackerMove.name}`,
        "moves"
      );
      applyStatusEffect(firstAttackerMove, firstAttacker, firstDefender);
    } else {
      applyDamage(firstAttackerMove, firstAttacker, firstDefender);
    }
  }

  if (firstAttackerMove.effect == "Flinch") {
    let flinchRate = getRandomNumber(100);
    if (flinchRate >= 90) {
      styledLog(`${firstDefender.name} flinch and cannot move!`);
    } else {
      if (firstDefender.hp > 0) {
        if (firstDefender.status === "Paralyzed") {
          if (Math.random() < 0.25) {
            styledLog(`${firstDefender.name} is paralyzed and cannot move!`);
          } else {
            if (firstDefenderMove.category === "Status") {
              styledLog(
                `${firstDefender.name} used ${firstDefenderMove.name}`,
                "moves"
              );
              applyStatusEffect(
                firstDefenderMove,
                firstDefender,
                firstAttacker
              );
            } else {
              applyDamage(firstDefenderMove, firstDefender, firstAttacker);
            }
          }
        } else if (firstDefender.status === "Frozen") {
          if (Math.random() < 0.33) {
            styledLog(`${firstDefender.name} thawed out and can move!`);
            if (firstDefenderMove.category === "Status") {
              styledLog(
                `${firstDefender.name} used ${firstDefenderMove.name}`,
                "moves"
              );
              applyStatusEffect(
                firstDefenderMove,
                firstDefender,
                firstAttacker
              );
            } else {
              applyDamage(firstDefenderMove, firstDefender, firstAttacker);
            }
          } else {
            styledLog(`${firstDefender.name} is frozen solid and can't move!`);
          }
        } else if (firstDefender.status === "Asleep") {
          if (Math.random() < 0.33) {
            styledLog(`${firstDefender.name} woke up and can move!`);
            if (firstDefenderMove.category === "Status") {
              styledLog(
                `${firstDefender.name} used ${firstDefenderMove.name}`,
                "moves"
              );
              applyStatusEffect(
                firstDefenderMove,
                firstDefender,
                firstAttacker
              );
            } else {
              applyDamage(firstDefenderMove, firstDefender, firstAttacker);
            }
          } else {
            styledLog(`${firstDefender.name} is asleep and can't move!`);
          }
        } else {
          if (firstDefenderMove.category === "Status") {
            styledLog(
              `${firstDefender.name} used ${firstDefenderMove.name}`,
              "moves"
            );
            applyStatusEffect(firstDefenderMove, firstDefender, firstAttacker);
          } else {
            applyDamage(firstDefenderMove, firstDefender, firstAttacker);
          }
        }
      }
    }
  } else {
    if (firstDefender.hp > 0) {
      // Apply the defender's counter move
      if (firstDefender.status === "Paralyzed") {
        if (Math.random() < 0.25) {
          styledLog(`${firstDefender.name} is paralyzed and cannot move!`);
        } else {
          if (firstDefenderMove.category === "Status") {
            styledLog(
              `${firstDefender.name} used ${firstDefenderMove.name}`,
              "moves"
            );
            applyStatusEffect(firstDefenderMove, firstDefender, firstAttacker);
          } else {
            applyDamage(firstDefenderMove, firstDefender, firstAttacker);
          }
        }
      } else if (firstDefender.status === "Frozen") {
        if (Math.random() < 0.33) {
          styledLog(`${firstDefender.name} thawed out and can move!`);
          if (firstDefenderMove.category === "Status") {
            styledLog(
              `${firstDefender.name} used ${firstDefenderMove.name}`,
              "moves"
            );
            applyStatusEffect(firstDefenderMove, firstDefender, firstAttacker);
          } else {
            applyDamage(firstDefenderMove, firstDefender, firstAttacker);
          }
        } else {
          styledLog(`${firstDefender.name} is frozen solid and can't move!`);
        }
      } else if (firstDefender.status === "Asleep") {
        if (Math.random() < 0.33) {
          styledLog(`${firstDefender.name} woke up and can move!`);
          if (firstDefenderMove.category === "Status") {
            styledLog(
              `${firstDefender.name} used ${firstDefenderMove.name}`,
              "moves"
            );
            applyStatusEffect(firstDefenderMove, firstDefender, firstAttacker);
          } else {
            applyDamage(firstDefenderMove, firstDefender, firstAttacker);
          }
        } else {
          styledLog(`${firstDefender.name} is asleep and can't move!`);
        }
      } else {
        if (firstDefenderMove.category === "Status") {
          styledLog(
            `${firstDefender.name} used ${firstDefenderMove.name}`,
            "moves"
          );
          applyStatusEffect(firstDefenderMove, firstDefender, firstAttacker);
        } else {
          applyDamage(firstDefenderMove, firstDefender, firstAttacker);
        }
      }
    }
  }

  // Apply Poison and Burn damage
  if (firstAttacker.status === "Poisoned") {
    firstAttacker.hp -= firstAttacker.baseHp * 0.125;
    styledLog(`${firstAttacker.name} is hurt by poison`);
  }

  if (firstAttacker.status === "Burned") {
    firstAttacker.hp -= firstAttacker.baseHp * 0.1;
    styledLog(`${firstAttacker.name} is hurt by its burn`);
  }

  if (firstDefender.status === "Poisoned") {
    firstDefender.hp -= firstDefender.baseHp * 0.125;
    styledLog(`${firstDefender.name} is hurt by poison`);
  }

  if (firstDefender.status === "Burned") {
    firstDefender.hp -= firstDefender.baseHp * 0.1;
    styledLog(`${firstDefender.name} is hurt by its burn`);
  }

  // Log the final HP for both Pokémon
  styledLog(`${firstAttacker.name}'s HP: ${firstAttacker.hp.toFixed(1)}`);
  styledLog(`${firstDefender.name}'s HP: ${firstDefender.hp.toFixed(1)}`);

  return {
    player1HP: player1Pokemon.hp,
    player2HP: player2Pokemon.hp,
  };
}

function computeDamage(move, attacker, defender) {
  let baseDamage = move.damage;
  let finalDamage = 0;
  // console.log(move);

  if (move.category == "Attack") {
    finalDamage = baseDamage * attacker.attack;
    finalDamage /= defender.defense;
  }

  if (move.category == "Special Attack") {
    finalDamage = baseDamage * attacker.spAttack;
    finalDamage /= defender.spDefense;
  }
  const stabDamage = 1.5;

  if (player1.type === move.type) {
    finalDamage *= stabDamage;
  }

  let effectiveness = 1;

  if (defender.type in typeEffectiveness[move.type]) {
    effectiveness *= typeEffectiveness[move.type][defender.type];
  }

  if (Array.isArray(defender.types)) {
    for (let defenderType of defender.types) {
      if (defenderType in typeEffectiveness[move.type]) {
        effectiveness *= typeEffectiveness[move.type][defenderType];
      }
    }
  }

  if (effectiveness === 0) {
    styledLog(`${move.name} has no effect`);
  } else if (effectiveness > 1) {
    styledLog(`${move.name} is super effective`);
  } else if (effectiveness < 1) {
    styledLog(`${move.name} is not very effective`);
  } else {
    // styledLog(`${move.name} deals neutral damage`);
  }

  finalDamage *= effectiveness;

  return finalDamage * 0.5;
}
