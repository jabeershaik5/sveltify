<script>
    import '@fortawesome/fontawesome-free/css/all.css';
    import SearchForm from "./searchForm.svelte";
	import { user } from "$lib/stores/user.js";
    import { page } from "$app/stores";
    
    export let username;
    export let userProfile;

    $:currentUrl = $page.url.pathname;
    //exporting the username as props. parent component will pass the value to be used here.
    //this specific prop is, us setting the fethced user on the store then using that 
    //store value not the fetched data.``
</script>

<nav>
    <div class="logo">
        Sveltify
        {#if currentUrl==='/search' || currentUrl.startsWith('/search')}
                <SearchForm />
    {/if}
    </div>
    
    {#if $user.user}
        <div class="profile">
            
            {#if userProfile}
                <div class="profile-logo">
                    <img src={userProfile} alt="" />
                </div>
            {:else}
                <i class="fas fa-user" style="font-size: 16px;"></i>
            {/if}
            
            <div class='username'>{username}</div>
        </div>
    {/if}
</nav>

<style>
 nav{
        display: flex;
        height:6rem;
        width:100%;
        background-color: black;
        color:white;
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        padding-right:4rem;
    }
    .logo{
        font-weight: 700;
        color:rgb(223, 79, 18);
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .profile{
        border:2px solid white;
        border-radius: 20px;
        padding:0.5rem;
        font-size: 1.5rem;
        height:4rem;
        width:9rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
    }
    .profile-logo{
        background-color: white;
        height:30px;
        width:30px;
        border-radius: 50%;
        cursor: pointer;
    }
    .username{
        user-select: none;
    }
    .fas{
        margin-left:1rem;
    }
</style>