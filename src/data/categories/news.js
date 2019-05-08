import castaner from "../media/castaner.jpg";

export const NEWS = [
  {
    points: 1,
    status: "hidden",
    replied: false,
    question: {
      text: "Nommez le précédent président de la République",
      type: "text",
      answer: "François Hollande"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Quelle est l'actuelle capitale du Sri Lanka ?",
      type: "text",
      answer: "Colombo"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Quel était le taux de croissance du PIB Français en 2017 ?",
      choices: ['1,6%', '1,8%', '0,7%'],
      type: "qcm",
      answer: "Answer copy"
    }
  },
  {
    points: 1,
    status: "hidden",
    replied: false,
    question: {
      text: "Qui est cet homme et quel est son poste ?",
      image: castaner,
      type: "image",
      answer: "Christophe Castaner, ministre de l'intérieur"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Qui a été couronné roi de Thaïlande récemment ?",
      type: "text",
      answer: "Rama X (Maha Vajiralongkorn)"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Qui est l'actuel président du gouvernement Russe ?",
      type: "text",
      answer: "Dimitri Medvedev"
    }
  },
];
