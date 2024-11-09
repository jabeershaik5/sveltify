import { error } from '@sveltejs/kit';

export const load = async({params, fetch}) =>{

    const query = params.query;

        if(!query){
            throw error(400, 'Something went wrong')
        }

        try {
            const response = await fetch(`/api/data/browse/categories/${query}/playlists`);

            if(!response.ok){
                throw error(400, 'Something went wrong')
            }

            const data = await response.json();

            return {
                data
            }
            
        } catch (err) {
            throw(402, 'Error fetching data')
        }
}