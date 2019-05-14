import billieJean from "../media/billieJean.mp3";
import wannabe from "../media/wannabe.mp3";
import acdc from "../media/acdc.mp3";
import moneyForNothing from "../media/moneyForNothing.mp3";
import machistador from "../media/machistador.mp3";
import escape from "../media/escape.mp3";

export const MUSIC = [
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Nommez l'artiste et le titre du morceau",
      audio: billieJean,
      type: "audio",
      answer: "Billie Jean Michael Jackson"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Nommez le morceau et la première Spice Girl à chanter dans cet extrait",
      audio: wannabe,
      type: "audio",
      answer: "Wannabe - Mel B"
    }
  },
  {
    points: 15,
    status: "hidden",
    replied: false,
    question: {
      text: "Qui est le guitariste qui joue cette intro ?",
      audio: acdc,
      type: "audio",
      answer: "Angus Young"
    }
  },
  {
    points: 5,
    status: "hidden",
    replied: false,
    question: {
      text: "Nommez le groupe et le titre du morceau",
      audio: moneyForNothing,
      type: "audio",
      answer: "Dire Straits, Money for Nothing"
    }
  },
  {
    points: 10,
    status: "hidden",
    replied: false,
    question: {
      text: "Completez avec la prochaine phrase de cette chanson",
      audio: machistador,
      type: "audio",
      answer: "J'ai la poupée d'ET dans ma Golf GTI"
    }
  },
  {
    points: 15,
    status: "hidden",
    replied: false,
    question: {
      text: "Nommez l'artiste et le titre du morceau",
      audio: escape,
      type: "audio",
      answer: "Escape (piña colada song) - Rupert Holmes"
    }
  },
];
