// console.log("it works");

var isPositive = function(num){
    var result = num;
    if (num > 0){
        console.log("Yup");
        result = "Positively!";
        document.getElementById('answa').innerHTML = result;
        return true;
    } else {
        console.log("Nope");
        result = "Nay.";
        document.getElementById('answa').innerHTML = result;
        return false;
    }
}

var getCapital = function(abrv){
    var result = abrv;
    if (abrv.toLowerCase() === "vt") {
        result = "Montpelier";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    } else if(abrv.toLowerCase() === "ma"){
       result = "Boston";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    } else if(abrv.toLowerCase() === "mt"){
       result = "Helena";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    } else if(abrv.toLowerCase() === "nm"){
       result = "Santa Fe";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    } else if(abrv.toLowerCase() === "wa"){
       result = "Olympia";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    }
    else{
        result = "I don't know!";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    }
}

var calculateTaxes = function(income){
    if( income < 10000) {
        var result = income * .05;
        document.getElementById('tax').innerHTML = result;
        console.log(result);
        return result;
    } else if (income < 20000) {
        var result = income * .1;
        document.getElementById('tax').innerHTML = result;
        console.log(result);
        return result;
    } else if (income >= 20000) {
        var result = income * .15;
        document.getElementById('tax').innerHTML = result;
        console.log(result);
        return result;
    } else {
        var result = "Please enter numbers!";
        document.getElementById('tax').innerHTML = result;
        console.log(result);
        return result;
    }
}

var i = 0;
var fizzBuzz = function() {
    while (i < 100) {
        i++;

        var n = document.createElement('p');

        if (i % 15 === 0) {
            var t = document.createElement('p');
            var r = document.createTextNode("FizzBuzz");
            t.appendChild(r);
            document.body.appendChild(t);
            continue;
        } else if (i % 3 === 0) {
            var t = document.createElement('p');
            var r = document.createTextNode("Fizz");
            t.appendChild(r);
            document.body.appendChild(t);
            continue;
        } else if (i % 5 === 0) {
            var t = document.createElement('p');
            var r = document.createTextNode("Buzz");
            t.appendChild(r);
            document.body.appendChild(t);
        }

        var p = document.createTextNode(i);



        n.appendChild(p);

        document.body.appendChild(n);
        // console.log(i);

    };
}
