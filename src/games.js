let games = [
  {
    id: 1,
    title: "The Messenger",
    genre: ["Action", "Platformer"],
    releaseYear: 2019,
    rating: 4.5,
    imgUrl: "https://www.nintendo.com//content/dam/noa/fr_CA/games/switch/t/the-messenger-switch/the-messenger-switch-hero.jpg"

  },
  {
    id: 2,
    title: "Loop Hero",
    genre: ["Rogue Lite", "Strategy"],
    releaseYear: 2021,
    rating: 4,
    imgUrl: "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/802c-loop_hero.jpeg"
  },
  {
    id: 3,
    title: "Axiom Verge",
    genre: ["Metroidvania", "Platformer"],
    releaseYear: 2015,
    rating: 4.25,
    imgUrl: "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_download_software_5/SI_WiiUDS_AxiomVerge_image1600w.jpg"
  },
  {
    id: 4,
    title: "Axiom Verge 2",
    genre: ["Metroidvania", "Platformer"],
    releaseYear: 2021,
    rating: 4.3,
    imgUrl: "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AxiomVerge2_image1600w.jpg"
  }, 
  {
    id: 5,
    title: "Hollow Knight",
    genre: ["Metroidvania", "Action-Adventure"],
    releaseYear: 2017,
    rating: 4.4,
    imgUrl: "https://gameranx.com/wp-content/uploads/2019/03/capsule_616x353.jpg"
  }, {
    id: 6,
    title: "Hades",
    genre: ["Hack'n'Slash", "Rogue Lite"],
    releaseYear: 2020,
    rating: 4.7,
    imgUrl: "https://i.ytimg.com/vi/Bz8l935Bv0Y/maxresdefault.jpg"
  },
  {
    id: 7,
    title: "The Messenger",
    genre: ["Action", "Platformer"],
    releaseYear: 2019,
    rating: 4.5,
    imgUrl: "https://www.nintendo.com//content/dam/noa/fr_CA/games/switch/t/the-messenger-switch/the-messenger-switch-hero.jpg"

  },
  {
    id: 8,
    title: "Loop Hero",
    genre: ["Rogue Lite", "Strategy"],
    releaseYear: 2021,
    rating: 4,
    imgUrl: "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/802c-loop_hero.jpeg"
  },
  {
    id: 9,
    title: "Axiom Verge",
    genre: ["Metroidvania", "Platformer"],
    releaseYear: 2015,
    rating: 4.25,
    imgUrl: "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_download_software_5/SI_WiiUDS_AxiomVerge_image1600w.jpg"
  },
  {
    id: 10,
    title: "Axiom Verge 2",
    genre: ["Metroidvania", "Platformer"],
    releaseYear: 2021,
    rating: 4.3,
    imgUrl: "https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_AxiomVerge2_image1600w.jpg"
  }, 
];

// return as a promise
const fetchGames = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(games)
      }, 1500)
  })
}

export default fetchGames;
