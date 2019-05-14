administer (patient, 
            function vaccine (dosage) { 
                if (dosage > 0) { 
                    inject(dosage);
                }
            },
            time);
//--------------------------------------------
            function makeCounter () {
                var count = 0;

                function counter() {
                    count = count + 1;
                    return count;
                }
                return counter;
            }

            var doCount = makeCounter();
            console.log(doCount());
            console.log(doCount()); 
            console.log(doCount());            
            console.log(doCount());
// Ex pg 500
function makePassword(password) {
    return function guess(passwordGuess) {
        return (passwordGuess === password)
    };
}

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret")); 

function multN(n) {
    return function getnumber(number) {
        return (n * number);
    };
}

var multBy3 = multN(3);
console.log(multBy3(3));


function makeCounter() {
    var count = 0;
    return  {
        increment: function() 
        {
            count++;
            return count;
        }
    };
}
var counter = makeCounter();
console.log(counter.increment());   
console.log(counter.increment());   
console.log(counter.increment());   

//------------------------------------

(function(food) {
    if (food === "cookies") {
        alert("More please");
    } else if (food === "cake") {
        alert("Yum yum");
    }
}) ("cookies")