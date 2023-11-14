/*Calculadora de Masa Corporal

    IMC = Peso / (Altura x Altura)
    Menor a 19 Delgadez
    Entre 20 y 25 Normal
    Entre 25 y 30 Sobrepeso
    Mayor a 30 Obesidad*/

//Función que imprime los datos en el html (Recibe los datos + el ID del elemento HTML)
function imprimir(frase, id) {
  let datos = document.getElementById(id);
  datos.innerHTML = frase;
}

//Función que calcula el peso ideal con respecto a la altura
function calculoPesoIdeal(altura) {
  peso1 = 20 * (alturaM * alturaM);
  peso1 = peso1.toFixed(2);
  peso2 = 26 * (alturaM * alturaM);
  peso2 = peso2.toFixed(2);
  imprimir(`Tu peso ideal es entre ${peso1}Kg y ${peso2}Kg`, "extra");
}

//Función principal
function verificar() {
  //toma los datos de los inputs y hace el calculo de IMC
  let nombre = document.getElementById("nombre").value;
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  alturaM = altura / 100;
  imcCalculado = peso / (alturaM * alturaM);
  imcCalculado = imcCalculado.toFixed(2);

  //Condicionales de clasificación
  if (imcCalculado < 18.5) {
    imprimir(`${nombre} tu IMC es: ${imcCalculado}`, "datos");
    imprimir(`Estado: abajo de lo recomendado.`, "estado");
    calculoPesoIdeal(altura);
  }
  if (imcCalculado >= 18.5) {
    if (imcCalculado < 25) {
      imprimir(`${nombre} tu IMC es: ${imcCalculado}.`, "datos");
      imprimir(`Estado: dentro del intervalo normal.`, "estado");
      calculoPesoIdeal(altura);
    }
  }
  if (imcCalculado >= 25) {
    if (imcCalculado < 30) {
      imprimir(`${nombre} tu IMC es: ${imcCalculado}.`, "datos");
      imprimir(`Estado: considerado como sobrepeso.`, "estado");
      calculoPesoIdeal(altura);
    }
  }
  if (imcCalculado >= 30) {
    imprimir(`${nombre} tu IMC es: ${imcCalculado}.`, "datos");
    imprimir(`Estado: considerado como obesidad.`, "estado");
    calculoPesoIdeal(altura);
  }
}
