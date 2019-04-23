import audioSample from "../media/limbus.mp3";
import imageSample from "../media/image.png";

export const DIGITAL = [
  {
    points: 1,
    status: "hidden",
    replied: false,
    question: {
      text: "Coucou ?",
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
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Coucou ?",
      choices: ["Choix 1", "Choix 2", "Choix 3"],
      type: "qcm",
      answer: "Answer copy"
    }
  }
];
