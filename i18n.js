import i18n from "i18next";

import { initReactI18next } from "react-i18next";
const resources = {
  uz: {
    translation: {
      "Uy": "Uy",
      "Haqida": "Haqida",
      "Kontakt": "Kontakt",
      "Ish": "Ishlar",
      "fam": "Baxtiyorova",
      "ism": "Dilfuza",
      "web": "Veb Dasturchi",
      "re": "Qayta boshlash",
      "about": "Haqida",
      "men": "Men veb-dasturchiman. Men 11 oydan beri Coddy Camp It akademiyasida saboq olaman. Men turli veb-saytlar yaratdim, html, css, javascript va hokazolar bilan ishlayman. Hozir men frontend kursida o'qiyman, keyin backend kursida o'qimoqchiman va CoddyCamp it Academyda o'qiyman."
    }
  },
  en: {
    translation: {
      "Uy": "Home",
      "Haqida": "About",
      "Kontakt": "Contact",
      "Ish": "Projects",
      "fam": "Bakhtiyarova",
      "ism": "Dilfuza",
      "web": "Web Developer",
      "re": "Resume",
      "about": "About",
      "men": "I am a web developer. I have been taking classes at Coddy Camp It academy for 11 months. I have made various websites, I work with html, css, javascript, etc. I am currently studying in the frontend course, then I want to study in the backend course, and I will study at the CoddyCamp it Academy."


    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;