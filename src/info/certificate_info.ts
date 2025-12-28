import imag1 from "../info/certificado_CAC_2024.jpg"
import imag2 from "../info/pytho_santander_1.jpg"
import imag3 from "../info/talento_tech_2025.jpg"
import imag4 from "../info/back-talentotech.jpg"

export type TSlidecertificates = {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const certificateData: TSlidecertificates[] = [
  {
    id: 1,
    title: 'Codo A Codo - Full Stak - 2024',
    description: '',
    image: imag1
  },
  {
    id: 2,
    title: 'Santander Academy - Pytho inicial - 2025',
    description: '',
    image: imag2
  },
  {
    id: 3,
    title: 'Talento Tech - Fron-end React.js - 2025',
    description: '',
    image: imag3
  },
  {
    id: 4,
    title: 'Talento Tech - back-end Node.js - 2025',
    description: '',
    image: imag4
  },
];