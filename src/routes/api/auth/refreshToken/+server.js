import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
import { error } from '@sveltejs/kit';

export const GET = async({cookies, fetch})=>{
    const refreshToken = cookies.get('refresh_token');
    //retrieve the refresh token from cookies

    try{
        //send a request for a new access token 
        const refreshRes = await fetch(`https://accounts.spotify.com/api/token`, {
            method:"POST",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
            },
            body: new URLSearchParams({
                grant_type:'refresh_token',
                refresh_token: refreshToken ||'',
                client_id: CLIENT_ID||''
            })
        });

        const tokens = await refreshRes.json();
        if(tokens.error){
            //if any error from the api throw an error and delete the cookies so that user is logged out.
            cookies.delete('access_token', {path:'/'});
            cookies.delete('access_token', {path:'/'});
            throw error(401, tokens.error_description);
        }
        //if the response was successful then set the new access token
        cookies.set('access_token', tokens.access_token, {path:'/'});
        //return the tokens as a response. no need to send them since we wont be needing them.
        //but we need to send a response for a fetch req, so here we go.
        return json(tokens);

    }catch(err){
        throw error(401, err.error_message);
    }
}