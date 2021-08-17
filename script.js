const greaterThan = function(number){    
    if (number > 100) {
        return "true";
}
        return "false";
};

const result = greaterThan(175);
    console.log(result);


    

const bouncerBot = function(numbPeople, age){
    if (numbPeople <= 70 && age >= 18) {
        return "Come in!";
    }
    if (numbPeople > 70 && age >= 18) {
        return "It's too busy! Come back later.";
    }
    if (age < 18)
        return "This is a club for adults";
};

const brendaSays = bouncerBot(100, 13);
    console.log(brendaSays);




const calculateAverage = function(number1, number2, number3, number4, number5){
    return ((number1 + number2 + number3 + number4 + number5) / 5);
};

const result = calculateAverage (6, 65, 31, 12, 4); 
    console.log (Math.round(result));