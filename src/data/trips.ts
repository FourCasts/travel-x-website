export interface Trip { id: number; title: string; image: string; location: string; }
export const trips: Trip[] = [
  { id: 1, title: 'Alpine Strategy Retreat', image: 'https://images.unsplash.com/photo-1508264165352-258859e62245?auto=format&fit=crop&w=800&q=60', location: 'Swiss Alps' },
  { id: 2, title: 'Coastal Regeneration Summit', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60', location: 'Portugal Coast' },
  { id: 3, title: 'Desert Innovation Camp', image: 'https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&w=800&q=60', location: 'Sahara Fringe' },
  { id: 4, title: 'Rainforest Conscious Expedition', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60', location: 'Amazon Basin' },
];
