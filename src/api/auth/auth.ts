import axios from 'axios';
const AUTH_URL = import.meta.env.VITE_AUTH_URL;

const clientHttp = axios.create({ baseURL: AUTH_URL });

clientHttp.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    }
);

export const http = {
    login: async (email: string, password: string) => {
        try {

            const { data: response } = await clientHttp.post('/auth/login', {
                email,
                password,
            });

            const { data } = response;

            return data;
        } catch (error) {
            throw error;
        }
    },
    checkToken: async () => {
        try {
            const res = await clientHttp.get('/auth');

            if (res.status === 200) {
                return res.data;
            }

            return null;
        } catch (error) {
            console.error({ error });
            return null;
        }
    },
};