<script>
	import AlubmCard from "$components/alubmCard.svelte";

    export let data;

    $:results = data.data.playlists.items;

</script>

<div class="results-wrapper">
    <h1>Category: <span class="search-term">{data.data?.message}</span></h1>
   <div class="result-albums">
    {#each results as item}
    <AlubmCard item={item} />
{/each}
   </div>
</div>

<style>
    .results-wrapper{
        padding:2rem;        
    }
    .result-albums{
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-row-gap:2rem;
    }
</style>