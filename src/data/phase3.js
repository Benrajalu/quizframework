import neighbor from '../media/suspects/neighbor.png';
import mayor from '../media/suspects/mayor.png';
import doctor from '../media/suspects/doctor.png';
import dealer from '../media/suspects/dealer.png';
import coach from '../media/suspects/coach.png';
import businessman from '../media/suspects/businessman.png';

import neighborQuestions from '../data/witnesses/neighbor';
import mayorQuestions from '../data/witnesses/mayor';
import doctorQuestions from '../data/witnesses/doctor';
import dealerQuestions from '../data/witnesses/dealer';
import coachQuestions from '../data/witnesses/coach';
import businessmanQuestions from '../data/witnesses/businessman';

export const SUSPECTS = [
  {
    image: neighbor,
    name: 'La voisine',
    id: 'neighbor',
    list: [
      '72 ans',
      'Fan de TV',
      'Connaît tout le quartier',
      'Pas de casier',
      'Experte en infos'
    ],
    replied: false,
    questions: neighborQuestions
  },
  {
    image: mayor,
    name: 'Le Maire',
    id: 'mayor',
    list: [
      '68 ans',
      'Ex-Avocat',
      'Patron de la victime',
      'Accusé de détournement',
      'Expert en politique'
    ],
    replied: false,
    questions: mayorQuestions
  },
  {
    image: doctor,
    name: 'Le medecin',
    id: 'doctor',
    list: [
      '36 ans',
      'Ex-championne de volley',
      'Ancienne amie du lycée',
      'Pas de casier',
      'Experte en sciences'
    ],
    replied: false,
    questions: doctorQuestions
  },
  {
    image: dealer,
    name: 'Le dealer',
    id: 'dealer',
    list: [
      '21 ans',
      'Coursier à vélo',
      'En contact avec la victime',
      'Casier chargé',
      'Expert en culture pop'
    ],
    replied: false,
    questions: dealerQuestions
  },
  {
    image: coach,
    name: 'Le coach',
    id: 'coach',
    list: [
      '27 ans',
      'Fan de football',
      'Voyait la victime le Mardi',
      '2 ans de prison pour vol',
      'Expert en sport'
    ],
    replied: false,
    questions: coachQuestions
  },
  {
    image: businessman,
    name: 'Le businessman',
    id: 'businessman',
    list: [
      '32 ans',
      'Fan de Star Wars',
      "Camarade d'armée",
      'Pas de casier',
      'Expert en marques'
    ],
    replied: false,
    questions: businessmanQuestions
  }
];
