import sword from '../media/store/sword.jpg'
import shield from '../media/store/shield.jpg'
import poison from '../media/store/poison.jpg'
import letter from '../media/store/letter.jpg'
import crystal from '../media/store/crystal.jpg'
import bow from '../media/store/bow.jpg'

export const SHOPDATA = [
  {
    name: "Poignard",
    image: sword,
    cost: 15,
    available: 3,
    description: "Utilisé sur une équipe adverse, le poignard force celle-ci à passer son tour",
  },
  {
    name: "Bouclier",
    image: shield,
    cost: 15,
    available: 3,
    description: "Le bouclier vous protège en cas de mauvaise réponse à une question"
  },
  {
    name: "Boule de cristal",
    image: crystal,
    cost: 10,
    available: 3,
    description: "La boule de cristal vous permet de révéler toutes les questions d'une catégorie"
  },
  {
    name: "Poison",
    image: poison,
    cost: 999,
    available: 1,
    description: "L'équipe ciblée perd tous ses points en début de manche mais chaque bonne réponse de l'équipe comptera double."
  },
  {
    name: "Passe-droit",
    image: letter,
    cost: 10,
    available: 3,
    description: "Le passe droit vous permet de choisir une autre question dans la catégorie si celle proposée ne convient pas",
  },
  {
    name: "Arc",
    image: bow,
    cost: 10,
    available: 3,
    description: "L'arc double vos gains en cas de bonne réponse...mais double vos pertes si vous vous trompez."
  },
];
