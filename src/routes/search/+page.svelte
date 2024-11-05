<script>
    import CatCard from '$components/catCard.svelte';
    import { initData } from '$lib/stores/initData.js';

    export let data = {};

    $: initData.update(currentData => ({
        ...currentData, 
            categories:{...data, message: 'data.message', albums:data}
    }))
    
    $:categories = $initData.categories.albums.cats.categories.items;
    
</script>

<div class="wrapper">
    <div class="types-wrapper">
        {#if categories}
            {#each categories as category }
                <CatCard category={category} />
            {/each}
        {/if}
    </div>
</div>

<style>
    .wrapper{
        width:100%;
        /* background-color:slategrey; */
        display: block;
    }
    .types-wrapper{
        width:100%;
        height:auto;
        min-height:calc(100vh - 15rem);
        padding:2rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-row-gap:3rem;
        justify-items: center;
    }
</style>