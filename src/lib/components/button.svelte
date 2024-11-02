<script>
    export let content='';
    export let variant='';
    export let id='';
    export let path='';
    export let handleClick =(id)=>{};
</script>
<a class="button btn-{variant}" on:click={()=>{handleClick(id)}} id={id} href={path} >{content}</a>

<style>
    .button{
        padding:0 2rem;
        transition: transform 0.3s ease;
        border:none;
        font-size: 2rem;
        border-radius: 20px;
        height:4rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn-filled{
        background-color:rgb(223, 79, 18);
        color:white;
    }
    .btn-outline{
        background-color: transparent;
        color:rgb(223, 79, 18);
        border:2px solid white;
    }
    .button:active{
        transform:translateY(2px);
    }
</style>