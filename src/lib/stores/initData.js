import { writable } from '.svelte/store';

export const initData = writable({
    playlists:null,
    recent:null,
    type1:null,
    type2:null,
    type3:null,
    type4:null
});