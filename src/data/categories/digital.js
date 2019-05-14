import playsation1 from "../media/playsation1.mp3";
import applis from "../media/applis.jpg";

export const DIGITAL = [
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Comment s'appelait le fondateur d'Apple ?",
      type: "text",
      answer: "Steve Jobs"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Quelle était la capacité de stockage standard du premier iPod ?",
      choices: ['10Go', '8Go', '5Go'],
      type: "qcm",
      answer: "5go"
    }
  },
  {
    points: 15,
    status: "hidden",
    replied: false,
    question: {
      text: "Quel est ce son ?",
      audio: playsation1,
      type: "audio",
      answer: "Démarrage playstation 1"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Quelle marque vend le plus de téléphones dans le monde ?",
      type: "qcm",
      choices: ["Huawei", "Samsung", "Apple"],
      answer: "Samsung > Apple > Huawei"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Nommez ces trois applications",
      type: "image",
      image: applis,
      answer: "Tinder, Evernote, Sushi Shop"
    }
  },
  {
    points: 15,
    status: "hidden",
    replied: false,
    question: {
      text: "Quel est le nom du troisième jeu de la saga Zelda ?",
      type: "text",
      answer: "A link to the past"
    }
  },
];
