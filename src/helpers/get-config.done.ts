export function getConfig<T extends Record<string, ConfigSpec>>(spec: T): ConfigOf<T> {
    return Object.keys(spec).reduce<any>((config, key) => {
        const valueSpec = spec[key]
        const value = process.env[key]

        switch (valueSpec) {
            case 'required-string': {
                if (typeof value !== 'string') {
                    throw new Error(`${key} is not of type ${valueSpec}, got '${value}'`)
                }

                config[key] = value
                break
            }

            case 'optional-string': {
                if (typeof value !== 'string' && value !== undefined) {
                    throw new Error(`${key} is not of type ${valueSpec}, got '${value}'`)
                }

                config[key] = value
                break
            }

            case 'required-int': {
                if (!value || Number.isNaN(Number(value))) {
                    throw new Error(`${key} is not of type ${valueSpec}, got '${value}'`)
                }

                config[key] = Number(value)
                break
            }

            case 'optional-int': {
                if (value && Number.isNaN(Number(value))) {
                    throw new Error(`${key} is not of type ${valueSpec}, got '${value}'`)
                }

                config[key] = value ? Number(value) : undefined
                break
            }
        }

        return config
    }, {})
}

export type ConfigSpec = 'required-string' | 'required-int' | 'optional-string' | 'optional-int'

export type SpecToType<ConfigSpec> = ConfigSpec extends 'required-string'
    ? string
    : ConfigSpec extends 'required-int'
    ? number
    : ConfigSpec extends 'optional-string'
    ? undefined | string
    : ConfigSpec extends 'optional-int'
    ? undefined | number
    : unknown

export type ConfigOf<T> = { [key in keyof T]: SpecToType<T[key]> }
