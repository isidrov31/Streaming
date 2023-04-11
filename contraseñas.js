function mostrar1(){
    document.getElementById('pass1').style.display = 'block';
}

function mostrar2(){
    document.getElementById('pass2').style.display = 'block';
}

function mostrar3(){
    document.getElementById('pass3').style.display = 'block';
}

function mostrar4(){
    document.getElementById('pass4').style.display = 'block';
}

function mostrar5(){
    document.getElementById('pass5').style.display = 'block';
}

function mostrar6(){
    document.getElementById('pass6').style.display = 'block';
}

function copiarUrl() {
    let copiar1=document.getElementById("copiar1");
    let button=document.getElementById("botonCopiar")

    navigator.clipboard.writeText(copiar1.textContent);
    button.textContent='Copiado'
}

function copiarUrl2() {
    let copiar2=document.getElementById("copiar2");
    let button=document.getElementById("botonCopiar2")

    navigator.clipboard.writeText(copiar2.textContent);
    button.textContent='Copiado'
}

function copiarUrl3() {
    let copiar3=document.getElementById("copiar3");
    let button=document.getElementById("botonCopiar3")

    navigator.clipboard.writeText(copiar3.textContent);
    button.textContent='Copiado'
}
function copiarUrl4() {
    let copiar4=document.getElementById("copiar4");
    let button=document.getElementById("botonCopiar4")

    navigator.clipboard.writeText(copiar4.textContent);
    button.textContent='Copiado'
}
function copiarUrl5() {
    let copiar5=document.getElementById("copiar5");
    let button=document.getElementById("botonCopiar5")

    navigator.clipboard.writeText(copiar5.textContent);
    button.textContent='Copiado'
}
function copiarUrl6() {
    let copiar6=document.getElementById("copiar6");
    let button=document.getElementById("botonCopiar6")

    navigator.clipboard.writeText(copiar6.textContent);
    button.textContent='Copiado'
}