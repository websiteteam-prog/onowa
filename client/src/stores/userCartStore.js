import { create } from "zustand"
import { persist } from "zustand/middleware"

const cartStore = create(
  persist(
    (set, get) => ({

      cart: [],

      addToCart: (product) => {

        const cart = get().cart
        const exist = cart.find((item) => item.id === product.id)

        if (exist) {

          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          })

        } else {

          set({
            cart: [...cart, { ...product, qty: 1 }]
          })

        }

      },

      removeItem: (id) => {

        const cart = get().cart

        set({
          cart: cart.filter((item) => item.id !== id)
        })

      },

      increaseQty: (id) => {

        const cart = get().cart

        set({
          cart: cart.map((item) =>
            item.id === id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        })

      },

      decreaseQty: (id) => {

        const cart = get().cart

        set({
          cart: cart.map((item) =>
            item.id === id && item.qty > 1
              ? { ...item, qty: item.qty - 1 }
              : item
          )
        })

      },

      clearCart: () => {
        set({ cart: [] })
      }

    }),
    {
      name: "cart-storage"
    }
  )
)

export default cartStore