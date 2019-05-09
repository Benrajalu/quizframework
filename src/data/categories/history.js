import app18juin from "../media/app18juin.mp3";
import kheops from "../media/kheops.jpg";
import maroc from "../media/maroc.jpg";

export const HISTORY = [
  {
    points: 1,
    status: "hidden",
    replied: false,
    question: {
      text: "En quelle année a eu lieu la révolution Française ?",
      type: "text",
      answer: "1789"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "À quel pays appartient ce drapeau ?",
      image: maroc,
      type: "image",
      answer: "Maroc"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Quelle est la plus grande pyramide d'Egypte ?",
      image: kheops,
      type: "image",
      answer: "Pyramide de Kheops"
    }
  },
  {
    points: 1,
    status: "hidden",
    replied: false,
    question: {
      text: "Quel est le plus grand fleuve du monde ?",
      type: "text",
      answer: "L'amazone (accepté le Nil)"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Identifiez ce document historique",
      type: "audio",
      audio: app18juin,
      answer: "Appel du 18 juin 1940, Général du Gaulle"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Qui gouverne le Canada ?",
      type: "text",
      answer: "Elizabeth II"
    }
  },
];
