import { writable, readable } from 'svelte/store';
import { getRandomID } from './helpers/utility.js'
import { DRAWER_EXPANDED_WIDTH } from './helpers/CONSTANTS.js';

export const maxAvailableWidth = writable(0)
export const maxAvailableHeight = writable(0)

// to scale the pencil stroke width for smaller/bigger devices
export const assumedCanvasHeight = writable(900) // 4:3 aspect ratio
export const assumedCanvasWidth = writable(1200)

export const hasFetchedUser = writable(false)
export const user = writable({}) // {} means not logged in, cannot be null
export const userInfoFromAuthProvider = writable({})
export const idOfServerNewUserWantedToEnter = writable('')

export const currentTool = writable({
    type: 'pencil',
    color: 'hsla(0, 0, 100%, 0)',
    lineWidth: 3
})

export const onlyAllowApplePencil = writable(true)

export const recordState = writable('pre_record') // mid_record and post_record

export const baseMicStream = writable(null)

export const roomToPeople = writable({})

export const dailyRoomParticipants = writable({})

export const browserTabID = readable(getRandomID())

export const isMicOn = writable(false)

export const isFirestoreDocCreated = writable(false)

export const willPreventPageLeave = writable(false)

export const adminUIDs = readable(['xC05mXTCFIRxLnyxfKnxY7oNBPi2'])

export const drawerWidth = writable(DRAWER_EXPANDED_WIDTH)

export const classDetailsDrawerWidth = writable(DRAWER_EXPANDED_WIDTH)

export const hasJoinedVoice = writable(false)

export const whatIsBeingDragged = writable('')

export const whatIsBeingDraggedID = writable('')