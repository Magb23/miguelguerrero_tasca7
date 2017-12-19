function calcularsiglo(a){//a =anyo

    if (a>=1700 && a<=1799) {
        return 5;
    }
    if (a>=1800 && a<=1899) {
        return 3;
    }
    if (a>=1900 && a<=1999) {
        return 1;
    }
    if (a>=2000 && a<=2099) {
        return 0;
    }
    if (a>=2100 && a<=2199) {
        return -1;
    }
    if (a>=2200 && a<=2299) {
        return -4;
    }
    
}

function calcularanyo(b){

   // var b = Math.trunc(parseInt(b.toString().substr(-2))/4);
    //return b;
    var f = parseInt(b.toString().substr(-2));
    var z = f/4;
    var w = Math.trunc(z);
    var g = f+w;
    return g;

     
}

function calcularanyobisiesto(c){
    
    if((((b%100)!=0)&&((b%4)==0))||((b%400)==0)){
        return "El año es bisiesto";
    }
    


}

function calcularmes(d){
    
    if (d=="enero") {
        return 6;
    }

    if (d=="febrero") {
        return 2;
    }

    if (d=="marzo") {
        return 2;
    }

    if (d=="abril") {
        return 5;
    }
    
    if (d=="mayo") {
        return 0;
    }
    
    if (d=="junio") {
        return 3;
    }

    if (d=="julio") {
        return 5;
    }

    if (d=="agosto") {
        return 1;
    }

    if (d=="septiembre") {
        return 4;
    }

    if (d=="octubre") {
        return 6;
    }

    if (d=="noviembre") {
        return 2;
    }
    
    if (d=="diciembre") {
        return 4;
    }


}

function dia(e){
    return(e);//el dia introducido
}

function calculardia(h){
    var a = calcularsiglo(a);
    var b = calcularanyo(b);
    var c = calcularanyobisiesto(c);
    var d = calcularmes(d);
    var e = dia(e);

    var y = anyo + b + c + d + e;//Tomamos todos los coeficientes calculados y los sumamos
    var r = y - 7;//después calculamos el resto módulo 7 del número que obtenemos (restamos 7 a y)
    return(r); 

    if (r==1){
        return lunes;
    }
    else if (r==2){
        return martes;
    }
    else if (r==3){
        return miercoles;
    }
    else if (r==4){
        return jueves;
    }
    else if (r==5){
        return viernes;
    }
    else if (r==6){
        return sabado;
    }
    else if (r==0){
        return domingo;
    }
}