import { Project } from "../interface";
// import image
import mathsc from "../asset/image/projects/mathsc.jpg";
import repro from "../asset/image/projects/repro.jpg";
const listProjects: Project[] = [
  {
    name: "Reproduction",
    description:
      "Un site de service pour la reproduction de photocopie dans un lycée (utiliser encore a l'heure actuel)",
    listTech: ["PHP", "HTML", "CSS", "JQuery"],
    src: repro,
    liens: "https://repro.tsir.ovh/index.php",
  },
  {
    name: "Maths Sciences",
    description:
      "Un site qui est un outils pour les professeurs de mathématiques ansi que de science une liste exaustif d'exercices généré aléatoirement, avec correction automatiques (utiliser pendant 3 ans par moi même)",
    listTech: ["PHP", "HTML", "CSS", "JQuery"],
    src: mathsc,
    liens: "http://math.sc.levasseur.free.fr/",
  },
];

export default listProjects;
