function calcularsiglo(anyo){

    if (anyo>=1700 && anyo<=1799) {
        return 5;
    }
    else if (anyo>=1800 && anyo<=1899) {
        return 3;
    }
    else if (anyo>=1900 && anyo<=1999) {
        return 1;
    }
    else if (anyo>=2000 && anyo<=2099) {
        return 0;
    }
    else if (anyo>=2100 && anyo<=2199) {
        return -2;
    }
    else if (anyo>=2200 && anyo<=2299) {
        return -4;
    }
    
}

function calcularanyo(anyo){

   // var b = Math.trunc(parseInt(b.toString().substr(-2))/4);
    //return b;
    var f = parseInt(anyo.toString().substr(-2));
    var z = f/4;
    var w = Math.trunc(z);
    var g = f+w;
    return g;

     
}

function calcularanyobisiesto(anyo){
    
    if(anyo.toString().substr(-1)=="2" || anyo.toString().substr(-1)== "4" && mes =="enero" || mes == "febrero"){
        return -1;
    }
    else {
        return 0;
    }
    

}

function calcularmes(mes){
    
    if (mes=="enero") {
        return 6;
    }

    if (mes=="febrero") {
        return 2;
    }

    if (mes=="marzo") {
        return 2;
    }

    if (mes=="abril") {
        return 5;
    }
    
    if (mes=="mayo") {
        return 0;
    }
    
    if (mes=="junio") {
        return 3;
    }

    if (mes=="julio") {
        return 5;
    }

    if (mes=="agosto") {
        return 1;
    }

    if (mes=="septiembre") {
        return 4;
    }

    if (mes=="octubre") {
        return 6;
    }

    if (mes=="noviembre") {
        return 2;
    }
    
    if (mes=="diciembre") {
        return 4;
    }


}

//function dia(dia){
  //  return(dia);//el dia introducido
//}

function calculardia(anyo,mes,dia){
    var a = calcularsiglo(anyo);
    var b = calcularanyo(anyo);
    var c = calcularanyobisiesto(anyo);
    var d = calcularmes(mes);
    var e = parseInt(dia);

    var y = a + b + c + d + e;//Tomamos todos los coeficientes calculados y los sumamos
    var r = y % 7;//después calculamos el resto módulo 7 del número que obtenemos (restamos 7 a y)


    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);

   
    if (r==1){
        return "lunes";
    }
    else if (r==2){
        return "martes";
    }
    else if (r==3){
        return "miercoles";
    }
    else if (r==4){
        return "jueves";
    }
    else if (r==5){
        return "viernes";
    }
    else if (r==6){
        return "sabado";
    }
    else if (r==0){
        return "domingo";
    }
}