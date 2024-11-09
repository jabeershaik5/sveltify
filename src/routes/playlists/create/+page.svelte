<script>

</script>


<div class="create-page">
    <div class="form-title">CREATE</div>
    <form action="" method="POST" class="form">
        <div class="form-component">
            <label for="name" class="form-label">Playlist Name</label>
            <input type="text" id="name" class="form-input" />
        </div>
        <div class="form-component">
            <label for="description" class="form-label">Description</label>
            <input type="text" id="description" class="form-input" />
        </div>
        <button type="submit" class="create-btn">Create</button>
    </form>
</div>


<style>
    .create-page{
        width:100%;
        height:calc(100vh - 6rem);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .form-title{
        font-size: 4rem;
        font-weight: 600;
        margin-bottom: 2rem;
        color:rgb(223, 79, 18);
        border-bottom:4px solid white;
    }
    .form{
        background-color: rgb(223, 79, 18);
        padding:2rem 3rem;
        border-radius: 10px;
        text-align: center;
    }
    .form-component{
        display: flex;
        flex-direction: column;
        padding:1rem 0;
        text-align: start;
    }
    .form-label{
        margin:1rem 0;
        font-size: 2rem;
        font-weight: 600;
    }
    .form-input{
        padding:0.8rem 1rem;
        width:40rem;
        min-width: 30rem;
        border-radius: 5px;
        font-size: 1.8rem;
        outline:none;
        border: none;
    }
    .form-input:focus{
        outline: none;
    }
    .create-btn{
        background-color: white;
        border:1px solid transparent;
        font-size: 2rem;
        padding:0.5rem 1rem;
        margin-top: 2rem;
        color:rgb(223, 79, 18);
        transition: color 0.2s ease, background-color 0.2s ease, border 0.2s ease;
        box-shadow: 0px 1px 8px 4px  rgb(199, 199, 199);
        cursor: pointer;
    }
    .create-btn:hover{
        color:white;
        background-color: transparent;
        border: 1px solid white;
    }
</style>