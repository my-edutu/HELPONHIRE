export interface Professional {
  id: string;
  name: string;
  role: string;
  category: 'home' | 'business' | 'events' | 'technical' | 'creative';
  rating: number;
  reviewsCount: number;
  hourlyRate: number;
  avatar: string;
  online: boolean;
  city: string;
  skills: string[];
  bio: string;
  coordinates: { x: number; y: number }; // Relative percentage for map plotting (0-100)
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'home' | 'business' | 'events' | 'technical' | 'creative';
  basePrice: number;
  unit: string;
  popular: boolean;
  icon: string;
  details: string[];
}

export interface Review {
  id: string;
  clientName: string;
  proName: string;
  rating: number;
  text: string;
  date: string;
  serviceName: string;
}

export interface BookingFormInput {
  serviceId: string;
  urgency: 'routine' | 'today' | 'emergency';
  address: string;
  details: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
}

export interface CorporateRequestInput {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  roleNeeded: string;
  headcount: number;
  durationWeeks: number;
  description: string;
}

export interface ProApplicationInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  location: string;
  specialty: string;
  experienceYears: number;
  hourlyRate: number;
  bio: string;
  hasLicense: boolean;
  backgroundConcent: boolean;
}
