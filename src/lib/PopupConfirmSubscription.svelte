<BasePopup on:popup-close>
  <!-- <h2 slot="title" style="font-family: sans-serif; margin-left: 12px;">
    Why subscribe?
  </h2> -->
  <div slot="popup-content" style="font-family: sans-serif; padding: 24px; padding-top: 12px;">    
    <h2 style="font-family: sans-serif; margin-top: 0px; margin-bottom: 16px;">
      Why subscribe?
    </h2>


    <div style="font-size: 16px;">
      <div style="color: black; opacity: 0.8; font-weight: 600;">Benefits:</div>
      <div style="padding-left: 8px;">
        <li>
          Directly talk to {selectedTutorDoc.name.split(' ')[0]} and other active subscribers via <b>group chat</b>
        </li>
        <li>
          <b>High priority</b> whenever you ask questions
        </li>
        <li>
          <b>Access</b> to all videos by {selectedTutorDoc.name.split(' ')[0]}
        </li>
        <li>
          <b>Refund for any reason</b> (covered by the platform)
        </li>
        <br>
        <li>
          (For first 10 subscribers): your name is listed as "early supporter" for your teacher's most viewed videos
        </li>
      </div>
    </div>

    <br>

    <div style="height: 20px; display: flex; align-items: center; margin-top: 20px;">
      <Checkbox bind:checked touch />
      I've venmo'ed $10
      <!-- ${selectedTutorDoc.weeklyPrice || 15}  -->
      to 
      @{selectedTutorDoc.venmo || "(check Venmo in teachers's bio (press the v-shaped arrow on the teacher's rectangle)"}
    </div>
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    <Button 
      disabled={!checked || !$user.phoneNumber}
      on:click={() => dispatch('confirm-clicked')}
      color="secondary"
    >
      Confirm subscription
    </Button>
    <Button on:click={() => dispatch('popup-close')}>
      Cancel
    </Button>
  </div>
</BasePopup>

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'

  export let selectedTutorDoc

  const dispatch = createEventDispatcher()

  let inputFieldFirstName = ''
  let inputFieldLastName = ''
  let checked = false

  function updateUserName () {
    updateFirestoreDoc(`users/${$user.uid}`, {
      name: inputFieldFirstName + ' ' + inputFieldLastName
    })
  }


  // BELOW CODE WAS PASTED FROM <ToCommunityOrHelperCards/>, does not work as it is
  async function handleConfirmTrial (tutor) {
    isTrialPopupOpen = false
    const promises = [] 

  // NOTE: Twilio's requirement differs from Firebase Auth, which requires +1 XXX-XXX-XXX hyphen format
    const eltonMobileNumber = '+15032503868'
    await promises.push(
      sendTextMessage({ 
        content: `${$user.name} signed up for your "$1 + tip" 30 minute in-person tutoring trial, confirm on Venmo and they should text you shortly to schedule a time.`,
        toWho: tutor.phoneNumber
      }),
      sendTextMessage({
        content: `Welcome ${$user.name.split(' ')[0]}! 
        Schedule a time and place to meet with your tutor e.g. give 3 distinct times like 1 pm Wednesday, Friday 3 pm, Tuesday 12 pm, student center 5th floor etc.)
        and decide afterwards whether to hire them for youtube-style help : )
        `,
        toWho: $user.phoneNumber
      }),
      sendTextMessage({
        content: `Student ${$user.name} is trialing with tutor ${tutor.name}`,
        toWho: eltonMobileNumber
      })
    )
  }

  async function handleConfirmSubscription (tutor) {
    isSubscribePopupOpen = false
    const promises = []

    // NOTE: Twilio's requirement differs from Firebase Auth, which requires +1 XXX-XXX-XXX hyphen format
    const eltonMobileNumber = '+15032503868'
    await promises.push(
      sendTextMessage({ 
        content: `New student ${$user.name} subscribed for $${price || 15}, confirm on Venmo`,
        toWho: tutor.phoneNumber
      }),
      sendTextMessage({
        content: `Welcome ${$user.name.split(' ')[0]}! To ask your question, just rename a room to your question, your helper will be text notified.
          
          If you don't know how to use the website, here's a 1-min screenshare tutorial: https://youtu.be/Yo7aPxLropU?t=58. 
          Your tutor's phone is ${tutor.phoneNumber}. Texting is the fallback communication when there are unexpected problems e.g. ask for their email to
          send the pset PDF, Explain's website broke down, or to follow-up sometimes if response time is unusually long etc.


          If there's anything terribly inconvenient about the website, it probably is a bug, or a flawed design. You can call me/Elton (503 250 3868) 
          (please don't hesitate, Explain is my full-time job and you're a paying customer, and more often than not I can change the code 
          to incorporate your ideas within 1 week.)
        `,
        toWho: $user.phoneNumber
      }),
      sendTextMessage({
        content: `Student ${$user.name} subscribed to tutor ${tutor.name}`,
        toWho: eltonMobileNumber
      }),
      updateFirestoreDoc(`/users/${$user.uid}`, {
        idsOfSubscribedClasses: arrayUnion(classID)
      }),
      updateFirestoreDoc(`/classes/${classID}/tutors/${tutor.id}`, {
        numOfStudents: increment(1)
      })
    )
    goto(`/${classID}/${classID}`)
  }
</script>

<style>
  li {
    margin-bottom: 4px;
    margin-top: 4px;
  }
</style>