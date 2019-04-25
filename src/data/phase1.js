import clip1 from "./media/limbus.mp3";
import image1 from "./media/image.png";
import image2 from "./media/image2.png";

export const SLIDES = [
  {
    type: "question",
    question: "Test question",
    answer: "This"
  },
  {
    type: "audio",
    question: "Test question audio",
    audio: clip1,
    answer: "This"
  },
  {
    type: "image",
    question: "Test question image",
    image: image1,
    answer: "That"
  },
  {
    type: "qcm",
    question: "Test question qcm",
    choices: ["Choix 1", "Deux", "Tertio"],
    answer: "Choix 1"
  },
  {
    type: "image",
    question: "Test question image 2 ?",
    image: image2,
    answer: "That"
  },
];
