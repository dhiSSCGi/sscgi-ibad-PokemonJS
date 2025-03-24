const playerNames = [
  "Vince🧔🏻",
  "Steven🧑🏻",
  "Jessie🙋🏻‍♂️",
  "Patrick👨🏻",
  "Rizaldee👨🏻‍💼",
  "Datz🥷",
  // "Magaling(☞ ͡° ͜ʖ ͡°)☞",
  "Neil👨",
  "Jayson🧔🏽‍♂️",
  "Romron🙎🏻‍♂️",
  "Russel👦🏻",
  "Superman🦸🏻‍♂️",
  // "Agent-07( -_•)▄︻テحكـ━一💥",
];
function loggingSelectedPokemon(trainer, pokemon, pokemonSelection) {
  const randomMessages = {
    firstPokemon: [
      `${trainer}🗣: I choose ${pokemon.name}! Let's go!`,
      `${trainer}🗣: Alright, ${pokemon.name}, time to shine!`,
      `${trainer}🗣: ${pokemon.name}, I choose you!`,
      `${trainer}🗣: It's your time, ${pokemon.name}! Let's do this!`,
      `${trainer}🗣: Go, ${pokemon.name}! Show them what you've got!`,
      `${trainer}🗣: Here we go, ${pokemon.name}! Don't hold back!`,
    ],
    secondPokemon: [
      `${trainer}🗣: Let's bring out ${pokemon.name}!`,
      `${trainer}🗣: I choose you, ${pokemon.name}! Ready for battle?`,
      `${trainer}🗣: Go, ${pokemon.name}! Show 'em your power!`,
      `${trainer}🗣: Alright, ${pokemon.name}, let's turn the tide!`,
      `${trainer}🗣: Time for ${pokemon.name} to step in! Let's win this!`,
      `${trainer}🗣: Come on, ${pokemon.name}, let's show them what we’re made of!`,
    ],
    lastPokemon: [
      `${trainer}🗣: This is it, the final round! Go, ${pokemon.name}!`,
      `${trainer}🗣: You're my last hope, ${pokemon.name}. Let's finish this!`,
      `${trainer}🗣: Time to wrap it up, ${pokemon.name}! Let's win this battle!`,
      `${trainer}🗣: All or nothing, ${pokemon.name}! Give it your all!`,
      `${trainer}🗣: The final Pokémon, ${pokemon.name}. Let's make it count!`,
      `${trainer}🗣: This is the moment, ${pokemon.name}. Let's take it home!`,
    ],
  };

  let selectedMessage = "";

  if (pokemonSelection === "First Pokemon") {
    selectedMessage =
      randomMessages.firstPokemon[
        Math.floor(Math.random() * randomMessages.firstPokemon.length)
      ];
  } else if (pokemonSelection === "Second Pokemon") {
    selectedMessage =
      randomMessages.secondPokemon[
        Math.floor(Math.random() * randomMessages.secondPokemon.length)
      ];
  } else {
    selectedMessage =
      randomMessages.lastPokemon[
        Math.floor(Math.random() * randomMessages.lastPokemon.length)
      ];
  }

  styledLog(selectedMessage, "changePokemon");
}
