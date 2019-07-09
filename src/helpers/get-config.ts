export function getConfig<T extends any>(spec: T): ConfigOf<T> {
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

export type ConfigSpec = any
export type SpecToType<ConfigSpec> = any
export type ConfigOf<T> = any
