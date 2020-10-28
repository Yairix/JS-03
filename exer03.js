function Pessoa(name, age, colorFav) {
    this.name = name
    this.age = age
    this.cor = colorFav
}

function compareOlder(people) {
    let moreAge;  
    let olderPerson;

    for (let person of people) {
        if (typeof moreAge == 'undefined') {
            moreAge = person.age
            olderPerson = person
        } else {
            if (person.age > moreAge) {
                moreAge = person.age
                olderPerson = person
            }
        }
    }

    return olderPerson
}

function listResgistry(records) {
    console.log("Registros obtidos:")
    records.forEach( registry => {
        console.log(`${registry.name} possui ${registry.age} anos`)
    } )
}

let records = []

while (true) {
    
    // Guarda os dados
    let name = prompt('Digite seu nome:')
    let age 
   
    while (true) {
        age = Number(prompt('Digite seu idade:'))
        if (! Number.isNaN(age)) {
          break
        }
        alert('Idade inválida, por favor digite um número')
      }
    
      let colorFav = prompt('Digite sua cor favorita').toLowerCase()
      colorFav = colorFav[0].toUpperCase() + colorFav.slice(1)

    // Criar o registro
    let person = new Pessoa(name, age, colorFav)

    // guarda o registro
    records.push(person)

    let answer = prompt("Deseja registrar outra pessoa? (S/N)")
    
    if (answer == "N" || answer == "n"){
        break
    }
}

console.table(records)
console.log(compareOlder(records))

listResgistry(records)
let moreOlder = compareOlder(records)

console.log(`A pessoa quase múmia é ${moreOlder.name}, com ${moreOlder.age} anos!`)

// Comparação por cores

let colors = obterAgrupamentoPorCores(records);

for (let cor of Object.keys(colors)) {
    console.log(`Pessoas que gostam da cor ${cor}:`)
    for (let person of colors[cor]) {
        console.log(`- ${person.name}`)
    }
}

function obterAgrupamentoPorCores(records) {
    
    let colorGroup = {}

    for (let registry of records) {
        if (typeof colorGroup[registry.cor] === 'undefined') {
            colorGroup[registry.cor] = [ registry ]
        } else {
            colorGroup[registry.cor].push(registry)
        }
    }

    return colorGroup;
} 

