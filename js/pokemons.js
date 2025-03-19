const pokemons = [
  {
    name: "Moltres",
    image: "https://img.pokemondb.net/artwork/moltres.jpg",
    type: ["Fire", "Flying"],
    ability: "Pressure",
    hp: 90,
    attack: 100,
    defense: 90,
    spAttack: 125,
    spDefense: 85,
    speed: 90,
    moves: [flamethrower, airCutter, calmMind, roost],
    status: "alive",
  },
  {
    name: "Charizard",
    image: "https://img.pokemondb.net/artwork/charizard.jpg",
    type: ["Fire", "Flying"],
    ability: "Blaze",
    hp: 78,
    attack: 84,
    defense: 78,
    spAttack: 109,
    spDefense: 85,
    speed: 100,
    moves: [dragonPulse, flamethrower, wingAttack, airCutter],
    status: "alive",
  },
  {
    name: "Blastoise",
    image: "https://img.pokemondb.net/artwork/blastoise.jpg",
    type: ["Water"],
    ability: "Torrent",
    hp: 79,
    attack: 83,
    defense: 100,
    spAttack: 85,
    spDefense: 105,
    speed: 78,
    moves: [scald, iceBeam, aquaRing, bodySlam],
    status: "alive",
  },
  {
    name: "Snorlax",
    type: ["Normal"],
    hp: 160,
    attack: 110,
    defense: 65,
    spAttack: 65,
    spDefense: 110,
    speed: 30,
    ability: "Immunity",
    image: "https://img.pokemondb.net/artwork/snorlax.jpg",
    moves: [bodySlam, hyperVoice, bulkUp, thunderPunch],
    status: "alive",
  },
  {
    name: "Mewtwo",
    type: ["Psychic"],
    hp: 106,
    attack: 110,
    defense: 90,
    spAttack: 154,
    spDefense: 90,
    speed: 130,
    ability: "Pressure",
    image: "https://img.pokemondb.net/artwork/mewtwo.jpg",
    moves: [psychic, shadowBall, calmMind, auraSphere],
    status: "alive",
  },
  {
    name: "Gyarados",
    type: ["Water", "Flying"],
    hp: 95,
    attack: 125,
    defense: 79,
    spAttack: 60,
    spDefense: 100,
    speed: 81,
    ability: "Intimidate",
    image: "https://img.pokemondb.net/artwork/gyarados.jpg",
    moves: [dragonDance, dragonClaw, scald, quickAttack],
    status: "alive",
  },
  {
    name: "Machamp",
    type: ["Fighting"],
    hp: 90,
    attack: 130,
    defense: 80,
    spAttack: 65,
    spDefense: 85,
    speed: 55,
    ability: "Guts",
    image: "https://img.pokemondb.net/artwork/machamp.jpg",
    moves: [bulkUp, drainPunch, thunderPunch, firePunch],
    status: "alive",
  },
  {
    name: "Alakazam",
    type: ["Psychic"],
    hp: 55,
    attack: 50,
    defense: 45,
    spAttack: 135,
    spDefense: 85,
    speed: 120,
    ability: "Synchronize",
    image: "https://img.pokemondb.net/artwork/alakazam.jpg",
    moves: [psychic, shadowBall, calmMind, signalBeam],
    status: "alive",
    status: "alive",
  },
  // {
  //   name: "Rhydon",
  //   type: ["Rock", "Ground"],
  //   hp: 105,
  //   attack: 130,
  //   defense: 120,
  //   spAttack: 45,
  //   spDefense: 45,
  //   speed: 40,
  //   ability: "Lightning Rod",
  //   image: "https://img.pokemondb.net/artwork/rhydon.jpg",
  //   moves: ["Earthquake", "Stone Edge", "Hammer Arm", "Rock Slide"],
  //   status: "alive",
  // },
  // {
  //   name: "Arcanine",
  //   type: ["Fire"],
  //   hp: 90,
  //   attack: 110,
  //   defense: 80,
  //   spAttack: 100,
  //   spDefense: 80,
  //   speed: 95,
  //   ability: "Intimidate",
  //   image: "https://img.pokemondb.net/artwork/arcanine.jpg",
  //   moves: ["Flamethrower", "Wild Charge", "Extreme Speed", "Crunch"],
  //   status: "alive",
  // },
  // {
  //   name: "Dragonite",
  //   type: ["Dragon", "Flying"],
  //   hp: 91,
  //   attack: 134,
  //   defense: 95,
  //   spAttack: 100,
  //   spDefense: 100,
  //   speed: 80,
  //   ability: "Inner Focus",
  //   image: "https://img.pokemondb.net/artwork/dragonite.jpg",
  //   moves: ["Dragon Claw", "Fly", "Fire Punch", "Thunder Punch"],
  //   status: "alive",
  // },
  // {
  //   name: "Lugia",
  //   type: ["Psychic", "Flying"],
  //   hp: 106,
  //   attack: 90,
  //   defense: 130,
  //   spAttack: 90,
  //   spDefense: 154,
  //   speed: 110,
  //   ability: "Pressure",
  //   image: "https://img.pokemondb.net/artwork/lugia.jpg",
  //   moves: ["Aeroblast", "Psychic", "Recover", "Calm Mind"],
  //   status: "alive",
  // },
  // {
  //   name: "Pidgeot",
  //   type: ["Normal", "Flying"],
  //   hp: 83,
  //   attack: 80,
  //   defense: 75,
  //   spAttack: 70,
  //   spDefense: 70,
  //   speed: 101,
  //   ability: "Big Pecks",
  //   image: "https://img.pokemondb.net/artwork/pidgeot.jpg",
  //   moves: ["Brave Bird", "Air Slash", "Heat Wave", "U-turn"],
  //   status: "alive",
  // },
  // {
  //   name: "Venusaur",
  //   type: ["Grass", "Poison"],
  //   hp: 80,
  //   attack: 82,
  //   defense: 83,
  //   spAttack: 100,
  //   spDefense: 100,
  //   speed: 80,
  //   ability: "Overgrow",
  //   image: "https://img.pokemondb.net/artwork/venusaur.jpg",
  //   moves: ["SolarBeam", "Sludge Bomb", "Earthquake", "Synthesis"],
  //   status: "alive",
  // },
  // {
  //   name: "Blissey",
  //   type: ["Normal"],
  //   hp: 255,
  //   attack: 70,
  //   defense: 70,
  //   spAttack: 95,
  //   spDefense: 135,
  //   speed: 55,
  //   ability: "Serene Grace",
  //   image: "https://img.pokemondb.net/artwork/blissey.jpg",
  //   moves: ["Soft-Boiled", "Seismic Toss", "Thunder Wave", "Heal Bell"],
  //   status: "alive",
  // },
  // {
  //   name: "Gengar",
  //   type: ["Ghost", "Poison"],
  //   hp: 60,
  //   attack: 65,
  //   defense: 60,
  //   spAttack: 130,
  //   spDefense: 75,
  //   speed: 110,
  //   ability: "Levitate",
  //   image: "https://img.pokemondb.net/artwork/gengar.jpg",
  //   moves: ["Shadow Ball", "Sludge Bomb", "Will-O-Wisp", "Thunderbolt"],
  //   status: "alive",
  // },
  // {
  //   name: "Heracross",
  //   type: ["Bug", "Fighting"],
  //   hp: 80,
  //   attack: 125,
  //   defense: 75,
  //   spAttack: 40,
  //   spDefense: 95,
  //   speed: 85,
  //   ability: "Guts",
  //   image: "https://img.pokemondb.net/artwork/heracross.jpg",
  //   moves: ["Close Combat", "Megahorn", "Stone Edge", "Swords Dance"],
  //   status: "alive",
  // },
  // {
  //   name: "Tyranitar",
  //   type: ["Rock", "Dark"],
  //   hp: 100,
  //   attack: 134,
  //   defense: 110,
  //   spAttack: 95,
  //   spDefense: 100,
  //   speed: 61,
  //   ability: "Sand Stream",
  //   image: "https://img.pokemondb.net/artwork/tyranitar.jpg",
  //   moves: ["Crunch", "Stone Edge", "Ice Beam", "Pursuit"],
  //   status: "alive",
  // },
  // {
  //   name: "Ferrothorn",
  //   type: ["Grass", "Steel"],
  //   hp: 74,
  //   attack: 94,
  //   defense: 131,
  //   spAttack: 54,
  //   spDefense: 116,
  //   speed: 20,
  //   ability: "Iron Barbs",
  //   image: "https://img.pokemondb.net/artwork/ferrothorn.jpg",
  //   moves: ["Leech Seed", "Stealth Rock", "Gyro Ball", "Power Whip"],
  //   status: "alive",
  // },
  // {
  //   name: "Sableye",
  //   type: ["Dark", "Ghost"],
  //   hp: 50,
  //   attack: 75,
  //   defense: 75,
  //   spAttack: 65,
  //   spDefense: 65,
  //   speed: 50,
  //   ability: "Prankster",
  //   image: "https://img.pokemondb.net/artwork/sableye.jpg",
  //   moves: ["Foul Play", "Shadow Claw", "Will-O-Wisp", "Recover"],
  //   status: "alive",
  // },
  // {
  //   name: "Zoroark",
  //   type: ["Dark"],
  //   hp: 60,
  //   attack: 105,
  //   defense: 60,
  //   spAttack: 120,
  //   spDefense: 60,
  //   speed: 105,
  //   ability: "Illusion",
  //   image: "https://img.pokemondb.net/artwork/zoroark.jpg",
  //   moves: ["Night Daze", "Foul Play", "U-turn", "Flamethrower"],
  //   status: "alive",
  // },
  // {
  //   name: "Lucario",
  //   type: ["Fighting", "Steel"],
  //   hp: 70,
  //   attack: 110,
  //   defense: 70,
  //   spAttack: 115,
  //   spDefense: 70,
  //   speed: 90,
  //   ability: "Justified",
  //   image: "https://img.pokemondb.net/artwork/lucario.jpg",
  //   moves: ["Aura Sphere", "Flash Cannon", "Crunch", "Extreme Speed"],
  //   status: "alive",
  // },
  // {
  //   name: "Scizor",
  //   type: ["Bug", "Steel"],
  //   hp: 70,
  //   attack: 130,
  //   defense: 100,
  //   spAttack: 55,
  //   spDefense: 80,
  //   speed: 65,
  //   ability: "Technician",
  //   image: "https://img.pokemondb.net/artwork/scizor.jpg",
  //   moves: ["Bullet Punch", "X-Scissor", "Swords Dance", "Pursuit"],
  //   status: "alive",
  // },
  // {
  //   name: "Crobat",
  //   type: ["Poison", "Flying"],
  //   hp: 85,
  //   attack: 90,
  //   defense: 80,
  //   spAttack: 70,
  //   spDefense: 80,
  //   speed: 130,
  //   ability: "Infiltrator",
  //   image: "https://img.pokemondb.net/artwork/crobat.jpg",
  //   moves: ["Brave Bird", "Cross Poison", "U-turn", "Toxic"],
  //   status: "alive",
  // },
  // {
  //   name: "Magnezone",
  //   type: ["Electric", "Steel"],
  //   hp: 70,
  //   attack: 60,
  //   defense: 115,
  //   spAttack: 130,
  //   spDefense: 90,
  //   speed: 60,
  //   ability: "Magnet Pull",
  //   image: "https://img.pokemondb.net/artwork/magnezone.jpg",
  //   moves: ["Thunderbolt", "Flash Cannon", "Signal Beam", "Magnet Rise"],
  //   status: "alive",
  // },
  // {
  //   name: "Salamence",
  //   type: ["Dragon", "Flying"],
  //   hp: 95,
  //   attack: 135,
  //   defense: 80,
  //   spAttack: 110,
  //   spDefense: 80,
  //   speed: 100,
  //   ability: "Intimidate",
  //   image: "https://img.pokemondb.net/artwork/salamence.jpg",
  //   moves: ["Outrage", "Dragon Claw", "Fly", "Fire Blast"],
  //   status: "alive",
  // },
  // {
  //   name: "Excadrill",
  //   type: ["Steel", "Ground"],
  //   hp: 110,
  //   attack: 135,
  //   defense: 60,
  //   spAttack: 50,
  //   spDefense: 65,
  //   speed: 88,
  //   ability: "Mold Breaker",
  //   image: "https://img.pokemondb.net/artwork/excadrill.jpg",
  //   moves: ["Earthquake", "Iron Head", "Stealth Rock", "Toxic"],
  //   status: "alive",
  // },
  // {
  //   name: "Volcarona",
  //   type: ["Bug", "Fire"],
  //   hp: 85,
  //   attack: 60,
  //   defense: 65,
  //   spAttack: 135,
  //   spDefense: 105,
  //   speed: 100,
  //   ability: "Flame Body",
  //   image: "https://img.pokemondb.net/artwork/volcarona.jpg",
  //   moves: ["Fiery Dance", "Bug Buzz", "Quiver Dance", "Roost"],
  //   status: "alive",
  // },
  // {
  //   name: "Haxorus",
  //   type: ["Dragon"],
  //   hp: 76,
  //   attack: 147,
  //   defense: 90,
  //   spAttack: 60,
  //   spDefense: 70,
  //   speed: 97,
  //   ability: "Mold Breaker",
  //   image: "https://img.pokemondb.net/artwork/haxorus.jpg",
  //   moves: ["Outrage", "Dragon Claw", "Earthquake", "Swords Dance"],
  //   status: "alive",
  // },
  // {
  //   name: "Garchomp",
  //   type: ["Dragon", "Ground"],
  //   hp: 108,
  //   attack: 130,
  //   defense: 95,
  //   spAttack: 80,
  //   spDefense: 85,
  //   speed: 102,
  //   ability: "Rough Skin",
  //   image: "https://img.pokemondb.net/artwork/garchomp.jpg",
  //   moves: ["Earthquake", "Dragon Claw", "Stone Edge", "Swords Dance"],
  //   status: "alive",
  // },
  // {
  //   name: "Togekiss",
  //   type: ["Fairy", "Flying"],
  //   hp: 85,
  //   attack: 50,
  //   defense: 95,
  //   spAttack: 120,
  //   spDefense: 115,
  //   speed: 80,
  //   ability: "Serene Grace",
  //   image: "https://img.pokemondb.net/artwork/togekiss.jpg",
  //   moves: ["Air Slash", "Aura Sphere", "Thunder Wave", "Roost"],
  //   status: "alive",
  // },
  // {
  //   name: "Gliscor",
  //   type: ["Ground", "Flying"],
  //   hp: 75,
  //   attack: 95,
  //   defense: 125,
  //   spAttack: 45,
  //   spDefense: 75,
  //   speed: 95,
  //   ability: "Poison Heal",
  //   image: "https://img.pokemondb.net/artwork/gliscor.jpg",
  //   moves: ["Earthquake", "Toxic", "Roost", "Aerial Ace"],
  //   status: "alive",
  // },
  // {
  //   name: "Incineroar",
  //   type: ["Fire", "Dark"],
  //   hp: 95,
  //   attack: 115,
  //   defense: 90,
  //   spAttack: 60,
  //   spDefense: 70,
  //   speed: 60,
  //   ability: "Intimidate",
  //   image: "https://img.pokemondb.net/artwork/incineroar.jpg",
  //   moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Snarl"],
  //   status: "alive",
  // },
  // {
  //   name: "Sandslash",
  //   type: ["Ground"],
  //   hp: 75,
  //   attack: 100,
  //   defense: 110,
  //   spAttack: 45,
  //   spDefense: 55,
  //   speed: 65,
  //   ability: "Sand Rush",
  //   image: "https://img.pokemondb.net/artwork/sandslash.jpg",
  //   moves: ["Earthquake", "Stealth Rock", "Iron Tail", "Toxic"],
  //   status: "alive",
  // },
  // {
  //   name: "Lilligant",
  //   type: ["Grass"],
  //   hp: 70,
  //   attack: 60,
  //   defense: 75,
  //   spAttack: 110,
  //   spDefense: 75,
  //   speed: 90,
  //   ability: "Own Tempo",
  //   image: "https://img.pokemondb.net/artwork/lilligant.jpg",
  //   moves: ["SolarBeam", "Quiver Dance", "Giga Drain", "Hidden Power"],
  //   status: "alive",
  // },
  // {
  //   name: "Seviper",
  //   type: ["Poison"],
  //   hp: 73,
  //   attack: 100,
  //   defense: 60,
  //   spAttack: 100,
  //   spDefense: 60,
  //   speed: 65,
  //   ability: "Infiltrator",
  //   image: "https://img.pokemondb.net/artwork/seviper.jpg",
  //   moves: ["Toxic", "Poison Jab", "Swords Dance", "Flamethrower"],
  //   status: "alive",
  // },
  // {
  //   name: "Abomasnow",
  //   type: ["Grass", "Ice"],
  //   hp: 90,
  //   attack: 92,
  //   defense: 75,
  //   spAttack: 92,
  //   spDefense: 85,
  //   speed: 60,
  //   ability: "Snow Warning",
  //   image: "https://img.pokemondb.net/artwork/abomasnow.jpg",
  //   moves: ["Blizzard", "Wood Hammer", "Ice Shard", "Leech Seed"],
  //   status: "alive",
  // },
  // {
  //   name: "Chandelure",
  //   type: ["Ghost", "Fire"],
  //   hp: 60,
  //   attack: 55,
  //   defense: 90,
  //   spAttack: 145,
  //   spDefense: 90,
  //   speed: 80,
  //   ability: "Infiltrator",
  //   image: "https://img.pokemondb.net/artwork/chandelure.jpg",
  //   moves: ["Shadow Ball", "Flamethrower", "Will-O-Wisp", "Energy Ball"],
  //   status: "alive",
  // },
  // {
  //   name: "Claydol",
  //   type: ["Ground", "Psychic"],
  //   hp: 60,
  //   attack: 70,
  //   defense: 105,
  //   spAttack: 70,
  //   spDefense: 120,
  //   speed: 75,
  //   ability: "Levitate",
  //   image: "https://img.pokemondb.net/artwork/claydol.jpg",
  //   moves: ["Earth Power", "Psychic", "Stealth Rock", "Rapid Spin"],
  //   status: "alive",
  // },
];
