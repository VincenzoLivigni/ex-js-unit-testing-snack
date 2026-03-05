const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
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



// Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
posts = [
    { id: 1, title: "The Office", slug: "the-office" },
    { id: 2, title: "One Piece", slug: "one-piece" },
    { id: 3, title: "Mario Bros", slug: "mario-bros" },
    { id: 4, title: "Sandro Cane", slug: "sandro-cane" }
]

// Creare un test che verifichi le seguenti descrizioni:
// "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
test('La funzione "findPostById" restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "One Piece", slug: "one-piece" })
})

// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
test('La funzione "findPostById" lancia un errore se l\'id non ha valore numerico', () => {
    expect(() => findPostById(posts, "a")).toThrow("Errore, l'id del post non ha un valore numerico")
})