import { writable } from 'svelte/store';

export const initData = writable({
    userPlaylists:null,
    newReleases:null,
    featured:null,
    searchResults:null,
    categories:null
});