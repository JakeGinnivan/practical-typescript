export let option: { enabled: boolean } | boolean = true
option = { enabled: true }

if (typeof option === 'boolean') {
    console.log('boolean')
} else {
    console.log('object')
}
