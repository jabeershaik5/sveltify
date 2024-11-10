import { CLIENT_ID, REDIRECT_URI } from '$env/static/private';
import { redirect } from '@sveltejs/kit'

export const GET = ()=>{

    const generateRandomString= length => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
    
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }

    const scope = 'user-read-private user-read-email';
    const state= generateRandomString(16);

    throw redirect(307, `https://accounts.spotify.com/authorize?${
        new URLSearchParams({
            response_type:'code',
            client_id:CLIENT_ID,
            scope,
            redirect_uri:'https://sveltify-one.vercel.app/login',
            state
        })}`
    );
};