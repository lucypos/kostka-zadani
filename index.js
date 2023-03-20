//Catering

const justFood = (pocetLidi) => {
	return `catering od Just Food pro ${pocetLidi} lidí za ${(pocetLidi * 100
	)} Kč`
}

const yourMama = (pocetLidi) => {
    return `
    catering od Your Mama pro ${pocetLidi} lidí za ${(pocetLidi * 250
        )} Kč`
    }

const flavourHaven = (pocetLidi) => {
    return `
    catering od Flavour Haven pro ${pocetLidi} za ${(pocetLidi * 800
        )} Kč`
    }
 
const createEvent = (nazevUdalosti, pocetLidi, cateringSpolecnosti) => {
    return ` Událost ${nazevUdalosti} s catering pro ${pocetLidi} lidí za ${cateringSpolecnosti(pocetLidi)}
    Kč`
}

document.body.innerHTML += createEvent(
    'Inaugurace prezidenta',
    150,
    flavourHaven
)


//Kostka

let side = 1
const cisloNaKostce = document.querySelector('.dice');
const hod = () => {
    side = side + 1
    if  (side === 7) {
            side = 1
    } 
    cisloNaKostce.src = `img/side${side}.svg`
}
document.addEventListener('keydown', hod)
