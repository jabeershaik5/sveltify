<script>
	import { goto } from "$app/navigation";

    export let item= {};
    $:albumId = item.id;

    $:type = item.type ? item.type : '';

    let isPressed = false;

    const handleClick = () =>{
        if(type == 'playlist'){
            goto(`/playlists/${albumId}`);
            return
        }
        goto(`/album/${albumId}`);
    }
    const handleKeyDown = event =>{

        isPressed = !isPressed;

        if (event.key === 'Enter' || event.key === ' ') {
            handleClick();
        }
    }
</script>

<div class="album-card"  
    on:keydown={handleKeyDown}
    on:click={handleClick}
    role='button'
    aria-pressed={isPressed}
    tabindex="0"
>
    <div class="image-wrapper">
        <img src={item?.images[0].url} alt="" class="album-cover">
    </div>
    <div class="content-wrapper">
        <p class="album-name">{item.name}</p>
        <div class="album-info">
            {#each item.artists as artist }
                <span class='artist-name'>{artist.name}</span>
            {/each}
        </div>
    </div>
</div>


<style>
    .album-card{
        min-height:23rem;
        width:16rem;
        border-radius:5px;
        overflow: hidden;
        background-color: rgb(21, 21, 21);
        cursor: pointer;
    }
    .image-wrapper{
        min-height:60%;
        width:100%;
        background-color: blanchedalmond;
        overflow:hidden;
    }
    .album-cover{
        height:100%;
        width:100%;
        object-fit: cover;
    }
    .content-wrapper{
        height:40%;
        width:100%;
        padding:0.5rem;
    }
    .album-name{
        font-size: 1.5rem;
        margin-bottom:0.5rem;
        margin-top:0.5rem;
    }
    .album-info{
        height:auto;
        font-size: 1.3rem;
        color:rgb(255, 254, 254, 0.8);
    }
    .artist-name{
        margin-right:0.8rem;
    }
</style>