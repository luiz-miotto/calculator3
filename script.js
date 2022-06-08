let displayValue = "";
var secondDisplayValue = "";
let numberArray = [0,1,2,3,4,5,6,7,8,9]
var inputDisplay = document.getElementById("inputDisplay");
var counter = 0;
var first;
var addedValue;
var plusCounter = 0;
var minusCounter = 0;
var divideCounter = 0;
var multiplyCounter = 0;
/*
var increment = function(){
    return function(counter){
        counter +=1;
        return counter;
    }
};
*/

/*
check this out
https://stackoverflow.com/questions/10286386/how-to-convert-string-equation-to-number-in-javascript#:~:text=use%20parseInt()%20%2CThe%20parseInt,string%20and%20returns%20an%20integer.&text=Show%20activity%20on%20this%20post.,-One%20Liner%3A%20str&text=Show%20activity%20on%20this%20post.,-I%20have%20a
https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript



number selector function{}
addition function{
    on click add display value
}



*/

function produceDisplayValue(keyValue){
    if (counter <= 0){
        displayValue = displayValue + keyValue;
        console.log(displayValue);
        inputDisplay.innerText = displayValue;
        console.log(`This is the value of ${counter}`)
        } else {
            secondDisplayValue = secondDisplayValue + keyValue;
            console.log(secondDisplayValue);
            inputDisplay.innerText = secondDisplayValue;   
            console.log(`This is the value of ${counter}`)
        }
}


var equal = document.getElementById("equals");
equal.addEventListener("click", () => {
    doMath();
    console.log("is equals working");
    console.log(secondDisplayValue);
    
});

function doMath(){
    if (plusCounter >= 1){
        addedValue = sum(displayValue,secondDisplayValue);
        displayValue = addedValue
        secondDisplayValue = "";
        inputDisplay.innerText = displayValue;
        --plusCounter;
         } else if (minusCounter >= 1){
             subtractedValue = subtract(displayValue,secondDisplayValue);
             displayValue = subtractedValue
             secondDisplayValue = "";
             inputDisplay.innerText = subtractedValue;
             --minusCounter;
         } else if (multiplyCounter >= 1){
              multipliedValue = multiply(displayValue,secondDisplayValue);
              displayValue = multipliedValue
             secondDisplayValue = "";
             inputDisplay.innerText = multipliedValue;
             --multiplyCounter;
         } else if (divideCounter >= 1){
             dividedValue = divide(displayValue,secondDisplayValue);
             displayValue = dividedValue
             secondDisplayValue = "";
            inputDisplay.innerText = dividedValue;
            --divideCounter;
        };
};

var plus = document.getElementById("plus");
plus.addEventListener("click", () =>{
    if (minusCounter == 1 || multiplyCounter == 1 || divideCounter == 1){
        doMath();
      }
    ++counter;
    ++plusCounter;
    if (plusCounter == 2){
        doMath();
    }
    console.log(`This is the value of ${counter}`);
});


var minus = document.getElementById("minus");
minus.addEventListener("click", () =>{
    if (plusCounter == 1 || multiplyCounter == 1 || divideCounter == 1){
        doMath();
      }
    ++counter;
    ++minusCounter;
    if (minusCounter == 2){
        doMath();
    }
    console.log(`This is the value of ${counter}`);
});


var multiplyButton = document.getElementById("multiply");
multiplyButton.addEventListener("click", () =>{
    if (plusCounter == 1 || multiplyCounter == 1 || divideCounter == 1){
        doMath();
      }
    ++counter;
    ++multiplyCounter;
    if (multiplyCounter == 2){
        doMath();
    }
    console.log(`This is the value of ${counter}`);
});

var divideButton = document.getElementById("divide");
divideButton.addEventListener("click", () =>{
    if (plusCounter == 1 || multiplyCounter == 1 || divideCounter == 1){
        doMath();
      }
    ++counter;
    ++divideCounter;
    if(divideCounter == 2){
        doMath();
    }
    console.log(`This is the value of ${counter}`);
});

var one = document.getElementById("1");
one.addEventListener("click", ()=>{
    let firstKeyValue = one.id.toString();
    produceDisplayValue(firstKeyValue);
});

var two = document.getElementById("2");
two.addEventListener("click", ()=>{
    let secondKeyValue = two.id.toString();
    produceDisplayValue(secondKeyValue);
});

var three = document.getElementById("3");
three.addEventListener("click", ()=>{
    let thirdKeyValue = three.id.toString();
    produceDisplayValue(thirdKeyValue);
}); 

var four = document.getElementById("4");
four.addEventListener("click", () =>{
    let fourthKeyValue = four.id.toString();
    produceDisplayValue(fourthKeyValue);
});

var five = document.getElementById("5");
five.addEventListener("click", () => {
    let fifthKeyValue = five.id.toString();
    produceDisplayValue(fifthKeyValue);
})


var six = document.getElementById("6");
six.addEventListener("click", () => {
    let sixthKeyValue = six.id.toString();
    produceDisplayValue(sixthKeyValue);
});

var seven = document.getElementById("7");
seven.addEventListener("click", () => {
    let seventhKeyValue = seven.id.toString();
    produceDisplayValue(seventhKeyValue);
});

var eight = document.getElementById("8");
eight.addEventListener("click", () => {
    let eighthKeyValue = eight.id.toString();
    produceDisplayValue(eighthKeyValue);
});

var nine = document.getElementById("9");
nine.addEventListener("click", () => {
    let ninthKeyValue = nine.id.toString();
    produceDisplayValue(ninthKeyValue);
});

var zero = document.getElementById("0");
zero.addEventListener("click", () => {
    let zerothKeyValue = zero.id.toString();
    produceDisplayValue(zerothKeyValue);
});

var period = document.getElementById("period");
period.addEventListener("click", () => {
    let periodKeyValue = ".";
    produceDisplayValue(periodKeyValue);
});



var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    inputDisplay.innerText = "";
    displayValue = "";
    secondDisplayValue = "";
    console.log(displayValue)
    console.log(secondDisplayValue);
});



function sum(x,y){
    let z;
    
    return z = parseFloat(x) + parseFloat(y);
}

function subtract(x,y){
    let z;
    return z = parseFloat(x)-parseFloat(y);
}

function multiply(x,y){
    let z;
    return z = parseFloat(x)*parseFloat(y);
}

function divide(x,y){
    let z;
    return z = parseFloat(x)/parseFloat(y);
}


 var sumFunction = document.getElementById("plus");
 sumFunction.addEventListener("click", () =>{
 console.log("testing plus sign")
 });