import { error } from '@sveltejs/kit'
import { initData } from '$lib/stores/initData.js';

let albums;

initData.subscribe(value => {
    albums = value.categories?.albums
});

export const load = async({fetch}) =>{
    if(albums){
        return albums
    }
    try {
        const response = await fetch(`/api/data/browse/categories?limit=20`)
        if(!response.ok){
            const errorJson = await response.json();
            throw error(404, errorJson.error_message);
        }
        const cats = await response.json();
        return {
            message: 'categories',
            cats
        }
    } catch (err) {
        throw error(404, err.error_message)
    }
}