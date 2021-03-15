export const geothmeticMeandian = (values: number[], error: number = 0.001): number => {
    let result = _step(values)
    while (Math.abs(Math.max(...result) - Math.min(...result)) > error) {
        result = _step(result)
    }
    return median(result)
}

// TODO: Write tests for _step and median.

const _step = (values: number[]): [number, number, number] => [
    values.reduce((prev, val) => prev + val, 0) / values.length,
    values.reduce((prev, val) => prev * val, 1) ** (1 / values.length),
    median(values)
]

const median = (values: number[]): number => {
    const sorted = values.sort((a, b) => a - b)
    return (sorted[Math.floor((sorted.length - 1) / 2)] + sorted[Math.ceil((sorted.length - 1) / 2)]) / 2
}