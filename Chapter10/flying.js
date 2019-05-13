var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
                   { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                   { name: "Sue Property", paid: true, ticket: "premiumeconomy" },
                   { name: "John Funcall", paid: true, ticket: "coach" } ];

var noFlyList = ["John Funcall"];

var allCanFly = processPassengers(passengers, checkNoFlyList);
var allPaid = processPassengers(passengers, checkNotPaid);
processPassengers(passengers, printPassenger);
servePassengers(passengers);

if (!allCanFly) {
    console.log("The plane can't take off: we have a passennger on the no-fly list.");
}

if (!allPaid) {
    console.log("The plane can't take off, not everyone has paid.");
}

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            //console.log("yyy: " + passengers[i].name);
            return false;
        }
        //console.log("erf:" + passengers[i].name);
    }
    return true;
}

function checkNoFlyList(passenger) {
    for (var i=0; i < noFlyList.length; i++){
        //console.log("passenger" + passenger.name +  " nfl " + noFlyList[i]);
        if (passenger.name === noFlyList[i]){
            //console.log("XXX");
            return true;
        } 
    }
    return false;  //passenger is not on no fly list
    //return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    //console.log("Paid:" + passenger.name + " pd: " + passenger.paid);
    return (!passenger.paid);
}

function printPassenger (passenger) {
    var message = passenger.name;
    if (passenger.paid) {
        message = message + " has paid.";
    } else {
        message = message + " has not paid.";
    }
    console.log(message);
    return false;
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

function serveCustomer (passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    //get drink order
    getDrinkOrderFunction();
    //get dinner order
    getDrinkOrderFunction();
    getDinnerOrderFunction();
    getDrinkOrderFunction();
    //show movie
    getDrinkOrderFunction();
    //pick up trash

}

function createDrinkOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or wine?");
        }    
    } else if (passenger.ticket === "coach") {
        orderFunction = function() {
            alert("Your choice is cola or water.");
        }
    } else {
        orderFunction = function() {
            alert("Would you like wine, cola or water.");
        }
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like chicken or pasta?");
        }
    } else if (passenger.ticket === "coach") {
            orderFunction = function() {
                alert("would you like peanuts or pretzels?");
            }
    } else {
        orderFunction = function() {
            alert("Would you like a snack box or cheese plate?");
        }
    }
    return orderFunction;
}