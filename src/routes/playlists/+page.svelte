<script>
	import { goto } from '$app/navigation';
    import AlubmCard from '$components/alubmCard.svelte';
    export let data;
</script>


<div class="playlists-page">
    <div class="action-buttons">
        <button
            class="create-btn"
            on:click={()=>{
                goto('/playlists/create');
            }}    
        >+ Create Playlist</button>
        <button class="edit-btn">Edit Playlist</button>
    </div>
    <div class="playlist-container">
        {#each data.data as playlist}
            <AlubmCard item={playlist} />
        {/each}
    </div>
</div>

<style>
    .playlists-page{
        min-height: calc(100vh - 6rem);
        height:auto;
        width:100%;
        padding:2rem 4rem;
    }
    .action-buttons{
        width:100%;
        height:autol;
        text-align: end;
    }
    .create-btn, .edit-btn{
        background-color: transparent;
        border:2px solid white;
        color:white;
        padding:1rem 2rem;
        font-size: 1.6rem;
        margin:0 1rem;
        cursor: pointer;
        transition: transform 0.2s ease;
    }
    .edit-btn{
        background-color: white;
        color:black;
    }
    .edit-btn:active, .create-btn:active{
        transform:translateY(4px);
    }
    .playlist-container{
        height:auto;
        width:100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
</style>