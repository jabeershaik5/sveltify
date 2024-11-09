<script>
	import { goto } from "$app/navigation";

    export let category={};

    $:catId = category.id;

    let isPressed = false;

    const handleClick = () =>{
        goto(`/search/category/${catId}`);
        
    }
    const handlePress = event =>{
        isPressed = !isPressed
        if(event.key === 'Enter' || event.key === ' '){
            handleClick();
        }
    }
</script>


<div class="cat-card"
    role='button'
    aria-pressed={isPressed}
    on:keypress={handlePress}
    on:click={handleClick}
    tabindex='0'
>
    <img src={category?.icons[0].url} alt="" class=category-image />
    <p class="category-name">{category?.name}</p>
</div>


<style>
    .cat-card{
        height:15rem;
        width:15rem;
        overflow: hidden;
        position: relative;
        text-align: center;
        cursor: pointer;
    }
    .category-image{
        height:100%;
        width:100%;
    }
    .category-name{
        position: absolute;
        font-size: 2rem;
        font-weight:700;
        top:22%;
        right:0;
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        height:100%;
    }
</style>