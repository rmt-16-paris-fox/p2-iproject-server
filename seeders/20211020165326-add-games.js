"use strict";
const axios = require ('axios')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const games = await axios({
			url:"https://www.freetogame.com/api/games?sort-by=id",
			method: 'GET',
		})
		
		console.log(games.data)
		await queryInterface.bulkInsert("Games",games.data.map(el=> {
			delete el.id
			el.createdAt = new Date()
			el.updatedAt = new Date()
			return el
		}), {})
		// await queryInterface.bulkInsert("Games",
		// [
		// 	{
		// 		title: "Dauntless",
		// 		thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg",
		// 		short_description: "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
		// 		game_url: "https://www.freetogame.com/open/dauntless",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Phoenix Labs",
		// 		developer: "Phoenix Labs, Iron Galaxy",
		// 		release_date: "2019-05-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/dauntless",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		title: "World of Tanks",
		// 		thumbnail: "https://www.freetogame.com/g/2/thumbnail.jpg",
		// 		short_description: "If you like blowing up tanks, with a quick and intense game style you will love this game!",
		// 		game_url: "https://www.freetogame.com/open/world-of-tanks",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Wargaming",
		// 		developer: "Wargaming",
		// 		release_date: "2011-04-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/world-of-tanks",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		title: "Warframe",
		// 		thumbnail: "https://www.freetogame.com/g/3/thumbnail.jpg",
		// 		short_description: "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
		// 		game_url: "https://www.freetogame.com/open/warframe",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Digital Extremes",
		// 		developer: "Digital Extremes",
		// 		release_date: "2013-03-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/warframe",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		title: "CRSED: F.O.A.D.",
		// 		thumbnail: "https://www.freetogame.com/g/4/thumbnail.jpg",
		// 		short_description: "Take the battle royale genre and add  mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)",
		// 		game_url: "https://www.freetogame.com/open/crsed",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Gaijin Distribution KFT",
		// 		developer: "Darkflow Software",
		// 		release_date: "2019-12-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/crsed",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		title: "Crossout",
		// 		thumbnail: "https://www.freetogame.com/g/5/thumbnail.jpg",
		// 		short_description: "A post-apocalyptic MMO vehicle combat game! ",
		// 		game_url: "https://www.freetogame.com/open/crossout",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Targem",
		// 		developer: "Gaijin",
		// 		release_date: "2017-05-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/crossout",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		title: "Blade and Soul",
		// 		thumbnail: "https://www.freetogame.com/g/6/thumbnail.jpg",
		// 		short_description: "A free-to-play martial arts MMORPG that tasks players with learning combination attacks.",
		// 		game_url: "https://www.freetogame.com/open/blade-and-soul",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "NCSoft",
		// 		developer: "NCSoft",
		// 		release_date: "2016-01-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/blade-and-soul",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		title: "Armored Warfare",
		// 		thumbnail: "https://www.freetogame.com/g/7/thumbnail.jpg",
		// 		short_description: "A modern team-based MMO tank game from Obsidian Entertainment.",
		// 		game_url: "https://www.freetogame.com/open/armored-warfare",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "My.com (Mail.ru Group)",
		// 		developer: "Obsidian Entertainment",
		// 		release_date: "2015-10-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/armored-warfare",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		title: "Trove",
		// 		thumbnail: "https://www.freetogame.com/g/8/thumbnail.jpg",
		// 		short_description: "A free to play Sandbox massively multiplayer online role-playing game! ",
		// 		game_url: "https://www.freetogame.com/open/trove",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Trion Worlds",
		// 		developer: "Trion Worlds",
		// 		release_date: "2015-07-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/trove",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		// 		title: "World of Warships",
		// 		thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg",
		// 		short_description: "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
		// 		game_url: "https://www.freetogame.com/open/world-of-warships",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Wargaming",
		// 		developer: "Wargaming",
		// 		release_date: "2015-07-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/world-of-warships",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "ArcheAge",
		// 		thumbnail: "https://www.freetogame.com/g/10/thumbnail.jpg",
		// 		short_description: "A free-to-play, hybrid fantasy/sandbox MMORPG brought to you by Trion Worlds.",
		// 		game_url: "https://www.freetogame.com/open/archeage",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Trion Worlds",
		// 		developer: "XL Games",
		// 		release_date: "2014-09-04",
		// 		freetogame_profile_url: "https://www.freetogame.com/archeage",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Neverwinter",
		// 		thumbnail: "https://www.freetogame.com/g/11/thumbnail.jpg",
		// 		short_description: "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
		// 		game_url: "https://www.freetogame.com/open/neverwinter",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Perfect World Entertainment",
		// 		developer: "Cryptic Studios",
		// 		release_date: "2013-12-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/neverwinter",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "War Thunder",
		// 		thumbnail: "https://www.freetogame.com/g/12/thumbnail.jpg",
		// 		short_description: "A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.",
		// 		game_url: "https://www.freetogame.com/open/war-thunder",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Gaijin Entertainment",
		// 		developer: "Gaijin Entertainment",
		// 		release_date: "2013-08-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/war-thunder",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Guild Wars 2",
		// 		thumbnail: "https://www.freetogame.com/g/13/thumbnail.jpg",
		// 		short_description: "A free-to-play MMORPG, the follow-up to ArenaNet's popular Guild Wars. ",
		// 		game_url: "https://www.freetogame.com/open/guild-wars-2",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "NCsoft",
		// 		developer: "ArenaNet",
		// 		release_date: "2012-08-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/guild-wars-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Star Trek Online",
		// 		thumbnail: "https://www.freetogame.com/g/14/thumbnail.jpg",
		// 		short_description: "A free-to-play, 3D, Sci-Fi MMORPG based on the popular Star Trek series.",
		// 		game_url: "https://www.freetogame.com/open/star-trek-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Perfect World Entertainment",
		// 		developer: " Cryptic Studios",
		// 		release_date: "2010-02-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/star-trek-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Crossfire",
		// 		thumbnail: "https://www.freetogame.com/g/15/thumbnail.jpg",
		// 		short_description: "A first person tactical shooter with a huge selection of game modes!",
		// 		game_url: "https://www.freetogame.com/open/crossfire",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Neowiz Games",
		// 		developer: "SmileGate",
		// 		release_date: "2007-05-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/crossfire",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Roblox",
		// 		thumbnail: "https://www.freetogame.com/g/16/thumbnail.jpg",
		// 		short_description: "A free to play sandbox MMO with lots of creation options.",
		// 		game_url: "https://www.freetogame.com/open/roblox",
		// 		genre: "MMO",
		// 		platform: "PC (Windows)",
		// 		publisher: "Roblox Corporation",
		// 		developer: "Roblox Corporation",
		// 		release_date: "2006-12-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/roblox",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Entropia Universe",
		// 		thumbnail: "https://www.freetogame.com/g/17/thumbnail.jpg",
		// 		short_description: "A 3D MMO Multi Virtual World Real Cash Economy Experience with RPG elements. ",
		// 		game_url: "https://www.freetogame.com/open/entropia-universe",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "MindArk",
		// 		developer: "MindArk",
		// 		release_date: "2003-01-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/entropia-universe",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Second Life",
		// 		thumbnail: "https://www.freetogame.com/g/18/thumbnail.jpg",
		// 		short_description: "A free to play 3D online virtual world with a huge reputation! ",
		// 		game_url: "https://www.freetogame.com/open/second-life",
		// 		genre: "Social",
		// 		platform: "PC (Windows)",
		// 		publisher: "Linden Lab",
		// 		developer: "Linden Lab",
		// 		release_date: "2003-06-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/second-life",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Minion Masters",
		// 		thumbnail: "https://www.freetogame.com/g/19/thumbnail.jpg",
		// 		short_description: "A free-to-play strategic minion brawler from Danish developer Betadwarf. ",
		// 		game_url: "https://www.freetogame.com/open/minion-masters",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Betadwarf",
		// 		developer: "Betadwarf",
		// 		release_date: "2019-05-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/minion-masters",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Splitgate: Arena Warfare",
		// 		thumbnail: "https://www.freetogame.com/g/20/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer shooter developed and published by 1047 games. ",
		// 		game_url: "https://www.freetogame.com/open/splitgate-arena-warfare",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "1047 Games",
		// 		developer: "1047 Games",
		// 		release_date: "2019-05-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/splitgate-arena-warfare",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Destiny 2",
		// 		thumbnail: "https://www.freetogame.com/g/21/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.",
		// 		game_url: "https://www.freetogame.com/open/destiny-2",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Bungie",
		// 		developer: "Bungie",
		// 		release_date: "2019-10-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/destiny-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Wild Terra Online",
		// 		thumbnail: "https://www.freetogame.com/g/22/thumbnail.jpg",
		// 		short_description: "A medieval sandbox MMO designed with core players in mind. ",
		// 		game_url: "https://www.freetogame.com/open/wild-terra-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Juvty Worlds Ltd.",
		// 		developer: "Juvty Worlds Ltd.",
		// 		release_date: "2017-12-18",
		// 		freetogame_profile_url: "https://www.freetogame.com/wild-terra-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Apex Legends",
		// 		thumbnail: "https://www.freetogame.com/g/23/thumbnail.jpg",
		// 		short_description: "A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ",
		// 		game_url: "https://www.freetogame.com/open/apex-legends",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Electronic Arts",
		// 		developer: "Electronic Arts",
		// 		release_date: "2019-02-04",
		// 		freetogame_profile_url: "https://www.freetogame.com/apex-legends",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Counter-Strike: Global Offensive",
		// 		thumbnail: "https://www.freetogame.com/g/24/thumbnail.jpg",
		// 		short_description: "The popular multiplayer shooter from Valve. ",
		// 		game_url: "https://www.freetogame.com/open/counter-strike-global-offensive",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Valve",
		// 		developer: "Valve, Hidden Path Entertainment",
		// 		release_date: "2012-08-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/counter-strike-global-offensive",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Bless Online",
		// 		thumbnail: "https://www.freetogame.com/g/25/thumbnail.jpg",
		// 		short_description: "A free-to-play fantasy MMORPG featuring field battles, monster taming, and large 100v100 realm vs realm battles. ",
		// 		game_url: "https://www.freetogame.com/open/bless-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Neowiz",
		// 		developer: "Neowiz Bless Studio",
		// 		release_date: "2018-05-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/bless-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "MapleStory 2",
		// 		thumbnail: "https://www.freetogame.com/g/26/thumbnail.jpg",
		// 		short_description: "Sequel to Nexon's successful MMORPG, Maplestory! ",
		// 		game_url: "https://www.freetogame.com/open/maplestory-2",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Nexon",
		// 		developer: "Wizet",
		// 		release_date: "2018-10-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/maplestory-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Spacelords",
		// 		thumbnail: "https://www.freetogame.com/g/28/thumbnail.jpg",
		// 		short_description: "A free-to-play 4v1 sci-fi shooter. ",
		// 		game_url: "https://www.freetogame.com/open/spacelords",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: " MercurySteam Entertainment",
		// 		developer: "MercurySteam",
		// 		release_date: "2018-09-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/spacelords",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Ring of Elysium",
		// 		thumbnail: "https://www.freetogame.com/g/29/thumbnail.jpg",
		// 		short_description: "A free-to-play battle royale developed and published by Tencent Games. ",
		// 		game_url: "https://www.freetogame.com/open/ring-of-elysium",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Tencent Games",
		// 		developer: "Tencent Games",
		// 		release_date: "2018-09-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/ring-of-elysium",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Quake Champions",
		// 		thumbnail: "https://www.freetogame.com/g/30/thumbnail.jpg",
		// 		short_description: "Quake Champions is a callback to the early days of the Quake IP, featuring the fast-paced action that made the IP popular over two decades ago. ",
		// 		game_url: "https://www.freetogame.com/open/quake-champions",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Bethesda Softworks",
		// 		developer: "id Software",
		// 		release_date: "2017-08-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/quake-champions",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Cosmos Invictus",
		// 		thumbnail: "https://www.freetogame.com/g/31/thumbnail.jpg",
		// 		short_description: "A strategic collectible card game developed and published by Pegnio Ltd. ",
		// 		game_url: "https://www.freetogame.com/open/cosmos-invictus",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Pegnio Ltd",
		// 		developer: "Pegnio Ltd",
		// 		release_date: "2018-06-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/cosmos-invictus",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Champions Of Titan",
		// 		thumbnail: "https://www.freetogame.com/g/32/thumbnail.jpg",
		// 		short_description: "A free-to-play sci-fi MMORPG from IDC/Games. ",
		// 		game_url: "https://www.freetogame.com/open/champions-of-titan",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "IDC/Games",
		// 		developer: "Insel Games",
		// 		release_date: "2017-12-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/champions-of-titan",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Caller’s Bane",
		// 		thumbnail: "https://www.freetogame.com/g/33/thumbnail.jpg",
		// 		short_description: "The free-to-play reboot of Mojang's card/board game Scrolls. ",
		// 		game_url: "https://www.freetogame.com/open/callers-bane",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Mojang AB",
		// 		developer: "Mojang AB",
		// 		release_date: "2018-06-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/callers-bane",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Defiance 2050",
		// 		thumbnail: "https://www.freetogame.com/g/35/thumbnail.jpg",
		// 		short_description: "A re-imagining of Trion Worlds' sci-fi shooter Defiance. \r\n",
		// 		game_url: "https://www.freetogame.com/open/defiance-2050",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Trion Worlds ",
		// 		developer: "Trion Worlds ",
		// 		release_date: "2018-06-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/defiance-2050",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Realm Royale",
		// 		thumbnail: "https://www.freetogame.com/g/36/thumbnail.jpg",
		// 		short_description: "A free-to-play fantasy-themed battle royale game based on Hi-Rez Studio's team shooter Paladins. ",
		// 		game_url: "https://www.freetogame.com/open/realm-royale",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Hi-Rez Studios",
		// 		developer: "Hi-Rez Studios",
		// 		release_date: "2018-06-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/realm-royale",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Crusaders Of Light",
		// 		thumbnail: "https://www.freetogame.com/g/37/thumbnail.jpg",
		// 		short_description: "A cross-platform MMORPG available on PC and mobile devices. ",
		// 		game_url: "https://www.freetogame.com/open/crusaders-of-light",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Hong Kong Netease Interactive Entertainment Limited",
		// 		developer: "Hong Kong Netease Interactive Entertainment Limited",
		// 		release_date: "2017-04-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/crusaders-of-light",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Darwin Project",
		// 		thumbnail: "https://www.freetogame.com/g/39/thumbnail.jpg",
		// 		short_description: "A free-to-play 10-player battle royale game set just prior to an impeding ice age.",
		// 		game_url: "https://www.freetogame.com/open/darwin-project",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Scavengers Studio",
		// 		developer: "Scavengers Studio",
		// 		release_date: "2020-01-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/darwin-project",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Spellsworn",
		// 		thumbnail: "https://www.freetogame.com/g/42/thumbnail.jpg",
		// 		short_description: "A free-to-play arena battle game developed and published by Frogsong Studios AB. ",
		// 		game_url: "https://www.freetogame.com/open/spellsworn",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Frogsong Studios AB",
		// 		developer: "Frogsong Studios AB",
		// 		release_date: "2018-03-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/spellsworn",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Z1 Battle Royale",
		// 		thumbnail: "https://www.freetogame.com/g/43/thumbnail.jpg",
		// 		short_description: "A highly competitive free-to-play battle royale shooter.",
		// 		game_url: "https://www.freetogame.com/open/z1-battle-royale",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Daybreak Game Company",
		// 		developer: "Daybreak Game Company",
		// 		release_date: "2018-02-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/z1-battle-royale",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Tale Of Toast",
		// 		thumbnail: "https://www.freetogame.com/g/44/thumbnail.jpg",
		// 		short_description: "A free-to-play open world MMO inspired by classic, core MMOs. ",
		// 		game_url: "https://www.freetogame.com/open/tale-of-toast",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Toasty Leaf AB",
		// 		developer: "Toasty Leaf AB",
		// 		release_date: "2018-02-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/tale-of-toast",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "SoulWorker",
		// 		thumbnail: "https://www.freetogame.com/g/45/thumbnail.jpg",
		// 		short_description: "A free to play anime action MMO based on the popular anime of the same title. ",
		// 		game_url: "https://www.freetogame.com/open/soulworker",
		// 		genre: "Fighting",
		// 		platform: "PC (Windows)",
		// 		publisher: "Gameforge",
		// 		developer: "Lion Games",
		// 		release_date: "2018-02-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/soulworker",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Bombtag",
		// 		thumbnail: "https://www.freetogame.com/g/47/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer Bomberman-inspired game.",
		// 		game_url: "https://www.freetogame.com/open/bombtag",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "David Schneider",
		// 		developer: "David Schneider",
		// 		release_date: "2018-02-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/bombtag",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Ironsight",
		// 		thumbnail: "https://www.freetogame.com/g/48/thumbnail.jpg",
		// 		short_description: "A free-to-play futuristic shooter published by Aeria Games. ",
		// 		game_url: "https://www.freetogame.com/open/ironsight",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Aeria Games",
		// 		developer: "Wiple Games",
		// 		release_date: "2018-02-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/ironsight",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Dead Maze",
		// 		thumbnail: "https://www.freetogame.com/g/49/thumbnail.jpg",
		// 		short_description: "A free-to-play 2D isometric MMO full of zombies. ",
		// 		game_url: "https://www.freetogame.com/open/dead-maze",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "801",
		// 		developer: "801",
		// 		release_date: "2018-02-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/dead-maze",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Global Adventures",
		// 		thumbnail: "https://www.freetogame.com/g/51/thumbnail.jpg",
		// 		short_description: "A free-to-play MMORPG developed by PixelSoft and Published by SubaGames. ",
		// 		game_url: "https://www.freetogame.com/open/global-adventures",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "SubaGames",
		// 		developer: "PixelSoft",
		// 		release_date: "2017-12-29",
		// 		freetogame_profile_url: "https://www.freetogame.com/global-adventures",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Closers",
		// 		thumbnail: "https://www.freetogame.com/g/52/thumbnail.jpg",
		// 		short_description: "A free-to-play episodic anime beat-em-up developed \r\nby Naddic Games and published by \r\nEn Masse Entertainment. ",
		// 		game_url: "https://www.freetogame.com/open/closers",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "En Masse Entertainment",
		// 		developer: "Naddic Games",
		// 		release_date: "2017-12-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/closers",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Deceit",
		// 		thumbnail: "https://www.freetogame.com/g/55/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer first-person shooter set \r\nin an asylum! ",
		// 		game_url: "https://www.freetogame.com/open/deceit",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Automaton",
		// 		developer: "Automaton",
		// 		release_date: "2017-05-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/deceit",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Grimoire: Manastorm",
		// 		thumbnail: "https://www.freetogame.com/g/56/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer FPS... with wizards. ",
		// 		game_url: "https://www.freetogame.com/open/grimoire-manastorm",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Omniconnection",
		// 		developer: "Omniconnection",
		// 		release_date: "2015-02-04",
		// 		freetogame_profile_url: "https://www.freetogame.com/grimoire-manastorm",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Fortnite",
		// 		thumbnail: "https://www.freetogame.com/g/57/thumbnail.jpg",
		// 		short_description: "A free-to-play, standalone mode of Epic Game's Fortnite. ",
		// 		game_url: "https://www.freetogame.com/open/fortnite-battle-royale",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Epic Games",
		// 		developer: "Epic Games",
		// 		release_date: "2017-09-26",
		// 		freetogame_profile_url: "https://www.freetogame.com/fortnite-battle-royale",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "The Ultimatest Battle",
		// 		thumbnail: "https://www.freetogame.com/g/58/thumbnail.jpg",
		// 		short_description: "A free-to-play 2D platform game that pits two teams of players against each other in a variety of modes. ",
		// 		game_url: "https://www.freetogame.com/open/the-ultimatest-battle",
		// 		genre: "Fighting",
		// 		platform: "PC (Windows)",
		// 		publisher: "Ediogames",
		// 		developer: "Ediogames",
		// 		release_date: "2017-09-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/the-ultimatest-battle",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Insidia",
		// 		thumbnail: "https://www.freetogame.com/g/59/thumbnail.jpg",
		// 		short_description: "A free-to-play tactical, turn-based dueling game developed and published by Bad Seed. ",
		// 		game_url: "https://www.freetogame.com/open/insidia",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Bad Seed",
		// 		developer: "Bad Seed",
		// 		release_date: "2017-09-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/insidia",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Brink",
		// 		thumbnail: "https://www.freetogame.com/g/60/thumbnail.jpg",
		// 		short_description: "A free-to-play first-person-shoot developed by Splash \r\nDamage and published by Bethesda Softworks. ",
		// 		game_url: "https://www.freetogame.com/open/brink",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Bethesda Softworks",
		// 		developer: "Splash Damage",
		// 		release_date: "2011-05-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/brink",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Black Squad",
		// 		thumbnail: "https://www.freetogame.com/g/61/thumbnail.jpg",
		// 		short_description: "A free-to-play military FPS developed by NS STUDIO and published by NEOWIZ.",
		// 		game_url: "https://www.freetogame.com/open/black-squad",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "NEOWIZ",
		// 		developer: "NS Studio",
		// 		release_date: "2017-07-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/black-squad",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Kritika: REBOOT",
		// 		thumbnail: "https://www.freetogame.com/g/62/thumbnail.jpg",
		// 		short_description: "A free-to-play hack-and-slash MMORPG with both a single-player adventure combat from En Masse Entertainment and ALL-M Co. ",
		// 		game_url: "https://www.freetogame.com/open/kritika",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "ALLM Co.",
		// 		developer: "ALLM Co.",
		// 		release_date: "2016-06-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/kritika",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Argo",
		// 		thumbnail: "https://www.freetogame.com/g/63/thumbnail.jpg",
		// 		short_description: "A tactical first-person shooter from the Arma 3 developer.",
		// 		game_url: "https://www.freetogame.com/open/argo",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Bohemia Interactive",
		// 		developer: "Bohemia Interactive",
		// 		release_date: "2017-06-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/argo",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Secret World Legends",
		// 		thumbnail: "https://www.freetogame.com/g/64/thumbnail.jpg",
		// 		short_description: "A free-to-play reboot of The Secret World. ",
		// 		game_url: "https://www.freetogame.com/open/secret-world-legends",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Funcom",
		// 		developer: "Funcom",
		// 		release_date: "2017-07-31",
		// 		freetogame_profile_url: "https://www.freetogame.com/secret-world-legends",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Pixel Worlds",
		// 		thumbnail: "https://www.freetogame.com/g/65/thumbnail.jpg",
		// 		short_description: "A free-to-play, side-scroller MMO sandbox game developed and published by Kukouri Mobile Entertainment. ",
		// 		game_url: "https://www.freetogame.com/open/pixel-worlds",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Kukouri Mobile Entertainment ",
		// 		developer: "Kukouri Mobile Entertainment ",
		// 		release_date: "2017-06-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/pixel-worlds",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Gwent: The Witcher Card Game",
		// 		thumbnail: "https://www.freetogame.com/g/66/thumbnail.jpg",
		// 		short_description: "A free-to-play card game based on CD Projekt Red's popular Witcher franchise. ",
		// 		game_url: "https://www.freetogame.com/open/gwent",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "CD Projekt Red",
		// 		developer: "CD Projekt Red",
		// 		release_date: "2017-05-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/gwent",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Awesomenauts",
		// 		thumbnail: "https://www.freetogame.com/g/67/thumbnail.jpg",
		// 		short_description: "A 3v3 2D battle arena Developed by Ronimo games.",
		// 		game_url: "https://www.freetogame.com/open/awesomenauts",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Ronimo Games",
		// 		developer: "Ronimo Games",
		// 		release_date: "2017-05-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/awesomenauts",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Dreadnought",
		// 		thumbnail: "https://www.freetogame.com/g/68/thumbnail.jpg",
		// 		short_description: "A free-to-play combat flight simulator developed by Yager Development and published by Grey Box. ",
		// 		game_url: "https://www.freetogame.com/open/dreadnought",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Grey Box",
		// 		developer: "Yager Development",
		// 		release_date: "2018-10-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/dreadnought",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Cabals: Card Blitz",
		// 		thumbnail: "https://www.freetogame.com/g/69/thumbnail.jpg",
		// 		short_description: "A free-to-play game developed by Kyy Games and published by BISBOG SA. ",
		// 		game_url: "https://www.freetogame.com/open/cabals-card-blitz",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "BISBOG SA",
		// 		developer: "Kyy Games",
		// 		release_date: "2017-02-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/cabals-card-blitz",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Alien Swarm: Reactive Drop",
		// 		thumbnail: "https://www.freetogame.com/g/70/thumbnail.jpg",
		// 		short_description: "A free-to-play top-down tactical co-op expansion on the Alien swarm game and Source SDK.",
		// 		game_url: "https://www.freetogame.com/open/alien-swarm-reactive-drop",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Reactive Drop",
		// 		developer: "Reactive Drop",
		// 		release_date: "2017-04-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/alien-swarm-reactive-drop",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Catan Universe",
		// 		thumbnail: "https://www.freetogame.com/g/71/thumbnail.jpg",
		// 		short_description: "A free-to-play strategy game based on the classic board and card games. ",
		// 		game_url: "https://www.freetogame.com/open/catan-universe",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "United Soft Media",
		// 		developer: "Exozet",
		// 		release_date: "2017-04-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/catan-universe",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Krosmaga",
		// 		thumbnail: "https://www.freetogame.com/g/72/thumbnail.jpg",
		// 		short_description: "A free-to-play CCG/tower defense hybrid developed \r\nby Ankama Studio and published by \r\nAnkama Games. ",
		// 		game_url: "https://www.freetogame.com/open/krosmaga",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Ankama Games",
		// 		developer: "Ankama Studio",
		// 		release_date: "2017-04-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/krosmaga",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Revelation Online",
		// 		thumbnail: "https://www.freetogame.com/g/77/thumbnail.jpg",
		// 		short_description: "A free-to-play fantasy MMO developed by NetEase and published by My.com. ",
		// 		game_url: "https://www.freetogame.com/open/revelation-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "My.com",
		// 		developer: "NetEase",
		// 		release_date: "2017-03-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/revelation-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Line of Sight",
		// 		thumbnail: "https://www.freetogame.com/g/82/thumbnail.jpg",
		// 		short_description: "Free FPS game described as \"Bioshock meets Call of Duty\"! ",
		// 		game_url: "https://www.freetogame.com/open/line-of-sight",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "BlackSpot Entertainment",
		// 		developer: "BlackSpot Entertainment",
		// 		release_date: "2017-01-31",
		// 		freetogame_profile_url: "https://www.freetogame.com/line-of-sight",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Heavy Metal Machines",
		// 		thumbnail: "https://www.freetogame.com/g/83/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer vehicular combat game based in a post-apocalyptic world.",
		// 		game_url: "https://www.freetogame.com/open/heavy-metal-machines",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Hoplon",
		// 		developer: "Hoplon",
		// 		release_date: "2017-01-31",
		// 		freetogame_profile_url: "https://www.freetogame.com/heavy-metal-machines",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Infestation: The New Z",
		// 		thumbnail: "https://www.freetogame.com/g/85/thumbnail.jpg",
		// 		short_description: "A re-work of the open world zombie shooter game Infestation: Survivor Stories (or as it was formerly known \"The War Z\").",
		// 		game_url: "https://www.freetogame.com/open/infestation-new-z",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "OP Productions LLC",
		// 		developer: "Fredaikis AB",
		// 		release_date: "2016-11-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/infestation-new-z",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "MU Legend",
		// 		thumbnail: "https://www.freetogame.com/g/87/thumbnail.jpg",
		// 		short_description: "A free-to-play MMORPG developed by Webzen and the followup to MU Online. ",
		// 		game_url: "https://www.freetogame.com/open/mu-legend",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "VALOFE",
		// 		developer: "VALOFE",
		// 		release_date: "2017-03-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/mu-legend",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Shadowverse",
		// 		thumbnail: "https://www.freetogame.com/g/88/thumbnail.jpg",
		// 		short_description: "A free-to-play strategic CCG developed and published by Cygamesm the creators of Rage of Bahamut and Granblu Fantasy. ",
		// 		game_url: "https://www.freetogame.com/open/shadowverse",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Cygames, Inc.",
		// 		developer: "Cygames, Inc.",
		// 		release_date: "2016-10-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/shadowverse",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "AdventureQuest 3D",
		// 		thumbnail: "https://www.freetogame.com/g/89/thumbnail.jpg",
		// 		short_description: "A free to play cross-platform MMORPG from the creators of the original 2D RPG game.",
		// 		game_url: "https://www.freetogame.com/open/adventurequest-3d",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Artix Entertainment",
		// 		developer: "Artix Entertainment",
		// 		release_date: "2016-10-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/adventurequest-3d",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Eternal",
		// 		thumbnail: "https://www.freetogame.com/g/91/thumbnail.jpg",
		// 		short_description: "A strategy card game designed to take the best elements of Magic the Gathering, Hearthstone, and Hex and combine them all into one game.",
		// 		game_url: "https://www.freetogame.com/open/eternal",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Dire Wolf Digital",
		// 		developer: "Dire Wolf Digital",
		// 		release_date: "2018-11-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/eternal",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "One Tower",
		// 		thumbnail: "https://www.freetogame.com/g/92/thumbnail.jpg",
		// 		short_description: "A unique 1v1 MOBA known as a \"micro-moba\" developed and published by SkyReacher following a successful Kickstarter. ",
		// 		game_url: "https://www.freetogame.com/open/one-tower",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "SkyReacher Entertainment",
		// 		developer: "SkyReacher Entertainment",
		// 		release_date: "2016-11-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/one-tower",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Riding Club Championships",
		// 		thumbnail: "https://www.freetogame.com/g/93/thumbnail.jpg",
		// 		short_description: "An online competitive horse riding game inspired by traditional equestrian disciplines. ",
		// 		game_url: "https://www.freetogame.com/open/riding-club-championships",
		// 		genre: "Racing",
		// 		platform: "PC (Windows)",
		// 		publisher: "Artplant",
		// 		developer: "Artplant",
		// 		release_date: "2016-09-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/riding-club-championships",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Battlerite",
		// 		thumbnail: "https://www.freetogame.com/g/94/thumbnail.jpg",
		// 		short_description: "A free-to-play team arena brawler developed by Stunlock Studios. Players play as one of several available champions on teams in 2v2 or 3v3 matches. ",
		// 		game_url: "https://www.freetogame.com/open/battlerite",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Stunlock Studios",
		// 		developer: "Stunlock Studios",
		// 		release_date: "2016-09-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/battlerite",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Paladins",
		// 		thumbnail: "https://www.freetogame.com/g/95/thumbnail.jpg",
		// 		short_description: "A free-to-play team-based shooter developed and published by Hi-Rez Games, the creators of SMITE. ",
		// 		game_url: "https://www.freetogame.com/open/paladins",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Hi-Rez Studios",
		// 		developer: "Hi-Rez Studios",
		// 		release_date: "2016-09-16",
		// 		freetogame_profile_url: "https://www.freetogame.com/paladins",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Otherland",
		// 		thumbnail: "https://www.freetogame.com/g/97/thumbnail.jpg",
		// 		short_description: "A free-to-play MMO based on the popular novels by Tad Williams. ",
		// 		game_url: "https://www.freetogame.com/open/otherland",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "GmbH",
		// 		developer: "Drago Entertainment",
		// 		release_date: "2015-09-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/otherland",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
		
		// 		title: "Star Crusade",
		// 		thumbnail: "https://www.freetogame.com/g/99/thumbnail.jpg",
		// 		short_description: "A free-to-play sci-fi themed collectable card game developed and published by ZiMAD inc. ",
		// 		game_url: "https://www.freetogame.com/open/star-crusade",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "ZiMAD, Inc.",
		// 		developer: "ZiMAD, Inc.",
		// 		release_date: "2016-09-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/star-crusade",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Twin Saga",
		// 		thumbnail: "https://www.freetogame.com/g/100/thumbnail.jpg",
		// 		short_description: "A free-to-play anime-themed MMORPG featuring unique \r\nhousing and crafting systems. ",
		// 		game_url: "https://www.freetogame.com/open/twin-saga",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Aeria Games",
		// 		developer: "X-Legend Entertainment",
		// 		release_date: "2016-09-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/twin-saga",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "The Elder Scrolls: Legends",
		// 		thumbnail: "https://www.freetogame.com/g/102/thumbnail.jpg",
		// 		short_description: "A free-to-play CCG based on The Elder Scrolls franchise. ",
		// 		game_url: "https://www.freetogame.com/open/elder-scrolls-legends",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Bethesda Softworks",
		// 		developer: "Bethesda Softworks",
		// 		release_date: "2016-08-04",
		// 		freetogame_profile_url: "https://www.freetogame.com/elder-scrolls-legends",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Fallout Shelter",
		// 		thumbnail: "https://www.freetogame.com/g/104/thumbnail.jpg",
		// 		short_description: "A free-to-play simulation game based on Bethesda Game Studios' popular Fallout franchise. ",
		// 		game_url: "https://www.freetogame.com/open/fallout-shelter",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Bethesda Game Studios",
		// 		developer: "Bethesda Game Studios",
		// 		release_date: "2015-06-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/fallout-shelter",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Riders of Icarus",
		// 		thumbnail: "https://www.freetogame.com/g/106/thumbnail.jpg",
		// 		short_description: "A free-to-play action MMORPG featuring mounted, in-air combat. ",
		// 		game_url: "https://www.freetogame.com/open/riders-of-icarus",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "VALOFE",
		// 		developer: "WeMade",
		// 		release_date: "2016-07-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/riders-of-icarus",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Zula",
		// 		thumbnail: "https://www.freetogame.com/g/108/thumbnail.jpg",
		// 		short_description: "A free-to-play online FPS developed and published by IDC/Games. ",
		// 		game_url: "https://www.freetogame.com/open/zula",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "IDC/Games",
		// 		developer: "IDC/Games",
		// 		release_date: "2016-06-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/zula",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "LuckCatchers",
		// 		thumbnail: "https://www.freetogame.com/g/109/thumbnail.jpg",
		// 		short_description: "A free-to-play sandbox sim based on the novels of fantasy and steam-punk author A. Pehov.",
		// 		game_url: "https://www.freetogame.com/open/luckcatchers",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "DiP Online",
		// 		developer: "DiP Online",
		// 		release_date: "2016-06-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/luckcatchers",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "UFO Online: Invasion",
		// 		thumbnail: "https://www.freetogame.com/g/110/thumbnail.jpg",
		// 		short_description: "A free-to-play post-apocalyptic, turn-based tactical combat \r\nMMO developed by Bad Pixel. ",
		// 		game_url: "https://www.freetogame.com/open/ufo-online-invasion",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Bad Pixel",
		// 		developer: "Bad Pixel",
		// 		release_date: "2016-06-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/ufo-online-invasion",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Weapons Of Mythology",
		// 		thumbnail: "https://www.freetogame.com/g/112/thumbnail.jpg",
		// 		short_description: "A 3D free-to-play fantasy MMORPG published by IDC/Games. ",
		// 		game_url: "https://www.freetogame.com/open/weapons-of-mythology",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "IDC/Games",
		// 		developer: "Gamemag",
		// 		release_date: "2016-06-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/weapons-of-mythology",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Tree of Savior",
		// 		thumbnail: "https://www.freetogame.com/g/116/thumbnail.jpg",
		// 		short_description: "A fantasy 3D MMORPG with a massive freedom of choice, cute looking characters and a distinct art style. ",
		// 		game_url: "https://www.freetogame.com/open/tree-of-savior",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "IMC Games",
		// 		developer: "IMC Games",
		// 		release_date: "2016-05-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/tree-of-savior",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Astral Heroes",
		// 		thumbnail: "https://www.freetogame.com/g/117/thumbnail.jpg",
		// 		short_description: "A free-to-play collectable card game from the creators of Astral Masters. ",
		// 		game_url: "https://www.freetogame.com/open/astral-heroes",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Apus Software",
		// 		developer: "Apus Software",
		// 		release_date: "2016-03-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/astral-heroes",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Starbreak",
		// 		thumbnail: "https://www.freetogame.com/g/118/thumbnail.jpg",
		// 		short_description: "A Roguelike MMORPG with MetroidVania-style platformer \r\ngameplay! Castlevania and Metroid fans will \r\nlove this game! ",
		// 		game_url: "https://www.freetogame.com/open/starbreak",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows), Web Browser",
		// 		publisher: "Crunchy Games",
		// 		developer: "Crunchy Games",
		// 		release_date: "2016-05-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/starbreak",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Fantasy Tales Online",
		// 		thumbnail: "https://www.freetogame.com/g/119/thumbnail.jpg",
		// 		short_description: "A free-to-play, retro MMO featuring puzzles, a rich crafting system and Randomly generated dungeons! ",
		// 		game_url: "https://www.freetogame.com/open/fantasy-tales-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Cold Tea Studio ",
		// 		developer: "Cold Tea Studio ",
		// 		release_date: "2016-05-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/fantasy-tales-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Luna Online: Reborn",
		// 		thumbnail: "https://www.freetogame.com/g/120/thumbnail.jpg",
		// 		short_description: "A free-to-play, anime themed fantasy MMORPG and a remake of the previous Luna MMO! ",
		// 		game_url: "https://www.freetogame.com/open/luna-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Suba Games",
		// 		developer: "Suba Games",
		// 		release_date: "2017-10-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/luna-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Forza Motorsport 6: Apex",
		// 		thumbnail: "https://www.freetogame.com/g/121/thumbnail.jpg",
		// 		short_description: "A free-to-play MMO racing game that comes from makers of one of the most popular video game racing series ever. ",
		// 		game_url: "https://www.freetogame.com/open/forza-motorsport-6-apex",
		// 		genre: "Racing",
		// 		platform: "PC (Windows)",
		// 		publisher: "Microsoft",
		// 		developer: "Turn 10",
		// 		release_date: "2015-09-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/forza-motorsport-6-apex",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Holodrive",
		// 		thumbnail: "https://www.freetogame.com/g/124/thumbnail.jpg",
		// 		short_description: "A free-to-play 2D multiplayer shooter developed by BitCake Studio and published by Versus Evil in which players play as customizable robots or \"Dummys\". ",
		// 		game_url: "https://www.freetogame.com/open/holodrive",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Versus Evil",
		// 		developer: "BitCake Studio",
		// 		release_date: "2016-03-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/holodrive",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Atom Universe",
		// 		thumbnail: "https://www.freetogame.com/g/125/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer online social Virtual World set in a theme park.",
		// 		game_url: "https://www.freetogame.com/open/atom-universe",
		// 		genre: "Social",
		// 		platform: "PC (Windows)",
		// 		publisher: "Atom Republic",
		// 		developer: "Atom Republic",
		// 		release_date: "2016-02-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/atom-universe",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Spellweaver",
		// 		thumbnail: "https://www.freetogame.com/g/128/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer online collectible card \r\ngame that requires deep strategic and \r\nthinking.",
		// 		game_url: "https://www.freetogame.com/open/spellweaver",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Dream Reactor",
		// 		developer: "Dream Reactor",
		// 		release_date: "2016-02-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/spellweaver",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "SNOW",
		// 		thumbnail: "https://www.freetogame.com/g/130/thumbnail.jpg",
		// 		short_description: "A free-to-play skiing and snowboarding game, compete solo or with friends in multiplayer modes.",
		// 		game_url: "https://www.freetogame.com/open/snow",
		// 		genre: "Sports",
		// 		platform: "PC (Windows)",
		// 		publisher: "Poppermost Productions",
		// 		developer: "Poppermost Productions",
		// 		release_date: "2016-01-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/snow",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "War Trigger 3",
		// 		thumbnail: "https://www.freetogame.com/g/134/thumbnail.jpg",
		// 		short_description: "A MMO shooter with infantry, vehicle, and air combat across massive maps! ",
		// 		game_url: "https://www.freetogame.com/open/wt3",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Rocketeer Games",
		// 		developer: "Rocketeer Games",
		// 		release_date: "2015-12-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/wt3",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "VEGA Conflict",
		// 		thumbnail: "https://www.freetogame.com/g/136/thumbnail.jpg",
		// 		short_description: "A Cross-Platform free to play 2D sci-fi strategy MMO.",
		// 		game_url: "https://www.freetogame.com/open/vega-conflict",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "KIXEYE",
		// 		developer: "KIXEYE",
		// 		release_date: "2015-12-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/vega-conflict",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Metal War Online: Retribution",
		// 		thumbnail: "https://www.freetogame.com/g/137/thumbnail.jpg",
		// 		short_description: "A high-speed multiplayer online concept car shooter game with racing elements!",
		// 		game_url: "https://www.freetogame.com/open/metal-war-online",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "GDT Limited",
		// 		developer: "GDT Limited",
		// 		release_date: "2015-12-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/metal-war-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Immortal Empire",
		// 		thumbnail: "https://www.freetogame.com/g/139/thumbnail.jpg",
		// 		short_description: "A free to play multiplayer strategy RPG developed by Tactic Studios.",
		// 		game_url: "https://www.freetogame.com/open/immortal-empire",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Tactic Studios Inc.",
		// 		developer: "Tactic Studios Inc.",
		// 		release_date: "2015-12-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/immortal-empire",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "America’s Army: Proving Grounds",
		// 		thumbnail: "https://www.freetogame.com/g/149/thumbnail.jpg",
		// 		short_description: "Take a first person shooter, have the game developed by the U.S. Army and you’ve got America’s Army.",
		// 		game_url: "https://www.freetogame.com/open/americas-army",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "U.S. Army",
		// 		developer: "U.S. Army",
		// 		release_date: "2015-10-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/americas-army",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "WARMODE",
		// 		thumbnail: "https://www.freetogame.com/g/152/thumbnail.jpg",
		// 		short_description: "A Free to play multiplayer online shooter. Sight in enemies to master Headshots, Double Kills and Triple Kills! ",
		// 		game_url: "https://www.freetogame.com/open/warmode",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "WARTEAM",
		// 		developer: "WARTEAM",
		// 		release_date: "2015-08-26",
		// 		freetogame_profile_url: "https://www.freetogame.com/warmode",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Sphere 3: Enchanted World",
		// 		thumbnail: "https://www.freetogame.com/g/154/thumbnail.jpg",
		// 		short_description: "A fantasy action MMORPG with a non-target combat system.",
		// 		game_url: "https://www.freetogame.com/open/sphere-3",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "NIKITA ONLINE",
		// 		developer: "NIKITA ONLINE",
		// 		release_date: "2015-08-18",
		// 		freetogame_profile_url: "https://www.freetogame.com/sphere-3",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Fishing Planet",
		// 		thumbnail: "https://www.freetogame.com/g/157/thumbnail.jpg",
		// 		short_description: "A Free to play realistic online first-person multiplayer fishing simulator! ",
		// 		game_url: "https://www.freetogame.com/open/fishing-planet",
		// 		genre: "Sports",
		// 		platform: "PC (Windows)",
		// 		publisher: "Fishing Planet LLC",
		// 		developer: "Fishing Planet LLC",
		// 		release_date: "2015-08-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/fishing-planet",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Codename CURE",
		// 		thumbnail: "https://www.freetogame.com/g/159/thumbnail.jpg",
		// 		short_description: "A free to play 3D MMOFPS featuring cooperative play, and objective-based missions.",
		// 		game_url: "https://www.freetogame.com/open/codename-cure",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Hoobalugalar_X",
		// 		developer: "Hoobalugalar_X",
		// 		release_date: "2015-07-18",
		// 		freetogame_profile_url: "https://www.freetogame.com/codename-cure",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Skyforge",
		// 		thumbnail: "https://www.freetogame.com/g/161/thumbnail.jpg",
		// 		short_description: "A impressive Free to play MMORPG where you can become a god! ",
		// 		game_url: "https://www.freetogame.com/open/skyforge",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "My.com",
		// 		developer: "Allods Team & Obsidian Entertainment Collaboration",
		// 		release_date: "2015-07-16",
		// 		freetogame_profile_url: "https://www.freetogame.com/skyforge",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Card Hunter",
		// 		thumbnail: "https://www.freetogame.com/g/163/thumbnail.jpg",
		// 		short_description: "A free online collectible card game which blends together role-playing, card play and tactical combat. ",
		// 		game_url: "https://www.freetogame.com/open/card-hunter",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows), Web Browser",
		// 		publisher: "Blue Manchu",
		// 		developer: "Blue Manchu",
		// 		release_date: "2015-07-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/card-hunter",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Echo of Soul",
		// 		thumbnail: "https://www.freetogame.com/g/165/thumbnail.jpg",
		// 		short_description: "A 3D fantasy MMORPG with fast-paced PvP combat and lots of quests!",
		// 		game_url: "https://www.freetogame.com/open/eos",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Aeria Games",
		// 		developer: "Nvius",
		// 		release_date: "2015-05-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/eos",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Salem",
		// 		thumbnail: "https://www.freetogame.com/g/167/thumbnail.jpg",
		// 		short_description: "A free-to-play, sandbox type MMO based on the times and trials of living.",
		// 		game_url: "https://www.freetogame.com/open/salem",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Mortal Moments",
		// 		developer: "John Carver",
		// 		release_date: "2015-06-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/salem",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Heroes of the Storm",
		// 		thumbnail: "https://www.freetogame.com/g/168/thumbnail.jpg",
		// 		short_description: "A free to play MOBA developed by Blizzard Entertainment.",
		// 		game_url: "https://www.freetogame.com/open/heroes-of-the-storm",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: " Blizzard Entertainment",
		// 		developer: " Blizzard Entertainment",
		// 		release_date: "2015-06-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/heroes-of-the-storm",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dirty Bomb",
		// 		thumbnail: "https://www.freetogame.com/g/169/thumbnail.jpg",
		// 		short_description: "A free-to-play first person shooter multiplayer game set in a post-apocalyptic London.",
		// 		game_url: "https://www.freetogame.com/open/dirty-bomb",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "\r\nWarchest Ltd.",
		// 		developer: "Splash Damage",
		// 		release_date: "2015-06-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/dirty-bomb",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Block N Load",
		// 		thumbnail: "https://www.freetogame.com/g/173/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer online shooter game that looks like a mix of Minecraft and Team Fortress 2.",
		// 		game_url: "https://www.freetogame.com/open/block-n-load",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Jagex",
		// 		developer: "Jagex, Artplant",
		// 		release_date: "2015-04-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/block-n-load",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Survarium",
		// 		thumbnail: "https://www.freetogame.com/g/175/thumbnail.jpg",
		// 		short_description: "A free to play post-apocalyptic online FPS game.",
		// 		game_url: "https://www.freetogame.com/open/survarium",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Vostok Games",
		// 		developer: "Vostok Games",
		// 		release_date: "2015-04-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/survarium",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dungeon Fighter Online",
		// 		thumbnail: "https://www.freetogame.com/g/177/thumbnail.jpg",
		// 		short_description: "A free to play arcade-style side-scrolling action game mixed with RPG elements.",
		// 		game_url: "https://www.freetogame.com/open/dungeon-fighter-online",
		// 		genre: "Fighting",
		// 		platform: "PC (Windows)",
		// 		publisher: "Neople",
		// 		developer: "Neople (Subsidiary of Nexon)",
		// 		release_date: "2015-03-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/dungeon-fighter-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Transformice",
		// 		thumbnail: "https://www.freetogame.com/g/179/thumbnail.jpg",
		// 		short_description: "A cute little free-to-play MMO platformer.",
		// 		game_url: "https://www.freetogame.com/open/transformice",
		// 		genre: "Fantasy",
		// 		platform: "PC (Windows), Web Browser",
		// 		publisher: "Atelier 801",
		// 		developer: "Atelier 801",
		// 		release_date: "2015-01-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/transformice",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Gear Up",
		// 		thumbnail: "https://www.freetogame.com/g/180/thumbnail.jpg",
		// 		short_description: "Control your unique tank or robot in multiplayer arcade action!",
		// 		game_url: "https://www.freetogame.com/open/gear-up",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Doctor Entertainment",
		// 		developer: "Doctor Entertainment",
		// 		release_date: "2015-01-29",
		// 		freetogame_profile_url: "https://www.freetogame.com/gear-up",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "8BitMMO",
		// 		thumbnail: "https://www.freetogame.com/g/181/thumbnail.jpg",
		// 		short_description: "A free to play retro­-style 2D MMO and a giant construction sandbox! ",
		// 		game_url: "https://www.freetogame.com/open/8bitmmo",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows), Web Browser",
		// 		publisher: "Archive Entertainment ",
		// 		developer: "Archive Entertainment ",
		// 		release_date: "2015-01-26",
		// 		freetogame_profile_url: "https://www.freetogame.com/8bitmmo",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dungeon Defenders 2",
		// 		thumbnail: "https://www.freetogame.com/g/182/thumbnail.jpg",
		// 		short_description: "A free-to-play cooperative 3D tower-defense game by Trendy Entertainment.",
		// 		game_url: "https://www.freetogame.com/open/dungeon-defenders-2",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Trendy Entertainment",
		// 		developer: "Trendy Entertainment",
		// 		release_date: "2014-12-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/dungeon-defenders-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Blockade 3D",
		// 		thumbnail: "https://www.freetogame.com/g/184/thumbnail.jpg",
		// 		short_description: "A free to play FPS in an editable procedural world.",
		// 		game_url: "https://www.freetogame.com/open/blockade-3d",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Shumkov Dmitriy",
		// 		developer: "Shumkov Dmitriy",
		// 		release_date: "2014-11-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/blockade-3d",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Eldevin",
		// 		thumbnail: "https://www.freetogame.com/g/185/thumbnail.jpg",
		// 		short_description: "A indie story-driven Free to Play MMORPG.",
		// 		game_url: "https://www.freetogame.com/open/eldevin",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows), Web Browser",
		// 		publisher: "Hunted Cow Studios",
		// 		developer: "Hunted Cow Studios",
		// 		release_date: "2014-11-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/eldevin",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Double Action",
		// 		thumbnail: "https://www.freetogame.com/g/186/thumbnail.jpg",
		// 		short_description: "A free to play FPS with bullet time and stylish kills!",
		// 		game_url: "https://www.freetogame.com/open/double-action",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Double Action Factory ",
		// 		developer: "Double Action Factory ",
		// 		release_date: "2014-10-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/double-action",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Pox Nora",
		// 		thumbnail: "https://www.freetogame.com/g/187/thumbnail.jpg",
		// 		short_description: "A multiplayer online game that combines a collectible card game with a turn-based strategy game.",
		// 		game_url: "https://www.freetogame.com/open/pox-nora",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Desert Owl Games LLC ",
		// 		developer: "Desert Owl Games LLC ",
		// 		release_date: "2014-10-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/pox-nora",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Counter-Strike Nexon: Studio",
		// 		thumbnail: "https://www.freetogame.com/g/188/thumbnail.jpg",
		// 		short_description: "What's better than Counter-Strike? Counter-Strike with more modes and Zombies!",
		// 		game_url: "https://www.freetogame.com/open/counter-strike-nexon",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Nexon Europe GmbH",
		// 		developer: "Nexon",
		// 		release_date: "2014-10-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/counter-strike-nexon",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Uncharted Waters Online",
		// 		thumbnail: "https://www.freetogame.com/g/189/thumbnail.jpg",
		// 		short_description: "A free to play adventure MMORPG set on the high seas! ",
		// 		game_url: "https://www.freetogame.com/open/uncharted-waters-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Papaya Play ",
		// 		developer: "KOEI TECMO GAMES CO., LTD. ",
		// 		release_date: "2014-10-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/uncharted-waters-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Ryzom",
		// 		thumbnail: "https://www.freetogame.com/g/190/thumbnail.jpg",
		// 		short_description: "An MMORPG where players are immersed in a massive sandbox world.",
		// 		game_url: "https://www.freetogame.com/open/ryzom",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Winch Gate",
		// 		developer: "Nevrax",
		// 		release_date: "2004-09-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/ryzom",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "WAKFU",
		// 		thumbnail: "https://www.freetogame.com/g/192/thumbnail.jpg",
		// 		short_description: "A 2D tactical turn-based fantasy MMORPG developed by Ankama Games, in conjunction with Square Enix.",
		// 		game_url: "https://www.freetogame.com/open/wakfu",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Ankama Games",
		// 		developer: "Ankama Studio",
		// 		release_date: "2014-09-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/wakfu",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Infinity Wars",
		// 		thumbnail: "https://www.freetogame.com/g/193/thumbnail.jpg",
		// 		short_description: "A MMO trading card game, Build up your decks and customize them with tons of factional cards! ",
		// 		game_url: "https://www.freetogame.com/open/infinity-wars",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Lightmare Studios",
		// 		developer: "Lightmare Studios",
		// 		release_date: "2014-09-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/infinity-wars",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Divine Souls",
		// 		thumbnail: "https://www.freetogame.com/g/195/thumbnail.jpg",
		// 		short_description: "A action-based MMORPG in a fantasy world with magic and technology. ",
		// 		game_url: "https://www.freetogame.com/open/divine-souls",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Suba Games ",
		// 		developer: "GamePrix ",
		// 		release_date: "2014-08-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/divine-souls",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Cubic Castles",
		// 		thumbnail: "https://www.freetogame.com/g/196/thumbnail.jpg",
		// 		short_description: "A free to play 3D Platforming and a open world building game.",
		// 		game_url: "https://www.freetogame.com/open/cubic-castles",
		// 		genre: "MMO",
		// 		platform: "PC (Windows)",
		// 		publisher: "Cosmic Cow LLC",
		// 		developer: "Cosmic Cow LLC",
		// 		release_date: "2014-08-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/cubic-castles",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Creativerse",
		// 		thumbnail: "https://www.freetogame.com/g/198/thumbnail.jpg",
		// 		short_description: "Playful Corporation enters the sandbox, voxel world with their free-to-play title Creativers.",
		// 		game_url: "https://www.freetogame.com/open/creativerse",
		// 		genre: "MMO",
		// 		platform: "PC (Windows)",
		// 		publisher: "Playful Corporation",
		// 		developer: "Playful Corporation",
		// 		release_date: "2014-08-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/creativerse",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Royal Quest",
		// 		thumbnail: "https://www.freetogame.com/g/199/thumbnail.jpg",
		// 		short_description: "A free to play fantasy MMORPG game with unique PvPvE locations, PvP Arenas, Battlegrounds and Castle Sieges. ",
		// 		game_url: "https://www.freetogame.com/open/royal-quest",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "1C Online Games ",
		// 		developer: "Katauri ",
		// 		release_date: "2014-08-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/royal-quest",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Guns and Robots",
		// 		thumbnail: "https://www.freetogame.com/g/200/thumbnail.jpg",
		// 		short_description: "A free to play online third person shooter with massive customization! ",
		// 		game_url: "https://www.freetogame.com/open/guns-and-robots",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Masthead Studios Ltd, Thegamewallstudios, Gamigo AG",
		// 		developer: "Masthead Studios Ltd",
		// 		release_date: "2014-08-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/guns-and-robots",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Heroes & Generals",
		// 		thumbnail: "https://www.freetogame.com/g/202/thumbnail.jpg",
		// 		short_description: "A World War II-based MMOFPS that mixes infantry, armor, and aircraft.",
		// 		game_url: "https://www.freetogame.com/open/heroes-and-generals",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Reto-Moto",
		// 		developer: "Reto-Moto",
		// 		release_date: "2014-07-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/heroes-and-generals",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Robocraft",
		// 		thumbnail: "https://www.freetogame.com/g/203/thumbnail.jpg",
		// 		short_description: "A free-to-play MMO sandbox building game! ",
		// 		game_url: "https://www.freetogame.com/open/robocraft",
		// 		genre: "MMO",
		// 		platform: "PC (Windows)",
		// 		publisher: "Freejam",
		// 		developer: "Freejam",
		// 		release_date: "2014-07-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/robocraft",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Unturned",
		// 		thumbnail: "https://www.freetogame.com/g/204/thumbnail.jpg",
		// 		short_description: "A independently developed free-to-play MMO survival \r\ngame! ",
		// 		game_url: "https://www.freetogame.com/open/unturned",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Smartly Dressed Games",
		// 		developer: "Smartly Dressed Games",
		// 		release_date: "2014-07-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/unturned",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Elsword",
		// 		thumbnail: "https://www.freetogame.com/g/205/thumbnail.jpg",
		// 		short_description: "A Free to Play 3D side scrolling action MMORPG with many heroes.",
		// 		game_url: "https://www.freetogame.com/open/elsword",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "KOG Games",
		// 		developer: "KOG",
		// 		release_date: "2011-03-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/elsword",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Aura Kingdom",
		// 		thumbnail: "https://www.freetogame.com/g/206/thumbnail.jpg",
		// 		short_description: "Aura Kingdom is a 3D free-to-play Anime MMORPG from the same great studio that brought us Eden Eterna.",
		// 		game_url: "https://www.freetogame.com/open/aura-kingdom",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Aeria Games",
		// 		developer: "X-Legend",
		// 		release_date: "2013-12-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/aura-kingdom",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Warface",
		// 		thumbnail: "https://www.freetogame.com/g/207/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer online FPS from Crytek, makers of the Far Cry and Crysis series of games.",
		// 		game_url: "https://www.freetogame.com/open/warface",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Crytek",
		// 		developer: "Crytek",
		// 		release_date: "2014-07-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/warface",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Freestyle2: Street Basketball",
		// 		thumbnail: "https://www.freetogame.com/g/209/thumbnail.jpg",
		// 		short_description: "A free to play MMO street basketball game. Team up with the best street ballers! ",
		// 		game_url: "https://www.freetogame.com/open/freestyle2-street-basketball",
		// 		genre: "Sports",
		// 		platform: "PC (Windows)",
		// 		publisher: "Joycity",
		// 		developer: "Joycity",
		// 		release_date: "2014-06-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/freestyle2-street-basketball",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Fistful of Frags",
		// 		thumbnail: "https://www.freetogame.com/g/210/thumbnail.jpg",
		// 		short_description: "A first person shooter game set in the Wild West! ",
		// 		game_url: "https://www.freetogame.com/open/fistful-of-frags",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Fistful of Frags Team",
		// 		developer: "Fistful of Frags Team",
		// 		release_date: "2014-05-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/fistful-of-frags",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "GunZ 2: The Second Duel",
		// 		thumbnail: "https://www.freetogame.com/g/211/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer Third Person Shooter and follow up to the successful GunZ: The Duel. ",
		// 		game_url: "https://www.freetogame.com/open/gunz-2",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "MAIET Entertainme",
		// 		developer: "MAIET Entertainme",
		// 		release_date: "2014-05-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/gunz-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Brawlhalla",
		// 		thumbnail: "https://www.freetogame.com/g/212/thumbnail.jpg",
		// 		short_description: "A free-to-play 2D platform fighter inspired by the Smash Bros.",
		// 		game_url: "https://www.freetogame.com/open/brawlhalla",
		// 		genre: "Fighting",
		// 		platform: "PC (Windows)",
		// 		publisher: "Blue Mammoth Games",
		// 		developer: "Blue Mammoth Games",
		// 		release_date: "2015-11-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/brawlhalla",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Archeblade",
		// 		thumbnail: "https://www.freetogame.com/g/213/thumbnail.jpg",
		// 		short_description: "A free-to-play PvP-based multiplayer action game based on a Korean Fantasy Novel.",
		// 		game_url: "https://www.freetogame.com/open/archeblade",
		// 		genre: "Fighting",
		// 		platform: "PC (Windows)",
		// 		publisher: "CodeBrush Games",
		// 		developer: "CodeBrush Games",
		// 		release_date: "2014-04-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/archeblade",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Villagers and Heroes",
		// 		thumbnail: "https://www.freetogame.com/g/214/thumbnail.jpg",
		// 		short_description: "A free-to-play fantasy sandbox 3D MMORPG that has plenty to offer gamers.",
		// 		game_url: "https://www.freetogame.com/open/villagers-and-heroes",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Mad Otter Games",
		// 		developer: "Mad Otter Games",
		// 		release_date: "2014-04-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/villagers-and-heroes",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Hex",
		// 		thumbnail: "https://www.freetogame.com/g/215/thumbnail.jpg",
		// 		short_description: "HEX combines roleplaying aspects of a MMO with the collectible and strategic gameplay of a Trading Card Game.",
		// 		game_url: "https://www.freetogame.com/open/hex",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Hex Entertainment, Gameforge",
		// 		developer: "Cryptozoic Entertainment",
		// 		release_date: "2014-04-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/hex",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Prime World",
		// 		thumbnail: "https://www.freetogame.com/g/216/thumbnail.jpg",
		// 		short_description: "A unique action-­packed Moba game! ",
		// 		game_url: "https://www.freetogame.com/open/prime-world",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Nival",
		// 		developer: "Nival",
		// 		release_date: "2014-03-31",
		// 		freetogame_profile_url: "https://www.freetogame.com/prime-world",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Smite",
		// 		thumbnail: "https://www.freetogame.com/g/217/thumbnail.jpg",
		// 		short_description: "A popular free-to-play 3D MOBA where you take on the role of an ancient god.",
		// 		game_url: "https://www.freetogame.com/open/smite",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Hi-Rez Studios",
		// 		developer: "Hi-Rez Studios",
		// 		release_date: "2014-03-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/smite",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Hearthstone: Heroes of Warcraft",
		// 		thumbnail: "https://www.freetogame.com/g/220/thumbnail.jpg",
		// 		short_description: "Blizzard's free-to-play collectible card game that \r\ndraws its inspiration from World of Warcraft. ",
		// 		game_url: "https://www.freetogame.com/open/hearthstone-heroes-warcraft",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Blizzard Entertainment",
		// 		developer: "Blizzard Entertainment",
		// 		release_date: "2014-01-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/hearthstone-heroes-warcraft",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Lucent Heart",
		// 		thumbnail: "https://www.freetogame.com/g/221/thumbnail.jpg",
		// 		short_description: "A free to play MMORPG with a match making system that helps players find their soulmates.",
		// 		game_url: "https://www.freetogame.com/open/lucent-heart",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Suba Games",
		// 		developer: "Playcoco (Subsidiary of Gamania)",
		// 		release_date: "2014-01-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/lucent-heart",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "MechWarrior Online",
		// 		thumbnail: "https://www.freetogame.com/g/222/thumbnail.jpg",
		// 		short_description: "A free-to-play PvP game that's a faithful adaptation of the popular MechWarrior strategy board games.",
		// 		game_url: "https://www.freetogame.com/open/mechwarrior-online",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Piranha Games Inc.",
		// 		developer: "Piranha Games Inc.",
		// 		release_date: "2015-12-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/mechwarrior-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "World of Warplanes",
		// 		thumbnail: "https://www.freetogame.com/g/224/thumbnail.jpg",
		// 		short_description: "A free-to-play flight combat MMO brought to you by Wargaming.",
		// 		game_url: "https://www.freetogame.com/open/world-of-warplanes",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Wargaming",
		// 		developer: "Wargaming",
		// 		release_date: "2013-11-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/world-of-warplanes",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "RIFT",
		// 		thumbnail: "https://www.freetogame.com/g/225/thumbnail.jpg",
		// 		short_description: "Trion Worlds’ flagship fantasy massively multiplayer online role-playing game.",
		// 		game_url: "https://www.freetogame.com/open/rift",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Trion Worlds",
		// 		developer: "Trion Worlds",
		// 		release_date: "2013-10-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/rift",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Path of Exile",
		// 		thumbnail: "https://www.freetogame.com/g/226/thumbnail.jpg",
		// 		short_description: "A free-to-play massively multiplayer online ARPG in the style of Diablo.",
		// 		game_url: "https://www.freetogame.com/open/path-of-exile",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Grinding Gear Games",
		// 		developer: "Grinding Gear Games",
		// 		release_date: "2013-10-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/path-of-exile",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dota 2",
		// 		thumbnail: "https://www.freetogame.com/g/229/thumbnail.jpg",
		// 		short_description: "Valve's premiere competitive free to play MOBA.",
		// 		game_url: "https://www.freetogame.com/open/dota-2",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Valve",
		// 		developer: "Valve",
		// 		release_date: "2013-07-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/dota-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Ragnarok Online 2",
		// 		thumbnail: "https://www.freetogame.com/g/230/thumbnail.jpg",
		// 		short_description: "A 3D fantasy MMORPG, and sequel to the popular Ragnarok Online.",
		// 		game_url: "https://www.freetogame.com/open/ragnarok-online-2",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Gravity Interactive",
		// 		developer: "Gravity, Inc.",
		// 		release_date: "2013-05-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/ragnarok-online-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Panzar",
		// 		thumbnail: "https://www.freetogame.com/g/231/thumbnail.jpg",
		// 		short_description: "A free-to-play multiplayer third-person shooter with \r\nrpg elements and CryEngine 3 powered \r\ngraphics.",
		// 		game_url: "https://www.freetogame.com/open/panzar",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Panzar",
		// 		developer: "Troxit Service",
		// 		release_date: "2013-04-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/panzar",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Age of Wushu",
		// 		thumbnail: "https://www.freetogame.com/g/232/thumbnail.jpg",
		// 		short_description: "A free-to-play martial arts action MMORPG with a large open world and sandbox-like features.",
		// 		game_url: "https://www.freetogame.com/open/age-of-wushu",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Snail Games",
		// 		developer: "Snail Games",
		// 		release_date: "2012-12-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/age-of-wushu",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Kingdom Wars",
		// 		thumbnail: "https://www.freetogame.com/g/233/thumbnail.jpg",
		// 		short_description: "A free to play 3D MMORTS with real-time siege combat.",
		// 		game_url: "https://www.freetogame.com/open/kingdom-wars",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Reverie World Studios, INC",
		// 		developer: "Reverie World Studios, INC",
		// 		release_date: "2013-04-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/kingdom-wars",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Champions of Regnum",
		// 		thumbnail: "https://www.freetogame.com/g/234/thumbnail.jpg",
		// 		short_description: "A free to play, realm versus realm fantasy MMORPG.",
		// 		game_url: "https://www.freetogame.com/open/champions-of-regnum",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "NGD Studios",
		// 		developer: "NGD Studios",
		// 		release_date: "2013-02-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/champions-of-regnum",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Star Conflict",
		// 		thumbnail: "https://www.freetogame.com/g/235/thumbnail.jpg",
		// 		short_description: "A free to play action-packed MMO space simulation game.",
		// 		game_url: "https://www.freetogame.com/open/star-conflict",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Gaijin Entertainment",
		// 		developer: "Star Gem Inc.",
		// 		release_date: "2013-02-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/star-conflict",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "The Banner Saga: Factions",
		// 		thumbnail: "https://www.freetogame.com/g/236/thumbnail.jpg",
		// 		short_description: "A free to play strategy RPG game with stunning hand-animated artwork and focus on multiplayer combat.",
		// 		game_url: "https://www.freetogame.com/open/banner-saga-factions",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Versus Evil",
		// 		developer: "Stoic ",
		// 		release_date: "2013-02-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/banner-saga-factions",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Tera",
		// 		thumbnail: "https://www.freetogame.com/g/238/thumbnail.jpg",
		// 		short_description: "A free to play action-packed MMORPG with real-time Combat!",
		// 		game_url: "https://www.freetogame.com/open/tera",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "En Masse Entertainment",
		// 		developer: "Bluehole Studio",
		// 		release_date: "2013-02-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/tera",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dogs of War Online",
		// 		thumbnail: "https://www.freetogame.com/g/239/thumbnail.jpg",
		// 		short_description: "Based on the famous miniature board game Confrontation!",
		// 		game_url: "https://www.freetogame.com/open/dogs-war-online",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Cyanide",
		// 		developer: "Cyanide",
		// 		release_date: "2014-02-04",
		// 		freetogame_profile_url: "https://www.freetogame.com/dogs-war-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Epic Cards Battle",
		// 		thumbnail: "https://www.freetogame.com/g/240/thumbnail.jpg",
		// 		short_description: "A free to play online strategic trading card game with dozens of cards and five factions. ",
		// 		game_url: "https://www.freetogame.com/open/epic-card-battle",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "momoStorm Entertainment",
		// 		developer: "momoStorm",
		// 		release_date: "2013-01-29",
		// 		freetogame_profile_url: "https://www.freetogame.com/epic-card-battle",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Everquest",
		// 		thumbnail: "https://www.freetogame.com/g/241/thumbnail.jpg",
		// 		short_description: "A fantasy MMORPG nearly two decades in the making. In fact, it’s the game that started it all! ",
		// 		game_url: "https://www.freetogame.com/open/everquest",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Daybreak Games",
		// 		developer: "Daybreak Games",
		// 		release_date: "2012-12-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/everquest",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Mabinogi",
		// 		thumbnail: "https://www.freetogame.com/g/242/thumbnail.jpg",
		// 		short_description: "A free-to-play adventure MMORPG where you can create a unique character and live your fantasy life.",
		// 		game_url: "https://www.freetogame.com/open/mabinogi",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Nexon America Inc. ",
		// 		developer: "NEXON Korea Corp.",
		// 		release_date: "2012-12-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/mabinogi",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "PlanetSide 2",
		// 		thumbnail: "https://www.freetogame.com/g/243/thumbnail.jpg",
		// 		short_description: "A free-to-play open-world FPS that pits three factions against each other in a never-ending war.",
		// 		game_url: "https://www.freetogame.com/open/planetside-2",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Daybreak Games",
		// 		developer: "Daybreak Games",
		// 		release_date: "2012-11-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/planetside-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "AirMech Strike",
		// 		thumbnail: "https://www.freetogame.com/g/244/thumbnail.jpg",
		// 		short_description: "A free to play Action RTS with MOBA elements.",
		// 		game_url: "https://www.freetogame.com/open/airmech",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Carbon Games",
		// 		developer: "Carbon Games",
		// 		release_date: "2012-11-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/airmech",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Pirate 101",
		// 		thumbnail: "https://www.freetogame.com/g/246/thumbnail.jpg",
		// 		short_description: "A free to play Pirate-themed MMORPG designed with kids in mind.",
		// 		game_url: "https://www.freetogame.com/open/pirate-101",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "KingsIsle Entertainment",
		// 		developer: "KingsIsle Entertainment",
		// 		release_date: "2012-10-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/pirate-101",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Continent of the Ninth Seal",
		// 		thumbnail: "https://www.freetogame.com/g/248/thumbnail.jpg",
		// 		short_description: "A free MMORPG where players take part as heroes of Glenheim to stand together against Nefer.",
		// 		game_url: "https://www.freetogame.com/open/c9",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Webzen",
		// 		developer: "NHN Games (Acquired by Webzen)",
		// 		release_date: "2012-09-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/c9",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "RPG MO",
		// 		thumbnail: "https://www.freetogame.com/g/249/thumbnail.jpg",
		// 		short_description: "A nostalgic free MMORPG reminiscent of old-school RPG's like Ultima and Runescape.",
		// 		game_url: "https://www.freetogame.com/open/rpg-mo",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows), Web Browser",
		// 		publisher: "Marxnet",
		// 		developer: "Marxnet",
		// 		release_date: "2012-07-18",
		// 		freetogame_profile_url: "https://www.freetogame.com/rpg-mo",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "The Lord of the Rings Online",
		// 		thumbnail: "https://www.freetogame.com/g/251/thumbnail.jpg",
		// 		short_description: "A free to play MMORPG set in the world of J.R.R. Tolkien's \r\nclassic fantasy saga.",
		// 		game_url: "https://www.freetogame.com/open/lotro",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Warner Bros. Interactive Entertainment",
		// 		developer: "Turbine, Inc.",
		// 		release_date: "2001-04-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/lotro",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "AION",
		// 		thumbnail: "https://www.freetogame.com/g/254/thumbnail.jpg",
		// 		short_description: "A high fantasy, free-to-play MMORPG that centers on the war between the game’s two factions: The Asmodians and the Elyos.",
		// 		game_url: "https://www.freetogame.com/open/aion",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "NCSOFT",
		// 		developer: "NCSOFT",
		// 		release_date: "2008-11-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/aion",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Stronghold Kingdoms",
		// 		thumbnail: "https://www.freetogame.com/g/255/thumbnail.jpg",
		// 		short_description: "A strategy based building/warfare game based on the long running Strongholds PC game series.",
		// 		game_url: "https://www.freetogame.com/open/stronghold-kingdoms",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "FireFly Studios",
		// 		developer: "FireFly Studios",
		// 		release_date: "2012-02-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/stronghold-kingdoms",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Realm of the Mad God",
		// 		thumbnail: "https://www.freetogame.com/g/256/thumbnail.jpg",
		// 		short_description: "A fast paced 2d free to play MMO shooter game with a retro 8-bit style.",
		// 		game_url: "https://www.freetogame.com/open/realm-mad-god",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows), Web Browser",
		// 		publisher: "Kabam",
		// 		developer: "Wild Shadow Studios",
		// 		release_date: "2012-02-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/realm-mad-god",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Star Wars: The Old Republic",
		// 		thumbnail: "https://www.freetogame.com/g/257/thumbnail.jpg",
		// 		short_description: "A 3D sci-fi MMORPG based on the popular Star Wars universe and brought to you by Bioware. ",
		// 		game_url: "https://www.freetogame.com/open/swtor",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Electronic Arts",
		// 		developer: "Bioware",
		// 		release_date: "2011-12-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/swtor",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "APB Reloaded",
		// 		thumbnail: "https://www.freetogame.com/g/258/thumbnail.jpg",
		// 		short_description: "A free to play 3D MMO third person shooter game brought to you by GTA creator.",
		// 		game_url: "https://www.freetogame.com/open/apb",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Reloaded Games",
		// 		developer: "Reloaded Productions",
		// 		release_date: "2010-06-29",
		// 		freetogame_profile_url: "https://www.freetogame.com/apb",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "DC Universe Online",
		// 		thumbnail: "https://www.freetogame.com/g/260/thumbnail.jpg",
		// 		short_description: "A free-to-play, comics based MMORPG set in the popular DC Comics universe.",
		// 		game_url: "https://www.freetogame.com/open/dcuo",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Daybreak Games",
		// 		developer: "Daybreak Games",
		// 		release_date: "2011-01-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/dcuo",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "No More Room in Hell",
		// 		thumbnail: "https://www.freetogame.com/g/261/thumbnail.jpg",
		// 		short_description: "A free to play cooperative FPS survival horror mod for the Source Engine.",
		// 		game_url: "https://www.freetogame.com/open/no-more-room-in-hell",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Lever Games",
		// 		developer: "No More Room in Hell Team",
		// 		release_date: "2011-10-31",
		// 		freetogame_profile_url: "https://www.freetogame.com/no-more-room-in-hell",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Digimon Masters Online",
		// 		thumbnail: "https://www.freetogame.com/g/262/thumbnail.jpg",
		// 		short_description: "A free to play 3D MMORPG based on the popular Digimon franchise.",
		// 		game_url: "https://www.freetogame.com/open/digimon-masters-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "MOVE ON USA CO.",
		// 		developer: "Move Games Co., Ltd.",
		// 		release_date: "2011-10-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/digimon-masters-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dragon Nest",
		// 		thumbnail: "https://www.freetogame.com/g/264/thumbnail.jpg",
		// 		short_description: "A free-to-play action MMORPG with non-targeting combat.",
		// 		game_url: "https://www.freetogame.com/open/dragon-nest",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: " Eyedentity Games Inc.",
		// 		developer: " Eyedentity Games Inc.",
		// 		release_date: "2011-09-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/dragon-nest",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "9Dragons",
		// 		thumbnail: "https://www.freetogame.com/g/265/thumbnail.jpg",
		// 		short_description: "A martial arts themed MMORPG set in China during the Ming Dynasty.",
		// 		game_url: "https://www.freetogame.com/open/9dragons",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Battlezone",
		// 		developer: "JoongWon Games",
		// 		release_date: "2007-05-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/9dragons",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Mission Against Terror",
		// 		thumbnail: "https://www.freetogame.com/g/267/thumbnail.jpg",
		// 		short_description: "A free to play fast-paced lobby-based MMOFPS with lots of game modes and tons of weapons.",
		// 		game_url: "https://www.freetogame.com/open/mat",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Suba Games",
		// 		developer: "Kingsoft",
		// 		release_date: "2011-07-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/mat",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Eden Eternal",
		// 		thumbnail: "https://www.freetogame.com/g/268/thumbnail.jpg",
		// 		short_description: "A free to play fantasy MMORPG with cute anime-inspired graphics.",
		// 		game_url: "https://www.freetogame.com/open/eden-eternal",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Aeria Games",
		// 		developer: "X-Legend",
		// 		release_date: "2011-06-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/eden-eternal",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Spiral Knights",
		// 		thumbnail: "https://www.freetogame.com/g/269/thumbnail.jpg",
		// 		short_description: "A massively multiplayer online role-playing game, battle monsters and collect treasures!",
		// 		game_url: "https://www.freetogame.com/open/spiral-knights",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "SEGA",
		// 		developer: "Three Rings",
		// 		release_date: "2011-06-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/spiral-knights",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Forsaken World",
		// 		thumbnail: "https://www.freetogame.com/g/270/thumbnail.jpg",
		// 		short_description: "A free to play MMORPG from Perfect World Entertainment set in a PvP world featuring vampires!",
		// 		game_url: "https://www.freetogame.com/open/forsaken-world",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Arc Games",
		// 		developer: "Perfect World Entertainment",
		// 		release_date: "2011-06-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/forsaken-world",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Asda Global",
		// 		thumbnail: "https://www.freetogame.com/g/271/thumbnail.jpg",
		// 		short_description: "A 3D anime-inspired fantasy MMORPG and is the successor to the original Asda Story.",
		// 		game_url: "https://www.freetogame.com/open/asda-global",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "GamenGame",
		// 		developer: "Maxonsoft",
		// 		release_date: "2011-05-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/asda-global",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Allods Online",
		// 		thumbnail: "https://www.freetogame.com/g/272/thumbnail.jpg",
		// 		short_description: "A fantasy MMORPG that follows more traditional “World of Warcraft-like” MMO traditions.",
		// 		game_url: "https://www.freetogame.com/open/allods-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "My.com",
		// 		developer: "Allods Team",
		// 		release_date: "2011-04-26",
		// 		freetogame_profile_url: "https://www.freetogame.com/allods-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Bloodline Champions",
		// 		thumbnail: "https://www.freetogame.com/g/273/thumbnail.jpg",
		// 		short_description: "Free-to-Play Moba game where players engage in short battles of up to ten players divided into two teams.",
		// 		game_url: "https://www.freetogame.com/open/bloodline-champions",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Stunlock Studios",
		// 		developer: "Stunlock Studios",
		// 		release_date: "2011-01-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/bloodline-champions",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "GetAmped 2",
		// 		thumbnail: "https://www.freetogame.com/g/274/thumbnail.jpg",
		// 		short_description: "A free to play fighting MMO, experience frantic battles up to 20 players.",
		// 		game_url: "https://www.freetogame.com/open/getamped-2",
		// 		genre: "Fighting",
		// 		platform: "PC (Windows)",
		// 		publisher: "CyberStep",
		// 		developer: "CyberStep",
		// 		release_date: "2010-12-16",
		// 		freetogame_profile_url: "https://www.freetogame.com/getamped-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dragon Saga",
		// 		thumbnail: "https://www.freetogame.com/g/275/thumbnail.jpg",
		// 		short_description: "A free to play arcade­-style side­-scrolling 3D MMORPG.",
		// 		game_url: "https://www.freetogame.com/open/dragon-saga",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Gravity Interactive",
		// 		developer: "Gravity Interactive",
		// 		release_date: "2010-10-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/dragon-saga",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Vindictus",
		// 		thumbnail: "https://www.freetogame.com/g/276/thumbnail.jpg",
		// 		short_description: "A free to play action MMO game with beautiful graphics and intense battles.",
		// 		game_url: "https://www.freetogame.com/open/vindictus",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Nexon",
		// 		developer: "devCAT",
		// 		release_date: "2010-10-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/vindictus",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Aika Online",
		// 		thumbnail: "https://www.freetogame.com/g/277/thumbnail.jpg",
		// 		short_description: "A free-to-play MMORPG with large scale PvP battles.",
		// 		game_url: "https://www.freetogame.com/open/aika-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "HanbitSoft",
		// 		developer: "JoyImpact",
		// 		release_date: "2010-08-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/aika-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Mortal Online",
		// 		thumbnail: "https://www.freetogame.com/g/278/thumbnail.jpg",
		// 		short_description: "A unique free to play First Person sandbox MMORPG.",
		// 		game_url: "https://www.freetogame.com/open/mortal-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Star Vault AB ",
		// 		developer: "Star Vault AB ",
		// 		release_date: "2010-06-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/mortal-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Heroes of Newerth",
		// 		thumbnail: "https://www.freetogame.com/g/279/thumbnail.jpg",
		// 		short_description: "A free-to-play MOBA game originally created by S2 Games.",
		// 		game_url: "https://www.freetogame.com/open/heroes-of-newerth",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "S2 Games",
		// 		developer: "S2 Games",
		// 		release_date: "2010-05-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/heroes-of-newerth",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "WolfTeam",
		// 		thumbnail: "https://www.freetogame.com/g/280/thumbnail.jpg",
		// 		short_description: "A free to play MMOFPS with a twist.",
		// 		game_url: "https://www.freetogame.com/open/wolfteam",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Aeria Games",
		// 		developer: "Softnyx",
		// 		release_date: "2009-07-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/wolfteam",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Grand Fantasia",
		// 		thumbnail: "https://www.freetogame.com/g/281/thumbnail.jpg",
		// 		short_description: "A free to play anime inspired 3D MMORPG with customizable characters and \r\ncompanions.",
		// 		game_url: "https://www.freetogame.com/open/grand-fantasia",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Aeria Games",
		// 		developer: "X-Legend Entertainment",
		// 		release_date: "2009-12-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/grand-fantasia",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "BlackShot: Revolution",
		// 		thumbnail: "https://www.freetogame.com/g/282/thumbnail.jpg",
		// 		short_description: "Get thrown into the fast-paced action of a virtual war zone and compete against other players.",
		// 		game_url: "https://www.freetogame.com/open/blackshot",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Papaya Play",
		// 		developer: "Vertigo Games",
		// 		release_date: "2018-07-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/blackshot",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "League of Legends",
		// 		thumbnail: "https://www.freetogame.com/g/286/thumbnail.jpg",
		// 		short_description: "A free-to-play MOBA game, and one of the most played pc game in the world.",
		// 		game_url: "https://www.freetogame.com/open/league-of-legends",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Riot Games",
		// 		developer: "Riot Games",
		// 		release_date: "2009-10-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/league-of-legends",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Twelve Sky 2",
		// 		thumbnail: "https://www.freetogame.com/g/287/thumbnail.jpg",
		// 		short_description: "There’s a lot of world to explore in this fantasy MMORPG!",
		// 		game_url: "https://www.freetogame.com/open/twelve-sky-2",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "RedFox Games",
		// 		developer: "SG Data",
		// 		release_date: "2009-09-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/twelve-sky-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Champions Online",
		// 		thumbnail: "https://www.freetogame.com/g/288/thumbnail.jpg",
		// 		short_description: "A superhero MMORPG created by the same studio behind City of Heroes.",
		// 		game_url: "https://www.freetogame.com/open/champions-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Perfect World Entertainment",
		// 		developer: "Cryptic Studios",
		// 		release_date: "2009-09-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/champions-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Runes of Magic",
		// 		thumbnail: "https://www.freetogame.com/g/290/thumbnail.jpg",
		// 		short_description: "A free-to-play fantasy 3D MMORPG set in the fantasy world of Taborea.",
		// 		game_url: "https://www.freetogame.com/open/runes-of-magic",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "GameForge",
		// 		developer: "Runewalker Entertainment",
		// 		release_date: "2009-03-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/runes-of-magic",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "theHunter",
		// 		thumbnail: "https://www.freetogame.com/g/291/thumbnail.jpg",
		// 		short_description: "An MMO shooter where players can hunt 22 different animals in various locations.",
		// 		game_url: "https://www.freetogame.com/open/thehunter",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Expansive Worlds , Avalanche Studios",
		// 		developer: "Expansive Worlds , Avalanche Studios",
		// 		release_date: "2009-03-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/thehunter",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "5Street",
		// 		thumbnail: "https://www.freetogame.com/g/292/thumbnail.jpg",
		// 		short_description: "A free-to-play dancing MMO and a unique social experience.",
		// 		game_url: "https://www.freetogame.com/open/5street",
		// 		genre: "Social",
		// 		platform: "PC (Windows)",
		// 		publisher: "Snail Games",
		// 		developer: "Snail Games",
		// 		release_date: "2011-11-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/5street",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Atlantica Online",
		// 		thumbnail: "https://www.freetogame.com/g/293/thumbnail.jpg",
		// 		short_description: "A free-to-play 3D tactical massively multiplayer online role-playing game.",
		// 		game_url: "https://www.freetogame.com/open/atlantica-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "VALOFE",
		// 		developer: "NDOORS Corporation",
		// 		release_date: "2008-10-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/atlantica-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Florensia",
		// 		thumbnail: "https://www.freetogame.com/g/295/thumbnail.jpg",
		// 		short_description: "A free to play fantasy MMORPG with legendary worlds ashore and at \r\nsea.",
		// 		game_url: "https://www.freetogame.com/open/florensia",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Netts Corporation",
		// 		developer: "Netts Corporation",
		// 		release_date: "2008-10-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/florensia",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "S4 league",
		// 		thumbnail: "https://www.freetogame.com/g/296/thumbnail.jpg",
		// 		short_description: "A free to play MMO Shooter with fluid gameplay and acrobatic moves!",
		// 		game_url: "https://www.freetogame.com/open/s4-league",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Aeria Games",
		// 		developer: "GameOn Studio (Previously known as Pentavision)",
		// 		release_date: "2008-09-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/s4-league",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Wizard101",
		// 		thumbnail: "https://www.freetogame.com/g/297/thumbnail.jpg",
		// 		short_description: "A free to play MMORPG set in the magical Wizard school.",
		// 		game_url: "https://www.freetogame.com/open/wizard101",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "KingsIsle Entertainment",
		// 		developer: "KingsIsle Entertainment",
		// 		release_date: "2008-09-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/wizard101",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Perfect World International",
		// 		thumbnail: "https://www.freetogame.com/g/298/thumbnail.jpg",
		// 		short_description: "A free-to-play fantasy MMORPG, that focuses heavily on Chinese mythology.",
		// 		game_url: "https://www.freetogame.com/open/pwi",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Beijing Perfect World, Perfect World Entertainment",
		// 		developer: "Beijing Perfect World",
		// 		release_date: "2008-09-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/pwi",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Combat Arms: Reloaded",
		// 		thumbnail: "https://www.freetogame.com/g/299/thumbnail.jpg",
		// 		short_description: "A free to play modern first person shooter with lots of maps and weapons!",
		// 		game_url: "https://www.freetogame.com/open/combat-arms",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "VALOFE, NEXON",
		// 		developer: "Doobic Studios",
		// 		release_date: "2018-10-31",
		// 		freetogame_profile_url: "https://www.freetogame.com/combat-arms",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Rohan: Blood Feud",
		// 		thumbnail: "https://www.freetogame.com/g/300/thumbnail.jpg",
		// 		short_description: "A free-to-play medieval MMORPG highly-focused on PVP.",
		// 		game_url: "https://www.freetogame.com/open/rohan-blood-feud",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Playwith Interactive",
		// 		developer: "Playwith Interactive",
		// 		release_date: "2008-05-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/rohan-blood-feud",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Age of Conan: Unchained",
		// 		thumbnail: "https://www.freetogame.com/g/301/thumbnail.jpg",
		// 		short_description: "A award ­winning massively multiplayer online game that has received critical acclaim.",
		// 		game_url: "https://www.freetogame.com/open/age-of-conan",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Funcom",
		// 		developer: "Funcom",
		// 		release_date: "2008-05-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/age-of-conan",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Saga",
		// 		thumbnail: "https://www.freetogame.com/g/303/thumbnail.jpg",
		// 		short_description: "A free-to-play MMORTS that also features city-building and trading card games.",
		// 		game_url: "https://www.freetogame.com/open/saga",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Silverlode Interactive",
		// 		developer: "Silverlode Interactive , Wasatch Games",
		// 		release_date: "2008-02-26",
		// 		freetogame_profile_url: "https://www.freetogame.com/saga",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Cabal Online",
		// 		thumbnail: "https://www.freetogame.com/g/304/thumbnail.jpg",
		// 		short_description: "A free to play fast-paced skill-based MMORPG in a stunning world!",
		// 		game_url: "https://www.freetogame.com/open/cabal-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "ESTsoft",
		// 		developer: "ESTsoft",
		// 		release_date: "2016-02-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/cabal-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Fiesta Online",
		// 		thumbnail: "https://www.freetogame.com/g/305/thumbnail.jpg",
		// 		short_description: "A free to play anime MMORPG with a friendly community.",
		// 		game_url: "https://www.freetogame.com/open/fiesta-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "gamigo AG",
		// 		developer: "Onson Soft",
		// 		release_date: "2008-02-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/fiesta-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "4Story",
		// 		thumbnail: "https://www.freetogame.com/g/306/thumbnail.jpg",
		// 		short_description: "A enjoyable MMORPG where you can customize your character, join guilds and battle other factions.",
		// 		game_url: "https://www.freetogame.com/open/4story",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Zemi Interactive",
		// 		developer: "Zemi Interactive",
		// 		release_date: "2008-10-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/4story",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Shaiya",
		// 		thumbnail: "https://www.freetogame.com/g/307/thumbnail.jpg",
		// 		short_description: "A free to play 3D MMORPG similar to World of Warcraft and Lineage 2.",
		// 		game_url: "https://www.freetogame.com/open/shaiya",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Aeria Games",
		// 		developer: "Aeria Games",
		// 		release_date: "2007-12-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/shaiya",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Angels Online",
		// 		thumbnail: "https://www.freetogame.com/g/308/thumbnail.jpg",
		// 		short_description: "A cute anime MMORPG with a good selection of classes.",
		// 		game_url: "https://www.freetogame.com/open/angels-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "I Got Games",
		// 		developer: "UserJoy Technology",
		// 		release_date: "2007-12-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/angels-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Seal Online",
		// 		thumbnail: "https://www.freetogame.com/g/309/thumbnail.jpg",
		// 		short_description: "A free MMORP that has been out for a long period of time with solid history under its belt.",
		// 		game_url: "https://www.freetogame.com/open/seal-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "YNK Interactive",
		// 		developer: "YNK Interactive",
		// 		release_date: "2007-11-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/seal-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Team Fortress 2",
		// 		thumbnail: "https://www.freetogame.com/g/310/thumbnail.jpg",
		// 		short_description: "Valve's iconic class-based free-to-play first-person shooter!",
		// 		game_url: "https://www.freetogame.com/open/team-fortress-2",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Valve",
		// 		developer: "Valve",
		// 		release_date: "2007-10-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/team-fortress-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Rumble Fighter",
		// 		thumbnail: "https://www.freetogame.com/g/311/thumbnail.jpg",
		// 		short_description: "A free to play Fighting MMO, test your skills!",
		// 		game_url: "https://www.freetogame.com/open/rumble-fighter",
		// 		genre: "Fighting",
		// 		platform: "PC (Windows)",
		// 		publisher: "RedFox Games",
		// 		developer: "Nimonix",
		// 		release_date: "2007-08-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/rumble-fighter",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Granado Espada Online",
		// 		thumbnail: "https://www.freetogame.com/g/312/thumbnail.jpg",
		// 		short_description: "Adventure back to colonial times where you can find prestige, wealth, adventure, and a lot of work.",
		// 		game_url: "https://www.freetogame.com/open/granado-espada",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "T3Fun",
		// 		developer: "IMC Games Co. Limited",
		// 		release_date: "2007-07-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/granado-espada",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Teeworlds",
		// 		thumbnail: "https://www.freetogame.com/g/313/thumbnail.jpg",
		// 		short_description: "A free to play retro multiplayer online shooter where you can even design your own maps!",
		// 		game_url: "https://www.freetogame.com/open/teeworlds",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Teeworlds Team ",
		// 		developer: "Teeworlds Team ",
		// 		release_date: "2007-05-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/teeworlds",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Audition Online",
		// 		thumbnail: "https://www.freetogame.com/g/314/thumbnail.jpg",
		// 		short_description: "A 3D rhythm MMO, Compete against other players in dance competitions.",
		// 		game_url: "https://www.freetogame.com/open/audition-online",
		// 		genre: "Social",
		// 		platform: "PC (Windows)",
		// 		publisher: "Redbana Corporation",
		// 		developer: "T3 Entertainment",
		// 		release_date: "2007-04-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/audition-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Voyage Century Online",
		// 		thumbnail: "https://www.freetogame.com/g/315/thumbnail.jpg",
		// 		short_description: "A massive open world ship vs. ship combat game where players will take charge of their own vessel.",
		// 		game_url: "https://www.freetogame.com/open/voyage-century-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "IGG",
		// 		developer: "Snail Games",
		// 		release_date: "2006-12-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/voyage-century-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Scions of Fate",
		// 		thumbnail: "https://www.freetogame.com/g/316/thumbnail.jpg",
		// 		short_description: "A friendly free to play MMORPG with easy to pick up controls.",
		// 		game_url: "https://www.freetogame.com/open/scions-of-fate",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "NETGAME Inc",
		// 		developer: "MGAME Corporation",
		// 		release_date: "2018-01-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/scions-of-fate",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Rappelz",
		// 		thumbnail: "https://www.freetogame.com/g/317/thumbnail.jpg",
		// 		short_description: "A free to play 3D classic MMORPG with robust features.",
		// 		game_url: "https://www.freetogame.com/open/rappelz",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Webzen",
		// 		developer: "Gala Lab",
		// 		release_date: "2006-11-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/rappelz",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Ace Online",
		// 		thumbnail: "https://www.freetogame.com/g/319/thumbnail.jpg",
		// 		short_description: "A free to play fast action 3D sci-fi MMO where players control space fighters jets.",
		// 		game_url: "https://www.freetogame.com/open/ace-online",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Suba Games",
		// 		developer: "MasangSoft",
		// 		release_date: "2008-08-29",
		// 		freetogame_profile_url: "https://www.freetogame.com/ace-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dungeons and Dragons Online",
		// 		thumbnail: "https://www.freetogame.com/g/320/thumbnail.jpg",
		// 		short_description: "A free-to-play MMORPG based on the beloved D&D RPG that started it all.",
		// 		game_url: "https://www.freetogame.com/open/dungeons-dragons-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Warner Bros. Interactive Entertainment",
		// 		developer: "Turbine, Inc.",
		// 		release_date: "2006-02-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/dungeons-dragons-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "RF Online",
		// 		thumbnail: "https://www.freetogame.com/g/321/thumbnail.jpg",
		// 		short_description: "A free to play Sci-fi MMORPG with Large-Scale PvP and fast-paced gameplay.",
		// 		game_url: "https://www.freetogame.com/open/rf-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "RedFox Games",
		// 		developer: "CCR Inc.",
		// 		release_date: "2006-02-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/rf-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "La Tale Evolved",
		// 		thumbnail: "https://www.freetogame.com/g/322/thumbnail.jpg",
		// 		short_description: "A 2D side-scrolling fantasy MMORPG with anime-inspired graphics.",
		// 		game_url: "https://www.freetogame.com/open/la-tale",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Papaya Play",
		// 		developer: "Actoz Soft",
		// 		release_date: "2017-11-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/la-tale",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Flyff: Fly For Fun",
		// 		thumbnail: "https://www.freetogame.com/g/323/thumbnail.jpg",
		// 		short_description: "A free-to-play anime MMORPG with charming visual aesthetic and an addictive gameplay.",
		// 		game_url: "https://www.freetogame.com/open/flyff",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Webzen",
		// 		developer: "Gala Lab Corp (formerly Aeonsoft)",
		// 		release_date: "2005-12-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/flyff",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dream of Mirror Online",
		// 		thumbnail: "https://www.freetogame.com/g/324/thumbnail.jpg",
		// 		short_description: "A free to play fantasy MMORPG with tons of social features.",
		// 		game_url: "https://www.freetogame.com/open/domo",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "SubaGames",
		// 		developer: "SoftStar",
		// 		release_date: "2005-09-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/domo",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "MapleStory",
		// 		thumbnail: "https://www.freetogame.com/g/325/thumbnail.jpg",
		// 		short_description: "A popular free-to-play 2D side-scrolling MMORPG with tons of quests, and a huge game world!",
		// 		game_url: "https://www.freetogame.com/open/maplestory",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Nexon",
		// 		developer: "Wizet",
		// 		release_date: "2005-05-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/maplestory",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Shot Online",
		// 		thumbnail: "https://www.freetogame.com/g/326/thumbnail.jpg",
		// 		short_description: "A free to play Golfing MMO that any golf lover will enjoy to play!",
		// 		game_url: "https://www.freetogame.com/open/shot-online",
		// 		genre: "Sports",
		// 		platform: "PC (Windows)",
		// 		publisher: "GamesCampus",
		// 		developer: "OnNet Co. Ltd.",
		// 		release_date: "2004-11-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/shot-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Everquest 2",
		// 		thumbnail: "https://www.freetogame.com/g/327/thumbnail.jpg",
		// 		short_description: "A free to play 3D fantasy MMORPG and the sequel to EverQuest.",
		// 		game_url: "https://www.freetogame.com/open/everquest-2",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Daybreak Games",
		// 		developer: "Daybreak Games",
		// 		release_date: "2004-11-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/everquest-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dofus",
		// 		thumbnail: "https://www.freetogame.com/g/328/thumbnail.jpg",
		// 		short_description: "A 2D MMORPG with tons of different classes and a tactical combat system.",
		// 		game_url: "https://www.freetogame.com/open/dofus",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Ankama Games",
		// 		developer: "Ankama Games",
		// 		release_date: "2004-09-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/dofus",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Kal Online",
		// 		thumbnail: "https://www.freetogame.com/g/329/thumbnail.jpg",
		// 		short_description: "A Korean Fantasy MMORPG developed by Inixsoft.",
		// 		game_url: "https://www.freetogame.com/open/kalonline",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Inisxoft",
		// 		developer: "Inisxoft",
		// 		release_date: "2004-06-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/kalonline",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Lineage 2",
		// 		thumbnail: "https://www.freetogame.com/g/330/thumbnail.jpg",
		// 		short_description: "A 3D fantasy MMORPG with a strong emphasis on PvP.",
		// 		game_url: "https://www.freetogame.com/open/lineage-2",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "NCSoft",
		// 		developer: "NCSoft",
		// 		release_date: "2004-04-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/lineage-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Red Stone Online",
		// 		thumbnail: "https://www.freetogame.com/g/332/thumbnail.jpg",
		// 		short_description: "A free to play 2D old school isometric MMORPG similar to Diablo.",
		// 		game_url: "https://www.freetogame.com/open/red-stone-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "L＆K CO., LTD",
		// 		developer: "L＆K CO., LTD",
		// 		release_date: "2003-10-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/red-stone-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Metin2",
		// 		thumbnail: "https://www.freetogame.com/g/333/thumbnail.jpg",
		// 		short_description: "A classic free to play 3D MMORPG with a retro feel.",
		// 		game_url: "https://www.freetogame.com/open/metin2",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Gameforge",
		// 		developer: "Ymir Entertainment",
		// 		release_date: "2006-12-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/metin2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Mu Online",
		// 		thumbnail: "https://www.freetogame.com/g/334/thumbnail.jpg",
		// 		short_description: "A free to play Dungeon Crawler game like Diablo!",
		// 		game_url: "https://www.freetogame.com/open/mu-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Webzen",
		// 		developer: "Webzen",
		// 		release_date: "2003-10-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/mu-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Ragnarok Online",
		// 		thumbnail: "https://www.freetogame.com/g/335/thumbnail.jpg",
		// 		short_description: "A popular fantasy MMORPG, back to the golden age of MMORPGs.",
		// 		game_url: "https://www.freetogame.com/open/ragnarok-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Gravity Interactive ",
		// 		developer: "Gravity Interactive ",
		// 		release_date: "2003-06-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/ragnarok-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Anarchy Online",
		// 		thumbnail: "https://www.freetogame.com/g/336/thumbnail.jpg",
		// 		short_description: "A free to play Sci-Fi MMO that has withstood the test of time.",
		// 		game_url: "https://www.freetogame.com/open/anarchy-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Funcom",
		// 		developer: "Funcom",
		// 		release_date: "2001-06-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/anarchy-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Priston Tale",
		// 		thumbnail: "https://www.freetogame.com/g/337/thumbnail.jpg",
		// 		short_description: "A free to play action-oriented fantasy MMORPG!",
		// 		game_url: "https://www.freetogame.com/open/priston-tale",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Suba Games",
		// 		developer: "Trglow Pictures",
		// 		release_date: "2007-05-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/priston-tale",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Tibia",
		// 		thumbnail: "https://www.freetogame.com/g/339/thumbnail.jpg",
		// 		short_description: "A old-school free-to-play massively multiplayer online \r\nrole-playing game.",
		// 		game_url: "https://www.freetogame.com/open/tibia",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "CipSoft",
		// 		developer: "CipSoft",
		// 		release_date: "1997-01-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/tibia",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Game Of Thrones Winter Is Coming",
		// 		thumbnail: "https://www.freetogame.com/g/340/thumbnail.jpg",
		// 		short_description: "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
		// 		game_url: "https://www.freetogame.com/open/game-of-thrones-winter-is-coming",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "GTArcade",
		// 		developer: "YOOZOO Games ",
		// 		release_date: "2019-11-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/game-of-thrones-winter-is-coming",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "League of Angels 3",
		// 		thumbnail: "https://www.freetogame.com/g/341/thumbnail.jpg",
		// 		short_description: "A free-to-play turn-based strategy browser game developed and published by GTArcade Entertainment, Inc.",
		// 		game_url: "https://www.freetogame.com/open/league-of-angels-3",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "GTArcade Entertainment",
		// 		developer: "GTArcade Entertainment",
		// 		release_date: "2018-08-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/league-of-angels-3",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "My Soul",
		// 		thumbnail: "https://www.freetogame.com/g/342/thumbnail.jpg",
		// 		short_description: "A free-to-play ARPG distributed by GameSpirit. ",
		// 		game_url: "https://www.freetogame.com/open/my-soul",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Gamesprite",
		// 		developer: "Gamesprite",
		// 		release_date: "2018-01-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/my-soul",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dragon Awaken",
		// 		thumbnail: "https://www.freetogame.com/g/343/thumbnail.jpg",
		// 		short_description: "A free-to-play, browser-based fantasy RPG developed \r\nby Game Hollywood and published by \r\nProficient City.",
		// 		game_url: "https://www.freetogame.com/open/dragon-awaken",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Proficient city",
		// 		developer: "Game Hollywood",
		// 		release_date: "2017-01-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/dragon-awaken",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Omega Zodiac",
		// 		thumbnail: "https://www.freetogame.com/g/344/thumbnail.jpg",
		// 		short_description: "A Greek and Norse mythology based free-to-play action MMO developed and published by Proficient City and Game Hollywood.",
		// 		game_url: "https://www.freetogame.com/open/omega-zodiac",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Proficient City",
		// 		developer: "Game Hollywood",
		// 		release_date: "2016-08-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/omega-zodiac",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Forge of Empires",
		// 		thumbnail: "https://www.freetogame.com/g/345/thumbnail.jpg",
		// 		short_description: "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
		// 		game_url: "https://www.freetogame.com/open/forge-of-empires",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "InnoGames",
		// 		developer: "InnoGames",
		// 		release_date: "2012-04-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/forge-of-empires",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "One Piece Online 2",
		// 		thumbnail: "https://www.freetogame.com/g/346/thumbnail.jpg",
		// 		short_description: "A free-to-play, browser-based 2D MMORPG based on the immensely popular One Piece franchise.",
		// 		game_url: "https://www.freetogame.com/open/one-piece-online-2",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "JoyGames",
		// 		developer: "JoyGames",
		// 		release_date: "2015-09-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/one-piece-online-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Elvenar",
		// 		thumbnail: "https://www.freetogame.com/g/347/thumbnail.jpg",
		// 		short_description: "A browser based city-building strategy MMO set in the fantasy world of Elvenar.",
		// 		game_url: "https://www.freetogame.com/open/elvenar",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "InnoGames",
		// 		developer: "InnoGames",
		// 		release_date: "2015-04-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/elvenar",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Bleach Online",
		// 		thumbnail: "https://www.freetogame.com/g/348/thumbnail.jpg",
		// 		short_description: "A free to play 2D browser based MMORPG based on Bleach, the popular manga and anime series.",
		// 		game_url: "https://www.freetogame.com/open/bleach-online",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "GoGames",
		// 		developer: "GoGames",
		// 		release_date: "2014-07-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/bleach-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Big Farm",
		// 		thumbnail: "https://www.freetogame.com/g/349/thumbnail.jpg",
		// 		short_description: "A friendly browser-based farming simulation MMO game!",
		// 		game_url: "https://www.freetogame.com/open/big-farm",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "GoodGame Studios",
		// 		developer: "GoodGame Studios",
		// 		release_date: "2012-10-29",
		// 		freetogame_profile_url: "https://www.freetogame.com/big-farm",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Goodgame Empire",
		// 		thumbnail: "https://www.freetogame.com/g/350/thumbnail.jpg",
		// 		short_description: "A free to play medieval strategy browser game. Build you own castle and create a powerful army! ",
		// 		game_url: "https://www.freetogame.com/open/goodgame-empire",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Goodgame Studios",
		// 		developer: "Goodgame Studios",
		// 		release_date: "2011-08-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/goodgame-empire",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Grand Prix Racing Online",
		// 		thumbnail: "https://www.freetogame.com/g/351/thumbnail.jpg",
		// 		short_description: "A free-to-play web-based motorsport management game.",
		// 		game_url: "https://www.freetogame.com/open/gpro",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "GPRO.net",
		// 		developer: "GPRO.net",
		// 		release_date: "2006-08-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/gpro",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Travian",
		// 		thumbnail: "https://www.freetogame.com/g/352/thumbnail.jpg",
		// 		short_description: "A popular browser-based multiplayer online strategy \r\ngame.",
		// 		game_url: "https://www.freetogame.com/open/travian",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Travian Games",
		// 		developer: "Travian Games",
		// 		release_date: "2004-09-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/travian",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Stein.world",
		// 		thumbnail: "https://www.freetogame.com/g/353/thumbnail.jpg",
		// 		short_description: "A free-to-play, browser-based online fantasy role \r\nplaying game done in an old-school \r\n16-bit style.",
		// 		game_url: "https://www.freetogame.com/open/steinworld",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "PG5-Studio UG",
		// 		developer: "PG5-Studio UG",
		// 		release_date: "2019-04-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/steinworld",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Gods Origin Online",
		// 		thumbnail: "https://www.freetogame.com/g/354/thumbnail.jpg",
		// 		short_description: "A free-to-play browser-based RPG from VivaGames in which players take on the role of human summoners that call deities from the Astral Realm back in time. ",
		// 		game_url: "https://www.freetogame.com/open/gods-origin",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "VivaGame",
		// 		developer: "VivaGame",
		// 		release_date: "2017-08-29",
		// 		freetogame_profile_url: "https://www.freetogame.com/gods-origin",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Chronicles of Eidola",
		// 		thumbnail: "https://www.freetogame.com/g/355/thumbnail.jpg",
		// 		short_description: "A free-to-play 3D Browser RPG from AMZGame.",
		// 		game_url: "https://www.freetogame.com/open/chronicles-of-eidola",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "AMZ Games",
		// 		developer: "AMZ Games",
		// 		release_date: "2017-04-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/chronicles-of-eidola",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Vikings: War Of Clans",
		// 		thumbnail: "https://www.freetogame.com/g/357/thumbnail.jpg",
		// 		short_description: "A free-to-play MMO strategy game developed and published by Plarium.",
		// 		game_url: "https://www.freetogame.com/open/vikings-war-of-clans",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Plarium",
		// 		developer: "Plarium",
		// 		release_date: "2015-04-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/vikings-war-of-clans",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Hunter X Hunter Online",
		// 		thumbnail: "https://www.freetogame.com/g/358/thumbnail.jpg",
		// 		short_description: "A free-to-play browser MMORPG based on the popular manga and anime.",
		// 		game_url: "https://www.freetogame.com/open/hunter-x-hunter-online",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Unigame",
		// 		developer: "Unigame",
		// 		release_date: "2017-04-00",
		// 		freetogame_profile_url: "https://www.freetogame.com/hunter-x-hunter-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dragon Evo",
		// 		thumbnail: "https://www.freetogame.com/g/361/thumbnail.jpg",
		// 		short_description: "A browser based online action card game developed by Magical Pictures and produced by zegenie Studios.",
		// 		game_url: "https://www.freetogame.com/open/dragon-evo",
		// 		genre: "Card Game",
		// 		platform: "Web Browser",
		// 		publisher: "Zegenie Studios",
		// 		developer: "Magical Pictures",
		// 		release_date: "2020-01-18",
		// 		freetogame_profile_url: "https://www.freetogame.com/dragon-evo",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Naruto Online",
		// 		thumbnail: "https://www.freetogame.com/g/365/thumbnail.jpg",
		// 		short_description: "A free-to-play MMO based on the popular anime series and manga, developed \r\nby Bandai Namco Entertainment. ",
		// 		game_url: "https://www.freetogame.com/open/naruto-online",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "OAS Games",
		// 		developer: "Bandai Namco",
		// 		release_date: "2016-07-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/naruto-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "SAO’s Legend",
		// 		thumbnail: "https://www.freetogame.com/g/367/thumbnail.jpg",
		// 		short_description: "A free-to-play browser-based MMO based on the popular anime Sword Art Online.",
		// 		game_url: "https://www.freetogame.com/open/saos-legend",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "GameSprite",
		// 		developer: "Raycreator Inc.",
		// 		release_date: "2016-06-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/saos-legend",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dragon Blood",
		// 		thumbnail: "https://www.freetogame.com/g/370/thumbnail.jpg",
		// 		short_description: "A free-to-play browser MMORPG from 101XP, you'll harness your unique power and the blood of dragons that flows through your veins! ",
		// 		game_url: "https://www.freetogame.com/open/dragon-blood",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "101XP",
		// 		developer: "101XP",
		// 		release_date: "2016-04-16",
		// 		freetogame_profile_url: "https://www.freetogame.com/dragon-blood",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "League of Angels 2",
		// 		thumbnail: "https://www.freetogame.com/g/371/thumbnail.jpg",
		// 		short_description: "A free to play browser MMORPG that captures all the beauty and elegance of its predecessor.",
		// 		game_url: "https://www.freetogame.com/open/league-angels-2",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "GTArcade",
		// 		developer: "GTArcade",
		// 		release_date: "2016-04-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/league-angels-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "StarColony",
		// 		thumbnail: "https://www.freetogame.com/g/373/thumbnail.jpg",
		// 		short_description: "A free-to-play browser MMO strategy game that puts you in command of a rapidly growing city on a dangerous alien world.",
		// 		game_url: "https://www.freetogame.com/open/starcolony",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Eiyland LLC",
		// 		developer: "Eiyland LLC",
		// 		release_date: "2015-01-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/starcolony",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Clash of Avatars",
		// 		thumbnail: "https://www.freetogame.com/g/374/thumbnail.jpg",
		// 		short_description: "A free to play 3D browser MMORPG with powerful Avatars, 50 mounts, \r\nand several loyal pets.",
		// 		game_url: "https://www.freetogame.com/open/clash-of-avatars",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "AMZgame",
		// 		developer: "AMZgame",
		// 		release_date: "2016-01-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/clash-of-avatars",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "League of Angels",
		// 		thumbnail: "https://www.freetogame.com/g/376/thumbnail.jpg",
		// 		short_description: "A free to play 2D browser-based fantasy MMORPG with turn-based combat.",
		// 		game_url: "https://www.freetogame.com/open/league-of-angels",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "GTArcade",
		// 		developer: "Youzu Interactive",
		// 		release_date: "2013-12-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/league-of-angels",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dark Orbit Reloaded",
		// 		thumbnail: "https://www.freetogame.com/g/380/thumbnail.jpg",
		// 		short_description: "A browser-based 3D space-combat MMO with a massive playerbase!",
		// 		game_url: "https://www.freetogame.com/open/darkorbit",
		// 		genre: "Shooter",
		// 		platform: "Web Browser",
		// 		publisher: "Bigpoint",
		// 		developer: "Bigpoint",
		// 		release_date: "2006-12-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/darkorbit",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Legends of Honor",
		// 		thumbnail: "https://www.freetogame.com/g/383/thumbnail.jpg",
		// 		short_description: "A free to play browser based medieval fantasy 2D MMORTS.",
		// 		game_url: "https://www.freetogame.com/open/legends-of-honor",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Goodgame Empire",
		// 		developer: "Goodgame Studios",
		// 		release_date: "2015-08-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/legends-of-honor",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Felspire",
		// 		thumbnail: "https://www.freetogame.com/g/384/thumbnail.jpg",
		// 		short_description: "A free-to-play 2D browser-based fantasy MMORPG with plenty of dungeons and world bosses to slay.",
		// 		game_url: "https://www.freetogame.com/open/felspire",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "37Games",
		// 		developer: "37Games Entertainment",
		// 		release_date: "2015-08-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/felspire",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Aberoth",
		// 		thumbnail: "https://www.freetogame.com/g/386/thumbnail.jpg",
		// 		short_description: "A free to play 8-bit MMORPG with retro graphics and MUD-like interface.",
		// 		game_url: "https://www.freetogame.com/open/aberoth",
		// 		genre: " MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Jarbit",
		// 		developer: "Jarbit",
		// 		release_date: "2015-07-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/aberoth",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Lord’s Road",
		// 		thumbnail: "https://www.freetogame.com/g/388/thumbnail.jpg",
		// 		short_description: "A free-to-play 2D browser-based fantasy MMORPG that features two playable classes.",
		// 		game_url: "https://www.freetogame.com/open/lords-road",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "AMZGame",
		// 		developer: "AMZGame",
		// 		release_date: "2015-06-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/lords-road",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Star Trek: Alien Domain",
		// 		thumbnail: "https://www.freetogame.com/g/391/thumbnail.jpg",
		// 		short_description: "A free to play browser based 2D strategy MMO set in the Stark Trek universe.",
		// 		game_url: "https://www.freetogame.com/open/star-trek-alien-domain",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "GameSamba",
		// 		developer: "GameSamba",
		// 		release_date: "2015-04-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/star-trek-alien-domain",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "One Piece Online",
		// 		thumbnail: "https://www.freetogame.com/g/394/thumbnail.jpg",
		// 		short_description: "One Piece Online is a 2D Tower Defense Action MMO! ",
		// 		game_url: "https://www.freetogame.com/open/one-piece-online",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "JoyGames",
		// 		developer: "JoyGames",
		// 		release_date: "2015-01-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/one-piece-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Siegelord",
		// 		thumbnail: "https://www.freetogame.com/g/399/thumbnail.jpg",
		// 		short_description: "A free to play 2D medieval fantasy browser-based MMORTS.",
		// 		game_url: "https://www.freetogame.com/open/siegelord",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "37Games Entertainment",
		// 		developer: "37Games Entertainment",
		// 		release_date: "2014-12-19",
		// 		freetogame_profile_url: "https://www.freetogame.com/siegelord",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Might And Magic Heroes Online",
		// 		thumbnail: "https://www.freetogame.com/g/402/thumbnail.jpg",
		// 		short_description: "A free-to-play MMO strategy RPG game in which you control powerful Heroes! ",
		// 		game_url: "https://www.freetogame.com/open/might-magic-heroes-online",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Ubisoft",
		// 		developer: "Ubisoft Blue Byte, Related Designs",
		// 		release_date: "2009-09-03",
		// 		freetogame_profile_url: "https://www.freetogame.com/might-magic-heroes-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Tribal Wars 2",
		// 		thumbnail: "https://www.freetogame.com/g/404/thumbnail.jpg",
		// 		short_description: "The sequel to the classic city-building strategy game Tribal Wars! ",
		// 		game_url: "https://www.freetogame.com/open/tribal-wars-2",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "InnoGames",
		// 		developer: "InnoGames",
		// 		release_date: "2014-09-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/tribal-wars-2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Pocket Starships",
		// 		thumbnail: "https://www.freetogame.com/g/405/thumbnail.jpg",
		// 		short_description: "A free-to-play cross-platform space combat MMO from SPYR games.",
		// 		game_url: "https://www.freetogame.com/open/pocket-starships",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Spyr",
		// 		developer: "Spyr",
		// 		release_date: "2014-03-00",
		// 		freetogame_profile_url: "https://www.freetogame.com/pocket-starships",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Sparta: War of Empires",
		// 		thumbnail: "https://www.freetogame.com/g/409/thumbnail.jpg",
		// 		short_description: "A 2D browser-based MMORTS in which players must exercise their city-management skills to construct and upgrade different structures and troops.",
		// 		game_url: "https://www.freetogame.com/open/sparta-war-empires",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Plarium",
		// 		developer: "Plarium",
		// 		release_date: "2014-03-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/sparta-war-empires",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Soldiers Inc.",
		// 		thumbnail: "https://www.freetogame.com/g/411/thumbnail.jpg",
		// 		short_description: "A free to play 2D top-down browser based MMORTS game.",
		// 		game_url: "https://www.freetogame.com/open/soldiers-inc",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Plarium Games",
		// 		developer: "Plarium Games",
		// 		release_date: "2013-08-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/soldiers-inc",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Nords: Heroes of the North",
		// 		thumbnail: "https://www.freetogame.com/g/412/thumbnail.jpg",
		// 		short_description: "A free to play browser-based 2D strategy MMO game with Elves, Orcs, Dragons and more.",
		// 		game_url: "https://www.freetogame.com/open/nords-heroes-north",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Plarium Games",
		// 		developer: "Plarium Games",
		// 		release_date: "2013-08-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/nords-heroes-north",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Rail Nation",
		// 		thumbnail: "https://www.freetogame.com/g/414/thumbnail.jpg",
		// 		short_description: "A free to play 2D browser-based train simulation strategy MMO game.",
		// 		game_url: "https://www.freetogame.com/open/rail-nation",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Bright Future",
		// 		developer: "Travian Games",
		// 		release_date: "2013-01-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/rail-nation",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Stormfall: Age of War",
		// 		thumbnail: "https://www.freetogame.com/g/415/thumbnail.jpg",
		// 		short_description: "A free to play 2D top-down browser MMORTS featuring castle building, resource management and PvP battles.",
		// 		game_url: "https://www.freetogame.com/open/stormfall-age-war",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Plarium",
		// 		developer: "Plarium",
		// 		release_date: "2012-11-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/stormfall-age-war",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Wartune",
		// 		thumbnail: "https://www.freetogame.com/g/416/thumbnail.jpg",
		// 		short_description: "A 2D browser-based Strategy MMORPG with classic turn based RPG features.",
		// 		game_url: "https://www.freetogame.com/open/wartune",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "R2 Games",
		// 		developer: "7Th Road",
		// 		release_date: "2012-10-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/wartune",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dino Storm",
		// 		thumbnail: "https://www.freetogame.com/g/417/thumbnail.jpg",
		// 		short_description: "A free-to-play 3D MMO with cowboys, dinosaurs, and laser guns.",
		// 		game_url: "https://www.freetogame.com/open/dino-storm",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Splitscreen S.",
		// 		developer: "Splits. S",
		// 		release_date: "2012-09-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/dino-storm",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "The Settlers Online",
		// 		thumbnail: "https://www.freetogame.com/g/418/thumbnail.jpg",
		// 		short_description: "A free to play city building MMORTS based on the popular Settlers series.",
		// 		game_url: "https://www.freetogame.com/open/the-settlers-online",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Ubisoft",
		// 		developer: "Blue Byte",
		// 		release_date: "2012-09-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/the-settlers-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Therian Saga",
		// 		thumbnail: "https://www.freetogame.com/g/421/thumbnail.jpg",
		// 		short_description: "A browser-based sandbox MMORPG with a complex crafting system.",
		// 		game_url: "https://www.freetogame.com/open/therian-saga",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows), Web Browser",
		// 		publisher: "Gameforge",
		// 		developer: "Virtys",
		// 		release_date: "2017-03-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/therian-saga",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Pirates: Tides of Fortune",
		// 		thumbnail: "https://www.freetogame.com/g/422/thumbnail.jpg",
		// 		short_description: "A free to play browser-based 2D MMORTS for people who are fans of pirates!",
		// 		game_url: "https://www.freetogame.com/open/pirates-tides-fortune",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Plarium Games",
		// 		developer: "Plarium Games",
		// 		release_date: "2012-02-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/pirates-tides-fortune",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Steel Legions",
		// 		thumbnail: "https://www.freetogame.com/g/423/thumbnail.jpg",
		// 		short_description: "A free to play 3d browser based tank game with fast-paced tactical battles! ",
		// 		game_url: "https://www.freetogame.com/open/steel-legions",
		// 		genre: "Shooter",
		// 		platform: "Web Browser",
		// 		publisher: "Splitscreen Studios",
		// 		developer: "Splitscreen Studios",
		// 		release_date: "2011-06-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/steel-legions",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Crystal Saga",
		// 		thumbnail: "https://www.freetogame.com/g/424/thumbnail.jpg",
		// 		short_description: "A free to play 2D browser-based MMORPG that allows players to explore the land of Vidalia.",
		// 		game_url: "https://www.freetogame.com/open/crystal-saga",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Aeria, R2Games",
		// 		developer: "R2Games",
		// 		release_date: "2013-11-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/crystal-saga",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Grepolis",
		// 		thumbnail: "https://www.freetogame.com/g/425/thumbnail.jpg",
		// 		short_description: "A free to play browser-based strategy MMORTS set in Ancient Greece.",
		// 		game_url: "https://www.freetogame.com/open/grepolis",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "InnoGames",
		// 		developer: "InnoGames",
		// 		release_date: "2009-12-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/grepolis",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "AdventureQuest Worlds",
		// 		thumbnail: "https://www.freetogame.com/g/426/thumbnail.jpg",
		// 		short_description: "A free-to-play 2D fantasy browser MMORPG. There are no downloads or software to install! ",
		// 		game_url: "https://www.freetogame.com/open/adventurequest-worlds",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Artix Entertainment",
		// 		developer: "Artix Entertainment",
		// 		release_date: "2008-10-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/adventurequest-worlds",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Drakensang Online",
		// 		thumbnail: "https://www.freetogame.com/g/427/thumbnail.jpg",
		// 		short_description: "A free to play browser-based top-down hack-and-slash 3D MMORPG similar to games in the Diablo series.",
		// 		game_url: "https://www.freetogame.com/open/drakensang-online",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Bigpoint",
		// 		developer: "Bigpoint",
		// 		release_date: "2011-08-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/drakensang-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Ikariam",
		// 		thumbnail: "https://www.freetogame.com/g/428/thumbnail.jpg",
		// 		short_description: "A free to play browser-based city-building strategy game by GameForge.",
		// 		game_url: "https://www.freetogame.com/open/ikariam",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "GameForge",
		// 		developer: "GameForge",
		// 		release_date: "2008-03-31",
		// 		freetogame_profile_url: "https://www.freetogame.com/ikariam",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Astro Empires",
		// 		thumbnail: "https://www.freetogame.com/g/429/thumbnail.jpg",
		// 		short_description: "A text-based sci-fi strategy and diplomacy MMO Game in a persistent universe.",
		// 		game_url: "https://www.freetogame.com/open/astro-empires",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Cybertopia",
		// 		developer: "Cybertopia",
		// 		release_date: "2006-05-00",
		// 		freetogame_profile_url: "https://www.freetogame.com/astro-empires",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Urban Rivals",
		// 		thumbnail: "https://www.freetogame.com/g/430/thumbnail.jpg",
		// 		short_description: "A free to play browser based card-game with a high player base and comic-book inspired world!",
		// 		game_url: "https://www.freetogame.com/open/urban-rivals",
		// 		genre: "Card Game",
		// 		platform: "Web Browser",
		// 		publisher: "Boostr ",
		// 		developer: "Acute Mobile",
		// 		release_date: "2006-01-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/urban-rivals",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Imperia Online",
		// 		thumbnail: "https://www.freetogame.com/g/431/thumbnail.jpg",
		// 		short_description: "A 2D free-to-play browser-based Medieval MMORTS, Train soldiers and raise an Empire.",
		// 		game_url: "https://www.freetogame.com/open/imperia-online",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Imperia Online Ltd.",
		// 		developer: "Imperia Online Ltd.",
		// 		release_date: "2005-08-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/imperia-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Habbo",
		// 		thumbnail: "https://www.freetogame.com/g/432/thumbnail.jpg",
		// 		short_description: "One of the largest and most popular Social MMO.",
		// 		game_url: "https://www.freetogame.com/open/habbo",
		// 		genre: "Social",
		// 		platform: "Web Browser",
		// 		publisher: "Sulake Corporation",
		// 		developer: "Sulake Corporation",
		// 		release_date: "2001-09-26",
		// 		freetogame_profile_url: "https://www.freetogame.com/habbo",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "RuneScape",
		// 		thumbnail: "https://www.freetogame.com/g/433/thumbnail.jpg",
		// 		short_description: "A popular 3D browser MMORPG boasting a huge player base and 15 years of content.",
		// 		game_url: "https://www.freetogame.com/open/runescape",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows), Web Browser",
		// 		publisher: "Jagex",
		// 		developer: "Jagex",
		// 		release_date: "2001-01-04",
		// 		freetogame_profile_url: "https://www.freetogame.com/runescape",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Will To Live",
		// 		thumbnail: "https://www.freetogame.com/g/434/thumbnail.jpg",
		// 		short_description: "A free-to-play MMORPG-shooter developed and published by AlphaSoft LLC.",
		// 		game_url: "https://www.freetogame.com/open/will-to-live",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "AlphaSoft LLC",
		// 		developer: "AlphaSoft LLC",
		// 		release_date: "2018-04-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/will-to-live",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Battle Breakers",
		// 		thumbnail: "https://www.freetogame.com/g/435/thumbnail.jpg",
		// 		short_description: "A multi-platform free-to-play RPG developed and published by Epic Games for PC and Android devices.  ",
		// 		game_url: "https://www.freetogame.com/open/battlebreakers",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Epic Games",
		// 		developer: "Epic Games",
		// 		release_date: "2019-11-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/battlebreakers",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Inferna",
		// 		thumbnail: "https://www.freetogame.com/g/436/thumbnail.jpg",
		// 		short_description: "A cross-platform MMO from indie developer and publisher Inferna Limited, designed for players seeking a classic experience.  ",
		// 		game_url: "https://www.freetogame.com/open/inferna",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "INFERNA LIMITED",
		// 		developer: "INFERNA LIMITED",
		// 		release_date: "2019-12-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/inferna",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Stay Out",
		// 		thumbnail: "https://www.freetogame.com/g/437/thumbnail.jpg",
		// 		short_description: "An MMORPG featuring urban exploration and shooter elements.",
		// 		game_url: "https://www.freetogame.com/open/stay-out",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Mobile Technologies LLC",
		// 		developer: "Mobile Technologies LLC",
		// 		release_date: "2019-11-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/stay-out",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Kards",
		// 		thumbnail: "https://www.freetogame.com/g/438/thumbnail.jpg",
		// 		short_description: "A free-to-play collectible World War II card game from developer 1939 Games.",
		// 		game_url: "https://www.freetogame.com/open/kards",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "1939 Games",
		// 		developer: "1939 Games",
		// 		release_date: "2019-04-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/kards",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "PC Futbol Legends",
		// 		thumbnail: "https://www.freetogame.com/g/439/thumbnail.jpg",
		// 		short_description: "An arcade soccer game inspired by cult arcade games from IDC games. ",
		// 		game_url: "https://www.freetogame.com/open/futbol-legends",
		// 		genre: "Sports",
		// 		platform: "PC (Windows)",
		// 		publisher: "IDG GAmes",
		// 		developer: "IDG GAmes",
		// 		release_date: "2019-11-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/futbol-legends",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Vampire Empire",
		// 		thumbnail: "https://www.freetogame.com/g/440/thumbnail.jpg",
		// 		short_description: "A multiplayer strategy game that focuses on the war between vampires and werewolves. ",
		// 		game_url: "https://www.freetogame.com/open/vampire-empire",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "R2 Games",
		// 		developer: "F5 Game Company",
		// 		release_date: "2019-11-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/vampire-empire",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Legends of Runeterra",
		// 		thumbnail: "https://www.freetogame.com/g/441/thumbnail.jpg",
		// 		short_description: "A free-to-play CCG based on Riot Games' MOBA League of Legends.",
		// 		game_url: "https://www.freetogame.com/open/runeterra",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Riot Games",
		// 		developer: "Riot Games",
		// 		release_date: "2020-01-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/runeterra",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Vainglory",
		// 		thumbnail: "https://www.freetogame.com/g/442/thumbnail.jpg",
		// 		short_description: "A free-to-play cross-platform MOBA originally developed by Super Evil Megacorp and now owned and operated by Rogue Games.  ",
		// 		game_url: "https://www.freetogame.com/open/vainglory",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Rogue Games, Inc.",
		// 		developer: "Rogue Games, Inc.",
		// 		release_date: "2019-02-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/vainglory",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Ultimate Pirates",
		// 		thumbnail: "https://www.freetogame.com/g/443/thumbnail.jpg",
		// 		short_description: "A browser-based strategy MMO published for both desktop and mobile browsers by Gameforge.  ",
		// 		game_url: "https://www.freetogame.com/open/ultimate-pirates",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Gameforge",
		// 		developer: "Moonmana",
		// 		release_date: "2019-12-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/ultimate-pirates",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dark Knight",
		// 		thumbnail: "https://www.freetogame.com/g/445/thumbnail.jpg",
		// 		short_description: "A browser-based fantasy MMOARPG wherein players take on the role of a devil hunter descended from the gods.",
		// 		game_url: "https://www.freetogame.com/open/dark-knight",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Opogame",
		// 		developer: "Opogame",
		// 		release_date: "2019-08-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/dark-knight",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Legends of Aria",
		// 		thumbnail: "https://www.freetogame.com/g/446/thumbnail.jpg",
		// 		short_description: "A sandbox MMORPG featuring a skill-based system, content that will appeal to both PvE and PvP players, and a robust housing system.",
		// 		game_url: "https://www.freetogame.com/open/legends-of-aria",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Citadel Studios Inc",
		// 		developer: "Citadel Studios Inc",
		// 		release_date: "2019-08-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/legends-of-aria",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Dota Underlords",
		// 		thumbnail: "https://www.freetogame.com/g/447/thumbnail.jpg",
		// 		short_description: "A free-to-play auto battler strategy game set in the world of Valve's Dota franchise.",
		// 		game_url: "https://www.freetogame.com/open/dota-underlords",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Valve",
		// 		developer: "Valve",
		// 		release_date: "2019-06-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/dota-underlords",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "KurtzPel",
		// 		thumbnail: "https://www.freetogame.com/g/448/thumbnail.jpg",
		// 		short_description: "A free-to-play third-person action battle game from KOG Games.",
		// 		game_url: "https://www.freetogame.com/open/kurtzpel",
		// 		genre: "Fighting",
		// 		platform: "PC (Windows)",
		// 		publisher: "KOG",
		// 		developer: "KOG",
		// 		release_date: "2019-04-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/kurtzpel",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Albion Online",
		// 		thumbnail: "https://www.freetogame.com/g/449/thumbnail.jpg",
		// 		short_description: "A free-to-play cross-platform sandbox MMO developed and published by Sandbox Interactive GmbH. ",
		// 		game_url: "https://www.freetogame.com/open/albion-online",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Sandbox Interactive GmbH",
		// 		developer: "Sandbox Interactive GmbH",
		// 		release_date: "2017-07-17",
		// 		freetogame_profile_url: "https://www.freetogame.com/albion-online",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Battlerite Royale",
		// 		thumbnail: "https://www.freetogame.com/g/450/thumbnail.jpg",
		// 		short_description: "A free to play battle royale set in the Battlerite universe.",
		// 		game_url: "https://www.freetogame.com/open/battlerite-royale",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Stunlock Studios",
		// 		developer: "Stunlock Studios",
		// 		release_date: "2018-09-26",
		// 		freetogame_profile_url: "https://www.freetogame.com/battlerite-royale",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Rise of Legions",
		// 		thumbnail: "https://www.freetogame.com/g/451/thumbnail.jpg",
		// 		short_description: "A free-to-play fantasy RTS developed by Broken Games and published by Crunchy Leaf Games. ",
		// 		game_url: "https://www.freetogame.com/open/rise-of-legions",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Crunchy Leaf Games",
		// 		developer: "Broken Games",
		// 		release_date: "2019-08-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/rise-of-legions",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Call Of Duty: Warzone",
		// 		thumbnail: "https://www.freetogame.com/g/452/thumbnail.jpg",
		// 		short_description: "A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.",
		// 		game_url: "https://www.freetogame.com/open/call-of-duty-warzone",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Activision",
		// 		developer: "Infinity Ward",
		// 		release_date: "2020-03-10",
		// 		freetogame_profile_url: "https://www.freetogame.com/call-of-duty-warzone",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Gotham City Impostors",
		// 		thumbnail: "https://www.freetogame.com/g/453/thumbnail.jpg",
		// 		short_description: "A free to play multiplayer FPS that pits vigilantes dressed up like Batman against criminals dressed up like the Joker",
		// 		game_url: "https://www.freetogame.com/open/gotham-city-impostors",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Warner Bros. Interactive Entertainment",
		// 		developer: "Monolith Productions, Inc.",
		// 		release_date: "2012-08-31",
		// 		freetogame_profile_url: "https://www.freetogame.com/gotham-city-impostors",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Magic: The Gathering Arena",
		// 		thumbnail: "https://www.freetogame.com/g/454/thumbnail.jpg",
		// 		short_description: "A free-to-play digital recreation of Wizards of the Coast's popular collectible card game.",
		// 		game_url: "https://www.freetogame.com/open/mtg-arena",
		// 		genre: "Card Game",
		// 		platform: "PC (Windows)",
		// 		publisher: "Wizards of the Coast",
		// 		developer: "Wizards of the Coast",
		// 		release_date: "2018-09-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/mtg-arena",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Eternal Fury",
		// 		thumbnail: "https://www.freetogame.com/g/455/thumbnail.jpg",
		// 		short_description: "A free-to-play ARPG from R2 Games!",
		// 		game_url: "https://www.freetogame.com/open/eternal-fury",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "R2 Games",
		// 		developer: "R2 Games",
		// 		release_date: "2019-05-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/eternal-fury",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Conqueror's Blade",
		// 		thumbnail: "https://www.freetogame.com/g/456/thumbnail.jpg",
		// 		short_description: "Command your own medieval army in Conqueror's Blade, a war simulator developed by Booming games.",
		// 		game_url: "https://www.freetogame.com/open/conquerors-blade",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Booming Games",
		// 		developer: "Booming Games",
		// 		release_date: "2019-05-30",
		// 		freetogame_profile_url: "https://www.freetogame.com/conquerors-blade",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "The Third Age",
		// 		thumbnail: "https://www.freetogame.com/g/457/thumbnail.jpg",
		// 		short_description: "A free-to-play browser-based Strategy MMO game focused on story-based PvE gameplay!",
		// 		game_url: "https://www.freetogame.com/open/the-third-age",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "R2 Games",
		// 		developer: "R2 Games",
		// 		release_date: "2019-04-29",
		// 		freetogame_profile_url: "https://www.freetogame.com/the-third-age",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "League of Angels - Heaven's Fury",
		// 		thumbnail: "https://www.freetogame.com/g/458/thumbnail.jpg",
		// 		short_description: "A free-to-play, browser-based fantasy online action RPG based loosely on Western mythology!",
		// 		game_url: "https://www.freetogame.com/open/league-of-angels-heavens-fury",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "Gtarcade",
		// 		developer: "Yoozoo Games",
		// 		release_date: "2020-01-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/league-of-angels-heavens-fury",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Bombergrounds: Battle Royale",
		// 		thumbnail: "https://www.freetogame.com/g/459/thumbnail.jpg",
		// 		short_description: "A free-to-play massively multiplayer battle Royale game inspired by the old-shool Bomberman games!",
		// 		game_url: "https://www.freetogame.com/open/bombergrounds-battle-royale",
		// 		genre: "Battle Royale",
		// 		platform: "PC (Windows)",
		// 		publisher: "Giant Duck Games",
		// 		developer: "Giant Duck Games",
		// 		release_date: "2020-03-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/bombergrounds-battle-royale",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Empire: World War 3",
		// 		thumbnail: "https://www.freetogame.com/g/460/thumbnail.jpg",
		// 		short_description: "A free-to-play browser-based action packed strategy game from the developer of Legends of Honor.",
		// 		game_url: "https://www.freetogame.com/open/empireww3",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Goodgame Studios",
		// 		developer: "Goodgame Studios",
		// 		release_date: "2018-06-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/empireww3",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Shop Titans",
		// 		thumbnail: "https://www.freetogame.com/g/461/thumbnail.jpg",
		// 		short_description: "A free-to-play RPG shopkeeper simulation game where you are responsible for designing and maintaining your own shop.",
		// 		game_url: "https://www.freetogame.com/open/shop-titans",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Kabam Games, Inc.",
		// 		developer: "Kabam Games, Inc.",
		// 		release_date: "2020-05-05",
		// 		freetogame_profile_url: "https://www.freetogame.com/shop-titans",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Heroes Showdown",
		// 		thumbnail: "https://www.freetogame.com/g/462/thumbnail.jpg",
		// 		short_description: "Heroes Showdown is a free-to-play auto-battler game with strategic 4v4 battles and a focus on player skill. Team up with three other players and challenge another team to an epic auto battle showdown.",
		// 		game_url: "https://www.freetogame.com/open/heroes-showdown",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "PATHFINDER8",
		// 		developer: "PATHFINDER8",
		// 		release_date: "2020-05-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/heroes-showdown",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Survivor Legacy",
		// 		thumbnail: "https://www.freetogame.com/g/463/thumbnail.jpg",
		// 		short_description: "Survivor Legacy is a free-to-play zombie-themed strategy game from R2 Games.",
		// 		game_url: "https://www.freetogame.com/open/survivor-legacy",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "R2 Games",
		// 		developer: "GameHollywood",
		// 		release_date: "2020-04-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/survivor-legacy",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Shadow Arena",
		// 		thumbnail: "https://www.freetogame.com/g/464/thumbnail.jpg",
		// 		short_description: "Fight your way to the top and prove you’re the best warrior, mage, sorcerer… just the best… when you’re the last person standing in Pearl Abyss’ Black Desert Online battle royale spinoff Shadow Arena.",
		// 		game_url: "https://www.freetogame.com/open/shadow-arena",
		// 		genre: "Battle Royale",
		// 		platform: "PC (Windows)",
		// 		publisher: "Pearl Abyss",
		// 		developer: "Pearl Abyss",
		// 		release_date: "2020-05-22",
		// 		freetogame_profile_url: "https://www.freetogame.com/shadow-arena",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Crucible",
		// 		thumbnail: "https://www.freetogame.com/g/465/thumbnail.jpg",
		// 		short_description: "Fight for survival on an alien planet, defeating not only monsters but also other Hunters in Amazon Games’ free-to-play team-based PvP shooter Crucible.",
		// 		game_url: "https://www.freetogame.com/open/crucible",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Amazon Games",
		// 		developer: "Relentless Studios",
		// 		release_date: "2020-05-21",
		// 		freetogame_profile_url: "https://www.freetogame.com/crucible",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Valorant",
		// 		thumbnail: "https://www.freetogame.com/g/466/thumbnail.jpg",
		// 		short_description: "Test your mettle in Riot Games’ character-based FPS shooter Valorant.",
		// 		game_url: "https://www.freetogame.com/open/valorant",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Riot Games",
		// 		developer: "Riot Games",
		// 		release_date: "2020-06-02",
		// 		freetogame_profile_url: "https://www.freetogame.com/valorant",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Phantasy Star Online 2",
		// 		thumbnail: "https://www.freetogame.com/g/467/thumbnail.jpg",
		// 		short_description: "Welcome to ARKS, and elite task force searching dangerous planets for the corrupted Falspawn in Phantasy Star 2 Online, Sega’s popular, free-to-play sci-fi MMORPG.",
		// 		game_url: "https://www.freetogame.com/open/pso2",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "SEGA",
		// 		developer: "SEGA",
		// 		release_date: "2020-05-27",
		// 		freetogame_profile_url: "https://www.freetogame.com/pso2",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Firestone Idle RPG",
		// 		thumbnail: "https://www.freetogame.com/g/468/thumbnail.jpg",
		// 		short_description: "Set in the fantasy world of Alandria, Firestone is an idle RPG in which players are tasked with building the best possible party of heroes and using them to defeat the undead and orcs that plague the world.",
		// 		game_url: "https://www.freetogame.com/open/firestone-idle-rpg",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "Holyday Studios",
		// 		developer: "Holyday Studios",
		// 		release_date: "2019-09-26",
		// 		freetogame_profile_url: "https://www.freetogame.com/firestone-idle-rpg",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Unfortunate Spacemen",
		// 		thumbnail: "https://www.freetogame.com/g/469/thumbnail.jpg",
		// 		short_description: "Unfortunate Spacemen is a co-op multiplayer game about Shapeshifting with a Co-op Story Mode, lots of objectives and more!",
		// 		game_url: "https://www.freetogame.com/open/unfortunate-spacemen",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "New Blood Interactive",
		// 		developer: "Geoff 'Zag' Keene",
		// 		release_date: "2020-06-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/unfortunate-spacemen",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Hyper Scape",
		// 		thumbnail: "https://www.freetogame.com/g/470/thumbnail.jpg",
		// 		short_description: "A futuristic urban battle royale game with powerful hacks and unique weapons!",
		// 		game_url: "https://www.freetogame.com/open/hyper-scape",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Ubisoft",
		// 		developer: "Ubisoft",
		// 		release_date: "2020-07-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/hyper-scape",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Armor Valor",
		// 		thumbnail: "https://www.freetogame.com/g/471/thumbnail.jpg",
		// 		short_description: "Build your empire with the help of mythical heroes and well thought out strategy in R2 Games’ strategy RPG Armor Valor.",
		// 		game_url: "https://www.freetogame.com/open/armor-valor",
		// 		genre: "Strategy",
		// 		platform: "Web Browser",
		// 		publisher: "R2 Games",
		// 		developer: "R2 Games",
		// 		release_date: "2020-07-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/armor-valor",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Jade Goddess",
		// 		thumbnail: "https://www.freetogame.com/g/472/thumbnail.jpg",
		// 		short_description: "Jade Goddess is a free-to-play, browser based MMO inspired by Eastern mythology.",
		// 		game_url: "https://www.freetogame.com/open/jade-goddess",
		// 		genre: "MMORPG",
		// 		platform: "Web Browser",
		// 		publisher: "101XP",
		// 		developer: "101XP",
		// 		release_date: "2020-06-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/jade-goddess",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Spellbreak",
		// 		thumbnail: "https://www.freetogame.com/g/473/thumbnail.jpg",
		// 		short_description: "Spellbreak is a multiplayer, multi-platform battle-royale where player take on the role of a “battlemage” mastering elemental magic and using spells to compete against other players.",
		// 		game_url: "https://www.freetogame.com/open/spellbreak",
		// 		genre: "Battle Royale",
		// 		platform: "PC (Windows)",
		// 		publisher: "Proletariat",
		// 		developer: "Proletariat",
		// 		release_date: "2020-09-04",
		// 		freetogame_profile_url: "https://www.freetogame.com/spellbreak",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Rocket League",
		// 		thumbnail: "https://www.freetogame.com/g/474/thumbnail.jpg",
		// 		short_description: "Get your car-soccer gaming on for free with Psyonix’s Rocket League. The popular competitive multi-player game is a popular offering with over 57 million players.",
		// 		game_url: "https://www.freetogame.com/open/rocket-league",
		// 		genre: "Sports",
		// 		platform: "PC (Windows)",
		// 		publisher: "Psyonix LLC",
		// 		developer: "Psyonix LLC",
		// 		release_date: "2020-09-24",
		// 		freetogame_profile_url: "https://www.freetogame.com/rocket-league",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Genshin Impact",
		// 		thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg",
		// 		short_description: "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
		// 		game_url: "https://www.freetogame.com/open/genshin-impact",
		// 		genre: "Action RPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "miHoYo",
		// 		developer: "miHoYo",
		// 		release_date: "2020-09-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/genshin-impact",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Rogue Company",
		// 		thumbnail: "https://www.freetogame.com/g/476/thumbnail.jpg",
		// 		short_description: "From Hi-Rez Studios, the team that brought you Smite and Paladins, comes Rogue Company, a cross-platform, competitive team-based third person shooter.",
		// 		game_url: "https://www.freetogame.com/open/rogue-company",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Nexon",
		// 		developer: "Valofe",
		// 		release_date: "2020-10-01",
		// 		freetogame_profile_url: "https://www.freetogame.com/rogue-company",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Eternal Return: Black Survival",
		// 		thumbnail: "https://www.freetogame.com/g/477/thumbnail.jpg",
		// 		short_description: "Combining elements from battle royale, MOBA, and the survival genres, Eternal Return: Black Survival is a game designed with a broad audience in mind. ",
		// 		game_url: "https://www.freetogame.com/open/eternal-return",
		// 		genre: "MOBA",
		// 		platform: "PC (Windows)",
		// 		publisher: "Nimble Neuron",
		// 		developer: "Nimble Neuron",
		// 		release_date: "2020-10-14",
		// 		freetogame_profile_url: "https://www.freetogame.com/eternal-return",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Blood of Steel",
		// 		thumbnail: "https://www.freetogame.com/g/479/thumbnail.jpg",
		// 		short_description: "Blood of Steel is an online competitive strategy game featuring some of the most well-known figures throughout medieval history. Choose your general – a Crusader, Viking, Ninja or one of those from the Three Kingdoms. Build your kingdom and command armies in epic PvP battles using classic medieval warfare tactics.",
		// 		game_url: "https://www.freetogame.com/open/blood-of-steel",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "YC Games",
		// 		developer: "YC Games",
		// 		release_date: "2020-10-20",
		// 		freetogame_profile_url: "https://www.freetogame.com/blood-of-steel",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Astellia Royal",
		// 		thumbnail: "https://www.freetogame.com/g/497/thumbnail.jpg",
		// 		short_description: "Gamers interested in Studio8’s MMO Astellia now have a new – and slightly different – free-to-play option, Astellia Royal",
		// 		game_url: "https://www.freetogame.com/open/astellia-royal",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Way2Bit",
		// 		developer: "Studio 8",
		// 		release_date: "2020-12-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/astellia-royal",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Blankos Block Party",
		// 		thumbnail: "https://www.freetogame.com/g/498/thumbnail.jpg",
		// 		short_description: "What happens when you take the vinyl collectible toy experience and combine it with an open-world multiplayer game? You get Blankos Block Party!\r\n",
		// 		game_url: "https://www.freetogame.com/open/blankos",
		// 		genre: "MMO",
		// 		platform: "PC (Windows)",
		// 		publisher: "Third Kind Games",
		// 		developer: "Mythical Games Inc",
		// 		release_date: "2020-12-11",
		// 		freetogame_profile_url: "https://www.freetogame.com/blankos",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Slapshot: Rebound",
		// 		thumbnail: "https://www.freetogame.com/g/499/thumbnail.jpg",
		// 		short_description: "Do you like hockey? How about physic-based multiplayer, arcade-style sports games with cute graphics? Well, this is the one for you.",
		// 		game_url: "https://www.freetogame.com/open/slapshot-rebound",
		// 		genre: "Sports",
		// 		platform: "PC (Windows)",
		// 		publisher: "Oddshot Games",
		// 		developer: "Oddshot Games",
		// 		release_date: "2020-12-07",
		// 		freetogame_profile_url: "https://www.freetogame.com/slapshot-rebound",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Chroma: Bloom And Blight",
		// 		thumbnail: "https://www.freetogame.com/g/500/thumbnail.jpg",
		// 		short_description: "Competitive card game fans have a new, completely free option to add to their list. ",
		// 		game_url: "https://www.freetogame.com/open/chroma-bloom-and-blight",
		// 		genre: "Card",
		// 		platform: "PC (Windows)",
		// 		publisher: "WhisperGames",
		// 		developer: "Clarity Games",
		// 		release_date: "2021-01-28",
		// 		freetogame_profile_url: "https://www.freetogame.com/chroma-bloom-and-blight",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Fer.al",
		// 		thumbnail: "https://www.freetogame.com/g/501/thumbnail.jpg",
		// 		short_description: "If you’ve ever wanted to be a creature of myth and hang out with other mytical creatures, Wildworks’ Fer.al can help you live the dream.",
		// 		game_url: "https://www.freetogame.com/open/Feral",
		// 		genre: "MMO",
		// 		platform: "PC (Windows)",
		// 		publisher: "Wildworks",
		// 		developer: "Wildworks",
		// 		release_date: "2019-12-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/Feral",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Primordials: Battle of Gods",
		// 		thumbnail: "https://www.freetogame.com/g/502/thumbnail.jpg",
		// 		short_description: "Build armies and fight for control of the realm in Global Dodo Entertainment’s 1v1 strategy game Primordials: Battle of Gods. ",
		// 		game_url: "https://www.freetogame.com/open/primordials-battle-of-gods",
		// 		genre: "Strategy",
		// 		platform: "PC (Windows)",
		// 		publisher: "Wire Games",
		// 		developer: "Global Dodo Entertainment",
		// 		release_date: "2021-03-04",
		// 		freetogame_profile_url: "https://www.freetogame.com/primordials-battle-of-gods",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Artifact",
		// 		thumbnail: "https://www.freetogame.com/g/503/thumbnail.jpg",
		// 		short_description: "Valve’s Artifact is two games in one. Whether you’re looking for the original Dota 2 trading card game created with the help of card game designer Richard Garfield or something a little more streamlined, Artifact has both in one download.",
		// 		game_url: "https://www.freetogame.com/open/artifact",
		// 		genre: "Card",
		// 		platform: "PC (Windows)",
		// 		publisher: "Valve",
		// 		developer: "Valve",
		// 		release_date: "2018-11-29",
		// 		freetogame_profile_url: "https://www.freetogame.com/artifact",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Magic: Legends",
		// 		thumbnail: "https://www.freetogame.com/g/504/thumbnail.jpg",
		// 		short_description: "The world of Magic comes to life in Perfect World Entertainment and Cryptic’s Online Action RPG Magic: Legends. ",
		// 		game_url: "https://www.freetogame.com/open/magic-legends",
		// 		genre: "ARPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Perfect World Entertainment",
		// 		developer: "Cryptic",
		// 		release_date: "2018-11-23",
		// 		freetogame_profile_url: "https://www.freetogame.com/magic-legends",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Mythgard",
		// 		thumbnail: "https://www.freetogame.com/g/505/thumbnail.jpg",
		// 		short_description: "Rhino Games Inc.’s CCG Mythgard combines cyberpunk with the heroes, gods, and creatures of the fantasy in a modern setting to create a world where magic competes against technology for control.",
		// 		game_url: "https://www.freetogame.com/open/mythgard",
		// 		genre: "Card",
		// 		platform: "PC (Windows)",
		// 		publisher: "Rhino Games Inc.",
		// 		developer: "Rhino Games Inc.",
		// 		release_date: "2019-09-18",
		// 		freetogame_profile_url: "https://www.freetogame.com/mythgard",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Totally Accurate Battlegrounds",
		// 		thumbnail: "https://www.freetogame.com/g/506/thumbnail.jpg",
		// 		short_description: "Take 60 players, throw them on a map together with over 90 weapons, including balloon crossbows, pots and pans, and inflatable hammers, add physics-based parkour and you have Landfall’s Totally Accurate Battlegrounds (TABG).",
		// 		game_url: "https://www.freetogame.com/open/tabg",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Landfall",
		// 		developer: "Landfall",
		// 		release_date: "2018-06-06",
		// 		freetogame_profile_url: "https://www.freetogame.com/tabg",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Super Mecha Champions",
		// 		thumbnail: "https://www.freetogame.com/g/507/thumbnail.jpg",
		// 		short_description: "Super Mecha Champions is a PC port of the mobile anime PvP game from NetEease, featuring a variety of modes but focusing on battle royale.",
		// 		game_url: "https://www.freetogame.com/open/super-mecha-champions",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "NetEase Games",
		// 		developer: "NetEase Games",
		// 		release_date: "2021-03-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/super-mecha-champions",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Enlisted",
		// 		thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
		// 		short_description: "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
		// 		game_url: "https://www.freetogame.com/open/enlisted",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Gaijin Entertainment",
		// 		developer: "Darkflow Software",
		// 		release_date: "2021-04-08",
		// 		freetogame_profile_url: "https://www.freetogame.com/enlisted",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Smash Legends",
		// 		thumbnail: "https://www.freetogame.com/g/509/thumbnail.jpg",
		// 		short_description: "Classic fairy tales get wild with 5minlab and LINE Games Corporation’s brawl-action game Smash Legends.",
		// 		game_url: "https://www.freetogame.com/open/smash-legends",
		// 		genre: "Fighting",
		// 		platform: "PC (Windows)",
		// 		publisher: "LINE Games Corporation",
		// 		developer: "5minlab",
		// 		release_date: "2021-04-13",
		// 		freetogame_profile_url: "https://www.freetogame.com/smash-legends",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Drifters Loot the Galaxy",
		// 		thumbnail: "https://www.freetogame.com/g/510/thumbnail.jpg",
		// 		short_description: "Grab your Driftpacs and grappling hooks, it’s time to loot. Pick a character and dive into Blind Squirrel’s team-based shooter, Drifters Loot the Galaxy.",
		// 		game_url: "https://www.freetogame.com/open/drifters-loot-the-galaxy",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "Blind Squirrel Entertainment",
		// 		developer: "Blind Squirrel Entertainment",
		// 		release_date: "2021-04-15",
		// 		freetogame_profile_url: "https://www.freetogame.com/drifters-loot-the-galaxy",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Phantasy Star Online 2 New Genesis",
		// 		thumbnail: "https://www.freetogame.com/g/511/thumbnail.jpg",
		// 		short_description: "The legacy of Phantasy Star Online 2 continues a thousand years later!",
		// 		game_url: "https://www.freetogame.com/open/pso2-new-genesis",
		// 		genre: "MMORPG",
		// 		platform: "PC (Windows)",
		// 		publisher: "Sega",
		// 		developer: "Sega",
		// 		release_date: "2021-06-09",
		// 		freetogame_profile_url: "https://www.freetogame.com/pso2-new-genesis",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Sherwood Extreme",
		// 		thumbnail: "https://www.freetogame.com/g/512/thumbnail.jpg",
		// 		short_description: "High action arcade shooter Sherwood Extreme sends players on a mission to save the kingdom!",
		// 		game_url: "https://www.freetogame.com/open/sherwood-extreme",
		// 		genre: "Shooter",
		// 		platform: "PC (Windows)",
		// 		publisher: "CAGE Studios",
		// 		developer: "CAGE Studios",
		// 		release_date: "2021-05-12",
		// 		freetogame_profile_url: "https://www.freetogame.com/sherwood-extreme",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Super Squad",
		// 		thumbnail: "https://www.freetogame.com/g/513/thumbnail.jpg",
		// 		short_description: "Prepare yourself. It’s time for Mayhem. Super Squad is a multi-player online shoot-’em-up (or MOSH)!",
		// 		game_url: "https://www.freetogame.com/open/super-squad",
		// 		genre: "Moba",
		// 		platform: "PC (Windows)",
		// 		publisher: "Bad Fox Studios",
		// 		developer: "Bad Fox Studios",
		// 		release_date: "2021-06-25",
		// 		freetogame_profile_url: "https://www.freetogame.com/super-squad",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	},
		// 	{
			
		// 		title: "Skydome",
		// 		thumbnail: "https://www.freetogame.com/g/514/thumbnail.jpg",
		// 		short_description: "Take a 4v4 tower defense game, add a touch of MOBA, and you have gamigo and Kinship Game Studio’s Skydome.",
		// 		game_url: "https://www.freetogame.com/open/skydome",
		// 		genre: "Moba",
		// 		platform: "PC (Windows)",
		// 		publisher: "gamigo US Inc.",
		// 		developer: "Kinship Game Studio Ltda",
		// 		release_date: "2021-08-18",
		// 		freetogame_profile_url: "https://www.freetogame.com/skydome",
		// 		createdAt: new Date(),
		// 		updatedAt: new Date()
		// 	}
		// ], 
		// {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Games", null, {});
	},
};
