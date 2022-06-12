const ms = require('ms')
const mss = require('parse-ms-2')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question() {
    rl.question("1. Conertir ms en jours, heures, minutes, secondes\n2. Convertir jours, heures, minutes, secondes en ms\n", function(rep) {
        if(rep == '1') ms_function()
        else if(rep == '2') jours()
        else question()
    })
}

function ms_function() {
    rl.question("Quel est le nombre en ms ? ", function(rep) {
        let reponse = Number(rep)
        if(isNaN(reponse)) reponse = 0
        let result = mss(reponse)
        console.log(`${result.days}j ${result.hours}h ${result.hours}m ${result.minutes}s ${result.milliseconds}ms ${result.microseconds}µs ${result.nanoseconds}ns`)
        process.exit()
    })
}

function jours() {
    rl.question("Veuillez envoyer votre expression: ", function(rep) {
        let result = rep.replace('j', 'd')
        let slice = result.split(' ')
        let resultat = 0
        slice.forEach(item => {
            resultat += ms(item)
        })
        console.log("Le résultat est " + resultat + ' ms')
        process.exit()
    })
}

question()