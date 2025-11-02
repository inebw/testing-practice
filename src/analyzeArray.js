export default function analyzeArray(arr) {
    return {
        average: arr.reduce((prev, curr) => prev + curr) / arr.length,
        min: arr.reduce((prev, curr) => prev > curr ? curr : prev),
        max: arr.reduce((prev, curr) => prev < curr ? curr : prev),
        length: arr.length,
    }
}