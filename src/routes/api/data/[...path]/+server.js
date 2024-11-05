import { error, json } from '@sveltejs/kit';

export const GET = async ({fetch, url, cookies, params}) =>{
    const accessToken = cookies.get('access_token');

    const response = await fetch(`https://api.spotify.com/v1/${params?.path}${url?.search}`, {
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    });
    const responseJson = await response.json();
    if(responseJson.error){
        throw error(responseJson.error.status, responseJson.error.message)
    }
    
    return json(responseJson);
}