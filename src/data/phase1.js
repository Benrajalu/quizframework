import clip1 from "./media/limbus.mp3";
import image1 from "./media/image.png";

export const SLIDES = [
  {
    type: "question",
    contents: "Test question",
    answer: "This"
  },
  {
    type: "audio",
    contents: clip1,
    answer: "This"
  },
  {
    type: "image",
    contents: image1,
    answer: "That"
  },
  {
    type: "qcm",
    contents: "Question is this ?",
    choices: ["Choix 1", "Deux", "Tertio"],
    answer: "Choix 1"
  }
];
