<script>
	import ListContainer from "$components/listContainer.svelte";

    export let data;

    $:albums = {
        title: 'Albums',
        items: data?.data?.albums.items
    };
    $:artists = {
        title: 'Artists',
        items: data?.data?.artists.items
    };
    $:playlists = {
        title: 'Playlists',
        items: data?.data?.playlists.items
    };
    
</script>


<div class="results-wrapper">
    <h1 class="page-title">Search results for: <span class="search-term">{data.searchTerm}</span></h1>
    <ListContainer items={albums.items} title={albums.title} />
    <ListContainer items={artists.items} title={artists.title} />
    <ListContainer items={playlists.items} title={playlists.title} />
</div>
    

<style>
    :global(.results-wrapper){
        width:100%;
        height:auto;
        color:white;
    }
    .page-title{
        margin:2rem 3rem;
    }
    :global(.search-term){
        color:rgb(223, 79, 18);
    }
</style>