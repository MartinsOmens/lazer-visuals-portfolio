export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface PortfolioStat {
  id: number;
  label: string;
  value: string;
  icon: string;
}

export interface Photographer {
  name: string;
  profession: string;
  location: string;
  description: string;
}
