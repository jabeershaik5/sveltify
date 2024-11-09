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

export const POST = async({fetch, url, cookies, request}) =>{
    const accessToken = cookies.get('access_token');
    const formData = await request.json();

    const { title, desc } = formData;
    
    if(!title || !desc){
        return {
            status:400,
            message: 'Title and Description are required',
        }
    }
    
    const response = await fetch(`https://api/spotify.com/v1/users/${user.id}/playlists`, {
        method: 'POST',
        headers:{
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${accessToken}`,
            
        },
        body:{
            "name":title,
            "description":desc,
            "public":false
        }
    });

    const responseJson = await response.json();

    if(responseJson.error){
        return json(responseJson)
    }
    return json(responseJson)
}