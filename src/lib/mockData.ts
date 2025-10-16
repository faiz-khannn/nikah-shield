// Mock data for Tasneem Farook biodata platform

export interface BiodataSubmission {
  id: string;
  uniqueLinkId: string;
  submittedAt: string;
  status: 'pending' | 'completed' | 'shaadi_fixed';
  submissionType: 'form' | 'pdf';
  data: {
    fullName: string;
    age: number;
    gender: 'male' | 'female';
    email: string;
    phone: string;
    city: string;
    country: string;
    qualification: string;
    profession: string;
    salary?: string;
    height?: string;
    maritalStatus: string;
    religiousPractice: string;
    familyDetails?: string;
    expectations?: string;
  };
  pdfUrl?: string;
  notes?: string;
  version: number;
}

export interface SuccessStory {
  id: string;
  coupleName: string;
  location: string;
  date: string;
  story: string;
  image: string;
}

export const mockBiodataSubmissions: BiodataSubmission[] = [
  {
    id: '1',
    uniqueLinkId: 'abc123def',
    submittedAt: '2025-01-15T10:30:00Z',
    status: 'shaadi_fixed',
    submissionType: 'form',
    data: {
      fullName: 'Ahmed Hassan',
      age: 28,
      gender: 'male',
      email: 'ahmed.h@example.com',
      phone: '+91 9876543210',
      city: 'Mumbai',
      country: 'India',
      qualification: 'B.Tech Computer Science',
      profession: 'Software Engineer',
      salary: '12-15 LPA',
      height: '5\'10"',
      maritalStatus: 'Never Married',
      religiousPractice: 'Practising - Regular prayers and fasting',
      familyDetails: 'Nuclear family, father is businessman, mother is homemaker',
      expectations: 'Looking for a practising Muslim, educated, family-oriented'
    },
    notes: 'Very good profile, family met, shaadi confirmed for March',
    version: 2
  },
  {
    id: '2',
    uniqueLinkId: 'xyz789ghi',
    submittedAt: '2025-01-20T14:45:00Z',
    status: 'pending',
    submissionType: 'pdf',
    data: {
      fullName: 'Fatima Zahra',
      age: 25,
      gender: 'female',
      email: 'fatima.z@example.com',
      phone: '+91 8765432109',
      city: 'Delhi',
      country: 'India',
      qualification: 'MBA Finance',
      profession: 'Banking Professional',
      maritalStatus: 'Never Married',
      religiousPractice: 'Practising - Wears hijab, regular prayers'
    },
    pdfUrl: '/mock-biodatas/fatima-biodata.pdf',
    version: 1
  },
  {
    id: '3',
    uniqueLinkId: 'mno456pqr',
    submittedAt: '2025-01-22T09:15:00Z',
    status: 'completed',
    submissionType: 'form',
    data: {
      fullName: 'Yusuf Ali',
      age: 30,
      gender: 'male',
      email: 'yusuf.ali@example.com',
      phone: '+91 7654321098',
      city: 'Bangalore',
      country: 'India',
      qualification: 'MBBS, MD',
      profession: 'Doctor',
      salary: '20+ LPA',
      height: '6\'0"',
      maritalStatus: 'Never Married',
      religiousPractice: 'Practising - Active in community work',
      familyDetails: 'Joint family, father retired professor',
      expectations: 'Educated, preferably in medical field, religious'
    },
    notes: 'Profile shortlisted, family contacted',
    version: 1
  }
];

export const mockSuccessStories: SuccessStory[] = [
  {
    id: '1',
    coupleName: 'Zainab & Mohammed',
    location: 'Mumbai, India',
    date: 'Married December 2024',
    story: 'Through Tasneem Farook\'s guidance and professional approach, we found each other. The biodata process was dignified and respectful, allowing our families to connect meaningfully. Alhamdulillah, we are now happily married and grateful for this service.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400'
  },
  {
    id: '2',
    coupleName: 'Aisha & Ibrahim',
    location: 'Hyderabad, India',
    date: 'Married October 2024',
    story: 'The professional and faith-centered approach made all the difference. Our families appreciated the transparency and Islamic values maintained throughout. May Allah bless Tasneem Farook for this beautiful service.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400'
  },
  {
    id: '3',
    coupleName: 'Mariam & Hassan',
    location: 'Delhi, India',
    date: 'Married September 2024',
    story: 'We were both looking for a serious, halal way to find a life partner. The structured biodata system and family-first approach helped us make the right decision. Highly recommended for anyone seeking nikah with dignity.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400'
  }
];

export const generateMockUniqueId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};
