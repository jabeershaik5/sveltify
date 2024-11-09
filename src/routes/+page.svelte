<script>
    import ListContainer from "$components/listContainer.svelte";
    import { initData } from '$lib/stores/initData.js';

    export let data;
    
    $:initData.update(currentData=>({
        ...currentData, 
        featured: {...data, albums:data.featuredList.playlists.items, message:data.featuredList.message},
        newReleases:{albums:data.newReleases.albums.items},
        userPlaylists:{albums:data.userPlaylist.items}
    }));
</script>

<div class='landing-wrapper'>
    <h1 class="page-path">Home</h1>
    <ListContainer items={$initData.featured.albums} title={$initData.featured.message} />
    <ListContainer items={$initData.newReleases.albums} />
    <ListContainer items={$initData.userPlaylists.albums} />
</div>


<style>
    :global(.page-path){
        margin:2rem 0;
        margin-left:3rem;
        font-size: 3rem;
    }
    .landing-wrapper{
        height:140vh;
        width:100%;
        background-color: #1E1E1E;
    }
   
</style>
