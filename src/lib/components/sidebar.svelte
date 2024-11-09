<script>
	import { invalidateAll } from "$app/navigation";
    import '@fortawesome/fontawesome-free/css/all.css';

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
        <li>
            <a href="/" class='sidebar-ele'>Home 
                <i class="fas fa-home" style="font-size: 16px;"></i>
            </a>
        </li>
        <li>
            <a href="/search" class='sidebar-ele'>Search 
                <i class="fas fa-search" style="font-size: 16px;"></i>
            </a>
        </li>
        <li>
            <a href="/playlists" class='sidebar-ele'>Playlists  
                <i class="fas fa-music"></i>
            </a>
        </li>
        <li>
            <a href="" class='sidebar-ele'>Profile  
                <i class="fas fa-user"></i>
            </a>
        </li>
        <li>
            <form action="/api/auth/logout" method="POST" on:submit|preventDefault={logout}>
                <button type="submit" class='logout-btn'>Logout</button>
            </form>
        </li>
    </ul>
</div>

<style>
 .sidebar{
        height:calc(100vh - 6rem);
        background-color: black;
        width:20rem;
        max-width:20rem;
        position: absolute;
        bottom:0;
        left:0;
        color:white;
        padding-left:1rem;
    } 
    .sidebar ul{
        font-size: 1.6rem;
        margin-top: 2rem;
        width:100%;
    }
    .sidebar ul li{
        width:100%;
        height:4rem;
        padding:0 1rem;
        cursor: pointer;
    }
    .sidebar ul li:hover{
        background-color: #1d1d1d;
    }
    .sidebar ul > li:last-child:hover{
        background-color: black;
    }
    .logout-btn{
        margin-top:2rem;
        color:white;
        background-color: transparent;
        border-radius:20px;
        border:1px solid white;
        padding:0.5rem 1rem;
        transition: border 0.2s ease, color 0.2s ease;
        cursor: pointer;
    }
    .logout-btn:hover{
        color:rgb(223, 79, 18);;
        border:1px solid rgb(223, 79, 18);

    }
    .sidebar-ele{
        width:100%;
        height:100%;
        display: flex;
        align-items: center;
    }
    .fas{
        margin-left: 1rem;
    }
</style>