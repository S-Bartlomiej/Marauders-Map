function ww() {
    var wartosc = document.getElementById('przycisk').value;
    if (wartosc == "Knuję coś niedobrego") {
        var sterowanie = document.getElementById('przycisk-sterowanie');
        sterowanie.style.width = '200px';
        document.getElementById("przycisk").value = "Koniec psot";
        przycisk.style.width = '200px';
        
        
        
        p();
    } else {
        var sterowanie = document.getElementById('przycisk-sterowanie');
        sterowanie.style.width = '333px';
        document.getElementById("przycisk").value = "Knuję coś niedobrego";
        przycisk.style.width = '333px';
        x();
    }
}

function p() {
    var x = document.getElementById("mapa");
    if (x.style.visibility = "hidden") {
            var obszarmapy = document.getElementById('obszar-mapa');
            obszarmapy.style.display = "block",
            obszarmapy.style.visibility = "visible",
            obszarmapy.style.opacity = "1";
            x.style.display = "block",
            x.style.visibility = "visible",
            x.style.opacity = "1";

    } else {
        x.style.display = "none";
    }
}

function x() {
    var x = document.getElementById("mapa");
    if (x.style.visibility = "visible") {
            var obszarmapy = document.getElementById('obszar-mapa');
            obszarmapy.style.display = "block",
            obszarmapy.style.visibility = "hidden",
            obszarmapy.style.opacity = "0";
            x.style.display = "block",
            x.style.visibility = "hidden",
            x.style.opacity = "0";

    } else {
        x.style.display = "none";
    }
}

var harry = document.getElementById('harry');
var albus = document.getElementById('albus');
var ron = document.getElementById('ron');
var hermiona = document.getElementById('hermiona');


//harry

var hy = 470;
var hx = -15;
var hyy = 390;
var hxx = -80;

setInterval(function ()

    {

if (hy > 390) {
    hy--;
    harry.style.top = hy + 'px';
}

else if(hx > -80)
{
    hx--;
    harry.style.left = hx + 'px';
}

else if(hyy<470)
{
    hyy++;
    harry.style.top = hyy + 'px';
}

else if(hxx < -15)
{
    hxx++;
    harry.style.left = hxx + 'px';
}

else {
    hy= 470;
    hx = -15;
    hyy=390;
    hxx = -80;

}

    }, 77);

//hermiona

var Hy = 230;
var Hyy = 120;

setInterval(function () {
    if (Hy > 120) {
        Hy--;
        hermiona.style.top = Hy + 'px';
    }

    else if(Hyy < 230)
    {
        Hyy++;
        hermiona.style.top = Hyy + 'px';
    }

    else {
        Hy = 230;
        Hyy = 120;
    }

}, 50);


//Dumbledore


var dy = 120;
var dx = -75;
var dyy = 80;
var dxx = -100;

setInterval(function () {
    if (dy > 80) {
        dy--;
        albus.style.top = dy + 'px';
    }

    else if(dx > -100)
    {
        dx--;
        albus.style.left = dx + 'px';
    }

    else if (dyy < 120) {
        dyy++;
        albus.style.top = dyy + 'px';
    }

    else if(dxx < -75)
    {
        dxx++;
        albus.style.left = dxx + 'px';
    }

    else {
        dy = 120;
        dx = -75;
        dyy = 80; 
        dxx = -100;
    }
    }, 88);

// Ron

var rx = -5;
var ry = -90;
var rxx = -90;
var ryy = 100;
var rxxx = -5;
var rxxxx = -90;


setInterval(function () {

    if (rx > -90) {
        rx--;
        ron.style.left = rx + 'px';
    }

    else if(ry < 100)
    {
        ry++
        ron.style.top = ry + 'px';
    }
 
    else if(rxx < -5)
    {
        rxx++;
        ron.style.left = rxx + 'px';
       
    } 

    else if(rxxx > -90)
    {
        rxxx--;
        ron.style.left = rxxx + 'px';
    }

    else if(ryy > -90)
    {
        ryy--;
        ron.style.top = ryy + 'px';
    }

    else if(rxxxx < -5)
    {
        rxxxx++;
        ron.style.left = rxxxx + 'px';
    }

    else {
        rx = -5;
        ry = -90;
        rxx = -90;
        rxxx = -5;
        ryy = 100;
        rxxxx = -90;
    }

}, 44);
