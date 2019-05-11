var chevy = {
    make : "Chevy",
    model : "BelAir",
    year : 1957,
    color : "red",
    passengers : 2,
    convertable : false,
    mileage : 1021,
    started : false,
    start : function() {
        this.started = true;
    },
    stop : function() {
        this.started = false;
    },
    drive: function() {
        if(this.started) {
            alert(this.make + " " + this.model+ " goes zoom zoom!!");
        } else {
            alert("You need to start the engine first");
        }
    }
};

var fiat = {
    make : "Fiat",
    model : "500",
    year : 1957,
    color : "Medium Blue",
    passengers : 2,
    convertable : false,
    mileage : 88000,
    started : false,
    fuel : 0,
    start : function() {
        if(this.fuel > 0){
            this.started = true;
        } else {
            alert("The car is on empty, fill up before starting!");
        }
    },
    stop : function() {
        this.started = false;
    },
    drive: function() {
        if(this.started) {
            if(this.fuel > 0) {
            alert(this.make + " " + this.model+ " goes zoom zoom!!");
            this.fuel = this.fuel - 1;
            } else {
            alert("Uh oh, out of fuel.");
            this.stop();
            }
        }
    },
    addFuel : function(amount) {
        this.fuel = this.fuel + amount;
    }
};

var cadi = {
    make : "GM",
    model : "Cadillac",
    year : 1955,
    color : "Tan",
    passengers : 5,
    convertable : false,
    mileage : 12892,
    started : false,
    start : function() {
        this.started = true;
    },
    stop : function() {
        this.started = false;
    },
    drive: function() {
        if(this.started) {
            alert(this.make + " " + this.model+ " goes zoom zoom!!");
        } else {
            alert("You need to start the engine first");
        }
    }
};
var taxi = {
    make : "Webville Motors",
    model : "Taxi",
    year : 1955,
    color : "yellow",
    passengers : 4,
    convertable : false,
    mileage : 281341,
    started : false,
    start : function() {
        this.started = true;
    },
    stop : function() {
        this.started = false;
    },
    drive: function() {
        if(this.started) {
            alert(this.make + " " + this.model+ " goes zoom zoom!!");
        } else {
            alert("You need to start the engine first");
        }
    }
};
fiat.start();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();