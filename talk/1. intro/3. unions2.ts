export const attendees: Array<Speaker | Delegate | Organiser> = []

attendees.push({ name: 'Jake', talk: 'Getting the most out of TypeScript' })
attendees.push({ name: 'Jane', ticket: 'day1' })
attendees.push({ name: 'Jeff' })

function isSpeaker(attendee): attendee is Speaker {
    return 'talk' in attendee
}
function isDelegate(attendee): attendee is Delegate {
    return 'ticket' in attendee
}

const list = attendees.map(attendee => {
    if (isSpeaker(attendee)) {
        return `Speaker ${attendee.name} speaking about ${attendee.talk}`
    } else if (isDelegate(attendee)) {
        return `${attendee.ticket} delegate: ${attendee.name}`
    } else {
        return `${attendee.name} is one of our awesome organisers`
    }
})

list

interface Person {
    name: string
}
interface Speaker extends Person {
    talk: string
}
interface Delegate extends Person {
    ticket: 'day1' | 'day2' | 'all-days'
}

interface Organiser extends Person {}
