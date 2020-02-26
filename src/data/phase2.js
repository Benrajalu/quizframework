import corkscrew from '../media/items/tire-bouchons.png';
import seringue from '../media/items/seringue.png';
import portefeuille from '../media/items/portefeuille.png';
import panier from '../media/items/panier.png';
import manette from '../media/items/manette.png';
import couteau from '../media/items/couteau.png';
import coussin from '../media/items/coussin.png';
import casserole from '../media/items/casserole.png';
import cachets from '../media/items/cachets.png';
import briquet from '../media/items/briquet.png';
import bouteille from '../media/items/bouteille.png';
import boites from '../media/items/boites.png';

export const ITEMS = [
  {
    image: corkscrew,
    name: 'Tire-bouchons',
    points: 15,
    question: 'Combien de "boucles" en metal sont-elles sur ce tire-bouchons ?',
    replied: false
  },
  {
    image: seringue,
    name: 'Seringue',
    points: 10,
    question: "Combien de grammes d'eau peut contenir cette seringue ?",
    replied: false
  },
  {
    image: portefeuille,
    name: 'Portefeuille',
    points: 20,
    question: 'Combien de cartes sont-elles dans ce portefeuille ?',
    replied: false
  },
  {
    image: panier,
    name: 'Panier',
    points: 15,
    question: 'Combien pèse ce panier, en grammes ?',
    replied: false
  },
  {
    image: manette,
    name: 'Manette',
    points: 10,
    question:
      "Combien mesure en milimètres le coté le plus long d'une boite de jeu Switch ?",
    replied: false
  },
  {
    image: couteau,
    name: 'Couteau',
    points: 15,
    question:
      'Combien de couteaux de table propres restent-ils dans le tiroir de la cuisine ?',
    replied: false
  },
  {
    image: coussin,
    name: 'Coussin',
    points: 20,
    question:
      'Combien pèsent au total en grammes les coussins présents dans ce salon ?',
    replied: false
  },
  {
    image: casserole,
    name: 'Casserole',
    points: 15,
    question:
      "En combien de temps, en secondes, l'eau dans cette casserole va-t-elle bouillir ?",
    replied: false
  },
  {
    image: cachets,
    name: 'Cachets',
    points: 15,
    question: 'Combien de cachets restent-ils dans cette boite ?',
    replied: false
  },
  {
    image: briquet,
    name: 'Briquet',
    points: 20,
    question:
      "Combien de fois vais-je pouvoir faire fonctionner ce briquet avant d'échouer à obtenir une flamme ?",
    replied: false
  },
  {
    image: bouteille,
    name: 'Bouteille',
    points: 10,
    question: 'En grammes, combien pèse une bouteille de vin vide ?',
    replied: false
  },
  {
    image: boites,
    name: 'Boites',
    points: 20,
    question:
      'Combien de noisettes puis-je mettre dans cette boite tupperware ?',
    replied: false
  }
];
