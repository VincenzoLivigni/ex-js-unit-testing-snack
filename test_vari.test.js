const {
    getInitials,
    createSlug,
    average,
    isPalindrome
} = require("./test_vari.js")

// Snack 1
// Creare un test che verifichi la seguente descrizione:
// "La funzione getInitials restituisce le iniziali di un nome completo."

test('La funzione "getInitials" restituisce le iniziali di un nome completo', () => {
    expect(getInitials("Michael Scott")).toBe("M. S.")
})


// Snack 2
// Creare un test che verifichi la seguente descrizione:
// "La funzione createSlug restituisce una stringa in lowercase."

test('La funzione "createSlug" restituisce una stringa in lowercase', () => {
    expect(createSlug("JAVASCRIPT")).toBe("javascript")
})


// Snack 3
// Creare un test che verifichi la seguente descrizione:
// "La funzione average calcola la media aritmetica di un array di numeri."
test('La funzione "average" calcola la media aritmetica di un array di numeri', () => {
    expect(average([12, 26, 6, 4, 2])).toBe(10)
})


// Snack 4
// Creare un test che verifichi la seguente descrizione:
// "La funzione createSlug sostituisce gli spazi con -."
test('La funzione "createSlug" sostituisce gli spazi con -', () => {
    expect(createSlug("STUDIANDO JAVASCRIPT")).toBe("studiando-javascript")
})


// Snack 5
// Creare un test che verifichi la seguente descrizione:
// "La funzione isPalindrome verifica se una stringa è un palindromo."
test('La funzione "isPalindrome" verifica se una stringa è un palindromo', () => {
    expect(isPalindrome("otto")).toBeTruthy()
})


// Snack 6
// Creare un test che verifichi la seguente descrizione:
// "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
test('La funzione "createSlug" lancia un errore se il titolo è vuoto o non valido', () => {
    expect(() => createSlug("")).toThrow("Errore, il titolo è vuoto")
    expect(() => createSlug(null)).toThrow("Errore, il titolo non è valido")
})