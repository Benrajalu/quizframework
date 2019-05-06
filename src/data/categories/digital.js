import audioSample from "../media/limbus.mp3";
import imageSample from "../media/image.png";

export const DIGITAL = [
  {
    points: 1,
    status: "hidden",
    replied: false,
    question: {
      text: "Comment s'appelait le fondateur d'Apple ?",
      type: "text",
      answer: "Steve Jobs"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Coucou ?",
      audio: audioSample,
      type: "audio",
      answer: "Answer copy"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Coucou ?",
      image: imageSample,
      type: "image",
      answer: "Answer copy"
    }
  },
  {
    points: 1,
    status: "hidden",
    replied: false,
    question: {
      text: "Quel est le nom du troisième jeu de la saga Zelda ?",
      type: "text",
      answer: "Answer copy"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Coucou ?",
      choices: ["Choix 1", "Choix 2", "Choix 3"],
      type: "qcm",
      answer: "Answer copy"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Quel est le nom du troisième jeu de la saga Zelda ?",
      type: "text",
      answer: "Answer copy"
    }
  },
];
