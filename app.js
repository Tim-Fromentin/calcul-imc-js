const size = document.querySelector("#imc_size")
const weight = document.querySelector('#imc_weight')
const result = document.querySelector('.imc_result')
const btn = document.querySelector('.imc_btn')
const info = document.querySelector('.imc_info')

btn.addEventListener("click", calculImc)
function calculImc(){
    sizeValue = size.value
    weightValue = weight.value
    console.log(weightValue / (sizeValue * sizeValue));
    const resultValue = Math.round(weightValue / (sizeValue * sizeValue))
    result.innerHTML = resultValue
    if (resultValue <= 16.5){
        info.innerHTML = "Famine"
    } else if (resultValue >= 16.5 && resultValue <= 18.5){
        info.innerHTML = "Insuffisance pondérale (maigreur)"
    } else if (resultValue >= 18.5 && resultValue <= 25){
        info.innerHTML = "corpulence normale"
    }
     else if (resultValue >= 25 && resultValue <= 30){
        info.innerHTML = "surpoids"
    }
     else if (resultValue >= 30 && resultValue <= 35){
        info.innerHTML = "obésité modérée"
    }
     else if (resultValue >= 35 && resultValue <= 40){
        info.innerHTML = "obésité sévère"
    }
     else if (resultValue > 40){
        info.innerHTML = "obésité morbide ou massive"
    }
    else if (!sizeValue || sizeValue <= 0 || !weightValue || weightValue <= 0) {
       alert("Veuillez remplir les deux champs")
    }
}


