export interface Service {
  id: string;
  category: 'accounting' | 'legal';
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // matches lucide icons
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  experienceYears: number;
  education: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  serviceCategory: string;
}

export interface ContactInquiry {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName?: string;
  serviceCategory: string;
  message: string;
  estimatedBudget?: number;
}
