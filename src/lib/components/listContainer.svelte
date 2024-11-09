<script>
	import AlubmCard from "./alubmCard.svelte";
    export let items = [];
    export let title='';
</script>
<div class=list-wrapper>
    <h1 class="list-title">{
        title || 
        `${items[0].album_type ? `${items[0].album_type.toUpperCase()}S`:'Your Playlists'}`}
    </h1>
    <div class="list">
        {#if items.length>0}
            {#each items as item }
                <AlubmCard item={item} />
            {/each}
        {/if}
    </div>
</div>
<style>
    .list-wrapper{
        width:100%;
        height:30rem;
    }
    .list{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        place-items: center;
    }
    .list-title{
        margin:2rem 3rem;
    }
</style>