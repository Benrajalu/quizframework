import { NEWS } from "./categories/news";
import { FILM } from "./categories/film";
import { MUSIC } from "./categories/music";
import { HISTORY } from "./categories/history";
import { DIGITAL } from "./categories/digital";
import { SPORT } from "./categories/sport";

export const CATEGORIES = [
  {
    name: "Actualité",
    url: "news",
    questions: NEWS
  },
  {
    name: "Ciné et TV",
    url: "film",
    questions: FILM
  },
  {
    name: "Musique",
    url: "music",
    questions: MUSIC
  },
  {
    name: "Histoire Géo",
    url: "history",
    questions: HISTORY
  },
  {
    name: "Numérique",
    url: "digital",
    questions: DIGITAL
  },
  {
    name: "Sport",
    url: "sport",
    questions: SPORT
  }
];
