import stadeFrance from "../media/stadeFrance.jpg";

export const SPORT = [
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Quelle équipe a gagné la coupe de France de football cette année ?",
      type: "text",
      answer: "Rennes"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Nommez dans l'ordre le top 3 ATP actuel",
      type: "text",
      answer: "Djokovic, Nadal, Federer"
    }
  },
  {
    points: 15,
    status: "hidden",
    replied: false,
    question: {
      text: "Parmis ces épreuves, laquelle fera son entrée aux JO de Tokyo en 2020 ?",
      choices: ["Le golf", "Le rugby", "Le basket 3v3"],
      type: "qcm",
      answer: "Basket 3v3"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Comment se nomme ce stade ?",
      image: stadeFrance,
      type: "image",
      answer: "Stade de France"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Combien de points rapporte un waza-ari au Judo ?",
      type: "text",
      answer: "10"
    }
  },
  {
    points: 15,
    status: "hidden",
    replied: false,
    question: {
      text: "Dans quelle discipline évolue le Français le plus titré sur la scène internationale ?",
      type: "text",
      answer: "Planche à voile (Antoine Albeau, 23 titres champion du monde)"
    }
  },
];
