const add = function(a, b) { return a + b};

const subtract = function(a, b) { return a - b };

const multiply = function(a, b) {return a * b};

const divide = function(a, b) { return a / b};

const operator = function(operation, a, b){
    return(operation(a,b));
}

const numberButtons = document.querySelectorAll('operand');
const operationButtons = document.querySelectorAll('operator');
const equalsButton = document.querySelector('equals');
const deleteButton = document.querySelector('delete');
const allClearButton = document.querySelector('clear');
const previousOperandEle = document.querySelector('previous-operand');
const currentOperandEle = document.querySelector('current-operand');

class Calculator {
    constructor(previousOperandEle, currentOperandEle){
        this.previousOperandEle = previousOperandEle;
        this.currentOperandEle = currentOperandEle;
        this.clear()    
    }
}

function clear(){

}

function delete(){

}

function appendNumber(number){

}

function chooseOperation(operation){

}

function compute(){

}

function updateDisplay(){

}