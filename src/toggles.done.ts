// Generic function with constraint
export function setFeatures<T extends string>(...initialFeatures: T[]) {
    type Features = { [key in T]: boolean } // Mapped type, also could use Record<T, boolean>

    const features = initialFeatures.reduce<Partial<Features>>(
        (acc, feature) => {
            acc[feature as T] = true
            return acc
        },
        {},
    ) as Features

    return {
        activate: (feature: T) => (features[feature] = true),
        deactivate: (feature: T) => (features[feature] = false),
        isActive: (feature: T) => !!features[feature],
    }
}
