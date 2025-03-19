var playMatchSound3 = new Audio(
  "/Users/dgibad/Documents/PokemonJS/sounds/pokemon-battle-3.mp3"
);
var playMatchSound11 = new Audio(
  "/Users/dgibad/Documents/PokemonJS/sounds/pokemon-battle-11.mp3"
);

var matchWinnerSound = new Audio(
  "/Users/dgibad/Documents/PokemonJS/sounds/pokemon-battle.mp3"
);
function runTypingEffect() {
  const text = "SSCGi Pokemon Battle";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 150;
  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}
document.addEventListener("DOMContentLoaded", runTypingEffect);

//functions
function styledLog(message, type) {
  let style;

  switch (type) {
    case "intro":
      style =
        "color:#FFF; background:#4CAF50; font-size:1.6rem; padding:0.5rem 1rem; margin:1rem; font-family:Arial, sans-serif; border:3px solid #2C6B2F; border-radius:8px; font-weight:bold; text-shadow:2px 2px 3px rgba(0, 0, 0, 0.2);";
      break;
    case "trainers":
      style =
        "color:#FFF; background:#3F51B5; font-size:1.4rem; padding:0.4rem 0.8rem; margin:1px; font-family:Arial, sans-serif; border:3px solid #2C387E; border-radius:8px; font-weight:bold; text-shadow:2px 2px 3px rgba(0, 0, 0, 0.2);";
      break;
    case "introMatch":
      style =
        "color:#FFF; background:#FF9800; font-size:1.5rem; padding:0.5rem 1rem; margin:2px; font-family:Arial, sans-serif; border:3px solid #F57C00; border-radius:8px; font-weight:bold; text-shadow:2px 2px 3px rgba(0, 0, 0, 0.2);";
      break;
    case "moves":
      style =
        "color:#FFF; background:#9C27B0; font-size:1.4rem; padding:0.4rem 0.8rem; margin:1px; font-family:Arial, sans-serif; border:3px solid #7B1FA2; border-radius:8px; font-weight:bold; text-shadow:2px 2px 3px rgba(0, 0, 0, 0.2);";
      break;
    case "moveResult":
      style =
        "color:#000; background:#FFF; font-size:1rem; padding:0.2rem; margin:1px; font-family:Arial, sans-serif;";
      break;
    case "pokemonFainted":
      style =
        "color:#FFF; background:#B71C1C; font-size:1.4rem; padding:0.5rem 1rem; margin:1px; font-family:Arial, sans-serif; border:3px solid #D32F2F; border-radius:8px; font-weight:bold; text-shadow:2px 2px 3px rgba(0, 0, 0, 0.2);";
      break;
    case "changePokemon":
      style =
        "color:#FFF; background:#8BC34A; font-size:1.4rem; padding:0.5rem 1rem; margin:1px; font-family:Arial, sans-serif; border:3px solid #689F38; border-radius:8px; font-weight:bold; text-shadow:2px 2px 3px rgba(0, 0, 0, 0.2);";
      break;
    case "matchResult":
      style =
        "color:#FFF; background:#FF5722; font-size:1.5rem; padding:0.5rem 1rem; margin:1px; font-family:Arial, sans-serif; border:3px solid #E64A19; border-radius:8px; font-weight:bold; text-shadow:2px 2px 3px rgba(0, 0, 0, 0.2);";
      break;
    default:
      style =
        "color:#000; background:#FFF; font-size:1rem; padding:0.2rem; margin:1px; font-family:Arial, sans-serif;";
  }

  // Apply the styled log

  console.log(`%c${message}`, style);
}
let selectedPokemons = [];

function loadPokemonSelection() {
  let pokemonSelectionHTML = "";

  pokemons.forEach((pokemon) => {
    pokemonSelectionHTML += `
      <div class="col-md-4">
        <div class="card pokemon-card text-center">
          <div class="card-body">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="img-fluid mb-3" />
            <h5 class="card-title">${pokemon.name}</h5>
            <p><strong>Types:</strong> ${pokemon.type}</p>
            <p><strong>Abilities:</strong> ${pokemon.ability}</p>
            <p><strong>Moves:</strong></p>
            <div class="moves-grid">
              <div class="move">${pokemon.moves[0]}</div>
              <div class="move">${pokemon.moves[1]}</div>
              <div class="move">${pokemon.moves[2]}</div>
              <div class="move">${pokemon.moves[3]}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("pokemonSelection").innerHTML = pokemonSelectionHTML;

  const pokemonCards = document.querySelectorAll(".pokemon-card");
  let clickCount = 0;
  const maxClicks = 3;

  pokemonCards.forEach((card) => {
    card.addEventListener("click", function () {
      const pokemonName = this.querySelector("h5").textContent;
      const selectedPokemon = pokemons.find(
        (pokemon) => pokemon.name === pokemonName
      );
      if (this.classList.contains("clicked")) {
        console.log(`${pokemonName} card unclicked!`);
        this.classList.remove("highlighted", "clicked");
        selectedPokemons = selectedPokemons.filter(
          (name) => name !== pokemonName
        );
        clickCount--;
        updateSelectedPokemonsList();
      } else {
        if (clickCount < maxClicks) {
          this.classList.add("highlighted", "clicked");
          console.log(`${pokemonName} card clicked!`);
          selectedPokemons.push(selectedPokemon);
          clickCount++;
          updateSelectedPokemonsList();
        } else {
          console.log("Click limit reached.");
        }
      }
    });
  });
  $("#pokemonSelectionModal").modal("show");
}

function updateSelectedPokemonsList() {
  const selectedPokemonsList = document.getElementById("selectedPokemonsList");
  selectedPokemonsList.innerHTML = "";

  selectedPokemons.forEach((pokemonName) => {
    const li = document.createElement("li");
    li.textContent = pokemonName.name;
    selectedPokemonsList.appendChild(li);
  });
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

const playerNames = [
  "Vince",
  "Steven",
  "Jessie",
  "Patrick",
  "Rizaldee",
  "Nicole",
  "Datz",
  "Neil",
  "Jayson",
];

function generateRandomPlayer() {
  const nameIndex = getRandomNumber(playerNames.length);
  const name = playerNames.splice(nameIndex, 1)[0];

  const availablePokemons = [...pokemons];

  const randomPokemons = [];
  for (let i = 0; i < 3; i++) {
    const pokemonIndex = getRandomNumber(availablePokemons.length);
    randomPokemons.push(availablePokemons.splice(pokemonIndex, 1)[0]);
  }
  return {
    name: name,
    pokemons: randomPokemons,
  };
}

let numPlayers;
let player1 = {
  name: null,
  pokemons: [],
};

function choosingNumOfPlayers(numPlayers) {
  let gender;
  $("#gameChoicesModal").modal("hide");

  if (numPlayers == "1") {
    let name = prompt("Enter your name");
    player1.name = name;
    loadPokemonSelection();
  } else if (numPlayers == "0") {
    generateRandomTournament();
  } else {
    alert("Please select the number of players.");
  }
}

function submitPokemonSelection() {
  if (selectedPokemons.length != 3) {
    alert("Please select 3 pokemons before submitting.");
    return;
  }

  player1.pokemons = selectedPokemons;

  $("#pokemonSelectionModal").modal("hide");
  console.log(player1);
  startSinglePlayerGame();
}

function loggingSelectedPokemon(trainer, pokemon) {
  styledLog(`${trainer}🗣: I choose ${pokemon.name}`, "changePokemon");
}

function startSinglePlayerGame() {
  const players = [];
  players.push(player1);

  for (let i = 1; i <= 7; i++) {
    players.push(generateRandomPlayer(i));
  }
  styledLog(
    "Welcome to the Ultimate Pokémon Tournament🏆! Get ready for an exciting showdown as top Trainers from all over the company face off to prove who’s the best. With unique strategies and powerful teams, today’s battles will be full of surprises! Let’s meet our competitors and get ready for an epic tournament. May the best Trainer win!🎉",
    "intro"
  );

  styledLog(
    `Here are the Contestants:\n ${players[0].name} from IT Department🧔🏻\n ${players[1].name} from R&D Department🧑🏻\n ${players[2].name} from SysDev Department🙋🏻‍♂️\n ${players[3].name} from HR Department 👨🏻\n ${players[4].name} from ARIS Department👨🏻‍💼\n ${players[5].name} from Marketing Department👤\n ${players[6].name} from AML Department👨\n ${players[7].name} from DMS Department👦🏻`,
    "trainers"
  );

  styledLog(
    `Match 1: ${players[0].name} vs ${players[1].name} ⚔️`,
    "introMatch"
  );

  const winnerMatch1 = singleBattle(players[0], players[1]);

  if (winner === players[0].name) {
    styledLog(`${players[0].name} wins the match! 🎉`, "matchWin");
  } else if (winner === players[1].name) {
    styledLog(`${players[1].name} wins the match! 🎉`, "matchWin");
  } else {
    styledLog("The match ended in a tie! 🤝", "matchTie");
  }
}

function singleBattle(player1, player2) {
  let winner;
  let outOfPokemon = false;
  console.log(player1.pokemons);
  console.log(player2.pokemons);

  let player1Pokemons = player1.pokemons;
  let player2Pokemons = player2.pokemons;
  console.log(`First Pokemon of player 1: ${player1Pokemons[0].hp}`);
  console.log(`Second Pokemon of player 1: ${player1Pokemons[0].hp}`);
  console.log(`Third Pokemon of player 1: ${player1Pokemons[0].hp}`);
  console.log(`First Pokemon of player 2: ${player2Pokemons[0].hp}`);
  console.log(`Second Pokemon of player 2: ${player2Pokemons[0].hp}`);
  console.log(`Third Pokemon of player 2: ${player2Pokemons[0].hp}`);

  let firstPlayer1Pokemon = player1Pokemons[0];
  let firstPlayer2Pokemon = player2Pokemons[0];
  let secondPlayer1Pokemon = player1Pokemons[1];
  let secondPlayer2Pokemon = player2Pokemons[1];
  let thirdPlayer1Pokemon = player1Pokemons[2];
  let thirdPlayer2Pokemon = player2Pokemons[2];

  loggingSelectedPokemon(player1.name, firstPlayer1Pokemon);
  loggingSelectedPokemon(player2.name, firstPlayer2Pokemon);

  while (!outOfPokemon) {
    const pokemonMove = prompt(
      `1. ${firstPlayer1Pokemon.moves[0].name}\n 2. ${firstPlayer1Pokemon.moves[1]}\n 3. ${firstPlayer1Pokemon.moves[2]}\n 4. ${firstPlayer1Pokemon.moves[3]}`
    );

    let moveIndex = parseInt(pokemonMove) - 1;
    if (moveIndex < 0 || moveIndex > 3) {
      alert("Please choose a valid move (1-4).");
      continue;
    }

    let selectedMove = firstPlayer1Pokemon.moves[moveIndex];
    let randomMove = Math.floor(Math.random() * 4);
    let opponentMove = firstPlayer2Pokemon.moves[randomMove];

    let result = pokemonAttack(
      firstPlayer1Pokemon,
      selectedMove,
      firstPlayer2Pokemon,
      opponentMove
    );

    if (isOutOfPokemon(player1Pokemons)) {
      outOfPokemon = true;
      winner = player2;
    } else if (isOutOfPokemon(player2Pokemons)) {
      outOfPokemon = true;
      winner = player1;
    }
  }

  return winner;
}

function isOutOfPokemon(pokemons) {
  return pokemons.every((pokemon) => pokemon.hp <= 0);
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
  const firstDefender = firstAttacker === "Player1" ? "Player2" : "Player1";
  let prev = { player1HP: player1Pokemon.hp, player2HP: player2Pokemon.hp };
  console.log(prev);

  if (firstAttacker === "Player1") {
    let damage = computeDamage(player1Pokemon, pokemon1Move, player2Pokemon);
    player2Pokemon.hp -= damage;
    if (player2Pokemon.hp >= 0) {
      let damage = computeDamage(player2Pokemon, pokemon2Move, player1Pokemon);
      console.log(damage);
      player1Pokemon.hp -= damage;
    }
    let prev = { player1HP: player1Pokemon.hp, player2HP: player2Pokemon.hp };

    let result = {
      player1HP: player1Pokemon.hp,
      player2HP: player2Pokemon.hp,
    };
    console.log(result);

    return result;
  } else {
    let damage = computeDamage(player2Pokemon, pokemon2Move, player1Pokemon);
    player1Pokemon.hp -= damage;

    if (player1Pokemon.hp >= 0) {
      let damage = computeDamage(player1Pokemon, pokemon1Move, player2Pokemon);
      player2Pokemon.hp -= damage;
    }
    let result = {
      player1HP: player1Pokemon.hp,
      player2HP: player2Pokemon.hp,
    };

    console.log(result);

    return result;
  }
}

function determineFirstAttacker(
  player1Pokemon,
  pokemon1Move,
  player2Pokemon,
  pokemon2Move
) {
  if (pokemon1Move.effect === "Priority") {
    console.log("Player1 attacks first due to priority!");
    return "Player1";
  } else if (pokemon2Move.effect === "Priority") {
    console.log("Player2 attacks first due to priority!");
    return "Player2";
  }

  if (player1Pokemon.speed >= player2Pokemon.speed) {
    console.log("Player1 attacks first due to speed!");
    return "Player1";
  } else {
    console.log("Player2 attacks first due to speed!");
    return "Player2";
  }
}

// function attack(attackerPokemon, move, defenderPokemon) {
//   console.log(${attackerPokemon.name} uses ${move.type} attack!);

//   defenderPokemon.hp -= move.damage;
//   console.log(${defenderPokemon.name} takes ${move.damage} damage!);
// }

// function loggingSelectedPokemon(playerName, pokemon) {
//   console.log(`${playerName} selected ${pokemon.name}`);
// }

function computeDamage(attacker, move, defender) {
  let baseDamage = move.damage;
  console.log(move);
  const stabDamage = 1.5;
  const typeAdvantage = 2;

  if (player1.type === move.type) {
    baseDamage *= stabDamage;
    console.log(`STAB applied: ${baseDamage}`);
  }

  if (defender.weakness === move.type) {
    baseDamage *= typeAdvantage;
    console.log(`Type advantage applied: ${baseDamage}`);
  }

  if (defender.strength === move.type) {
    baseDamage /= typeAdvantage;
    console.log(`Type disadvantage applied: ${baseDamage}`);
  }

  let finalDamage = (baseDamage * attacker.attack) / 100;
  console.log(`Final damage: ${finalDamage}`);
  return finalDamage;
}

function generateRandomTournament() {
  const players = [];

  for (let i = 1; i <= 8; i++) {
    players.push(generateRandomPlayer(i));
  }
  styledLog(
    "Welcome to the Ultimate Pokémon Tournament🏆! Get ready for an exciting showdown as top Trainers from all over the company face off to prove who’s the best. With unique strategies and powerful teams, today’s battles will be full of surprises! Let’s meet our competitors and get ready for an epic tournament. May the best Trainer win!🎉",
    "intro"
  );

  styledLog(
    `Here are the Contestants:\n ${players[0].name} from IT Department🧔🏻\n ${players[1].name} from R&D Department🧑🏻\n ${players[2].name} from SysDev Department🙋🏻‍♂️\n ${players[3].name} from HR Department 👨🏻\n ${players[4].name} from ARIS Department👨🏻‍💼\n ${players[5].name} from Marketing Department👤\n ${players[6].name} from AML Department👨\n ${players[7].name} from DMS Department👦🏻`,
    "trainers"
  );

  styledLog(
    `Match 1: ${players[0].name} vs ${players[1].name} ⚔️`,
    "introMatch"
  );
  let match1Winner = new startRandomBattle(players[0], players[1]);
  styledLog(`Match1: ${match1Winner.name} wins the match ⚔️`, "matchResult");

  styledLog(
    `Match 2: ${players[2].name} vs ${players[3].name} ⚔️`,
    "introMatch"
  );
  let match2Winner = new startRandomBattle(players[2], players[3]);
  styledLog(`Match2: ${match2Winner.name} wins the match ⚔️`, "matchResult");

  styledLog(
    `Match 3: ${players[4].name} vs ${players[5].name} ⚔️`,
    "introMatch"
  );

  let match3Winner = new startRandomBattle(players[4], players[5]);
  styledLog(`Match3: ${match3Winner.name} wins the match ⚔️`, "matchResult");
  styledLog(
    `Match 4: ${players[6].name} vs ${players[7].name} ⚔️`,
    "introMatch"
  );

  let match4Winner = new startRandomBattle(players[6], players[7]);
  styledLog(`Match4: ${match4Winner.name} wins the match ⚔️`, "matchResult");
  styledLog(
    `Semi Finals Match 1: ${match1Winner.name} vs ${match2Winner.name} ⚔️`,
    "introMatch"
  );

  let match5Winner = new startRandomBattle(match1Winner, match2Winner);
  styledLog(
    `Semi Finals Match 1: ${match5Winner.name} wins the match ⚔️`,
    "matchResult"
  );

  styledLog(
    `Semi Finals Match 2: ${match3Winner.name} vs ${match4Winner.name} ⚔️`,
    "introMatch"
  );

  let match6Winner = new startRandomBattle(match3Winner, match4Winner);
  styledLog(
    `Semi Finals Match 2: ${match6Winner.name} wins the match ⚔️`,
    "matchResult"
  );

  styledLog(
    `Finals: ${match5Winner.name} vs ${match6Winner.name} ⚔️`,
    "introMatch"
  );
  let finals = new startRandomBattle(match5Winner, match6Winner);
  styledLog(`Finals: ${finals.name} wins the tournament ⚔️`, "matchResult");
}

function startRandomBattle(player1, player2) {
  playMatchSound3.play();

  setTimeout(() => {
    playMatchSound3.pause();
    playMatchSound3.currentTime = 0;
  }, 3000);

  setTimeout(() => {
    setInterval(() => {
      playMatchSound11.play();
    }, 0);
  }, 3000);

  let winner;
  let outOfPokemon = false;
  console.log(player1.pokemons);
  console.log(player2.pokemons);

  // Deep copy the Pokémon arrays to avoid mutating the original player data
  let player1Pokemons = JSON.parse(JSON.stringify(player1.pokemons));
  let player2Pokemons = JSON.parse(JSON.stringify(player2.pokemons));

  const firstPlayer1Pokemon = player1Pokemons[0];
  const firstPlayer2Pokemon = player2Pokemons[0];
  const secondPlayer1Pokemon = player1Pokemons[1];
  const secondPlayer2Pokemon = player2Pokemons[1];
  const thirdPlayer1Pokemon = player1Pokemons[2];
  const thirdPlayer2Pokemon = player2Pokemons[2];

  console.log(`First Pokemon of player 1: ${firstPlayer1Pokemon.hp}`);
  console.log(`Second Pokemon of player 1: ${secondPlayer1Pokemon.hp}`);
  console.log(`Third Pokemon of player 1: ${thirdPlayer1Pokemon.hp}`);
  console.log(`First Pokemon of player 2: ${firstPlayer2Pokemon.hp}`);
  console.log(`Second Pokemon of player 2: ${secondPlayer2Pokemon.hp}`);
  console.log(`Third Pokemon of player 2: ${thirdPlayer2Pokemon.hp}`);

  let firstPlayer1PokemonFainted = false;
  let firstPlayer2PokemonFainted = false;
  let secondPlayer1PokemonFainted = false;
  let secondPlayer2PokemonFainted = false;
  let thirdPlayer1PokemonFainted = false;
  let thirdPlayer2PokemonFainted = false;

  let currentPlayer1Pokemon = firstPlayer1Pokemon;
  let currentPlayer2Pokemon = firstPlayer2Pokemon;

  loggingSelectedPokemon(player1.name, currentPlayer1Pokemon);
  loggingSelectedPokemon(player2.name, currentPlayer2Pokemon);

  while (!outOfPokemon) {
    let randomMove = Math.floor(Math.random() * 4);
    let selectedMove = currentPlayer1Pokemon.moves[randomMove];
    let opponentMove = currentPlayer2Pokemon.moves[randomMove];

    let result = pokemonAttack(
      currentPlayer1Pokemon,
      selectedMove,
      currentPlayer2Pokemon,
      opponentMove
    );
    currentPlayer1Pokemon.hp = result.player1HP;
    currentPlayer2Pokemon.hp = result.player2HP;

    if (currentPlayer1Pokemon.hp <= 0) {
      if (secondPlayer1PokemonFainted === true) {
        thirdPlayer1PokemonFainted = true;
        outOfPokemon = true;
        winner = player2;
        console.log(winner);
        return winner;
      }
      if (firstPlayer1PokemonFainted === true) {
        secondPlayer1PokemonFainted = true;
        currentPlayer1Pokemon = thirdPlayer1Pokemon;
        loggingSelectedPokemon(player1.name, currentPlayer1Pokemon);
        continue;
      }
      firstPlayer1PokemonFainted = true;
      currentPlayer1Pokemon = secondPlayer1Pokemon;
      loggingSelectedPokemon(player1.name, currentPlayer1Pokemon);
    }

    if (currentPlayer2Pokemon.hp <= 0) {
      if (secondPlayer2PokemonFainted === true) {
        thirdPlayer2PokemonFainted = true;
        outOfPokemon = true;
        winner = player1;
        console.log(winner);
        return winner;
      }
      if (firstPlayer2PokemonFainted === true) {
        secondPlayer2PokemonFainted = true;
        currentPlayer2Pokemon = thirdPlayer2Pokemon;
        loggingSelectedPokemon(player2.name, currentPlayer2Pokemon);
        continue;
      }
      firstPlayer2PokemonFainted = true;
      currentPlayer2Pokemon = secondPlayer2Pokemon;
      loggingSelectedPokemon(player2.name, currentPlayer2Pokemon);
    }
  }
}
