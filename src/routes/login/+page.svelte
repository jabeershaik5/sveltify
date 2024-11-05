<script>
    import Button from '../../lib/components/button.svelte';

    function handleClick(id){
        console.log(id);
    }
</script>
<div class="login">
    <div>
        <p class="welcome-msg">Welcome to Sveltify</p>
        <p class="tagline">Enjoy the music you love with no inturruptions...</p>
        <div class="btn-container">
            <Button content='Login' variant='filled'  id='login' path='/api/auth/login' />
        </div>
    </div>
    <div class="image-container"></div>
</div>
<style>
    .login{
        background-color: #1E1E1E;
        height: calc(100vh - 60px);
        width:100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .welcome-msg{
        font-size:4rem;
        font-weight: 700;
        color:white;
    }
    .image-container{
        height:15rem;
        width:15rem;
        background-color: white;
    }
    .tagline{
        color:white;
        font-size: 1.5rem;
        margin-top:1rem;
    }
    .btn-container{
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
        width:22rem;
    }
</style>