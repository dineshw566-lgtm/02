const images = {
  frames: [
    "https://images.unsplash.com/photo-1761896895290-c2a2b5f4c862?auto=format&fit=crop&w=1100&q=82",
    "https://images.unsplash.com/photo-1760337871482-9dd93e75fa88?auto=format&fit=crop&w=1100&q=82",
    "https://images.unsplash.com/photo-1764740116658-84e5566d62f2?auto=format&fit=crop&w=1100&q=82",
    "https://images.unsplash.com/photo-1680690653166-1618c3bcdf51?auto=format&fit=crop&w=1100&q=82",
  ],
  editorial: {
    hero: "https://images.unsplash.com/photo-1581915649317-41fc6eb9597d?auto=format&fit=crop&w=1800&q=85",
    optical:
      "https://images.unsplash.com/photo-1750390200217-628bdc2d7651?auto=format&fit=crop&w=1400&q=82",
    sun: "https://images.unsplash.com/photo-1645561305502-63a9ba09ab09?auto=format&fit=crop&w=1400&q=82",
    man: "https://images.unsplash.com/photo-1662532692957-55eb947054c4?auto=format&fit=crop&w=1400&q=82",
    store:
      "https://images.unsplash.com/photo-1788347101825-f3a560ec1e2d?auto=format&fit=crop&w=1600&q=82",
    premium:
      "https://images.unsplash.com/photo-1592245734204-6561336cbc6f?auto=format&fit=crop&w=1400&q=82",
  },
}

const names = {
  eyeglasses: [
    "Aster",
    "Marlow",
    "Serein",
    "Cove",
    "Linnea",
    "Oriel",
    "Noma",
    "Arden",
    "Vesper",
    "Elio",
    "Sora",
    "Auden",
  ],
  sunglasses: [
    "Solace",
    "Riviera",
    "Noon",
    "Caspian",
    "Iris",
    "Dune",
    "Mistral",
    "Cielo",
    "Lido",
    "Aurelia",
    "Marais",
    "Sundial",
  ],
  kids: [
    "Milo",
    "Pip",
    "Nova Mini",
    "Scout",
    "Mallow",
    "Orbit",
    "Sunny",
    "Pebble",
  ],
}
const shapes = ["Round", "Rectangle", "Cat-eye", "Aviator", "Oval", "Square"]
const materials = [
  "Italian Acetate",
  "Stainless Steel",
  "Bio Acetate",
  "Titanium",
]
const colors = [
  "Forest Ink",
  "Tea Tortoise",
  "Chalk",
  "Oxide Red",
  "Moss",
  "Smoke",
]

const swatchPalettes = [
  [
    { name: "Forest Ink", hex: "#7c4a27" },
    { name: "Chalk", hex: "#d6bc9f" },
    { name: "Moss", hex: "#47523f" },
  ],
  [
    { name: "Tea Tortoise", hex: "#6f4327" },
    { name: "Matte Black", hex: "#222222" },
    { name: "Silver Slate", hex: "#8d8d8d" },
  ],
  [
    { name: "Chalk", hex: "#e3d8c8" },
    { name: "Caramel Honey", hex: "#c2946c" },
    { name: "Smoke Tint", hex: "#6e6e6e" },
  ],
  [
    { name: "Midnight Black", hex: "#1c1c1c" },
    { name: "Oxide Red", hex: "#8b3c2e" },
    { name: "Gunmetal", hex: "#656a74" },
  ],
]

const makeProducts = (category, list, offset) =>
  list.map((name, index) => {
    const price =
      category === "kids"
        ? 2490 + index * 180
        : 3990 + ((index + offset) % 6) * 500
    return {
      id: `${category}-${name.toLowerCase().replaceAll(" ", "-")}`,
      name,
      category,
      gender:
        category === "kids"
          ? "Kids"
          : index % 3 === 0
            ? "Women"
            : index % 3 === 1
              ? "Men"
              : "Unisex",
      image: images.frames[(index + offset) % images.frames.length],
      price,
      originalPrice: index % 3 === 0 ? price + 1000 : null,
      shape: shapes[(index + offset) % shapes.length],
      material: materials[(index + offset) % materials.length],
      color: colors[(index + offset) % colors.length],
      swatches: swatchPalettes[(index + offset) % swatchPalettes.length],
      size:
        category === "kids"
          ? "46–16–130"
          : `${49 + (index % 5)}–${17 + (index % 3)}–145`,
      description: `${name} balances expressive proportion with all-day comfort, finished by hand for a considered, easy fit.`,
      features: [
        "Hand-finished frame",
        "Comfort-fit temples",
        "Protective case included",
        "One-year frame care",
      ],
      lensOptions:
        category === "sunglasses"
          ? ["UV400 sun lens", "Polarised sun lens", "Prescription sun lens"]
          : [
              "Clear prescription",
              "Blue-light filter",
              "Photochromic",
              "Progressive",
            ],
      featured: index < 4,
      available: index !== 10,
    }
  })

export const products = [
  ...makeProducts("eyeglasses", names.eyeglasses, 0),
  ...makeProducts("sunglasses", names.sunglasses, 1),
  ...makeProducts("kids", names.kids, 2),
]

export const getProducts = (category) =>
  products.filter((product) => product.category === category)
export { images }
