import { toRecord } from './helpers/to-record'

export function setFeatures<T extends string>(
    featuresOptions: T[] | Record<T, boolean | FeatureState>,
) {
    let features = Array.isArray(featuresOptions)
        ? toRecord(featuresOptions, _key => ({ enabled: true }))
        : toRecord(featuresOptions, input =>
              typeof input === 'boolean' ? { enabled: true } : input,
          )

    return {
        activate: (feature: T) => (features[feature].enabled = true),
        deactivate: (feature: T) => (features[feature].enabled = false),
        isActive: (feature: T) => features[feature].enabled,
    }
}

interface FeatureState {
    enabled: boolean
    userCanOverride?: boolean
}
