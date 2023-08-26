
const controle = document.getElementById('btt')
controle.addEventListener('click', imc)

function imc() {
    const nome = document.getElementById('name').value
    const peso = document.getElementById('txtpeso').value
    const altura = document.getElementById('txtal').value
    const imc_res = document.getElementById('p_res')
    const imc2_res = document.getElementById('p2_res')
    const imc_risco = document.getElementById('risco')

    const imc_calc = peso / altura ** 2
    

    if (nome == '' || peso == '' || altura == '') {
        imc_res.innerHTML = 'Preencha todos os campos acima!'
    } else if (imc_calc <= 18.5) {
        imc_res.innerHTML = `Olá <b>${nome}</b>! O seu IMC é ${imc_calc.toFixed(2)}`
        imc2_res.innerHTML = `<b>Clasificação:</b> Défice de massa corporal`
        imc_risco.innerHTML = `<b>Riscos Relacionado:</b><br>Nenhum (com chance de contrair outras enfermidades)`
        //--------------------------------------------------------
    } else if (imc_calc <= 24.9) {
        imc_res.innerHTML = `Olá <b>${nome}</b>! O seu IMC é ${imc_calc.toFixed(2)}`
        imc2_res.innerHTML = `<b>Clasificação:</b> Massa corporal`
        imc_risco.innerHTML = `<b>Riscos Relacionado:</b>Normal`
        //------------------------------------------------------
    } else if (imc_calc < 29.9) {
        imc_res.innerHTML = `Olá <b>${nome}</b>! O seu IMC é ${imc_calc.toFixed(2)}`
        imc2_res.innerHTML = `<b>Clasificação:</b> Sobrepeso`
        imc_risco.innerHTML = `<b>Riscos Relacionado:</b>Elevado`
        //---------------------------------------------------------
    } else if (imc_calc <= 34.9) {
        imc_res.innerHTML = `Olá <b>${nome}</b>! O seu IMC é ${imc_calc.toFixed(2)}`
        imc2_res.innerHTML = `<b>Clasificação:</b> Obesidade Leve`
        imc_risco.innerHTML = `<b>Riscos Relacionado:</b>Alto`
        //-------------------------------------------------------
    } else if (imc_calc <= 39.9) {
        imc_res.innerHTML = `Olá <b>${nome}</b>! O seu IMC é ${imc_calc.toFixed(2)}`
        imc2_res.innerHTML = `<b>Clasificação:</b> Obesidade Média`
        imc_risco.innerHTML = `<b>Riscos Relacionado:</b>Muito Alto`
        //-------------------------------------------------------
    } else if (imc_calc >= 40.0) {
        imc_res.innerHTML = `Olá <b>${nome}</b>! O seu IMC é ${imc_calc.toFixed(2)}`
        imc2_res.innerHTML = `<b>Clasificação:</b> Obesidade Mórbida`
        imc_risco.innerHTML = `<b>Riscos Relacionado:</b>Eminente`
    }
}

