//Calcular promedio de 5 notas ingresadas

let nota;
let promedio;
let acumulador_notas = 0;
    

for (let i=0; i<5; i++){
    nota=prompt("Ingrese una nota : ");

    nota= parseInt(nota);

    while (nota<0 || nota>10) {
        nota= prompt(" Error. Vuelva a intentarlo");
    }  

    acumulador_notas= acumulador_notas + nota;
        
}
promedio = acumulador_notas/5;

alert("El promedio de las notas es de : " + promedio );