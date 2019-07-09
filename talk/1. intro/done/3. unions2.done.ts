export const attendees: Array<Speaker | Delegate> = []

attendees.push({ kind: 'speaker', name: 'Jake', talk: 'Getting the most out of TypeScript' })
attendees.push({ kind: 'delegate', name: 'Jane', ticket: 'day1' })

const list = attendees.map(attendee => {
    if (attendee.kind === 'speaker') {
        return `Speaker ${attendee.name} speaking about ${attendee.talk}`
    }

    return `${attendee.ticket} delegate: ${attendee.name}`
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
