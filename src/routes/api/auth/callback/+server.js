import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';

export const GET = async({url, fetch, cookies})=>{
    const code = url.searchParams.get('code') || null;
    const state = url.searchParams.get('state') || null;

    if(state === null){
        throw error(400, 'state mismatch');
    }

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method:'POST',
        headers:{
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
        },
        body: new URLSearchParams({
            code:code ||'',
            redirect_uri: 'https://sveltify-one.vercel.app/login',
            grant_type:'authorization_code'
        })
    });
    const token = await response.json();

    if(token.error){
        throw error(400, token.error_description);
    }
    cookies.set('access_token', token.access_token, {path:'/'});
    cookies.set('refresh_token', token.refresh_token, {path:'/'});
    throw redirect(303, '/');
}