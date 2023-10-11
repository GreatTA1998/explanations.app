<BasePopup on:popup-close>
  <!-- <h2 slot="title" style="font-family: sans-serif; margin-left: 12px;">
    Why subscribe?
  </h2> -->
  <div slot="popup-content" style="font-family: sans-serif; padding: 24px; padding-top: 12px;">    
    <h2 style="font-family: sans-serif; margin-top: 0px; margin-bottom: 16px;">
      Teach
    </h2>

    <div style="font-size: 16px;">
      <div style="color: black; opacity: 0.8; font-weight: 600;">How it works:</div>
      <div style="padding-left: 8px;">
        <li>
          Spend 5-10 minutes recording explanations about the class
        </li>
        <li>
          Any student can subscribe to you - especially the pre-subscribers
        </li>
        <li>
          If the pre-subscribers don't choose you, your video portfolio remains - like a youtube channel.
          You can leave it or update it over time, and new students can still watch your videos and subscribe to you. 
        </li>
        <br>
      </div>
    </div>

    <br>
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    <Button 
      disabled={!checked || !$user.phoneNumber}
      on:click={() => dispatch('confirm-clicked')}
      color="secondary"
    >
      Become teacher
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