export const cutString = (str: string, cutSize: number) => {
    return str.length > cutSize ? str.slice(0, cutSize) + '...' : str
}
