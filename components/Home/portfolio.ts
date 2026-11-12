import { GalleryImage, PortfolioStat, Photographer } from "@/app/(home)/types";

export const photographer: Photographer = {
  name: "Patricia Simonson",
  profession: "Photographer & Visual Storyteller",
  location: "New York, United States",
  description:
    "Capturing beautiful moments, meaningful stories and timeless memories through the art of photography.",
};

export const statistics: PortfolioStat[] = [
  {
    id: 1,
    label: "Photos taken",
    value: "58,790",
    icon: "camera",
  },
  {
    id: 2,
    label: "Places visited",
    value: "15,832",
    icon: "map",
  },
  {
    id: 3,
    label: "Contests",
    value: "12,352",
    icon: "award",
  },
  {
    id: 4,
    label: "Enchanted people",
    value: "90,327",
    icon: "users",
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery/photo-01.jpg", alt: "Interior architecture" },
  { id: 2, src: "/images/gallery/photo-02.jpg", alt: "Portrait photography" },
  { id: 3, src: "/images/gallery/photo-03.jpg", alt: "Cherry blossoms" },
  { id: 4, src: "/images/gallery/photo-04.jpg", alt: "Creative portrait" },
  { id: 5, src: "/images/gallery/photo-05.jpg", alt: "Nature photography" },
  { id: 6, src: "/images/gallery/photo-06.jpg", alt: "Floral arrangement" },
  { id: 7, src: "/images/gallery/photo-07.jpg", alt: "Wedding photography" },
  { id: 8, src: "/images/gallery/photo-08.jpg", alt: "Urban photography" },
  { id: 9, src: "/images/gallery/photo-09.jpg", alt: "Lifestyle photography" },
  { id: 10, src: "/images/gallery/photo-10.jpg", alt: "Fashion portrait" },
  { id: 11, src: "/images/gallery/photo-11.jpg", alt: "Photographer at work" },
  { id: 12, src: "/images/gallery/photo-12.jpg", alt: "Minimalist interior" },
];