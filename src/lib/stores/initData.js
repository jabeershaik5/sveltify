import { writable } from 'svelte/store';

export const initData = writable({
    playlists:null,
    newReleases:null,
    featured:null,
    searchResults:null,
    categories:null
});