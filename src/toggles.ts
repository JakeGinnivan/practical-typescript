export function setFeatures(...initialFeatures) {
    const features = initialFeatures.reduce((acc, feature) => {
        acc[feature] = true
        return acc
    }, {})

    return {
        activate: feature => (features[feature] = true),
        deactivate: feature => (features[feature] = false),
        isActive: feature => !!features[feature],
    }
}
