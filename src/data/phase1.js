import kiss from './media/kisskiss.mp3';
import kinks from './media/kinks.mp3';
import shelter from './media/shelter.mp3';
import gaga from './media/gaga.mp3';
import aicha from './media/aisha.mp3';
import waldo from './media/waldo.jpg';
import emile from './media/emile.jpg';
import usualSuspects from './media/usualSuspects.jpeg';
import kwai from './media/kwai.jpg';

export const SLIDES = [
  {
    type: 'question',
    question: 'Qui chante',
    audioTube: 'https://www.youtube.com/watch?v=BN1WwnEDWAM',
    answer: 'Jeff Bezos avec $145.3 Milliards.'
  },
  {
    type: 'question',
    question: 'Qui chante',
    videoTube: 'https://www.youtube.com/watch?v=O4irXQhgMqg',
    answer: 'Jeff Bezos avec $145.3 Milliards.'
  },
  {
    type: 'question',
    question: "Qui est l'homme le plus riche du monde ?",
    answer: 'Jeff Bezos avec $145.3 Milliards.'
  },
  {
    type: 'audio',
    question: 'Nommez le groupe et le titre de cette chanson',
    audio: gaga,
    answer: 'Queen - Radio Gaga'
  },
  {
    type: 'question',
    question: 'Qui est la femme la plus riche du monde ?',
    answer: 'Françoise Bettencourt Meyers avec $49.3 Milliards.'
  },
  {
    type: 'image',
    question: 'Quel est ce pont ?',
    image: kwai,
    answer: 'Le pont de la rivière Kwai'
  },
  {
    type: 'question',
    question: 'Quelle ville est la capitale de la France...en 1940 ?',
    answer: 'Vichy.'
  },
  {
    type: 'audio',
    question: 'Quel groupe Anglais joue ce tube ?',
    audio: kinks,
    answer: 'The Kinks - You really got me'
  },
  {
    type: 'question',
    question: 'Quel artiste célèbre a créé le logo de Chupa Chups ?',
    answer: 'Salvador Dali'
  },
  {
    type: 'qcm',
    question: "Combien y a-t'il d'habitants au Mozambique ?",
    choices: ['29,67 Millions', '32,89 Millions', '19,37 Millions'],
    answer: [1]
  },
  {
    type: 'image',
    question: 'Qui est cet homme ?',
    image: emile,
    answer: 'Emile, Le tueur'
  },
  {
    type: 'question',
    question: 'Qui a écrit "American Gods" ?',
    answer: 'Neil Gaiman'
  },
  {
    type: 'audio',
    question: 'Qui joue ce hit interplanetaire ?',
    audio: kiss,
    answer: 'Tarkan '
  },
  {
    type: 'question',
    question: 'Qui a gagné le prix Nobel de la paix en 2018 ?',
    answer: 'Denis Mukwege Mukengere, Nadia Murad'
  },
  {
    type: 'image',
    question: 'Où est Charlie ?',
    image: waldo,
    answer: 'En haut à gauche'
  },
  {
    type: 'question',
    question: 'Quelle est la première entreprise du CAC 40 (en CA) ?',
    answer: 'LVMH'
  },
  {
    type: 'audio',
    question: 'Trouvez le groupe et le nom de cette chanson',
    audio: shelter,
    answer: 'The Rolling Stones - Gimme Shelter'
  },
  {
    type: 'question',
    question:
      'Combien coûte un sandwich triangle genre jambon-fromage au wagon bar SNCF ?',
    answer: '6,40€ https://lebar.sncf.com/'
  },
  {
    type: 'question',
    question: 'En quelle année a été signé le traité de Rome ?',
    answer: '1958'
  },
  {
    type: 'audio',
    question: 'Sans fautes, le nom du chanteur et le titre de cette chanson ?',
    audio: aicha,
    answer: 'Khaled - Aicha'
  },
  {
    type: 'question',
    question: 'Quelle équipe de foot a gagné le plus de coupes du monde ?',
    answer: 'Le Brésil'
  },
  {
    type: 'image',
    question: 'Quel est le titre de ce film ?',
    image: usualSuspects,
    answer: 'Usual Suspects'
  }
];
