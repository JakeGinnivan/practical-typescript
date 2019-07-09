export const attendees: Array<Speaker | Delegate | Organiser> = []

attendees.push({ kind: 'speaker', name: 'Jake', talk: 'Getting the most out of TypeScript' })
attendees.push({ kind: 'delegate', name: 'Jane', ticket: 'day1' })
attendees.push({ kind: 'organiser', name: 'Jeff' })

const list = attendees.map(attendee => {
    if (attendee.kind === 'speaker') {
        return `Speaker ${attendee.name} speaking about ${attendee.talk}`
    }

    if (attendee.kind === 'delegate') {
        return `${attendee.ticket} delegate: ${attendee.name}`
    }

    return `${attendee.name} is one of our awesome organisers`
})

list

interface Person {
    name: string
}
interface Speaker extends Person {
    kind: 'speaker'
    talk: string
}
interface Delegate extends Person {
    kind: 'delegate'
    ticket: 'day1' | 'day2' | 'all-days'
}

interface Organiser extends Person {
    kind: 'organiser'
}
