import { setFeatures } from '../../src/toggles'

const features = setFeatures('feature1', 'feature2')

features.activate('feature1')
features.deactivate('feature2')

features.isActive('feature1') //?
features.isActive('feature2') //?
features.isActive('feature3') //?
