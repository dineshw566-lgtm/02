export const business = {
  name: "VIZHEN PLUS OPTICS",
  shortName: "VIZHEN",
  tagline: "FOR YOUR PERFECT VISION",
  location: "Store location shared with confirmed appointments",
  phone: "Request a callback through our enquiry form",
  email: "Use the enquiry form for a verified response",
  hours: "Consultations available by confirmed appointment",
  whatsappNumber: "",
  logoUrl: "/logo.png",
  logoMarkUrl: "/logo-mark.png",
}

export const buildWhatsAppUrl = (message) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`
