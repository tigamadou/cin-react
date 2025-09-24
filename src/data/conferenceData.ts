import type { Speaker, ScheduleByDay } from '../types';

// Import speaker images
import estherDufloImg from '../assets/esther_duflo.png';
import jacquesBergerImg from '../assets/jacques_berger.png';
import heleneDelisleImg from '../assets/pr_helene_delisle.png';
import mahamadouTanimouneImg from '../assets/dr_mahamadou_tanimoune.png';
import bandaNdiayeImg from '../assets/dr_banda_n_diaye.png';
import leopoldFeuzeuImg from '../assets/dr_leopold_feuzeu.png';
import hoangNganImg from '../assets/dr_hoang_ngan.png';
import clemenceBoulleImg from '../assets/clemence_boulle.png';
import kaleabBayeImg from '../assets/kaleab_baye.png';
import evaristeMitchikpeImg from '../assets/pr_evariste_mitchikpe.png';
import pascalineDupasImg from '../assets/pascaline_dupas.jpeg';

export const speakers: Speaker[] = [
  // Conférence inaugurale
  {
    id: 1,
    name: "Pr Esther DUFLO",
    title: "Professeure Abdul Latif Jameel d'allègement de la pauvreté et d'économie du développement",
    company: "Massachusetts Institute of Technology (MIT)",
    bio: "Esther Duflo est professeure Abdul Latif Jameel d'allègement de la pauvreté et d'économie du développement au département d'économie du Massachusetts Institute of Technology (MIT) ; cofondatrice et codirectrice du Abdul Latif Jameel Poverty Action Lab (J-PAL) ; titulaire de la chaire Pauvreté et politiques publiques au Collège de France et présidente de l'École d'économie de Paris. Dans ses recherches, elle cherche à comprendre la vie économique des personnes vivant dans la pauvreté, afin de contribuer à la conception et à l'évaluation des politiques sociales. Elle a travaillé sur la santé, l'éducation, l'inclusion financière, l'environnement et la gouvernance. Lauréate du Prix Nobel d'économie en 2019, elle présentera la conférence inaugurale sur les retombées économiques d'une bonne nutrition.",
    image: estherDufloImg,
    social: {
      linkedin: "https://linkedin.com/in/esther-duflo",
      twitter: "https://twitter.com/estherduflo"
    }
  },
  // Panel 1 - Fardeau intergénérationnel de la malnutrition
  {
    id: 2,
    name: "Pr Jacques BERGER",
    title: "Professeur de Nutrition",
    company: "Université de Montpellier",
    bio: "Expert reconnu en nutrition avec une expertise particulière dans l'étude du fardeau intergénérationnel de la malnutrition. Pr BERGER présentera les études sur le constat du fardeau intergénérationnel de la malnutrition (avec un focus sur la partie dénutrition) et la perpétuité de la pauvreté si rien n'est fait. Il abordera les effets des carences en micronutriments, notamment sur le développement cognitif et la capacité d'apprentissage.",
    image: jacquesBergerImg,
    social: {
      linkedin: "https://linkedin.com/in/jacques-berger",
      twitter: "https://twitter.com/jacques_berger"
    }
  },
  {
    id: 3,
    name: "Pr Hélène DELISLE",
    title: "Professeure de Nutrition",
    company: "Université de Montréal",
    bio: "Spécialiste de l'effet intergénérationnel de la malnutrition et de l'augmentation du risque de développement des maladies non transmissibles à l'âge adulte en cas d'exposition à un environnement obésogène. Pr DELISLE abordera les mécanismes biologiques qui pourraient expliquer ce phénomène. Son intervention sera présentée sous format vidéo préenregistrée.",
    image: heleneDelisleImg,
    social: {
      linkedin: "https://linkedin.com/in/helene-delisle",
      twitter: "https://twitter.com/helene_delisle"
    }
  },
  {
    id: 4,
    name: "Dr Mahamadou TANIMOUNE",
    title: "Conseiller Principal en Politique et Programme",
    company: "Programme Alimentaire Mondial (PAM)",
    bio: "Dr. Tanimoune Mahamadou est Conseiller Principal en politique et programme au siège mondial du PAM, couvrant l'Afrique de l'Ouest et du Centre, basé à Dakar. Diplômé en Nutrition et Science de la population, il est spécialisé dans la prévention de la malnutrition à grande échelle. Il a coordonné en Afrique et en Asie l'un des plus vaste programme mondial, touchant plus de 4 millions d'enfants, d'adolescents et de femmes enceintes et allaitantes au Pakistan. Expert en approches multisectorielles et en renforcement des systèmes alimentaires, il traduit les données scientifiques en solutions concrètes pour réduire le retard de croissance et améliorer la nutrition et la santé des populations.",
    image: mahamadouTanimouneImg,
    social: {
      linkedin: "https://linkedin.com/in/mahamadou-tanimoune",
      twitter: "https://twitter.com/mahamadou_tani"
    }
  },
  {
    id: 5,
    name: "Dr Banda N'DIAYE",
    title: "Expert en Nutrition",
    company: "Organisation Mondiale de la Santé",
    bio: "Dr N'DIAYE évoquera le cas spécifique de la carence en iode comme exemple de carence en micronutriments et son impact sur le développement cognitif de l'enfant et la répercussion sur le plan socio-économique pour les pays. Il abordera également les stratégies mises au point pour lutter contre cette carence.",
    image: bandaNdiayeImg,
    social: {
      linkedin: "https://linkedin.com/in/banda-ndiaye",
      twitter: "https://twitter.com/banda_ndiaye"
    }
  },
  // Panel 2 - Solutions appliquées dans la lutte contre la malnutrition
  {
    id: 6,
    name: "Dr Leopold FEUZEU",
    title: "Maître de Conférences et Épidémiologiste",
    company: "Équipe de Recherche en Épidémiologie Nutritionnelle (EREN-CRESS)",
    bio: "Le Dr FEZEU Kamedjie Léopold est un médecin d'origine camerounaise, diplômé en 1999, avec trois années d'expérience clinique avant de se tourner vers la recherche. Il a ensuite obtenu un Master en méthodes épidémiologiques et statistiques (Université Paris-11, 2004), puis un doctorat en santé publique option épidémiologie (Université de Yaoundé I et Université Paris-11, 2009). Depuis plus de quinze ans, il est maître de conférences et épidémiologiste au sein de l'Équipe de Recherche en Épidémiologie Nutritionnelle (EREN-CRESS, France). Ses travaux portent sur les comportements alimentaires et l'activité physique, leurs déterminants et leurs impacts mécanistiques sur la santé, en particulier dans le domaine des maladies cardiométaboliques. Il a joué un rôle clé dans le développement et la validation du NutriScore, le logo nutritionnel présent en face avant des emballages en France et adopté dans plusieurs pays européens.",
    image: leopoldFeuzeuImg,
    social: {
      linkedin: "https://linkedin.com/in/leopold-feuzeu",
      twitter: "https://twitter.com/leopold_feuzeu"
    }
  },
  {
    id: 7,
    name: "Dr Hoang NGAN",
    title: "Experte en Nutrition",
    company: "Ministère de la Santé du Vietnam",
    bio: "Dr. NGAN présentera de manière globale la stratégie nationale qu'a adopté le Vietnam pour parvenir à baisser la prévalence de la malnutrition chronique au niveau national. Elle mettra en évidence la volonté politique se traduisant par l'obligation de chaque province d'investir dans la réduction de la malnutrition. Elle nous présentera quelques exemples d'interventions et évoquera également des mesures de lutte contre l'obésité à travers la loi sur la taxation des boissons sucrées.",
    image: hoangNganImg,
    social: {
      linkedin: "https://linkedin.com/in/hoang-ngan",
      twitter: "https://twitter.com/hoang_ngan"
    }
  },
  {
    id: 8,
    name: "Mme Clémence BOULLE-MARTINAUD",
    title: "Directrice du Programme Santé",
    company: "Gret - ONG de développement",
    bio: "Clémence Boulle Martinaud, diplômée d'un MBA, est spécialisée en nutrition, marketing social et développement international. Après plusieurs années dans le secteur agroalimentaire, elle a rejoint le Gret en 2010 où elle a conçu et piloté des projets durables de nutrition, notamment via l'appui à des entreprises sociales et PME pour développer des modèles économiques à impact au service des populations vulnérables. Forte de plus de 15 ans d'expérience dans plus de dix pays, elle dirige aujourd'hui le programme international « Santé : Nutrition et Protection sociale » du Gret, qui rassemble une trentaine de projets et mobilise une expertise reconnue en nutrition et politiques sociales.",
    image: clemenceBoulleImg,
    social: {
      linkedin: "https://linkedin.com/in/clemence-boulle-martinaud",
      twitter: "https://twitter.com/clemence_bm"
    }
  },
  {
    id: 9,
    name: "Pr. Kaleab BAYE",
    title: "Professeure Titulaire de Nutrition Humaine",
    company: "Université d'Addis-Abeba",
    bio: "Kaleab Baye est professeure titulaire de nutrition humaine, ancien directeur du Centre des sciences de l'alimentation et de la nutrition (2016-2019) de l'Université d'Addis-Abeba. Il est titulaire d'un doctorat en nutrition et santé de l'Université de Montpellier, en France. Les intérêts de recherche du professeur Baye sont la nutrition maternelle et infantile, les micronutriments et les interventions visant à améliorer la qualité de l'alimentation. Le professeur Baye est rédacteur en chef adjoint de la revue Public Health Nutrition et membre du comité de rédaction de Global Food Security. Il a été rédacteur invité pour des revues telles que Maternal and Child Nutrition, Current Developments in Nutrition, Frontiers Public Health et Agriculture and Food Economics.",
    image: kaleabBayeImg,
    social: {
      linkedin: "https://linkedin.com/in/kaleab-baye",
      twitter: "https://twitter.com/kaleab_baye"
    }
  },
  {
    id: 10,
    name: "Pr. Evariste MITCHIKPE",
    title: "Professeur de Nutrition",
    company: "Université d'Abomey-Calavi",
    bio: "Expert en nutrition et développement agricole, Pr. MITCHIKPE apportera son expertise sur les approches multisectorielles dans la lutte contre la malnutrition en Afrique. Il présentera des exemples concrets d'interventions réussies et des recommandations pour une lutte plus efficace contre la malnutrition.",
    image: evaristeMitchikpeImg,
    social: {
      linkedin: "https://linkedin.com/in/evariste-mitchikpe",
      twitter: "https://twitter.com/evariste_mitch"
    }
  },
  {
    id: 11,
    name: "Pr Pascaline DUPAS",
    title: "Professeure d'Économie et d'Affaires Publiques",
    company: "Université de Princeton",
    bio: "Pascaline Dupas est Professeure d'Économie et d'Affaires Publiques à l'Université de Princeton et co-Directrice Scientifique de J-PAL Afrique. Elle a rejoint le corps professoral de Princeton en juillet 2023. Auparavant, elle occupait la chaire de Kleinheinz Family Professor of International Studies à l'Université de Stanford, où elle a enseigné pendant douze ans. Elle a également occupé des postes de professeure à Dartmouth College et à l'Université de Californie à Los Angeles (UCLA). Ses recherches actuelles portent notamment sur les politiques éducatives au Ghana, les politiques de planification familiale au Burkina Faso et l'assurance maladie subventionnée par l'État en Inde. Elle est co-présidente du Bureau for Research and Economic Analysis of Development (BREAD) et chercheuse associée au National Bureau for Economic Research (NBER). En 2013, elle a reçu une bourse CAREER de la National Science Foundation, attribuée par le gouvernement américain pour distinguer et honorer des scientifiques et ingénieurs exceptionnels au début de leur carrière de recherche indépendante. En 2015, elle a reçu le Prix du Meilleur Jeune Économiste de France, décerné aux économistes français de moins de 40 ans dont les travaux sont les plus influents. Elle est Fellow de l'Econometric Society, ancienne Sloan Fellow et ancienne boursière Guggenheim. Pascaline a étudié la philosophie et l'économie en licence à l'École normale supérieure et a obtenu un doctorat en économie à l'École des hautes études en sciences sociales en 2006.",
    image: pascalineDupasImg,
    social: {
      linkedin: "https://linkedin.com/in/pascaline-dupas",
      twitter: "https://twitter.com/pascaline_dupas"
    }
  }
];

export const scheduleByDay: ScheduleByDay = {
  day0: [
    { time: "09:00 - 20:00", title: "Arrivée et accueil des hôtes", type: "break" },
    { time: "09:00 - 17:00", title: "Audiences du Chef de l'État", type: "session" }
  ],
  day1: [
    { time: "09:00 - 09:45", title: "Arrivée et installation", type: "break" },
    { time: "10:00 - 10:05", title: "Mot introductif", type: "session" },
    { time: "10:05 - 10:10", title: "Allocution de bienvenue", type: "keynote" },
    { time: "10:10 - 10:15", title: "Mot UNICEF", type: "keynote" },
    { time: "10:15 - 10:20", title: "Mot Banque Mondiale", type: "keynote" },
    { time: "10:20 - 10:25", title: "Allocution BAD", type: "keynote" },
    { time: "10:25 - 10:30", title: "Intermède culturel", type: "break" },
    { time: "10:30 - 10:40", title: "Allocution Vice-Président Nigeria", type: "keynote" },
    { time: "10:40 - 11:00", title: "Allocution Président Bénin", type: "keynote" },
    { time: "11:00 - 11:30", title: "Conférence inaugurale - Pr Esther DUFLO", type: "keynote" },
    { time: "11:30 - 12:00", title: "Photo de famille et pause", type: "break" },
    { time: "12:00 - 13:00", title: "Panel 1: Fardeau intergénérationnel de la malnutrition", type: "session" },
    { time: "13:00 - 13:30", title: "Questions & Réponses Panel 1", type: "networking" },
    { time: "13:30 - 14:30", title: "Déjeuner", type: "break" },
    { time: "14:30 - 15:30", title: "Panel 2: Solutions appliquées dans la lutte contre la malnutrition", type: "session" },
    { time: "15:30 - 16:00", title: "Questions & Réponses Panel 2", type: "networking" },
    { time: "16:00 - 16:30", title: "Pause-café", type: "break" },
    { time: "16:30 - 16:45", title: "Synthèse et Déclaration", type: "session" },
    { time: "16:45 - 17:00", title: "Allocution de clôture", type: "keynote" },
    { time: "20:00 - 23:00", title: "Dîner de gala", type: "networking" }
  ],
  day2: [
    { time: "09:00 - 14:30", title: "Table ronde", type: "session" },
    { time: "14:30 - 18:00", title: "Audiences du Chef de l'État", type: "session" },
    { time: "10:00 - 17:00", title: "Village de nutrition", type: "break" }
  ]
};
