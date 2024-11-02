<script>
	import { invalidateAll } from "$app/navigation";
	import Button from "./button.svelte";

    //function to logout the user when js is turnd on. 
    //after successful request invoke invalidateAll func to delete the client session data and 
    //to redirect the user automatically to login page
    const logout = async()=>{
        const response = await fetch('/api/auth/logout',{
            method: 'POST',
            headers: {
                accept: 'application/json'
            }
        });
        if(response.ok){
            invalidateAll();
        }
    }

</script>

<div class="sidebar">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/search">Search</a></li>
        <li>Playlist</li>
        <li>Albums</li>
        <li>
            <form action="/api/auth/logout" method="POST" on:submit|preventDefault={logout}>
                <button type="submit">Logout</button>
            </form>
        </li>
    </ul>
</div>

<style>
 .sidebar{
        height:calc(100vh - 6rem);
        background-color: #1E1E1E;
        width:20rem;
        max-width:20rem;
        position: absolute;
        bottom:0;
        left:0;
        color:white;
        padding-left:1rem;
    } 
    .sidebar ul{
        font-size: 1.8rem;
        margin-top: 2rem;
        width:100%;
    }
    .sidebar ul li{
        width:100%;
        height:4rem;
        display: flex;
        align-items: center;
        padding:0 1rem;
        cursor: pointer;
    }
    .sidebar ul li:hover{
        background-color: #373737;
    }
</style>