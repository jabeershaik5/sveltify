import { error } from '@sveltejs/kit'

export const load = async({fetch, url, params}) =>{

    const query = params.query;
    const searchParams = new URLSearchParams({
        q:query, 
        type:['album', 'artist', 'track', 'playlist'], limit:5
    });
   
    try {

        const response = await fetch(`/api/data/search?${searchParams.toString()}`);

        if(!response.ok){
            throw error(400, 'Error getting the data');
        }
        const data = await response.json();
        
        return {
            data,
            searchTerm: query
        }
    } catch (err) {
        throw error(400, 'Error Loading Data...')
    }
}