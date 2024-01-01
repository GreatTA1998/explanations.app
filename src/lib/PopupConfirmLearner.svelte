<slot 
  {isPopupOpen} 
  {setIsPopupOpen}
>

</slot>

{#if isPopupOpen}
  <BasePopup on:popup-close={() => isPopupOpen = false} style="padding: 24px;">
    <div slot="title" style="font-size: 24px; font-weight: 500;">
      Learner sign-up
    </div>

    <div slot="popup-content">    
      <div style="font-size: 14px; color: rgb(100, 100, 100); margin-top: 10px;">
        By officially becoming a learner, you become part of the active community 
        who help each other.
      </div>
      <div style="margin-top: 36px;"></div>

      {#if !!!$user.uid}
        <ReusableSignInButton/>
      {/if}

      <div style="margin-bottom: 24px;"></div>

      <div style="font-size: 16px;" class:greyed-out-section={!!!$user.uid || !memberDoc}>
        <ol>
          <li>
            Setup basic info
          </li>

          {#if memberDoc}
            <UXFormTextArea
              value={memberDoc.reasonForLearning}
              on:input={(e) => debouncedUpdateBio({ newVal: e.detail })}
              fieldLabel="What kind of explanations are you looking for?"
              placeholder=""
            />
          {/if}

          <div style="margin-bottom: 24px;"></div>

          <li>
            + Post your first new question 
          </li>
          <div style="font-size: 14px;">
            The button is near the top left. 
            Great if you have a question that's been bothering you for a long time,
            that you found no truly compelling explanation for anywhere. 
          </div>

          <div style="margin-top: 12px"></div> 

          <div style="margin-bottom: 24px;"></div>

          <li>
            Setup complete!
          </li>
          <div style="font-size: 14px;">
            As time goes on, subscribe to your favorite teachers, browse other explanations, ask follow-up questions via comments, and ask more questions. 
          </div>
        </ol>
      </div>

      <br>

    </div>

    <div slot="popup-buttons" style="display: flex; justify-content: flex-end">
      <ReusableRoundButton 
        on:click={doLearnerSignUp}
        backgroundColor="#5d0068" 
        textColor="white"
        isDisabled={!!!$user.uid || !memberDoc}
      >
        Confirm sign-up
      </ReusableRoundButton>
    </div>
  </BasePopup>
{/if}

<script>  
  export let classID

  import BasePopup from '$lib/BasePopup.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { getFirestoreDoc, setFirestoreDoc, updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
  import UXFormField from '$lib/UXFormField.svelte';
  import UXFormTextArea from '$lib/UXFormTextArea.svelte'
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte';
  import { debounce } from '/src/helpers/utility.js'
  import { getMemberDocSchema } from '/src/helpers/schema.js'
  
  $: if (isPopupOpen) {
    handleMemberDocLogic($user)
  }

  const dispatch = createEventDispatcher()

  let isPopupOpen = false 
  function setIsPopupOpen ({ newVal }) {
    isPopupOpen = newVal
  }

  let memberDoc = null

  const debouncedUpdateBio = debounce(
    updateTeacherBio,
    1000
  ) 

  async function doLearnerSignUp () {
    dispatch('confirm-clicked')
    isPopupOpen = false
    updateFirestoreDoc(`classes/${classID}/members/${$user.uid}`, {
      isLearner: true
    })
  }
  
  async function updateTeacherBio ({ newVal }) {
    updateFirestoreDoc(`classes/${classID}/members/${memberDoc.uid}`, {
      reasonForLearning: newVal
    })
  }

  async function handleMemberDocLogic (userDoc) {
    const membersPath = `classes/${classID}/members/`
    
    let result
    try {
      result = await getFirestoreDoc(membersPath + userDoc.uid)
      memberDoc = result
    }
    catch (error) {
      console.log('error =', error)
      const memberDocSchema = getMemberDocSchema({ userDoc })
      setFirestoreDoc(
        membersPath + userDoc.uid,
        memberDocSchema
      )
      result = memberDocSchema
      memberDoc = result
    }
  }
</script>

<style>
  .greyed-out-section {
    opacity: 0.5;
  }

  li {
    margin-bottom: 6px;
    margin-top: 6px;
    font-weight: 500;
  }

  .prepay-amount-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33px; 
    height: 33px;
    font-size: 16px;
    border: 1px solid #3D8C4F;
  }

  .highlighted-box {
    background-color: #3D8C4F;
    color: white;
  }

</style>