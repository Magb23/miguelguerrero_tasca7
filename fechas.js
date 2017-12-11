function calcularsiglo(a){

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

function calculardia(e){

}