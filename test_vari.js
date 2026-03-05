// Snack n°1 "getInitials"
function getInitials(nomeCompleto) {

    const [nome, cognome] = nomeCompleto.split(" ")

    return `${nome.charAt(0)}. ${cognome.charAt(0)}.`
}


// Snack n°2 "createSlug"
function createSlug(slug) {
    return slug.toLowerCase()
}


// Snack n°3 "average"
function average(nums) {
    return nums.reduce((acc, n) => acc + n, 0) / nums.length

}

module.exports = {
    getInitials,
    createSlug,
    average
}