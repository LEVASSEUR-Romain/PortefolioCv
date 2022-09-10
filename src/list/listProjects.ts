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
    name: "Casse Brique donjon",
    description:
      "Un mini jeu complet vous etes dans un donjon avec des bonus et des montres a vous d'etre le meilleur",
    listTech: ["HTML", "JavaScript", "Jest"],
    src: casseBrique,
    liens: "http://cinequiz.fb.free.fr/project/cassebrick/",
  },
  {
    name: "Snake",
    description: "Petit projet : un snake pour s'exercé au typeScript",
    listTech: ["HTML", "TypeScript"],
    src: snake,
    liens: "http://cinequiz.fb.free.fr/project/snake/",
  },
  {
    name: "Course d'escargot",
    description: "Petit projet : un peu de fun pour apprendre le Jest",
    listTech: ["HTML", "JavaScript", "Jest"],
    src: courseEscargot,
    liens: "http://cinequiz.fb.free.fr/project/escargot/",
  },
  {
    name: "Cinéma Quiz",
    description:
      "Un site de quiz cinema une affiche de film faut trouver le nom du film",
    listTech: ["PHP", "HTML", "CSS", "MySQL", "JavaScript"],
    src: cinequiz,
    liens: "http://cinequiz.fb.free.fr/",
  },
  {
    name: "Reproduction",
    description:
      "Un site de service pour la reproduction de photocopie dans un lycée (utiliser encore a l'heure actuel)",
    listTech: ["PHP", "HTML", "CSS", "JQuery", "MySQL"],
    src: repro,
    liens: "https://repro.tsir.ovh/index.php",
  },
  {
    name: "Maths Sciences",
    description:
      "Un site qui est un outils pour les professeurs de mathématiques ansi que de science une liste exaustif d'exercices généré aléatoirement, avec correction automatiques (utiliser pendant 3 ans par moi même)",
    listTech: ["PHP", "HTML", "CSS", "JQuery", "MySQL"],
    src: mathsc,
    liens: "http://math.sc.levasseur.free.fr/",
  },
];

export default listProjects;
