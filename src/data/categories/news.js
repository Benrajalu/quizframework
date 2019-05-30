import castaner from "../media/castaner.jpg";

export const NEWS = [
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Nommez le précédent président de la République",
      type: "text",
      answer: "François Hollande"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Quelle est l'actuelle capitale du Sri Lanka ?",
      type: "text",
      answer: "Colombo"
    }
  },
  {
    points: 15,
    status: "hidden",
    replied: false,
    question: {
      text: "Quel est le nom du vainqueur de la palme d'or 2019 ?",
      type: "text",
      answer: "Bong Joon-ho (pour Parasite)"
    }
  },
  {
    points: 5,
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
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Qui a été couronné roi de Thaïlande récemment ?",
      type: "text",
      answer: "Rama X (Maha Vajiralongkorn)"
    }
  },
  {
    points: 15,
    status: "hidden",
    replied: false,
    question: {
      text: "Qui est l'actuel président du gouvernement Russe ?",
      type: "text",
      answer: "Dimitri Medvedev"
    }
  },
];
