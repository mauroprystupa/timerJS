/* lo primero que hago es declarar las variables */
let inputs, tiempo, alarma, horas, minutos, segundos, repetir;

/* tenemos que buscar del los inputs que estan en el html el tiempo
que ingreso el usuario */
window.addEventListener('load',()=>{
    inputs=Array.from(document.getElementsByClassName('numero'));
    tiempo = document.querySelector('.tiempo');
    alarma = new Audio('../sound/1.mp3');
});

function startTimer(){
    // leer los inputs
    parseTime();
    // actualizar la vista
    setTimer();
    // arrancar el timer
    contador();
    
}
/* esta funcion de encarga de buscar los valores que los usuarios ingresan por los inputs y transformarlos 
de texto a numeros */
function parseTime(){
    horas=Number(inputs[0].value);
    minutos=Number(inputs[1].value);
    segundos=Number(inputs[2].value);
}
/* esta funcion de encarga de actualizar la pantalla y la pestana con los valores actualizados en el timer  */
function setTimer(){
    tiempo.innerHTML = `
    <p class="numero">${horas    > 9 ?horas    :('0'+ horas   )}</p><span>hs</span>
    <p class="numero">${minutos  > 9 ?minutos  :('0'+ minutos )}</p><span>min</span>
    <p class="numero">${segundos > 9 ?segundos :('0'+ segundos)}</p><span>seg</span>
    `
    document.title = `
    ${horas    > 9 ?horas    :('0'+ horas   )}:
    ${minutos  > 9 ?minutos  :('0'+ minutos )}:
    ${segundos > 9 ?segundos :('0'+ segundos)}`;
}

    /* esta funcion se encarga de arrancar el contador */
    function contador(){
        repetir = setInterval(correr, 1000);
    }
/* esta funcion se llema 'cada un segundo' que se encarga de calcular cuanto tiempo queda */
    function correr(){
        if (segundos >0){
            segundos--;
        }else{
            if(minutos > 0){
                segundos=59;
                minutos--;
            }else{
                if(horas>0){
                    segundos=59;
                    minutos=59;
                    horas--;
                }else{
                    alarma.play();
                }
            }
        }
        /* ahora llamemos a la funcion setTimer para actualizar los valores de la pantalla */
        setTimer();
    }

 /* creamos una funcion para frenar la alarma */
function stopTimer(){
    clearInterval(repetir);
    location.reload();
}
 
