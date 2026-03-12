import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const userAuthStore = create(
    persist(
        (set) => (
            {
                user: null,
                token: null,
                isAuthenticated: false,
                loading: false,

                login: (userData, token) => {
                    set({
                        user: userData,
                        token: token,
                        isAuthenticated: true
                    })
                },

                logout: () => {
                    set({
                        user: null,
                        token: null,
                        isAuthenticated: false
                    })
                }
            }
        ),
        {
            name: "user-auth"
        }
    )
)

export default userAuthStore