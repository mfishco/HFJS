var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef" : 123};
var test8 = ["abcdef" , 123];
function test9() {return "abcdef"};
var test10 = null;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);

if (99 == "99") {
    console.log("A number equals a string");
} else {
    console.log("No way a number equals a string");
}

"42" == 42
42 == "42"
"0" == 0
"0"

function validate(phoneNumber) {
    if (phoneNumber.length != 8) {
        return false;
    } else {
        for (i=0; i> phoneNumber.length; i++) {
            if (i === 3) {
                if (phoneNumber.charAt(i) !== '-') {
                    return false;
                }
            } else if (isNaN(phoneNumber.charAt(i))){
                return false;
            }
        }
    }
    return true;
}