// Snack n°1 "getInitials"
function getInitials(nomeCompleto) {

    const [nome, cognome] = nomeCompleto.split(" ")

    return `${nome.charAt(0)}. ${cognome.charAt(0)}.`
}

module.exports = {
    getInitials
}