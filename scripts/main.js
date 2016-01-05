var isPositive = function(num){
    var result = num;
    if (num > 0) {
        console.log("Yup");
        result = "Positively!";
        document.getElementById('answa').innerHTML = result;
        return true;
    } else {
        console.log("Nope");
        result = "That's a negative.";
        document.getElementById('answa').innerHTML = result;
        return false;
    }
}

var getCapital = function(abrv){
    var result = abrv;
    if (abrv.toLowerCase() === "vt") {
        result = "Montpelier is the Capital of Vermont";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    } else if (abrv.toLowerCase() === "ma") {
       result = "Boston is the Capital of Massachusetts";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    } else if (abrv.toLowerCase() === "mt") {
       result = "Helena is the Capital of Montana";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    } else if (abrv.toLowerCase() === "nm") {
       result = "Santa Fe is the Capital of New Mexico";
        document.getElementById('stateCap').innerHTML = result;
        return result;
    } else if (abrv.toLowerCase() === "wa") {
       result = "Olympia is the Capital of Washington";
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
    if ( income < 10000) {
        var result = (income * .05);
        document.getElementById('tax').innerHTML = ("$" + result.toFixed(2) + " tax on $" + income);
    } else if (income < 20000) {
        var result = income * .1;
        document.getElementById('tax').innerHTML = ("$" + result.toFixed(2) + " tax on $" + income);
        console.log(result);
        return result;
    } else if (income >= 20000) {
        var result = income * .15;
        document.getElementById('tax').innerHTML = ("$" + result.toFixed(2) + " tax on $" + income);
        console.log(result);
        return result;
    } else {
        var result = "Please enter numbers!";
        document.getElementById('tax').innerHTML = ("$" + result.toFixed(2) + " tax on $" + income);
        console.log(result);
        return result;
    }
}

var i = 0;
var fizzBuzz = function() {
    while (i < 100) {
        i++;
        var n = document.createElement('li');
        var x = document.getElementById("fizzSpot");
        if (i % 15 === 0) {
            var r = document.createTextNode("FizzBuzz");
            n.appendChild(r);
            x.appendChild(n);
            continue;
        } else if (i % 3 === 0) {
            var r = document.createTextNode("Fizz");
            n.appendChild(r);
            x.appendChild(n);
            continue;
        } else if (i % 5 === 0) {
            var r = document.createTextNode("Buzz");
            var l = x.lastChild;
            n.appendChild(r);
            x.appendChild(n);
            continue;
        }
        var p = document.createTextNode(i);
        n.appendChild(p);
        x.appendChild(n);
    };
}
