export const attendees: Array<Speaker | Delegate> = []

attendees.push({ name: 'Jake', talk: 'Getting the most out of TypeScript' })
attendees.push({ name: 'Jane', ticket: 'day1' })

function isSpeaker(attendee): attendee is Speaker {
    return 'talk' in attendee
}

const list = attendees.map(attendee => {
    if (isSpeaker(attendee)) {
        return `Speaker ${attendee.name} speaking about ${attendee.talk}`
    } else {
        return `${attendee.ticket} delegate: ${attendee.name}`
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
