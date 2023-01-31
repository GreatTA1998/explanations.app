<!-- https://codepen.io/Johnmuir2001/details/qBYPXeZ -->
<!-- HOW TO USE:
  You must wrap <div class="card">, with .card { } CSS styles
  pasted in the component you're using the carousel in  
-->

<div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
  <!-- Sandwiching the {#if} with a <div> even if the button doesn't exist ensures the space-between 
    content layout works properly (i.e. carousel is always the 2nd element so it's centered)  
  -->
  <div style="width: 60px; margin-left: 0.5%">
    {#if currIdx > 0}
    <Button on:click={handleLeftArrowClick} style="height: 40px; background-color: orange; border-radius: 10px; padding-left: 20px; width: 60px;">
      <span class="material-icons" style="color: white; font-size: 2rem;">
        arrow_back_ios
      </span>
    </Button>
    {/if}
  </div>

  <div id="pagination" style="color: orange;">
    {#each { length: numOfImages } as _, i}
      <div 
        on:click={() => currIdx = i} 
        class="ball" 
        style="width: {i === currIdx ? '25' : '12'}px">
      </div>
    {/each}
  </div>

  <div style="width: 60px; margin-right: 1%">
    {#if currIdx < numOfImages - 1}
      <Button on:click={handleRightArrowClick} style="height: 40px; background-color: orange; border-radius: 10px; width: 60px;">
        <span class="material-icons" style="color: white; font-size: 2rem;">
          arrow_forward_ios
        </span>
      </Button>
    {/if}
  </div>
</div>

<div id="carousel-wrapper">
  <!-- <div style="margin-bottom: 4%;"></div> -->
  <div id="carousel" bind:this={carousel}>
    <!-- To optimize, you can use intersection listener to lazy-load -->
    <slot carouselWidth={carouselWidth}>
      <!-- <div class="card" style="border: 2px solid blue;">

      </div>
      <div class="card" style="border: 2px solid orange;">

      </div>

      <div class="card" style="border: 2px solid green;">

      </div> -->
    </slot>
  </div>
</div>

<script>
import { onMount } from 'svelte'
import Button, { Label } from '@smui/button';

export let numOfImages
export let resizeOnChange 

let currIdx = 0
let carouselWidth = null 

let pagination = document.querySelectorAll('.ball');

$: currIdx, scrollCarousel(currIdx)
$: resizeOnChange, scrollCarousel(currIdx)

let carousel

// let carousel = document.getElementById('carousel');

function scrollCarousel () {
  if (carousel) {
    carousel.scrollLeft = currIdx * carousel.offsetWidth + (currIdx * errorDueToBorder)
  }
}

onMount(() => {
  // let cards = document.querySelectorAll('.card');
  // let leftBtn = document.getElementById('leftArrow');
  // let rightBtn = document.getElementById('rightArrow');
})

let errorDueToBorder = 4

function handleLeftArrowClick () {
  currIdx--
}

function handleRightArrowClick () {
  currIdx++
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

  /* This used to be applied to <body> */
  #carousel-wrapper {
    margin: 0;
    /* background-color: #292929; */
    display: grid;
    place-items: center;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    position: relative;

    border: 2px solid orange;
    border-right: none;

    /* T match SMUI card's radius, it's multiplied by 2 */
    /* border-radius: 10px;  */

    height: 140vh;
  }

  #carousel {
    height: 100%; /* calc(100vh - 150px); */
    width: 100%; /* was calc(100vw - 150px)*/
    overflow-x: auto;
    scroll-behavior: smooth;
    display: flex;
    justify-content: space-between;

    box-sizing: border-box;

    overflow-y: auto;
  }

  .card {
    flex-shrink: 0;
    background-color: #545454;
    height: 100%;
    width: 100%; /* It was calc(20% - 8px) */
    margin: 0 5px; 
    transition: transform 1s;
    background-repeat: no-repeat;
    background-size: auto 120%;
    background-position: center;
    transition: all 0.3s;
    cursor: pointer;
    overflow: hidden;

    box-sizing: border-box;
    border: 4px solid red;
  }
  .card:hover {
    background-size: auto 100%;
  }
  .card:first-child { margin-left: 0; }
  .card:last-child { margin-right: 0; }

  .card p {
    margin: 0;
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 10vw;
    color: white;
    transition: all 0.3s;
    transform: scale(1);
  }
  .card:hover p {
    background-color: rgba(0,0,0,0.3);
    transform: scale(1.3);
  }

  #pagination {
    /* position: absolute; */
    /* bottom: 0; */
    top: 0;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ball {
    height: 12px;
    width: 12px;
    background-color: orange;
    border-radius: 20px;
    margin: 6px;
    cursor: pointer;
    transition: width 0.2s;
  }
  .ball:first-child {
    width: 25px;
  }

  #leftArrow {
    left: 0;
  }

  #rightArrow {
    right: 0;
  }
  .arrow {
    position: absolute;
    height: auto;
    width: 75px;
    color: white;
    font-size: 80px;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
</style>