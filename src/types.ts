export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  priceDisplay: string;
  priceNumeric: number;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  serviceJourney?: {
    step: string;
    title: string;
    description: string;
  }[];
  heroImage: string;
  note?: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experienceDescription: string;
  image: string;
  avatarImage?: string;
  specialties: string[];
}

export interface ProductAddon {
  id: string;
  name: string;
  price: number;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  priceDisplay: string;
  description: string;
  image: string;
  features?: string[];
  availableAddons?: ProductAddon[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedAddons?: { name: string; price: number }[];
}

export interface BookingState {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cuts' | 'shave' | 'atmosphere' | 'craft';
  imageUrl: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export interface ServiceArea {
  slug: string;
  name: string;
  region: string;
  description: string;
  highlights: string[];
}
