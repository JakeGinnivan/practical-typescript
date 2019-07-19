export function setFeatures<T extends string>(featuresOptions: T[]) {
    type Features = { [key in T]: FeatureState } // Mapped type, also could use Record<T, boolean>

    const features = featuresOptions.reduce<Partial<Features>>((acc, feature) => {
        acc[feature] = { enabled: true }
        return acc
    }, {}) as Features

    return {
        activate: (feature: T) =>
            features[feature]
                ? (features[feature] = { enabled: true })
                : (features[feature].enabled = true),
        deactivate: (feature: T) =>
            features[feature]
                ? (features[feature] = { enabled: false })
                : (features[feature].enabled = false),
        isActive: (feature: T) => features[feature] && features[feature].enabled,
        overridable: () =>
            Object.keys(features)
                .map(feature => [feature, features[feature]])
                .filter(([, featureState]) => featureState.userCanOverride)
                .map(([feature]) => feature),
    }
}

interface FeatureState {
    enabled: boolean
    userCanOverride?: boolean
}
