<script context='module'>
    export { load } from './+layout.js'; 
    //page loads dont have to be xported byt layout loads should be exported
    //since we have set user in layout load it will be accessible to all the pages that use this root layout.
</script>

<script>
	import { beforeNavigate, afterNavigate } from "$app/navigation";
    import NProgress from 'nprogress';
    import 'nprogress/nprogress.css';
    import { page } from '$app/stores'; //to findout the current pathname(page) user currently is in
    import { user } from '$lib/stores/user.js';
    import Header from '$lib/components/header.svelte';
    import Sidebar from '$lib/components/sidebar.svelte';
    
    export let data;
    $: user.set(data); //setting the fetched data in the store.
    
    let currentUrl='';
    $:currentUrl = $page.url.pathname; //setting the store reactive to update store if there is any change

    $: username = $user.user?.display_name.length >0?$user.user?.display_name.split(' ')[0]:$user.user?.display_name;
    beforeNavigate(()=>{
        NProgress.start();
    });
    afterNavigate(()=>{
        NProgress.done();
    });
</script>

<div>
    <Header username={username} />
    <div class="main">
        {#if currentUrl!=='/login'}
             <Sidebar /> 
             <!-- conditionally rendering sidebar depending on the page the user is in -->
        {/if}
        <div class={currentUrl!=='/login'? 'main-body':'body-content'}>
            <div class="main-body-content">
                <slot />
            </div>
        </div>
    </div>
</div>

<style>
    :global(#nprogress .bar){
        background:rgb(223, 79, 18) !important;
    }
    :global(*){
        padding:0;
        margin:0;
        box-sizing: border-box;
        list-style: none;
    }
    :global(a){
        color:inherit;
        text-decoration: none;
    }
    :global(html){
        font-size: 62.5%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    :global(main){
        padding:2rem 4rem;
    }
    .main-body{
        margin-left:20rem;
        background-color: #1E1E1E;
        height:calc(100vh - 6rem);
        overflow-y: scroll;
        padding:0 2rem;
        padding-top:2rem;
        color:white;
    }
</style>