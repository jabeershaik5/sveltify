import { error } from '@sveltejs/kit';

export const load = async({fetch, params}) =>{
    const playListId = params.id;

    if(!params.id){
        throw error(400, 'Failed to load Playlist');
    }
    try {
        const response = await fetch(`/api/data/playlists/${playListId}/tracks?limit=20`);
        const playlistData = await fetch(`/api/data/playlists/${[playListId]}`);

        if(!response.ok || !playlistData.ok){
            const err = await response.json();
            throw error(ee.status, err.message)
        }
        const tracks = await response.json();
        const playlist = await playlistData.json();

        return {
            tracks,
            playlist
        }

    } catch (err) {
        throw error(400, 'Failed to load Playlist')
    }   
}   