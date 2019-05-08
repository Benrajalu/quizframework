import corniaud from "../media/corniaud.mp3";
import sylvioForel from "../media/sylvioForel.jpg";
import disney from "../media/disney.jpg";

export const FILM = [
  {
    points: 1,
    status: "hidden",
    replied: false,
    question: {
      text: "Comment s'appelle le film de les Nuls ?",
      type: "text",
      answer: "La Cité de la Peur"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "De quel film est extrait ce clip ?",
      audio: corniaud,
      type: "audio",
      answer: "Le Corniaud"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Quel acteur a le rôle principal dans le Meilleur Film des Oscars 2019 ?",
      type: "text",
      answer: "Viggo Mortensen"
    }
  },
  {
    points: 1,
    status: "hidden",
    replied: false,
    question: {
      text: "Quel est le point comment entre ces personnages ? ",
      type: "image",
      image: disney,
      answer: "Disney"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Docteur House souffre d'une de ses jambes, laquelle ? ",
      type: "text",
      answer: "Droite"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Qui est cet homme ? ",
      type: "image",
      image: sylvioForel,
      answer: "Syrio Forel, maitre d'arme de Winterfell"
    }
  },
];
