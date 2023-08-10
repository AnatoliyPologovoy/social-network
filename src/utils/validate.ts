export const required = (value: string) => {
    if (value) {
        return undefined
    }
    return 'Text is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) {
        return `Text is long more ${maxLength} characters`
    }
    return undefined
}

export const email = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(value)) {
        return undefined
    } else {
        return 'Input should be has email'
    }
}
