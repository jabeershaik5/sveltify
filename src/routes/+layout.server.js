import { redirect, error } from '@sveltejs/kit';

export const load = async({cookies, fetch,url})=>{
    const accessToken = cookies.get('access_token');
    const refreshToken = cookies.get('refresh_token');

    const headers = {
        headers: {Authorization: `Bearer ${accessToken}`
    }}; 
    //check if access token is availavle. if not return user as null.
    //if there is an access token then send a fetch request to the api for user data.
    if(!accessToken){
        return {user: null}
    }
    
    try{
        //fetching user profile data by sending a fetch request to the /me url of spotify.
        const profileRes = await fetch('https://api.spotify.com/v1/me', {
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        }
        );
        //check if api sends a 401 error and there is a refresh token available
        //if yes then send a request to outr server api to get a new access token with refresh token.
        if(profileRes.status === 401 && refreshToken){
            //send a req to get a new access token
            const response = await fetch('/api/auth/refreshToken');
            if(response.ok){ 
                throw redirect(307, url.pathname)
                //if response is ok then redirect the user to the original url that they were trying to visit.
            }
        }
        if(profileRes.ok){
            const profile = await profileRes.json();
            return {user: profile} //return user data to be access in the client load function in +layout.js
        }
        
    }catch(err){
        throw error(400, err.errorMessage);
    }    
}


