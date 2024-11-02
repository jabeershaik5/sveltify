<script>
	import { user } from "$lib/stores/user.js";

    export let username;
//exporting the username as props. parent component will pass the value to be used here.
//this specific prop is, us setting the fethced user on the store then using that 
//store value not the fetched data.
</script>

<nav>
    <div class="logo">Sveltify</div>
    {#if $user.user}
        <div class="profile">
            <div class="profile-logo"></div>
            <div>{username}</div>
        </div>
    {/if}
</nav>

<style>
 nav{
        display: flex;
        height:6rem;
        width:100%;
        background-color: #1E1E1E;
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
    }
    .profile{
        border:2px solid white;
        border-radius: 20px;
        padding:0.5rem;
        font-size: 1.5rem;
        height:4rem;
        width:12rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
    .profile-logo{
        background-color: white;
        height:30px;
        width:30px;
        border-radius: 50%;
        cursor: pointer;
    }
</style>