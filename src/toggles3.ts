export function setFeatures(featuresOptions) {
    let features

    if (Array.isArray(typeof featuresOptions)) {
        features = featuresOptions.reduce((acc, feature) => {
            acc[feature] = true
            return acc
        }, {})
    } else {
        features = {}
        Object.keys(featuresOptions).map(key => {
            features[key] =
                typeof featuresOptions[key] === 'boolean'
                    ? { enabled: featuresOptions[key] }
                    : featuresOptions[key]
        })
    }

    return {
        activate: feature =>
            features[feature]
                ? (features[feature] = { enabled: true })
                : (features[feature].enabled = true),
        deactivate: feature =>
            features[feature]
                ? (features[feature] = { enabled: false })
                : (features[feature].enabled = false),
        isActive: feature => features[feature] && features[feature].enabled,
    }
}
