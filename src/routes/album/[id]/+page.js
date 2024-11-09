import { error } from '@sveltejs/kit';

export const load = async({params, fetch})=>{
    const id = params.id;

    if(!id){
        throw error(400, 'Failed to load album')
    }
    try {
        const response = await fetch(`/api/data/albums/${id}/tracks`);
        const albumResponse = await fetch(`/api/data/albums/${id}`)

         if(!response.ok || !albumResponse.ok){
            throw error(err.status, err.message)
         }
         const tracks = await response.json();
         const album = await albumResponse.json();
         
         return {
            tracks,
            album
         };

    } catch (err) {
        throw error(err.status, err.message)
    }
}