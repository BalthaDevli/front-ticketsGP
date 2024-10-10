import { createContext, useEffect, useReducer } from "react"
import { AuthState, authReducer } from "./authReducer"
import { http } from "../api/auth/auth"

export type Status = "checking" | "authenticated" | "not-authenticated"

interface User {
  userId: number
  fullName: string
  email: string
  dni: string
  company: string
  rol: string
  jiraAccountId: string
  jefeArea: string | null
}

interface AuthContextProps {
  errorMessage: string
  token: string | null
  user: User | null
  FullName: string | null
  status: Status
  login: (email: string, password: string) => Promise<User>
  logOut: () => Promise<void>
  removeErrors: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

const authInitialState: AuthState = {
  status: "checking",
  FullName: "",
  user: null,
  token: null,
  errorMessage: "",
}

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)

  useEffect(() => {
    checkToken()
  }, [])

  const checkToken = async () => {
    try {
      const token = localStorage.getItem("token")

      if (!token) return dispatch({ type: "notAuthenticated" })

      const res = await http.checkToken()
      if (!res) return dispatch({ type: "notAuthenticated" })

      if (Object.prototype.hasOwnProperty.call(res, "data")) {
        const { data } = res
        return dispatch({
          type: "login",
          payload: {
            data: {
              data,
              token,
            },
          },
        })
      }

      dispatch({ type: "notAuthenticated" })
    } catch (error) {
      console.log({ error })
      // Alert('Ocurrio un error', 'No se pudo validar la sesión', [{
      //     text: 'Reportar',
      //     onPress: () => {
      //         console.log({ error });
      //         dispatch({ type: 'notAuthenticated' });
      //     },
      // }, {
      //     text: 'Aceptar',
      //     onPress: () => dispatch({ type: 'notAuthenticated' }),
      // }]);
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const data = await http.login(email, password)

      dispatch({
        type: "login",
        payload: {
          data,
        },
      })

      localStorage.setItem("token", data?.token)

      return data.data
    } catch (error) {
      dispatch({
        type: "addError",
        payload: (error as any).response?.data?.error ?? "Unexpected error",
      })

      throw error
    }
  }

  const logOut = async () => {
    localStorage.removeItem("token")

    dispatch({
      type: "logout",
    })
  }

  const removeErrors = () => {
    dispatch({ type: "removeError" })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logOut,
        removeErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
