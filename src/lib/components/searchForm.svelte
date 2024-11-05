<script>
	import { goto } from "$app/navigation";

    let searchTerm = '';
    
    const handleSearch = () =>{
        goto(`/search/${searchTerm}`)
    };
</script>


<form class="search" on:submit|preventDefault={handleSearch}>
    <input bind:value={searchTerm} 
        type="text" 
        class="search-bar" 
        placeholder={searchTerm || 'What are you in mood for...'} 
    />
    <button class='search-btn' type='submit'>Search</button>
</form>


<style>
    .search{
        text-align: center;
        margin:2rem 0;
        display: flex;
        justify-content: center;
        margin-left: 11rem;
    }
    .search-bar{
        width:25rem;
        height:3rem;
        font-size: 1.4rem;
        padding:0.5rem;
        margin:0;
        background-color: #555454;
        color:white;
        border:none;
    }
    .search-bar:focus{
        outline: none;
    }
    .search-btn{
        height:3rem;
        padding:0 1rem;
        margin:0;
        background-color: white;
        color:#1E1E1E;
        cursor: pointer;
        border:none;
    }
</style>