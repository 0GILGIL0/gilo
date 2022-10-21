let btn = document.getElementById("encrypt-btn")
let trad = document.getElementById("encryptedInput-1")
let txt2 = document.getElementById("plainInput-1")
const cod = document.getElementById("cifras")

btn.addEventListener("click", () => {
    let txt = txt2.value
    let codInp = document.querySelector('input[name = "casionooo"]:checked').value

    if (cod.value === "Base64"){
        if(codInp === "C"){
        trad.innerHTML = btoa(txt)
    } else if(codInp === "D"){
            trad.innerHTML = atob(txt)
        }
    }
})

function msgCod(){ 
    btn.innerHTML = "Codificar Mensagem!"
}
function msgDecod(){
    btn.innerHTML = "Decodificar Mensagem!"
}