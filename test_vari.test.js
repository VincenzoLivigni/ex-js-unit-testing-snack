const {
    getInitials,
    createSlug
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