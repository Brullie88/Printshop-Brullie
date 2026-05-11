export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  numericPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  { id: "1", name: "Cyberpunk Controller Stand", category: "gaming", price: "€ 24,95", numericPrice: 24.95, rating: 4.8, reviews: 124, image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=600&h=600", description: "Geef je controller de rustplaats die hij verdient met deze cyberpunk geïnspireerde stand. Geprint in duurzaam PLA.", features: ["Geschikt voor PS5 / Xbox", "Anti-slip voetjes", "Uniek design"] },
  { id: "2", name: "Articulated Dragon", category: "gadgets", price: "€ 34,50", numericPrice: 34.50, rating: 4.9, reviews: 89, image: "https://images.unsplash.com/photo-1615554109893-9c593675276e?auto=format&fit=crop&q=80&w=600&h=600", badge: "Populair", description: "Deze volledig beweegbare draak is in één stuk geprint. Een fantastisch stukje techniek en een geweldige gadget.", features: ["30cm lang", "Volledig beweegbaar", "Print in place"] },
  { id: "3", name: "Hexagon Wall Planter", category: "home", price: "€ 18,00", numericPrice: 18.00, rating: 4.7, reviews: 56, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=600&h=600", description: "Breng de natuur naar binnen met deze modulaire hexagon plantenbakjes. Perfect voor stekjes en kleine cactussen.", features: ["Modulair systeem", "Inclusief dubbelzijdig tape", "Waterdicht (PETG)"] },
  { id: "4", name: "Minimalist Headphone Mount", category: "organizers", price: "€ 15,95", numericPrice: 15.95, rating: 4.6, reviews: 210, image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&q=80&w=600&h=600", description: "Bevestig deze strakke houder onder je bureau om je koptelefoon netjes op te bergen.", features: ["Schroef- of tape-montage", "Compact design", "Extra sterk"] },
  { id: "5", name: "D&D Dice Tower Castle", category: "gaming", price: "€ 45,00", numericPrice: 45.00, rating: 4.9, reviews: 42, image: "https://images.unsplash.com/photo-1613941785536-1e66c98aaaf6?auto=format&fit=crop&q=80&w=600&h=600", description: "Gooi al je nat-20's in stijl met deze extreem gedetailleerde dice tower in de vorm van een kasteelruïne.", features: ["Werkt met standaard D&D dobbelstenen", "Ingebouwde dice tray", "Bestaat uit 3 delen"] },
  { id: "6", name: "Cable Management Combs", category: "organizers", price: "€ 8,95", numericPrice: 8.95, rating: 4.5, reviews: 315, image: "https://images.unsplash.com/photo-1614061806307-8e6bb3b664fc?auto=format&fit=crop&q=80&w=600&h=600", description: "Set van 10 kabelkammen om de bedrading van je PC of bureau strak te organiseren.", features: ["Voor 4mm en 6mm kabels", "Flexibel TPU", "Zwart of Wit"] },
  { id: "7", name: "Geometrische Vaas", category: "home", price: "€ 29,50", numericPrice: 29.50, rating: 4.8, reviews: 73, image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&q=80&w=600&h=600", description: "Een prachtige geometrische vaas voor droogbloemen. Geprint met een speciale spiraal techniek.", features: ["Voor droogbloemen", "Matte finish", "Modern design"] },
  { id: "8", name: "Custom Name Tag", category: "gifts", price: "€ 12,50", numericPrice: 12.50, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1612458129762-2309e4bb1d2c?auto=format&fit=crop&q=80&w=600&h=600", badge: "Aanrader", description: "Een gepersonaliseerde sleutelhanger met jouw naam of gamertag in een robuust cyberpunk lettertype.", features: ["Maximaal 12 tekens", "Twee kleuren print", "Inclusief ring"] }
];
