import { setFeatures } from '../../src/toggles'

// const features = setFeatures('feature1', 'feature2')
const features = setFeatures({
    feature1: true,
    feature2: { enabled: false, userCanOverride: true },
})

features.activate('feature1')

features.isActive('feature1') //?
features.isActive('feature2') //?
features.isActive('feature3') //?
