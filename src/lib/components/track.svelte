<script context='module'>
    let current;
</script>
<script>
    export let track;
    export let show;

    let paused = true;
    let audio;

    const onPlay = ()=>{
        if(current && current !== audio){
            current.currentTime = 0;
            current.pause();
        }
        current = audio;
    }
    const onPause = ()=>{
    }
</script>


<button 
    class='${show&& 'show'} player' 
    aria-label='play'
    on:click={()=>{
        if(paused){
            audio.play()
        }else{
            audio.pause()
        }
        paused= !paused;
    }}
>
    <i class={paused? 'fa fa-play' : 'fa fa-pause'} style="font-size: 16px;"></i>
</button>
<audio 
    controls
    hidden 
    bind:this={audio} 
    bind:paused={paused}
    on:play={onPlay}
    on:pause={onPause} 
    src={track.preview_url} 
    preload="none"
>
</audio>

<style>
    .player{
        background-color: transparent;
        border:none;
        color:white;
        cursor: pointer;
    }
</style>