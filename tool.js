module.exports = {
    dateFormat: (date) => {
        return `20${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4, 6)} ${date.slice(6, 8)}:${date.slice(8, 10)}`
    }
}