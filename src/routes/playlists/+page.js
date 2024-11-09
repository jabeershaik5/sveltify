import { initData } from '$lib/stores/initData.js';

let userPlaylist;

initData.subscribe(store=>{
    userPlaylist = store.userPlaylists
})

export const load = async({fetch}) =>{
    if(userPlaylist){
        const data = userPlaylist.albums;
        return {
            data
        }
    }
    try {
        const response = await fetch(`/api/data/me/playlists`);

        if(!response.ok){
            throw error(401, 'Failed to Load playlists');
        }
        const userPlaylistRes = await response.json();
        const data = userPlaylistRes.items;
        
        return {data};

    } catch (err) {
        throw(400, 'Failed to Load playlists ')
    }
}   