export interface MenuItem {
  name: string;
  link: string | null;
  sub?: Array<MenuItem>;
}

export interface GalleryImage {
  id: string;
  url: string;
  thumb: string;
  text?: string;
}

export interface Project {
  id: string;
  cover: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export interface DescriptionProject extends Project {
  register: string;
  address: string;
  type: string;
}

export interface FeaturedArrayItem {
  id: string;
  cover: string;
  title: string;
  url: string;
  alt: string;
  description: string;
}
