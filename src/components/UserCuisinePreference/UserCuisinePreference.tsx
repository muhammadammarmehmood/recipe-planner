// hooks/useCuisinePreference.ts
// Manages the user's default cuisine preference.
// On first visit: returns null so the app can show the onboarding screen.
// After selection: persists to localStorage and returns the area string.

import { useState } from 'react';

const STORAGE_KEY = 'recipePal_defaultCuisine';

// Areas supported by TheMealDB's filter.php?a= endpoint
export const SUPPORTED_AREAS = [
  'American', 'British', 'Canadian', 'Chinese', 'Croatian', 'Dutch',
  'Egyptian', 'Filipino', 'French', 'Greek', 'Indian', 'Irish', 'Italian',
  'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan',
  'Pakistani', 'Polish', 'Portuguese', 'Russian', 'Spanish', 'Thai',
  'Tunisian', 'Turkish', 'Ukrainian', 'Vietnamese',
];

// Best-effort map from ISO country code → TheMealDB area name
// Used when "detect from location" resolves a country code
export const COUNTRY_TO_AREA: Record<string, string> = {
  US: 'American', GB: 'British', CA: 'Canadian', CN: 'Chinese',
  HR: 'Croatian', NL: 'Dutch', EG: 'Egyptian', PH: 'Filipino',
  FR: 'French', GR: 'Greek', IN: 'Indian', IE: 'Irish',
  IT: 'Italian', JM: 'Jamaican', JP: 'Japanese', KE: 'Kenyan',
  MY: 'Malaysian', MX: 'Mexican', MA: 'Moroccan', PK: 'Pakistani',
  PL: 'Polish', PT: 'Portuguese', RU: 'Russian', ES: 'Spanish',
  TH: 'Thai', TN: 'Tunisian', TR: 'Turkish', UA: 'Ukrainian',
  VN: 'Vietnamese',
};

export function useCuisinePreference() {
  const stored = localStorage.getItem(STORAGE_KEY);

  // null = first visit, show onboarding
  const [preference, setPreference] = useState<string | null>(stored);

  const savePreference = (area: string) => {
    localStorage.setItem(STORAGE_KEY, area);
    setPreference(area);
  };

  const clearPreference = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPreference(null);
  };

  return { preference, savePreference, clearPreference };
}