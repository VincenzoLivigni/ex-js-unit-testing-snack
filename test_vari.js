// Snack n°1 "getInitials"
function getInitials(nomeCompleto) {

    const [nome, cognome] = nomeCompleto.split(" ")

    return `${nome.charAt(0)}. ${cognome.charAt(0)}.`
}


// Snack n°2 / snack n°4 / snack n°6 "createSlug"
function createSlug(slug) {

    if (slug === "") {
        throw new Error("Errore, il titolo è vuoto")
    }
    if (slug === null) {
        throw new Error("Errore, il titolo non è valido")
    }

    return slug.toLowerCase().split(" ").join("-")
}


// Snack n°3 "average"
function average(nums) {
    return nums.reduce((acc, n) => acc + n, 0) / nums.length

}


function isPalindrome(stringa) {
    return stringa === stringa.split('').reverse().join('')
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}