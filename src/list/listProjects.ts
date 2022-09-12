import { Project } from "../interface";
// import image
import mathsc from "../asset/image/projects/mathsc.jpg";
import repro from "../asset/image/projects/repro.jpg";
import cinequiz from "../asset/image/projects/cinequiz.jpg";
import courseEscargot from "../asset/image/projects/courseEscargot.jpg";
import snake from "../asset/image/projects/snake.jpg";
import casseBrique from "../asset/image/projects/casseBrique.jpg";

const listProjects: Project[] = [
  {
    name: "Casse briques Donjon",
    description:
      "Un mini jeu complet : Vous êtes dans un donjon avec des bonus et des monstres. A vous d'être le meilleur",
    listTech: ["HTML", "JavaScript", "Jest"],
    src: casseBrique,
    liens: "http://cinequiz.fb.free.fr/project/cassebrick/",
  },
  {
    name: "Snake",
    description:
      "Petit projet : Un jeu du serpent pour s'exercer au TypeScript",
    listTech: ["HTML", "TypeScript"],
    src: snake,
    liens: "http://cinequiz.fb.free.fr/project/snake/",
  },
  {
    name: "Course d'escargots",
    description: "Petit projet : Un peu de fun pour apprendre le Jest",
    listTech: ["HTML", "JavaScript", "Jest"],
    src: courseEscargot,
    liens: "http://cinequiz.fb.free.fr/project/escargot/",
  },
  {
    name: "Cinéma Quiz",
    description:
      "Un site de quiz cinéma, une affiche de film et il faut trouver le nom du film",
    listTech: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"],
    src: cinequiz,
    liens: "http://cinequiz.fb.free.fr/",
  },
  {
    name: "Reproduction",
    description:
      "Un site de service pour la reproduction de photocopies dans un lycée (utilisé encore à l'heure actuelle)",
    listTech: ["PHP", "HTML", "CSS", "JQuery", "MySQL"],
    src: repro,
    liens: "https://repro.tsir.ovh/index.php",
  },
  {
    name: "Maths Sciences",
    description:
      "Un site d'exercices servant d'outil pour les professeurs de mathématiques/sciences. (utilisé pendant 3 ans par moi-même)",
    listTech: ["PHP", "HTML", "CSS", "JQuery", "MySQL"],
    src: mathsc,
    liens: "http://math.sc.levasseur.free.fr/",
  },
];

export default listProjects;
