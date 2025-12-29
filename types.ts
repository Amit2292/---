
export type Page = 'home' | 'about' | 'podcast' | 'rights' | 'contact' | 'accessibility';

export interface Episode {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  spotifyUrl: string;
  youtubeUrl: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
