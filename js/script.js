// Add custom JavaScript here
const headerSection = document.querySelector("#headerSection");

function runTypingEffect() {
  const text = "Pokemon Tournament";
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

function styledLog(message, type) {
  let style;

  // Define styles for different types of messages with a nice, readable color palette
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

const pokemonSelectionContainer = document.querySelector("#pokemonSelection");
let selectedPokemon = [];
let numberOfPlayers;
function choosingNumOfPlayers(players) {
  numberOfPlayers = players;
  $("#gameChoicesModal").modal("hide");
  if (numberOfPlayers == 0) {
    styledLog(
      "Welcome to the **Ultimate Pokémon Tournament🏆**! Get ready for an exciting showdown as top Trainers from all over the company face off to prove who’s the best. With unique strategies and powerful teams, today’s battles will be full of surprises! Let’s meet our competitors and get ready for an epic tournament. May the best Trainer win!🎉",
      "intro"
    );

    styledLog(
      "Here are the Contestants:\n Vince from IT Department🧔🏻\n Steven from R&D Department🧑🏻\n Jessie from SysDev Department🙋🏻‍♂️\n Patrick from HR Department 👨🏻\n Rizaldee from ARIS Department👨🏻‍💼\n Datz from Marketing Department👤\n Neil from AML Department👨\n Jayson from DMS Department👦🏻",
      "trainers"
    );

    styledLog("Match 1: Vince vs Steven ⚔️", "introMatch");

    styledLog("Vince🗣: I choose Pikachu");
    styledLog("Steven🗣: Go Arcanine");

    styledLog("Pikachu used Thunderbolt⚡", "moves");
    styledLog("Thunderbolt is effective against Arcanine(-101)");

    styledLog("Arcanine used Flamethrower🔥", "moves");
    styledLog("Flamethrower is effective against Arcanine(-110)");

    styledLog("Pikachu used Thunderbolt⚡", "moves");
    styledLog("Thunderbolt is effective against Arcanine(-101)");
    styledLog("Arcanince fainted", "pokemonFainted");

    styledLog("Steven🗣: Go Krookodile");
    styledLog("Pikachu used Iron Tail⚙️", "moves");
    styledLog("Iron Tail is effective against Krookodile(-101)");

    styledLog("Krookodile used Earthquake⛰️", "moves");
    styledLog("Earthquake is super effective against Pikachu(-210)");
    styledLog("Pikachu fainted", "pokemonFainted");

    styledLog("Vince🗣: Go Vaporeon");
    styledLog("Go Back Krookodile", "changePokemon");
    styledLog("Steven🗣: Go Gyarados");

    styledLog("Gyarados used Crunch⬛", "moves");
    styledLog("Crunch is effective against Vaporeon(-101)");
    styledLog("Vaporeon used Hyper Voice⬜", "moves");
    styledLog("Hyper Voice is effective against Gyarados(-101)");
    styledLog("Gyarados used Crunch⬛", "moves");
    styledLog("Crunch is effective against Vaporeon(-101)");
    styledLog("Vaporeon fainted", "pokemonFainted");

    styledLog("Vince🗣: I choose Charizard🔥");

    styledLog("Charizard used Flamethrower🔥", "moves");
    styledLog("Flamethrower🔥 is not very effective against Charizard(-56)");
    styledLog("Gyarados used Aqua Tail", "moves");
    styledLog("Aqua Tail is super effective against Charizard(-216)");
    styledLog("Charizard fainted", "pokemonFainted");

    styledLog("Vince is out of pokemon");
    styledLog("Steven won the battle", "matchResult");
  } else if (numberOfPlayers == 1) {
    let player1 = prompt("Enter your Name: ");
    // console.log(player1);
    $("#starterChoicesModal").modal("show");
    const submitButton = document.getElementById("submitPokemonSelection");
    submitButton.addEventListener("click", function () {
      if (selectedPokemon.length === 3) {
        console.log(`Selected Pokémon: ${selectedPokemon.join(", ")}`);
        $("#starterChoicesModal").modal("hide");
      } else {
        alert("Please choose 3 pokemons");
      }
    });
    // console.log(pokemonList);
    // styledLog(
    //   "Welcome to the **Ultimate Pokémon Tournament🏆**! Get ready for an exciting showdown as top Trainers from all over the company face off to prove who’s the best. With unique strategies and powerful teams, today’s battles will be full of surprises! Let’s meet our competitors and get ready for an epic tournament. May the best Trainer win!🎉",
    //   "intro"
    // );
    // styledLog(
    //   `Here are the Contestants:\n Vince from IT Department🧔🏻\n Steven from R&D Department🧑🏻\n Jessie from SysDev Department🙋🏻‍♂️\n Patrick from HR Department 👨🏻\n Rizaldee from ARIS Department👨🏻‍💼\n ${player1} from Marketing Department👤\n Neil from AML Department👨\n Jayson from DMS Department👦🏻`,
    //   "trainers"
    // );
    // styledLog("Match 1: Vince vs Steven ⚔️", "introMatch");
    // styledLog("Vince🗣: I choose Pikachu");
    // styledLog("Steven🗣: Go Arcanine");
    // styledLog("Pikachu used Thunderbolt⚡", "moves");
    // styledLog("Thunderbolt is effective against Arcanine(-101)");
    // styledLog("Arcanine used Flamethrower🔥", "moves");
    // styledLog("Flamethrower is effective against Arcanine(-110)");
    // styledLog("Pikachu used Thunderbolt⚡", "moves");
    // styledLog("Thunderbolt is effective against Arcanine(-101)");
    // styledLog("Arcanince fainted", "pokemonFainted");
    // styledLog("Steven🗣: Go Krookodile");
    // styledLog("Pikachu used Iron Tail⚙️", "moves");
    // styledLog("Iron Tail is effective against Krookodile(-101)");
    // styledLog("Krookodile used Earthquake⛰️", "moves");
    // styledLog("Earthquake is super effective against Pikachu(-210)");
    // styledLog("Pikachu fainted", "pokemonFainted");
    // styledLog("Vince🗣: Go Vaporeon");
    // styledLog("Go Back Krookodile", "changePokemon");
    // styledLog("Steven🗣: Go Gyarados");
    // styledLog("Gyarados used Crunch⬛", "moves");
    // styledLog("Crunch is effective against Vaporeon(-101)");
    // styledLog("Vaporeon used Hyper Voice⬜", "moves");
    // styledLog("Hyper Voice is effective against Gyarados(-101)");
    // styledLog("Gyarados used Crunch⬛", "moves");
    // styledLog("Crunch is effective against Vaporeon(-101)");
    // styledLog("Vaporeon fainted", "pokemonFainted");
    // styledLog("Vince🗣: I choose Charizard🔥");
    // styledLog("Charizard used Flamethrower🔥", "moves");
    // styledLog("Flamethrower🔥 is not very effective against Charizard(-56)");
    // styledLog("Gyarados used Aqua Tail", "moves");
    // styledLog("Aqua Tail is super effective against Charizard(-216)");
    // styledLog("Charizard fainted", "pokemonFainted");
    // styledLog("Vince is out of pokemon");
    // styledLog("Steven won the battle", "matchResult");
    // styledLog(`Match 2: Rizaldee vs ${player1} ⚔️`, "introMatch");
  } else {
    console.log("Something went wrong...");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const pokemonCards = document.querySelectorAll(".pokemon-card");
  let clickCount = 0;
  const maxClicks = 3;

  pokemonCards.forEach((card) => {
    card.addEventListener("click", function () {
      if (clickCount < maxClicks && !this.classList.contains("clicked")) {
        this.classList.add("highlighted", "clicked");
        const pokemonName = this.querySelector("p").textContent;
        console.log(`${pokemonName} card clicked!`);
        selectedPokemon.push(pokemonName);
        clickCount++;
      } else if (this.classList.contains("clicked")) {
        console.log("This card has already been clicked.");
      } else {
        console.log("Click limit reached.");
      }
    });
  });
});

// let numberOfPlayers = choosingNumOfPlayers(players);
