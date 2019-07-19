# Talk script

## Checks

-   Ensure font size / prettier width line up

## 1. Intro

### Generics

stringify boxes into a string, we can make a generic version which keeps the original type of the object so when we parse it, it has the correct type.

```ts
// add Stringified<FeatureState>
const parsed = JSON.parse(stringified)

parsed.enabled
```

Other examples, promise timeout, retry function etc.

### Unions

```ts
// Qualify
export let option: { enabled: boolean } | boolean = true

// Add
if (typeof option === 'boolean') {
    console.log('boolean')
} else {
    console.log('object')
}
```

### Unions 2

There are no runtime types, TypeScript is _structurally_ typed. This means to know something is a type you need a distingishing feature.

Speakers have a `talk`, attendees have a `ticket` type. Organisers have neither.

Can use custom type guards, but is clunky.

Use tagged unions instead.

1. Add `kind` to each type using string literal
2. delete custom type guards, use tagged unions and type narrowing instead

## Feature toggling

### Toggles 1

Goal: give type safety around the specific features based on initialisation

1. Make generic: `<T extends string>`
2. Introduce Features type to store data `type Features = { [key in T]: boolean }` // Mapped type, also could use Record<T, boolean>
3. Type the reduce `<Partial<Features>>`

### Toggles 2

Goal: Initialsation options

1. Add union to fn `| Record<T, boolean | FeatureState>`
2. Handle it: `Array.isArray(featuresOptions)`
3. Replace `Features` with `Record<T, FeatureState>`
4. Use `toRecord`
   ** `? toRecord(featuresOptions, () => ({ enabled: true }))`
   ** `: toRecord(featuresOptions, input => typeof input === 'boolean' ? { enabled: true } : input)`

## Config validation library

```ts
// 1. Define validation types
export type ConfigSpec = 'required-string' | 'required-int' | 'optional-string' | 'optional-int'

// 2. Define what they map to
export type SpecToType<ConfigSpec> = ConfigSpec extends 'required-string'
    ? string
    : ConfigSpec extends 'required-int'
    ? number
    : ConfigSpec extends 'optional-string'
    ? undefined | string
    : ConfigSpec extends 'optional-int'
    ? undefined | number
    : unknown

// 3. Create a mapped type to convert between the two
export type ConfigOf<T> = { [key in keyof T]: SpecToType<T[key]> }
```
