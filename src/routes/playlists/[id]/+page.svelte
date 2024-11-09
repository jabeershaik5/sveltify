<script>
    import TracksTable from "$components/tracksTable.svelte";
    import { timeFormater } from "$lib/helpers/timeFormater.js";

    export let data;

    $:playlist = data?.playlist;
    $:tracks = data?.tracks.items;
    $:console.log(data.tracks.items);

</script>


<div class="page-wrapper">
    <div class="album-header">
        <div class="album-cover">
            <img src={playlist.images[0].url} alt="">
        </div>
        <div class="album-info">
            <h1>Playlist</h1>
            <h1 class="album-title">{playlist.name}</h1>
            <div class="album-data">
                <div class="artist-name">
                    <p>{playlist.description} |</p>
                </div>
                <div class="track-info">
                    <p>{playlist.owner.display_name} |</p>
                    <p>{playlist.owner.followers?.total}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="tracks-wrapper">
        {#if !tracks}
            <h1>Failed to load tracks...</h1>
        {:else}
            <TracksTable tracks={tracks} />
        {/if}
    </div>
</div>


<style>
     .page-wrapper{
        height:auto;
        min-height:calc(100vh - 6rem);
    }
    .album-header{
        width:100%;
        min-height:30rem;
        display: flex;
        align-items: center;
        padding:0 5rem;
        display: flex;
        justify-content: space-between;
    }
    .album-cover{
        min-height:22rem;
        height:22rem;
        width:20%;
        overflow: hidden;
    }
    .album-cover img{
        height:100%;
        width:100%;
        object-fit: cover;
    }
    .album-info{
        height:30rem;
        width:80%;
        padding:0 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .album-title{
        font-size: 6rem;
    }
    .album-data{
        display: flex;
        flex-direction: column;
        margin:2rem 0;
        justify-content: center;
    }
    .artist-name{
        display: flex;
        align-items: center;
    }
    .track-info{
        display: flex;
        margin-top: 1rem;
    }
    .album-data p{
        margin-right: 2rem;
        font-size: 1.8rem;
    }
    .tracks-wrapper{
        height:auto;
        min-height:calc(100vh - 6rem - 30rem);
        width:100%;
        padding:2rem 4rem;
    }
</style>