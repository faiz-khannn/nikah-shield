// Mock data for development and testing

export interface UserProfile {
  id: string;
  firstName: string;
  displayName: string;
  gender: 'male' | 'female' | 'other';
  dob: string;
  age: number;
  city: string;
  country: string;
  education: string;
  profession: string;
  religion: {
    madhhab: string;
    prayer: string;
    fasting: string;
    hijab_beard: string;
  };
  intentions: string;
  family: {
    values: string;
    ethnicity: string;
  };
  financial: {
    habits: string;
    debtStatus: string;
  };
  photos: Array<{
    id: string;
    status: 'blurred' | 'unblurred' | 'vaulted';
    thumbUrl: string;
    rules: {
      unblurAfterMessages: number;
      mutualConsentNeeded: boolean;
    };
  }>;
  quizScores: {
    prayer: number;
    fasting: number;
    compatibilityIndex: number;
  };
  verified: boolean;
  bio?: string;
  interests?: string[];
  lastActive: string;
}

export const mockProfiles: UserProfile[] = [
  {
    id: '1',
    firstName: 'Aisha',
    displayName: 'Aisha M.',
    gender: 'female',
    dob: '1995-03-15',
    age: 29,
    city: 'London',
    country: 'UK',
    education: 'Masters in Psychology',
    profession: 'Clinical Psychologist',
    religion: {
      madhhab: 'Hanafi',
      prayer: 'always',
      fasting: 'always',
      hijab_beard: 'yes'
    },
    intentions: 'Marriage within 1-3 months',
    family: {
      values: 'Traditional',
      ethnicity: 'Pakistani'
    },
    financial: {
      habits: 'Saver',
      debtStatus: 'No debt'
    },
    photos: [
      {
        id: 'p1',
        status: 'blurred',
        thumbUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
        rules: {
          unblurAfterMessages: 5,
          mutualConsentNeeded: true
        }
      }
    ],
    quizScores: {
      prayer: 5,
      fasting: 5,
      compatibilityIndex: 92
    },
    verified: true,
    bio: 'Seeking a practicing Muslim who values faith and family. Love volunteering and reading.',
    interests: ['Reading', 'Volunteering', 'Hiking', 'Cooking'],
    lastActive: new Date().toISOString()
  },
  {
    id: '2',
    firstName: 'Fatima',
    displayName: 'Fatima K.',
    gender: 'female',
    dob: '1997-07-22',
    age: 27,
    city: 'Manchester',
    country: 'UK',
    education: 'BA in Education',
    profession: 'Primary School Teacher',
    religion: {
      madhhab: 'Shafi',
      prayer: 'always',
      fasting: 'always',
      hijab_beard: 'yes'
    },
    intentions: 'Marriage within a year',
    family: {
      values: 'Moderate',
      ethnicity: 'Somali'
    },
    financial: {
      habits: 'Balanced',
      debtStatus: 'student'
    },
    photos: [
      {
        id: 'p2',
        status: 'blurred',
        thumbUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
        rules: {
          unblurAfterMessages: 8,
          mutualConsentNeeded: true
        }
      }
    ],
    quizScores: {
      prayer: 5,
      fasting: 5,
      compatibilityIndex: 88
    },
    verified: true,
    bio: 'Teacher who loves working with children. Looking for someone kind and family-oriented.',
    interests: ['Teaching', 'Art', 'Travel', 'Quran Study'],
    lastActive: new Date().toISOString()
  },
  {
    id: '3',
    firstName: 'Omar',
    displayName: 'Omar A.',
    gender: 'male',
    dob: '1992-11-08',
    age: 32,
    city: 'Birmingham',
    country: 'UK',
    education: 'MBA',
    profession: 'Business Analyst',
    religion: {
      madhhab: 'Maliki',
      prayer: 'always',
      fasting: 'always',
      hijab_beard: 'yes'
    },
    intentions: 'Marriage within 1-3 months',
    family: {
      values: 'Traditional',
      ethnicity: 'Moroccan'
    },
    financial: {
      habits: 'Investor',
      debtStatus: 'No debt'
    },
    photos: [
      {
        id: 'p3',
        status: 'blurred',
        thumbUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        rules: {
          unblurAfterMessages: 5,
          mutualConsentNeeded: true
        }
      }
    ],
    quizScores: {
      prayer: 5,
      fasting: 5,
      compatibilityIndex: 90
    },
    verified: true,
    bio: 'Practicing Muslim seeking a life partner. Value honesty, respect, and strong Deen.',
    interests: ['Business', 'Sports', 'Travel', 'Islamic Studies'],
    lastActive: new Date().toISOString()
  }
];

export const mockQuizQuestions = [
  {
    id: 'q1',
    category: 'prayer',
    question: 'How often do you perform your five daily prayers?',
    type: 'radio',
    options: [
      { value: 'always', label: 'Always (all 5 prayers on time)', score: 5 },
      { value: 'usually', label: 'Usually (occasionally miss one)', score: 4 },
      { value: 'sometimes', label: 'Sometimes (trying to be consistent)', score: 3 },
      { value: 'rarely', label: 'Rarely', score: 2 }
    ]
  },
  {
    id: 'q2',
    category: 'fasting',
    question: 'Do you fast during Ramadan?',
    type: 'radio',
    options: [
      { value: 'always', label: 'Yes, every day unless medically unable', score: 5 },
      { value: 'usually', label: 'Yes, most days', score: 4 },
      { value: 'sometimes', label: 'Some days', score: 3 },
      { value: 'rarely', label: 'Rarely or never', score: 2 }
    ]
  },
  {
    id: 'q3',
    category: 'madhhab',
    question: 'Which school of thought (madhhab) do you follow?',
    type: 'radio',
    options: [
      { value: 'hanafi', label: 'Hanafi', score: 5 },
      { value: 'shafi', label: 'Shafi', score: 5 },
      { value: 'maliki', label: 'Maliki', score: 5 },
      { value: 'hanbali', label: 'Hanbali', score: 5 },
      { value: 'other', label: 'Other / Not specific', score: 4 }
    ]
  },
  {
    id: 'q4',
    category: 'hijab_beard',
    question: 'Do you wear hijab/maintain a beard?',
    type: 'radio',
    options: [
      { value: 'yes', label: 'Yes, always', score: 5 },
      { value: 'sometimes', label: 'Sometimes', score: 3 },
      { value: 'no', label: 'No', score: 2 }
    ]
  },
  {
    id: 'q5',
    category: 'quran',
    question: 'How often do you read/recite Quran?',
    type: 'radio',
    options: [
      { value: 'daily', label: 'Daily', score: 5 },
      { value: 'weekly', label: 'Weekly', score: 4 },
      { value: 'monthly', label: 'Monthly', score: 3 },
      { value: 'occasionally', label: 'Occasionally', score: 2 }
    ]
  },
  {
    id: 'q6',
    category: 'family',
    question: 'What are your family values?',
    type: 'radio',
    options: [
      { value: 'traditional', label: 'Traditional - strong emphasis on cultural and Islamic practices', score: 5 },
      { value: 'moderate', label: 'Moderate - balance between tradition and modern life', score: 4 },
      { value: 'liberal', label: 'Liberal - open-minded and progressive', score: 3 }
    ]
  },
  {
    id: 'q7',
    category: 'intentions',
    question: 'When are you hoping to get married?',
    type: 'radio',
    options: [
      { value: '1-3months', label: 'Within 1-3 months', score: 5 },
      { value: '3-6months', label: 'Within 3-6 months', score: 4 },
      { value: 'within-year', label: 'Within a year', score: 3 },
      { value: 'exploring', label: 'Just exploring for now', score: 2 }
    ]
  }
];

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
  type: 'text' | 'icebreaker' | 'unblur-request' | 'system';
}

export const mockMessages: ChatMessage[] = [
  {
    id: 'm1',
    senderId: '1',
    receiverId: 'current-user',
    content: 'As-salamu alaykum! How are you doing today?',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    read: true,
    type: 'text'
  },
  {
    id: 'm2',
    senderId: 'current-user',
    receiverId: '1',
    content: "Wa alaykumu as-salam! I'm doing well, alhamdulillah. How about you?",
    timestamp: new Date(Date.now() - 3000000).toISOString(),
    read: true,
    type: 'text'
  }
];
