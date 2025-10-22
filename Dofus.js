const classe1 = "Iop"
const classe2 = "Eniripsa"
const classe3 = "Sacrieur"
const classe4 = "Cra"

let Vieclasse1 = "100"
let Vieclasse2 = "90"
let Vieclasse3 = "120"
let Vieclasse4 = "110"

let Sortclasse1 = ["Colere de Iop" , "Epee de Iop"]
let Sortclasse2 = ["Mots blessants" , "Lapinou"]
let Sortclasse3 = ["Mutilation" , "Attirance"]
let Sortclasse4 = ["Fleche singlante" , "Fleche explosive"]

let PA = 6
let Totaldetour = 0

while (Totaldetour <= 4) {
    Totaldetour ++;
    console.log (Totaldetour)

    if (PA == 6) {
        console.log ("Le sort lancé est :" , Sortclasse1[0])
        PA = 5
        console.log ("PA restant :" , PA)
    }
    else if (PA >= 3) {
        console.log ("Le sort lancé est :" , Sortclasse1[1])
        PA = 0
        console.log ("PA restant :" , PA)
    }
    else if (PA == 0) {
        console.log ("Vous n'avez pas assez de PA !")
    }
}

