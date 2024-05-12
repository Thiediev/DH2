export const Pokedex: {[speciesid: string]: SpeciesData} = {
	kabuto: {
		inherit: true,
		num: 1,
		name: "Kabuto",
		types: ["Water", "Poison"],
		baseStats: {hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55},
		abilities: {0: "Natural Cure", 1: "Regenerator", H: "Healer"},
	},
	kabutops: {
		inherit: true,
		num: 2,
		name: "Kabutops",
		types: ["Water", "Poison"],
		baseStats: {hp: 88, atk: 67, def: 79, spa: 119, spd: 92, spe: 95},
		abilities: {0: "Natural Cure", 1: "Regenerator", H: "Healer"},
	},
	omanyte: {
		inherit: true,
		num: 3,
		name: "Omanyte",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35},
		abilities: {0: "Inner Focus", 1: "Synchronize", H: "Regenerator"},
	},
	omastar: {
		inherit: true,
		num: 4,
		name: "Omastar",
		types: ["Poison", "Psychic"],
		baseStats: {hp: 73, atk: 59, def: 127, spa: 89, spd: 113, spe: 53},
		abilities: {0: "Inner Focus", 1: "Synchronize", H: "Regenerator"},
	},
	aerodactyl: {
		inherit: true,
		num: 5,
		name: "Aerodactyl",
		types: ["Ghost", "Flying"],
		baseStats: {hp: 90, atk: 105, def: 95, spa: 40, spd: 75, spe: 130},
		abilities: {0: "Infiltrator", 1: "Intimidate", H: "Unnerve"},
	},
	lileep: {
		inherit: true,
		num: 6,
		name: "Lileep",
		types: ["Grass", "Water"],
		baseStats: {hp: 58, atk: 62, def: 75, spa: 67, spd: 89, spe: 24},
		abilities: {0: "Storm Drain", 1: "Suction Cups", H: "Poison Heal"},
	},
	cradily: {
		inherit: true,
		num: 7,
		name: "Cradily",
		types: ["Grass", "Water"],
		baseStats: {hp: 76, atk: 88, def: 103, spa: 98, spd: 113, spe: 47},
		abilities: {0: "Storm Drain", 1: "Solid Rock", H: "Poison Heal"},
	},
	anorith: {
		inherit: true,
		num: 8,
		name: "Anorith",
		types: ["Bug", "Ground"],
		baseStats: {hp: 45, atk: 95, def: 50, spa: 40, spd: 50, spe: 75},
		abilities: {0: "Battle Armor", 1: "Intimidate", H: "Tough Claws"},
	},
	armaldo: {
		inherit: true,
		num: 9,
		name: "Armaldo",
		types: ["Bug", "Ground"],
		baseStats: {hp: 95, atk: 110, def: 110, spa: 55, spd: 80, spe: 70},
		abilities: {0: "Battle Armor", 1: "Intimidate", H: "Tough Claws"},
	},
	helioptileancient: {
		num: 10,
		name: "Helioptile-Ancient",
		baseSpecies: "Helioptile",
		forme: "Ancient",
		types: ["Fire", "Electric"],
		baseStats: {hp: 44, atk: 38, def: 33, spa: 61, spd: 43, spe: 70},
		abilities: {0: "Flame Body", 1: "Solar Power", H: "Galvanize"},
	},
	helioliskancient: {
		num: 11,
		name: "Heliolisk-Ancient",
		baseSpecies: "Heliolisk",
		forme: "Ancient",
		types: ["Fire", "Electric"],
		baseStats: {hp: 62, atk: 109, def: 52, spa: 55, spd: 94, spe: 109},
		abilities: {0: "Flame Body", 1: "Solar Power", H: "Galvanize"},
	},
	laprasabyss: {
		num: 12,
		name: "Lapras-Abyss",
		baseSpecies: "Lapras",
		forme: "Abyss",
		types: ["Water", "Dark"],
		baseStats: {hp: 130, atk: 90, def: 85, spa: 100, spd: 95, spe: 35},
		abilities: {0: "Heatproof", 1: "Shell Armor", H: "Rough Skin"},
	},
	chikoritasonic: {
		num: 13,
		name: "Chikorita-Sonic",
		baseSpecies: "Chikorita",
		evos: ["Bayleef-Sonic"],
		forme: "Sonic",
		types: ["Grass", "Electric"],
		baseStats: {hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45},
		abilities: {0: "Punk Rock", H: "Soundproof"},
	},
	bayleefsonic: {
		num: 14,
		name: "Bayleef-Sonic",
		baseSpecies: "Bayleef",
		evos: ["Meganium-Sonic"],
		prevo: "Chikorita-Sonic",
		forme: "Sonic",
		types: ["Grass", "Electric"],
		baseStats: {hp: 60, atk: 62, def: 80, spa: 63, spd: 80, spe: 60},
		abilities: {0: "Punk Rock", H: "Soundproof"},
	},
	meganiumsonic: {
		num: 15,
		name: "Meganium-Sonic",
		baseSpecies: "Meganium",
		prevo: "Bayleef-Sonic",
		forme: "Sonic",
		types: ["Grass", "Electric"],
		baseStats: {hp: 109, atk: 74, def: 81, spa: 108, spd: 111, spe: 42},
		abilities: {0: "Punk Rock", H: "Soundproof"},
	},
	alticombat: {
		num: 16,
		name: "Alticombat",
		types: ["Flying", "Fighting"],
		baseStats: {hp: 105, atk: 100, def: 60, spa: 60, spd: 75, spe: 120},
		abilities: {0: "Cloud Nine", H: "Scrappy"},
		weightkg: 11,
	},
	brawlutra: {
		num: 17,
		name: "Brawlutra",
		types: ["Ground", "Fighting"],
		baseStats: {hp: 95, atk: 110, def: 60, spa: 65, spd: 65, spe: 90},
		abilities: {0: "Fur Coat", H: "Swift Swim"},
		weightkg: 34,
	},
	goldoco: {
		num: 18,
		name: "Goldoco",
		types: ["Steel"],
		baseStats: {hp: 100, atk: 135, def: 100, spa: 50, spd: 70, spe: 50},
		abilities: {0: "Good as Gold"},
		weightkg: 40,
	},
	cranidos: {
		inherit: true,
		num: 19,
		name: "Cranidos",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 87, atk: 95, def: 55, spa: 30, spd: 40, spe: 63},
		abilities: {0: "Mold Breaker", H: "Head Barrage"},
	},
	rampardos: {
		inherit: true,
		num: 20,
		name: "Rampardos",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 117, atk: 130, def: 75, spa: 60, spd: 60, spe: 93},
		abilities: {0: "Mold Breaker", H: "Head Barrage"},
	},
	shieldon: {
		inherit: true,
		num: 21,
		name: "Shieldon",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 30, atk: 42, def: 98, spa: 77, spd: 88, spe: 30},
		abilities: {0: "Solid Rock", H: "Magic Bounce"},
	},
	bastiodon: {
		inherit: true,
		num: 22,
		name: "Bastiodon",
		types: ["Rock", "Fairy"],
		baseStats: {hp: 60, atk: 52, def: 148, spa: 107, spd: 138, spe: 30},
		abilities: {0: "Solid Rock", H: "Magic Bounce"},
	},
	archen: {
		inherit: true,
		num: 23,
		name: "Archen",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 65, atk: 102, def: 65, spa: 64, spd: 45, spe: 74},
		abilities: {0: "First Flight"},
	},
	archeops: {
		inherit: true,
		num: 24,
		name: "Archeops",
		types: ["Rock", "Fighting"],
		baseStats: {hp: 85, atk: 130, def: 85, spa: 92, spd: 65, spe: 110},
		abilities: {0: "First Flight"},
	},
	tirtouga: {
		inherit: true,
		num: 25,
		name: "Tirtouga",
		types: ["Dark", "Poison"],
		baseStats: {hp: 54, atk: 78, def: 103, spa: 53, spd: 45, spe: 22},
		abilities: {0: "Leatherback", 1: "Sturdy", H: "Swift Swim"},
	},
	carracosta: {
		inherit: true,
		num: 26,
		name: "Carracosta",
		types: ["Dark", "Poison"],
		baseStats: {hp: 84, atk: 108, def: 85, spa: 73, spd: 133, spe: 32},
		abilities: {0: "Leatherback", 1: "Sturdy", H: "Swift Swim"},
	},
	tyrunt: {
		inherit: true,
		num: 27,
		name: "Tyrunt",
		types: ["Dragon", "Dark"],
		baseStats: {hp: 58, atk: 89, def: 77, spa: 45, spd: 45, spe: 48},
		abilities: {0: "Reckless", 1: "Intimidate", H: "Strong Jaw"},
	},
	tyrantrum: {
		inherit: true,
		num: 28,
		name: "Tyrantrum",
		types: ["Dragon", "Dark"],
		baseStats: {hp: 82, atk: 121, def: 129, spa: 69, spd: 69, spe: 70},
		abilities: {0: "Reckless", 1: "Intimidate", H: "Strong Jaw"},
	},
	amaura: {
		inherit: true,
		num: 29,
		name: "Amaura",
		types: ["Dragon", "Ghost"],
		baseStats: {hp: 77, atk: 59, def: 50, spa: 67, spd: 63, spe: 46},
		abilities: {0: "Thick Fat", H: "Specterate"},
	},
	aurorus: {
		inherit: true,
		num: 30,
		name: "Aurorus",
		types: ["Dragon", "Ghost"],
		baseStats: {hp: 123, atk: 57, def: 82, spa: 109, spd: 92, spe: 58},
		abilities: {0: "Thick Fat", H: "Specterate"},
	},
	fuecocoancient: {
		num: 31,
		name: "Fuecoco-Ancient",
		baseSpecies: "Fuecoco",
		evos: ["Crocalor-Ancient"],
		forme: "Ancient",
		types: ["Fire"],
		baseStats: {hp: 67, atk: 45, def: 59, spa: 63, spd: 40, spe: 36},
		abilities: {0: "Blaze", H: "Unaware"},
	},
	crocalorancient: {
		num: 32,
		name: "Crocalor-Ancient",
		baseSpecies: "Crocalor",
		evos: ["Skeledirge-Ancient"],
		prevo: "Fuecoco-Ancient",
		forme: "Ancient",
		types: ["Fire"],
		baseStats: {hp: 81, atk: 55, def: 78, spa: 90, spd: 58, spe: 49},
		abilities: {0: "Blaze", H: "Unaware"},
	},
	skeledirgeancient: {
		num: 33,
		name: "Skeledirge-Ancient",
		baseSpecies: "Skeledirge",
		prevo: "Crocalor-Ancient",
		forme: "Ancient",
		types: ["Fire", "Dragon"],
		baseStats: {hp: 104, atk: 75, def: 75, spa: 110, spd: 100, spe: 66},
		abilities: {0: "Blaze", H: "Unaware"},
	},
	pumpkabooancient: {
		num: 34,
		name: "Pumpkaboo-Ancient",
		baseSpecies: "Pumpkaboo",
		evos: ["Gourgeist-Ancient"],
		forme: "Ancient",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 49, atk: 66, def: 70, spa: 44, spd: 55, spe: 51},
		abilities: {0: "Stamina"},
		otherFormes: ["Pumpkaboo-Ancient-Small", "Pumpkaboo-Ancient-Large", "Pumpkaboo-Ancient-Super"],
		formeOrder: ["Pumpkaboo-Ancient", "Pumpkaboo-Ancient-Small", "Pumpkaboo-Ancient-Large", "Pumpkaboo-Ancient-Super"],
	},
	pumpkabooancientsmall: {
		num: 35,
		name: "Pumpkaboo-Ancient-Small",
		baseSpecies: "Pumpkaboo",
		evos: ["Gourgeist-Ancient-Small"],
		forme: "Ancient-Small",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 44, atk: 66, def: 70, spa: 44, spd: 55, spe: 56},
		abilities: {0: "Magic Guard"},
	},
	pumpkabooancientlarge: {
		num: 36,
		name: "Pumpkaboo-Ancient-Large",
		baseSpecies: "Pumpkaboo",
		evos: ["Gourgeist-Ancient-Large"],
		forme: "Ancient-Large",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 54, atk: 66, def: 70, spa: 44, spd: 55, spe: 46},
		abilities: {0: "Grassy Surge"},
	},
	pumpkabooancientsuper: {
		num: 37,
		name: "Pumpkaboo-Ancient-Super",
		baseSpecies: "Pumpkaboo",
		evos: ["Gourgeist-Ancient-Super"],
		forme: "Ancient-Super",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 59, atk: 66, def: 70, spa: 44, spd: 55, spe: 41},
		abilities: {0: "Fairy Aura"},
	},
	gourgeistancient: {
		num: 38,
		name: "Gourgeist-Ancient",
		baseSpecies: "Gourgeist",
		prevo: "Pumpkaboo-Ancient",
		forme: "Ancient",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 75, atk: 89, def: 92, spa: 78, spd: 65, spe: 95},
		abilities: {0: "Stamina"},
		otherFormes: ["Gourgeist-Ancient-Small", "Gourgeist-Ancient-Large", "Gourgeist-Ancient-Super"],
		formeOrder: ["Gourgeist-Ancient", "Gourgeist-Ancient-Small", "Gourgeist-Ancient-Large", "Gourgeist-Ancient-Super"],
	},
	gourgeistancientsmall: {
		num: 39,
		name: "Gourgeist-Ancient-Small",
		baseSpecies: "Gourgeist",
		prevo: "Pumpkaboo-Ancient-Small",
		forme: "Ancient-Small",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 65, atk: 100, def: 82, spa: 67, spd: 65, spe: 115},
		abilities: {0: "Magic Guard"},
	},
	gourgeistancientlarge: {
		num: 40,
		name: "Gourgeist-Ancient-Large",
		baseSpecies: "Gourgeist",
		prevo: "Pumpkaboo-Ancient-Large",
		forme: "Ancient-Large",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 85, atk: 78, def: 102, spa: 89, spd: 65, spe: 75},
		abilities: {0: "Grassy Surge"},
	},
	gourgeistancientsuper: {
		num: 41,
		name: "Gourgeist-Ancient-Super",
		baseSpecies: "Gourgeist",
		prevo: "Pumpkaboo-Ancient-Super",
		forme: "Ancient-Super",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 95, atk: 67, def: 112, spa: 100, spd: 65, spe: 55},
		abilities: {0: "Fairy Aura"},
	},
	zubatancient: {
		num: 42,
		name: "Zubat-Ancient",
		baseSpecies: "Zubat",
		evos: ["Golbat-Ancient"],
		forme: "Ancient",
		types: ["Dark", "Ground"],
		baseStats: {hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55},
		abilities: {0: "Night Watch", H: "Infiltrator"},
	},
	golbatancient: {
		num: 43,
		name: "Golbat-Ancient",
		baseSpecies: "Golbat",
		evos: ["Crobat-Ancient"],
		prevo: "Zubat-Ancient",
		forme: "Ancient",
		types: ["Dark", "Ground"],
		baseStats: {hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90},
		abilities: {0: "Night Watch", H: "Infiltrator"},
	},
	crobatancient: {
		num: 44,
		name: "Crobat-Ancient",
		baseSpecies: "Crobat",
		prevo: "Golbat-Ancient",
		forme: "Ancient",
		types: ["Dark", "Ground"],
		baseStats: {hp: 85, atk: 70, def: 80, spa: 90, spd: 80, spe: 130},
		abilities: {0: "Night Watch", H: "Infiltrator"},
	},
	pesbasil: {
		num: 45,
		name: "Pesbasil",
		types: ["Steel", "Ghost"],
		baseStats: {hp: 95, atk: 125, def: 90, spa: 62, spd: 86, spe: 86},
		abilities: {0: "Heavy Metal", 1: "Own Tempo", H: "Justified"},
		weightkg: 600,
	},
	moscourge: {
		num: 46,
		name: "Moscourge",
		types: ["Poison", "Ghost"],
		baseStats: {hp: 66, atk: 96, def: 76, spa: 116, spd: 86, spe: 106},
		abilities: {0: "Corrosion", 1: "Poison Touch", H: "Merciless"},
		weightkg: 292.2,
	},
	shivertherium: {
		num: 47,
		name: "Shivertherium",
		types: ["Ice", "Steel"],
		baseStats: {hp: 105, atk: 115, def: 105, spa: 65, spd: 60, spe: 70},
		abilities: {0: "Stamina", H: "Thick Fat"},
		weightkg: 1,
	},
	yizolt: {
		num: 48,
		name: "Yizolt",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 75, atk: 95, def: 60, spa: 95, spd: 97, spe: 113},
		abilities: {0: "Volt Absorb", 1: "Gluttony", H: "First Flight"},
		weightkg: 42,
	},
	dracomizer: {
		num: 49,
		name: "Dracomizer",
		types: ["Dragon", "Fire"],
		baseStats: {hp: 100, atk: 101, def: 112, spa: 90, spd: 80, spe: 52},
		abilities: {0: "Sand Rush", 1: "Rough Skin", H: "Solar Power"},
		weightkg: 287,
	},
	swishivish: {
		num: 50,
		name: "Swishivish",
		types: ["Water", "Flying"],
		baseStats: {hp: 90, atk: 90, def: 100, spa: 55, spd: 65, spe: 100},
		abilities: {0: "Water Absorb", 1: "Water Veil", H: "Aerilate"},
		weightkg: 155,
	},
	arctobyss: {
		num: 51,
		name: "Arctobyss",
		types: ["Ice", "Ghost"],
		baseStats: {hp: 125, atk: 65, def: 85, spa: 100, spd: 90, spe: 75},
		abilities: {0: "Cursed Body", 1: "Slush Rush", H: "Permafrost"},
		weightkg: 200,
	},

}