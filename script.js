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
var equalsCounter = 0;
var secondValueCounter = 0;
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
/*
need to do:
need to have solve issue with counter in producedisplayvalue getting deincrimented after first second value is entered
*/

function produceDisplayValue(keyValue){
    if (counter <= 0 || equalsCounter == 1 || secondValueCounter < 1){
        displayValue = displayValue + keyValue;
        console.log(displayValue);
        inputDisplay.innerText = displayValue;
        console.log(`This is the value of counter: ${counter}`);
        console.log(`this is the value of equalsCounter: ${equalsCounter}`);
        console.log(`this is the value of secondValueCounter: ${secondValueCounter}`);
        --equalsCounter;
        } else if(counter <= 0 || equalsCounter == 1 ){
            displayValue = displayValue + keyValue;
            console.log(displayValue);
            inputDisplay.innerText = displayValue;
            console.log(`This is the value of counter: ${counter}`);
            console.log(`this is the value of equalsCounter: ${equalsCounter}`);
            console.log(`this is the value of secondValueCounter: ${secondValueCounter}`);
            --equalsCounter;
            --counter;
         } else {
            console.log("below is the else for produceDisplayValue");
            console.log(`This is the value of counter: ${counter}`);
            console.log(`this is the value of equalsCounter: ${equalsCounter}`);
            console.log(`this is the value of secondValueCounter: ${secondValueCounter}`);
            secondDisplayValue = secondDisplayValue + keyValue;
            
            inputDisplay.innerText = secondDisplayValue;   
            console.log(`This is the value of ${counter}`)
          
        }
}


var equal = document.getElementById("equals");
equal.addEventListener("click", () => {
    doMath();
    console.log("is equals working");
    console.log(secondDisplayValue);
    equalsCounter = 0;
    ++equalsCounter;
    counter=0;
    console.log(`Test of equals function. Counter equals ${counter}`)
    
});


function postEqualsFunction(x){
    displayValue = "";
    secondDisplayValue = "";
    inputDisplay.innerText = "";
    produceDisplayValue(x);
   // --equalsCounter;
    console.log(`equalsCounter is ${equalsCounter}`);
}

/*
function counterDeincrement(counter){
    let i = 0;
    while (i < 0){
        --counter;
    }
}
*/

function doMath(){
    if (plusCounter >= 1){
        addedValue = sum(displayValue,secondDisplayValue);
        displayValue = addedValue
        secondDisplayValue = "";
        inputDisplay.innerText = displayValue;
        --plusCounter;
       // minusCounter = 0;
       // divideCounter = 0;
       // multiplyCounter = 0;
        --counter;
        --equalsCounter;
        --secondValueCounter;
         } else if (minusCounter >= 1){
             subtractedValue = subtract(displayValue,secondDisplayValue);
             displayValue = subtractedValue
             secondDisplayValue = "";
             inputDisplay.innerText = subtractedValue;
             --minusCounter;
             --equalsCounter;
             --counter;
         //    divideCounter = 0;
         //    multiplyCounter = 0;
        //     plusCounter = 0;
            --secondValueCounter;
         } else if (multiplyCounter >= 1){
              multipliedValue = multiply(displayValue,secondDisplayValue);
              displayValue = multipliedValue
             secondDisplayValue = "";
             inputDisplay.innerText = multipliedValue;
             --multiplyCounter;
             --equalsCounter;
             --secondValueCounter;
         } else if (divideCounter >= 1){
             dividedValue = divide(displayValue,secondDisplayValue);
             displayValue = dividedValue
             secondDisplayValue = "";
            inputDisplay.innerText = dividedValue;
            --divideCounter;
            --equalsCounter;
            --secondValueCounter;
        };
};

var plus = document.getElementById("plus");
plus.addEventListener("click", () =>{
    --secondValueCounter;
    if (minusCounter == 1 || multiplyCounter == 1 || divideCounter == 1){
        console.log(`displayValue is ${displayValue}. secondDisplayValue is ${secondDisplayValue}`)
        doMath();
      }
    ++counter;
    ++plusCounter;
    if (plusCounter == 2){
        console.log(`displayValue is ${displayValue}. secondDisplayValue is ${secondDisplayValue}`)
        doMath();
    }
    console.log(`This is the value of ${counter}`);
});


var minus = document.getElementById("minus");
minus.addEventListener("click", () =>{
    --secondValueCounter;
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
    --secondValueCounter;
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
    --secondValueCounter;
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
    ++secondValueCounter;
    //--counter;
    if(equalsCounter == 1){
        postEqualsFunction(firstKeyValue);
    } else{
    produceDisplayValue(firstKeyValue);
    }
});

var two = document.getElementById("2");
two.addEventListener("click", ()=>{
    ++secondValueCounter;
    //--counter;
    let secondKeyValue = two.id.toString();
    if(equalsCounter == 1){
        postEqualsFunction(secondKeyValue);
    } else{
    produceDisplayValue(secondKeyValue);
    }
});

var three = document.getElementById("3");
three.addEventListener("click", ()=>{
    ++secondValueCounter;
    let thirdKeyValue = three.id.toString();
    if(equalsCounter == 1){
        postEqualsFunction(thirdKeyValue);
    } else{
    produceDisplayValue(thirdKeyValue);
    }
}); 

var four = document.getElementById("4");
four.addEventListener("click", () =>{
    ++secondValueCounter;
    let fourthKeyValue = four.id.toString();
    if(equalsCounter == 1){
        postEqualsFunction(fourthKeyValue);
    } else{
    produceDisplayValue(fourthKeyValue);
    }
});

var five = document.getElementById("5");
five.addEventListener("click", () => {
    ++secondValueCounter;
    let fifthKeyValue = five.id.toString();
    if(equalsCounter == 1){
        postEqualsFunction(fifthKeyValue);
    } else{
    produceDisplayValue(fifthKeyValue);
    }
})


var six = document.getElementById("6");
six.addEventListener("click", () => {
    ++secondValueCounter;
    let sixthKeyValue = six.id.toString();
    if(equalsCounter == 1){
        postEqualsFunction(sixthKeyValue);
    } else{
    produceDisplayValue(sixthKeyValue);
    }
});

var seven = document.getElementById("7");
seven.addEventListener("click", () => {
    ++secondValueCounter;
    let seventhKeyValue = seven.id.toString();
    if(equalsCounter == 1){
        postEqualsFunction(seventhKeyValue);
    } else{
    produceDisplayValue(seventhKeyValue);
    }
});

var eight = document.getElementById("8");
eight.addEventListener("click", () => {
    ++secondValueCounter;
    let eighthKeyValue = eight.id.toString();
    if(equalsCounter == 1){
        postEqualsFunction(eighthKeyValue);
    } else{
    produceDisplayValue(eighthKeyValue);
    }
});

var nine = document.getElementById("9");
nine.addEventListener("click", () => {
    ++secondValueCounter;
    let ninthKeyValue = nine.id.toString();
    if(equalsCounter == 1){
        postEqualsFunction(ninthKeyValue);
    } else{
    produceDisplayValue(ninthKeyValue);
    }
});

var zero = document.getElementById("0");
zero.addEventListener("click", () => {
    ++secondValueCounter;
    let zerothKeyValue = zero.id.toString();
    if(equalsCounter == 1){
        postEqualsFunction(zerothKeyValue);
    } else{
    produceDisplayValue(zerothKeyValue);
    }
});

var period = document.getElementById("period");
period.addEventListener("click", () => {
    ++secondValueCounter;
    let periodKeyValue = ".";
    if(equalsCounter == 1){
        postEqualsFunction(periodKeyValue);
    } else{
    produceDisplayValue(periodKeyValue);
    }
});



var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    
    displayValue = "";
    secondDisplayValue = "";
    inputDisplay.innerText = "";
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


