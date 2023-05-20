export const parseTimeString = (t: string): number => {
    if (isNaN(Number.parseInt(t))) {
        throw new Error("No time");

    }
    return Number.parseInt(t)
}

export const rangeIsValid = (from: string, to: string): boolean => {
    return parseTimeString(from) < parseTimeString(to);
}