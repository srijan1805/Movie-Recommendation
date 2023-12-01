export const moviesData = [
  {
    adult: false,
    id: 13,
    original_title: "Forrest Gump",
    popularity: 88.224,
    video: false,
  },
  {
    adult: false,
    id: 550,
    original_title: "Fight Club",
    popularity: 85.852,
    video: false,
  },
  {
    adult: false,
    id: 557,
    original_title: "Spider-Man",
    popularity: 93.833,
    video: false,
  },
  {
    adult: false,
    id: 103,
    original_title: "Taxi Driver",
    popularity: 52.191,
    video: false,
  },
  {
    adult: false,
    id: 22,
    original_title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    popularity: 105.714,
    video: false,
  },
  {
    adult: false,
    id: 155,
    original_title: "The Dark Knight",
    popularity: 102.372,
    video: false,
  },
  {
    adult: false,
    id: 414906,
    original_title: "The Batman",
    popularity: 136.362,
    video: false,
  },
  {
    adult: false,
    id: 1578,
    original_title: "Raging Bull",
    popularity: 22.608,
    video: false,
  },
];

export function makeData() {
  return moviesData.map((m) => m.id);
}

export function getRandomMovieId() {
  const movieIds = makeData();
  const random = Math.floor(Math.random() * movieIds.length);
  return movieIds[random];
}
