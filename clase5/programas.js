//1) Programa que calcula area de figura

figura=prompt("ingresa figura");

if(figura=="cuadrado"){
	lado = prompt("ingrese lado");
	area = lado * lado;
} else{
	altura = prompt("ingrese altura");
	base = prompt("ingrese base");
	area = (base * altura) / 2;
}

alert('El area de '+figura+' = '+area);


//2) Ciclo While()

var contador=0;
while(contador<10){
    contador++;
    alert(contador);
}
alert("contador no es menor a 10 = "+contador);


//3) Ciclo for()

for(var contador=0;contador<10;contador++){
    alert(contador);
}
alert("contador no es menor a 10 = "+contador);

//4) Programa que calcula promedio con while, mientras no ingrese "s"

var suma=0;
var promedio=0;
var contador=0;
var valorIngresado =  prompt("ingrese calificacion");
valorIngresado = parseInt(valorIngresado);

while(valorIngresado != "s"){
	contador++;
	suma += valorIngresado;
	promedio = suma/contador;
	valorIngresado =  prompt("ingrese calificacion");
	if(valorIngresado!="s"){
		valorIngresado = parseInt(valorIngresado);
	}
}

alert("el promedio es: "+promedio);

//5) Funciones
/*
y=x+3
x-y
0-3
1-4

y= valor de salida (retornos de la funcion)
x= valor de entrada (parametros o argumentos)

function lineal(x){
	var y=0;
	y=x+3;
	return(y);
}

lineal(0) => 3
lineal(1) => 4
lineal(20) => 23

alert("hola")

*/

//6) Calculadora básica usando funciones


function suma(a,b){
	var result=0;
	result= a+b;
	return(result);
}

function resta(a,b){
	var result=0;
	result= a-b;
	return(result);
}

function multiplicacion(a,b){
	var result=0;
	result= a*b;
	return(result);
}

function division(a,b){
	var result=0;
	result= a/b;
	return(result);
}

var operacion = prompt("ingrese operacion");
var a = prompt("ingrese valor 1");
a = parseInt(a);
var b = prompt("ingrese valor 2");
b = parseInt(b);
var resultado=0;

if(operacion=="suma"){
	resultado=suma(a,b)
}
if(operacion=="resta"){
	resultado=resta(a,b)
}
if(operacion=="multiplicacion"){
	resultado=multiplicacion(a,b)
}
if(operacion=="division"){
	resultado= division(a,b)
}
alert(resultado);
