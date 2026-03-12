import { create } from "zustand"
import { persist } from "zustand/middleware"

const adminAuthStore = create(
    persist(
        (set) => (
            {
                admin: null,
                token: null,
                isAuthenticated: false,
                loading: false,

                login: (adminData, token) => {
                    set({
                        admin: adminData,
                        token: token,
                        isAuthenticated: true
                    })
                },

                logout: () => {
                    set({
                        admin: null,
                        token: null,
                        isAuthenticated: false
                    })
                }
            }
        ),
        {
            name: "admin-auth"
        }
    )
)

export default adminAuthStore