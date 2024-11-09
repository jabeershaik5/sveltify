import { reFetch } from '$lib/helpers/fetcher.js';

export const load = async({fetch:_fetcher, parent })=>{
    const { user } = await parent();
    const fetch = (path)=> reFetch(_fetcher, path);
    //check if user exists before fetching data, because no need to fetch playlists if user is'nt logged in
    if(!user){
        return {data: null}
    }
    //send the requests too api and await all of them at once, instead of awaiting for each one.
    const newReleases = await fetch(`/api/data/browse/new-releases?limit=5`);
    const featuredList = await fetch('/api/data/browse/featured-playlists?limit=5');
    const userPlaylist = await fetch('/api/data/me/playlists');
    const newReleasesRes = await newReleases.json();
    const featuredListRes = await featuredList.json();
    const userPlaylistRes = await userPlaylist.json();
    // const [newReleasesRes, featuredListRes ] = await Promise.all([newReleases, featuredList]);
    
    return { newReleases: newReleasesRes, 
        featuredList: featuredListRes,
        userPlaylist: userPlaylistRes
    }
}