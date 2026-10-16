import { createContext, useContext, useState, useEffect } from "react"

const WishlistContext = createContext(null)

const STORAGE_KEY = "vizhen_wishlist_ids"

export function WishlistProvider({ children }) {
  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : ["eyeglasses-aster"]
    } catch {
      return ["eyeglasses-aster"]
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds))
    } catch {
      // storage quota or private browsing
    }
  }, [wishlistIds])

  const toggleWishlist = (product) => {
    const id = typeof product === "string" ? product : product.id
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const isWishlisted = (id) => wishlistIds.includes(id)

  return (
    <WishlistContext.Provider
      value={{
        wishlistIds,
        wishlistCount: wishlistIds.length,
        isWishlisted,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    return {
      wishlistIds: [],
      wishlistCount: 0,
      isWishlisted: () => false,
      toggleWishlist: () => {},
    }
  }
  return context
}
