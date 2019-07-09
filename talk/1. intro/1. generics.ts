export interface FeatureState {
    enabled: boolean
}

const feature1: FeatureState = {
    enabled: true,
}

const stringified = JSON.stringify(feature1)
