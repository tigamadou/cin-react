import type { Speaker, ScheduleByDay } from '../types';

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Patrice TALON",
    title: "Président de la République du Bénin",
    company: "République du Bénin",
    bio: "Chef de l'État béninois depuis 2016, Dr. Patrice Talon s'est engagé dans la lutte contre la malnutrition et le développement durable en Afrique. Sous sa présidence, le Bénin a mis en place des politiques innovantes pour améliorer la sécurité alimentaire et nutritionnelle de sa population. Il est un fervent défenseur de l'autosuffisance alimentaire et du développement rural durable.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com/in/patrice-talon",
      twitter: "https://twitter.com/patrice_talon"
    }
  },
  {
    id: 2,
    name: "Dr. SOSSA",
    title: "Directeur Général de l'ANAN",
    company: "Agence Nationale d'Assainissement et de Nutrition",
    bio: "Expert reconnu en nutrition et assainissement avec plus de 15 ans d'expérience dans la lutte contre la malnutrition au Bénin et en Afrique. Dr. SOSSA dirige l'ANAN depuis 2018 et a mis en place des programmes innovants pour améliorer la nutrition des populations vulnérables. Il est également consultant pour plusieurs organisations internationales.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com/in/patrice-talon",
      twitter: "https://twitter.com/patrice_talon"
    }
  },
  {
    id: 3,
    name: "Représentant UNICEF",
    title: "Directeur Exécutif Adjoint",
    company: "UNICEF",
    bio: "Expert international en nutrition et développement de l'enfant avec plus de 20 ans d'expérience dans la lutte contre la malnutrition infantile. Le représentant UNICEF dirige les programmes de nutrition en Afrique de l'Ouest et travaille en étroite collaboration avec les gouvernements pour améliorer la santé des enfants. Il est également auteur de plusieurs publications sur la nutrition maternelle et infantile.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com/in/patrice-talon",
      twitter: "https://twitter.com/patrice_talon"
    }
  },
  {
    id: 4,
    name: "Vice-Président Banque Mondiale",
    title: "Vice-Président Afrique de l'Ouest et du Centre",
    company: "Banque Mondiale",
    bio: "Leader dans le financement du développement et la lutte contre la pauvreté en Afrique.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com/in/patrice-talon",
      twitter: "https://twitter.com/patrice_talon"
    }
  },
  {
    id: 5,
    name: "Président BAD",
    title: "Président de la Banque Africaine de Développement",
    company: "Banque Africaine de Développement",
    bio: "Leader du développement économique et social en Afrique, engagé dans la lutte contre la malnutrition.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com/in/patrice-talon",
      twitter: "https://twitter.com/patrice_talon"
    }
  },
  {
    id: 6,
    name: "Vice-Président Nigeria",
    title: "Vice-Président de la République Fédérale du Nigeria",
    company: "République Fédérale du Nigeria",
    bio: "Leader politique nigérian, engagé dans la coopération régionale pour le développement de l'Afrique.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com/in/patrice-talon",
      twitter: "https://twitter.com/patrice_talon"
    }
  },
  {
    id: 7,
    name: "Ministre d'État",
    title: "Ministre d'État chargé du Développement",
    company: "Gouvernement du Bénin",
    bio: "Ministre responsable du développement au Bénin, engagé dans la lutte contre la malnutrition et la pauvreté.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    social: {}
  },
  {
    id: 8,
    name: "Protocole d'État",
    title: "Protocole d'État et des cérémonies",
    company: "Gouvernement du Bénin",
    bio: "Responsable du protocole d'État, organisateur des cérémonies officielles et des événements internationaux.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com/in/patrice-talon",
      twitter: "https://twitter.com/patrice_talon"
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
    { time: "10:10 - 10:15", title: "Mots UNICEF", type: "keynote" },
    { time: "10:15 - 10:20", title: "Mots Banque Mondiale", type: "keynote" },
    { time: "10:20 - 10:25", title: "Allocution BAD", type: "keynote" },
    { time: "10:25 - 10:30", title: "Intermède culturel", type: "break" },
    { time: "10:30 - 10:40", title: "Allocution Vice-Président Nigeria", type: "keynote" },
    { time: "10:40 - 11:00", title: "Allocution Président Bénin", type: "keynote" },
    { time: "11:00 - 11:30", title: "Conférence inaugurale", type: "keynote" },
    { time: "11:30 - 12:00", title: "Photo de famille et pause", type: "break" },
    { time: "12:00 - 13:00", title: "Panel 1: Fardeau intergénérationnel", type: "session" },
    { time: "13:00 - 13:30", title: "Échanges", type: "networking" },
    { time: "13:30 - 14:30", title: "Déjeuner", type: "break" },
    { time: "14:30 - 15:30", title: "Panel 2: Solutions appliquées", type: "session" },
    { time: "15:30 - 16:00", title: "Échanges", type: "networking" },
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
