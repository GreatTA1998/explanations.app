{#if $user.uid}
  <div class="paper-shadow my-round-button">
    <div on:click={eureka(boardDoc)} style="display: flex; align-items: center; cursor: pointer;">
      <span class="material-symbols-outlined" 
        style="color: {boardDoc.eurekaUIDs ? (boardDoc.eurekaUIDs.includes($user.uid) ? 'orange' : 'grey') : 'grey'}; font-size: 2rem; margin-right: 4px;">
        lightbulb
      </span>

      Eureka!

      <div style="color: black; margin-left: 8px; font-weight: 500">
        {boardDoc.eurekaUIDs ? boardDoc.eurekaUIDs.length : 0}
      </div>
    </div>
  </div>
{/if}

<script>
  import { user } from '/src/store.js'
  import { updateDoc, arrayUnion, arrayRemove, getFirestore, doc } from 'firebase/firestore'

  export let boardDoc

  function eureka (boardDoc) {
    const boardRef = doc(getFirestore(), boardDoc.path) // boardsDbPath + boardDoc.id
    if (boardDoc.eurekaUIDs instanceof Array) {
      if (boardDoc.eurekaUIDs.includes($user.uid)) {
        updateDoc(boardRef, {
          eurekaUIDs: arrayRemove($user.uid)
        })
        return 
      }
    } 
    updateDoc(boardRef, {
      eurekaUIDs: arrayUnion($user.uid)
    })
  }
</script>

<style>
  .paper-shadow {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .my-round-button {
    margin-left: 24px; 
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    min-width: 100px; 
    border-radius: 12px; 

    padding-left: 8px; 
    padding-right: 12px; 
    padding-top: 4px;
    padding-bottom: 6px;
  }
</style>