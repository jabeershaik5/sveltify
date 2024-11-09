
<script>
    import { timeFormater } from "$lib/helpers/timeFormater.js";
    import '@fortawesome/fontawesome-free/css/all.css';
	import Track from "./track.svelte";

    export let tracks;

</script>


<table class="track-table">
    <thead>
        <tr class="table-row">
            <td class="sno">#</td>
            <td class="track-title">Track</td>
            <td class="track-duration"><i class="fas fa-clock" style="font-size: 24px;"></i></td>
        </tr>
    </thead>
    <tbody>
        {#each tracks as track}
            <tr class="table-row t">
                <td class="sno">
                    <span class='sno-n'>{track.track.track_number ? '': track.track_number}</span>
                    <Track track={track.track || track} />
                </td>
                <td class="track-title">
                    <p class="track-title-name">{track.name || track.track.name}</p>
                    <p class="track-artist-name">
                        {track.artists && track.artists.map(artist =>{
                            return artist.name
                        })}
                    </p>

                </td>
                <td class="track-duration">{timeFormater(track.duration_ms || track.track.duration_ms)}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    .track-table{
        width:100%;
        font-size: 1.8rem;
        border-collapse: collapse;
        margin:2rem 0;
    }
    .table-row{
        height:6.5rem;
        max-height: 6.5rem;
        transition: background-color 0.2s ease, display 0.2s ease;
    }
    td{
        padding:0 1rem;
    }
    thead .table-row{
        border-bottom: 2px solid white;
        margin-bottom: 2rem;
    }
    thead .table-row:hover{
        background-color: transparent;
    }
    .table-row:hover{
        background-color: #434343;
    }
    .table-row:hover .sno-n{
        display: none;
    }
    
    .sno{
        width:10%;
        cursor: pointer;
    }
    .track-title{
        width:80%;
        overflow-x: hidden;
        overflow: hidden;
        user-select: none;
    }
    .track-duration{
        width:10%;
        font-size: 1.5rem;
    }
    .track-title-name{
        font-size: 1.6rem;
        font-weight: 600;
        margin:0.5rem 0;
    }
    .track-artist-name{
        font-size: 1.5rem;
        color:rgb(180, 177, 177);
    }
</style>