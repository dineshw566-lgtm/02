/**
 * VIZHEN PLUS OPTICS - Mega Menu Data Configuration
 * Drives the dynamic mega-menu system for Eyeglasses, Sunglasses, Kids, etc.
 *
 * Modify promo cards, columns, and items here without touching component code.
 */

export const megaMenuData = {
  eyeglasses: {
    type: "mega", // shows full 3-column mega layout
    columns: [
      {
        id: "men-eyeglasses",
        heading: "MEN Eyeglasses",
        tagline: "With FREE lenses",
        genderTag: "MEN",
        promoColor: "#eaf3f0",
        href: "/eyeglasses?gender=men",
        items: [
          {
            id: "eg-m-1",
            label: "John Jacobs | Vizhen Air",
            price: "Starts at ₹3,000",
            href: "/eyeglasses?brand=john-jacobs",
          },
          {
            id: "eg-m-2",
            label: "Vincent Chase | Vizhen Air",
            price: "Starts at ₹1,500",
            href: "/eyeglasses?brand=vincent-chase",
          },
          {
            id: "eg-m-3",
            label: "Hustlr",
            price: "Starts at ₹500",
            href: "/eyeglasses?brand=hustlr",
          },
          {
            id: "eg-m-4",
            label: "Essentials",
            price: "Starts at ₹500",
            href: "/eyeglasses?collection=essentials",
          },
          {
            id: "eg-m-5",
            label: "All Brands",
            price: "Starts at ₹800",
            href: "/eyeglasses",
          },
        ],
      },
      {
        id: "women-eyeglasses",
        heading: "WOMEN Eyeglasses",
        tagline: "With FREE lenses",
        genderTag: "WOMEN",
        promoColor: "#f5eef8",
        href: "/eyeglasses?gender=women",
        items: [
          {
            id: "eg-w-1",
            label: "John Jacobs | Vizhen Air",
            price: "Starts at ₹3,000",
            href: "/eyeglasses?brand=john-jacobs&gender=women",
          },
          {
            id: "eg-w-2",
            label: "Vincent Chase | Vizhen Air",
            price: "Starts at ₹1,500",
            href: "/eyeglasses?brand=vincent-chase&gender=women",
          },
          {
            id: "eg-w-3",
            label: "Hustlr",
            price: "Starts at ₹500",
            href: "/eyeglasses?brand=hustlr&gender=women",
          },
          {
            id: "eg-w-4",
            label: "Essentials",
            price: "Starts at ₹500",
            href: "/eyeglasses?collection=essentials&gender=women",
          },
          {
            id: "eg-w-5",
            label: "All Brands",
            price: "Starts at ₹800",
            href: "/eyeglasses?gender=women",
          },
        ],
      },
      {
        id: "kids-eyeglasses",
        heading: "KIDS Eyeglasses",
        tagline: "With FREE lenses",
        genderTag: "KIDS",
        promoColor: "#fff8ea",
        href: "/kids",
        items: [
          {
            id: "eg-k-1",
            label: "Juniors | 5 to 8 years",
            price: "Starts at ₹800",
            href: "/kids?age=juniors",
          },
          {
            id: "eg-k-2",
            label: "Tweens | 8 to 12 years",
            price: "Starts at ₹500",
            href: "/kids?age=tweens",
          },
          {
            id: "eg-k-3",
            label: "Teens | 12 to 17 years",
            price: "Starts at ₹1,500",
            href: "/kids?age=teens",
          },
        ],
      },
    ],
    footerLinks: [
      { label: "New Arrivals", href: "/eyeglasses?sort=new" },
      { label: "Best Sellers", href: "/eyeglasses?sort=popular" },
      { label: "Progressive Lenses", href: "/eye-care" },
      { label: "Blue Light Block", href: "/eye-care" },
      { label: "View All Eyeglasses", href: "/eyeglasses", highlight: true },
    ],
  },

  sunglasses: {
    type: "mega",
    columns: [
      {
        id: "men-sunglasses",
        heading: "MEN Sunglasses",
        tagline: "Premium UV Protection",
        genderTag: "MEN",
        promoColor: "#eaf3f0",
        href: "/sunglasses?gender=men",
        items: [
          {
            id: "sg-m-1",
            label: "Aviator",
            price: "Starts at ₹1,200",
            href: "/sunglasses?style=aviator&gender=men",
          },
          {
            id: "sg-m-2",
            label: "Wayfarer",
            price: "Starts at ₹900",
            href: "/sunglasses?style=wayfarer&gender=men",
          },
          {
            id: "sg-m-3",
            label: "Polarized",
            price: "Starts at ₹1,500",
            href: "/sunglasses?lens=polarized&gender=men",
          },
          {
            id: "sg-m-4",
            label: "Round",
            price: "Starts at ₹800",
            href: "/sunglasses?style=round&gender=men",
          },
          {
            id: "sg-m-5",
            label: "All Men Styles",
            price: "From ₹799",
            href: "/sunglasses?gender=men",
          },
        ],
      },
      {
        id: "women-sunglasses",
        heading: "WOMEN Sunglasses",
        tagline: "Premium UV Protection",
        genderTag: "WOMEN",
        promoColor: "#f5eef8",
        href: "/sunglasses?gender=women",
        items: [
          {
            id: "sg-w-1",
            label: "Oversized",
            price: "Starts at ₹1,100",
            href: "/sunglasses?style=oversized&gender=women",
          },
          {
            id: "sg-w-2",
            label: "Cat Eye",
            price: "Starts at ₹900",
            href: "/sunglasses?style=cat-eye&gender=women",
          },
          {
            id: "sg-w-3",
            label: "Polarized",
            price: "Starts at ₹1,500",
            href: "/sunglasses?lens=polarized&gender=women",
          },
          {
            id: "sg-w-4",
            label: "Butterfly",
            price: "Starts at ₹800",
            href: "/sunglasses?style=butterfly&gender=women",
          },
          {
            id: "sg-w-5",
            label: "All Women Styles",
            price: "From ₹799",
            href: "/sunglasses?gender=women",
          },
        ],
      },
      {
        id: "sunglasses-specials",
        heading: "PREMIUM Styles",
        tagline: "Crafted for all-day wear",
        genderTag: "SPECIAL",
        promoColor: "#fff8ea",
        href: "/sunglasses",
        items: [
          {
            id: "sg-s-1",
            label: "Kids Sunglasses",
            price: "Starts at ₹600",
            href: "/sunglasses?kids=true",
          },
          {
            id: "sg-s-2",
            label: "Sports & Outdoor",
            price: "Starts at ₹1,200",
            href: "/sunglasses?style=sports",
          },
          {
            id: "sg-s-3",
            label: "Anti-Glare Coating",
            price: "Starts at ₹1,800",
            href: "/sunglasses?lens=anti-glare",
          },
          {
            id: "sg-s-4",
            label: "Photochromic Lenses",
            price: "Starts at ₹2,200",
            href: "/sunglasses?lens=photochromic",
          },
          {
            id: "sg-s-5",
            label: "Premium Brands",
            price: "Starts at ₹3,000",
            href: "/sunglasses?tier=premium",
          },
        ],
      },
    ],
    footerLinks: [
      { label: "New Arrivals", href: "/sunglasses?sort=new" },
      { label: "Best Sellers", href: "/sunglasses?sort=popular" },
      { label: "Polarized Guide", href: "/eye-care" },
      { label: "UV Protection", href: "/eye-care" },
      { label: "View All Sunglasses", href: "/sunglasses", highlight: true },
    ],
  },

  kids: {
    type: "mega",
    columns: [
      {
        id: "boys-frames",
        heading: "BOYS Frames",
        tagline: "Durable & safe designs",
        genderTag: "BOYS",
        promoColor: "#e8f4fd",
        href: "/kids?gender=boys",
        items: [
          {
            id: "ki-b-1",
            label: "Juniors | 5 to 8 years",
            price: "Starts at ₹800",
            href: "/kids?gender=boys&age=juniors",
          },
          {
            id: "ki-b-2",
            label: "Tweens | 8 to 12 years",
            price: "Starts at ₹500",
            href: "/kids?gender=boys&age=tweens",
          },
          {
            id: "ki-b-3",
            label: "Teens | 12 to 17 years",
            price: "Starts at ₹1,500",
            href: "/kids?gender=boys&age=teens",
          },
          {
            id: "ki-b-4",
            label: "School Frames",
            price: "Starts at ₹600",
            href: "/kids?collection=school",
          },
          {
            id: "ki-b-5",
            label: "Flexible Frames",
            price: "Starts at ₹700",
            href: "/kids?feature=flexible",
          },
        ],
      },
      {
        id: "girls-frames",
        heading: "GIRLS Frames",
        tagline: "Colourful & lightweight",
        genderTag: "GIRLS",
        promoColor: "#fdf0f5",
        href: "/kids?gender=girls",
        items: [
          {
            id: "ki-g-1",
            label: "Juniors | 5 to 8 years",
            price: "Starts at ₹800",
            href: "/kids?gender=girls&age=juniors",
          },
          {
            id: "ki-g-2",
            label: "Tweens | 8 to 12 years",
            price: "Starts at ₹500",
            href: "/kids?gender=girls&age=tweens",
          },
          {
            id: "ki-g-3",
            label: "Teens | 12 to 17 years",
            price: "Starts at ₹1,500",
            href: "/kids?gender=girls&age=teens",
          },
          {
            id: "ki-g-4",
            label: "School Frames",
            price: "Starts at ₹600",
            href: "/kids?gender=girls&collection=school",
          },
          {
            id: "ki-g-5",
            label: "Flexible Frames",
            price: "Starts at ₹700",
            href: "/kids?gender=girls&feature=flexible",
          },
        ],
      },
      {
        id: "kids-specials",
        heading: "KIDS Eye Care",
        tagline: "Protect their vision early",
        genderTag: "CARE",
        promoColor: "#fff8ea",
        href: "/kids",
        items: [
          {
            id: "ki-s-1",
            label: "Blue Light Block for Kids",
            price: "Starts at ₹900",
            href: "/kids?lens=blue-light",
          },
          {
            id: "ki-s-2",
            label: "Kids Eye Test",
            price: "Book an appointment",
            href: "/eye-care",
          },
          {
            id: "ki-s-3",
            label: "Anti-Scratch Lenses",
            price: "Starts at ₹500",
            href: "/kids?lens=anti-scratch",
          },
          {
            id: "ki-s-4",
            label: "Sports Eyewear",
            price: "Starts at ₹1,000",
            href: "/kids?style=sports",
          },
        ],
      },
    ],
    footerLinks: [
      { label: "New Arrivals", href: "/kids?sort=new" },
      { label: "Best Sellers", href: "/kids?sort=popular" },
      { label: "Kids Eye Health", href: "/eye-care" },
      { label: "View All Kids Frames", href: "/kids", highlight: true },
    ],
  },

  eyeCare: {
    type: "simple", // shows smaller dropdown
    links: [
      { label: "Book Eye Test", href: "/eye-care", icon: "calendar" },
      { label: "Eye Health Guide", href: "/eye-care", icon: "eye" },
      { label: "Lens Information", href: "/eye-care", icon: "info" },
      { label: "Progressive Lenses", href: "/eye-care", icon: "layers" },
      { label: "Blue Light Guide", href: "/eye-care", icon: "shield" },
      { label: "Anti-Glare Lenses", href: "/eye-care", icon: "sun" },
    ],
  },

  ourStory: {
    type: "simple",
    links: [
      { label: "About Vizhen Plus", href: "/our-story", icon: "users" },
      { label: "Our Journey", href: "/our-story", icon: "map" },
      { label: "Why Choose Us", href: "/our-story", icon: "star" },
      { label: "Our Optometrists", href: "/our-story", icon: "user-check" },
      { label: "Contact Us", href: "/visit", icon: "mail" },
    ],
  },

  visit: {
    type: "simple",
    links: [
      { label: "Find Our Boutique", href: "/visit", icon: "map-pin" },
      { label: "Book Eye Test", href: "/eye-care", icon: "calendar" },
      { label: "Store Hours", href: "/visit", icon: "clock" },
      { label: "Contact & Enquire", href: "/visit", icon: "phone" },
      { label: "WhatsApp Us", href: "/visit", icon: "message-circle" },
    ],
  },
}

/** Maps nav key → megaMenuData key */
export const navItems = [
  {
    key: "eyeglasses",
    label: "Eyeglasses",
    to: "/eyeglasses",
    hasMenu: true,
    menuKey: "eyeglasses",
    iconName: "glasses",
  },
  {
    key: "sunglasses",
    label: "Sunglasses",
    to: "/sunglasses",
    hasMenu: true,
    menuKey: "sunglasses",
    iconName: "sunglasses",
  },
  {
    key: "kids",
    label: "Kids",
    to: "/kids",
    hasMenu: true,
    menuKey: "kids",
    iconName: "kids",
  },
  {
    key: "eye-care",
    label: "Eye care",
    to: "/eye-care",
    hasMenu: true,
    menuKey: "eyeCare",
    iconName: "eye",
  },
  {
    key: "our-story",
    label: "Our story",
    to: "/our-story",
    hasMenu: true,
    menuKey: "ourStory",
    iconName: "users",
  },
  {
    key: "visit",
    label: "Visit",
    to: "/visit",
    hasMenu: true,
    menuKey: "visit",
    iconName: "map-pin",
  },
]
