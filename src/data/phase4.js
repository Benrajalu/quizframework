import futurama from "./media/futurama.mp3";
import bashung from "./media/bashung.mp3";
import hubert from "./media/hubert.mp3";
import bulbi from "./media/bulbi.jpg";
import meduse from "./media/meduse.jpg";
import celetse from "./media/celeste.jpg";

export const SLIDES = [
  {
    type: "question",
    question: "Comment s'appelle la technique de cristallisation du chocolat ?",
    answer: "Le tempérage"
  },
  {
    type: "audio",
    question: "De quelle série est-ce le générique ?",
    audio: futurama,
    answer: "Futurama"
  },
  {
    type: "image",
    question: "Comment se nomme ce Pokémon ?",
    image: bulbi,
    answer: "Bulbizarre"
  },
  {
    type: "question",
    question: "Quel est le nom de famille le plus répandu au monde ?",
    answer: "Chang"
  },
  {
    type: "image",
    question: "Qui est ce personnage ?",
    image: celetse,
    answer: "Celeste, femme de Babar"
  },
  {
    type: "audio",
    question: "Quel est le vrai nom (sans faute) de ce grand espion Français ?",
    audio: hubert,
    answer: "Hubert Bonisseur de La Bath"
  },
  {
    type: "question",
    question: "Qui est apparu dans plus de trente films d'Alfred Hitchcock ?",
    answer: "Alfred Hitchcock"
  },
  {
    type: "audio",
    question: "Nommez l'artiste et le titre de la chanson",
    audio: bashung,
    answer: "Alain Bashung, Osez Joséphine"
  },
  {
    type: "image",
    question: "Quelle est la particularité de cette méduse ?",
    image: meduse,
    choices: ['Sa piqure est mortelle', 'Elle est immortelle', 'Elle produit de la lumière'],
    answer: "Elle est immortelle (Turritopsis Nutricula, capable de redevenir polype)"
  },
  {
    type: "question",
    question: "De quelle couleur sont les questions \"Sport\" du Trivial Pursuit ?",
    answer: "Orange"
  },
];
