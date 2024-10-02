import { Status } from './AuthContext';

interface User {
    userId: number
    fullName: string
    email: string
    dni: string
    company: string
    rol: string
    jiraAccountId: string
    jefeArea: string | null
};

export interface LoginResponse {
    data: {
        token: string
        data: User
    }
};

export interface AuthState {
    status: Status
    user: User | null
    FullName: string | null
    token: string | null
    errorMessage: string
};

type AuthAction =
    | { type: 'login', payload: LoginResponse }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'addError':
            return {
                ...state,
                errorMessage: action.payload,
                user: null,
                status: 'not-authenticated',
                token: null,
            };
        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            };
        case 'login':
            return {
                ...state,
                status: 'authenticated',
                token: action.payload.data.token,
                user: action.payload.data.data,
                FullName: action.payload.data.data.fullName,
                errorMessage: '',
            };
        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                user: null,
            };

        default:
            return state;
    }
};
