class Calculator {
    constructor(prevOperandTxtEl, currOperandTxtEl) {
        this.prevOperandTxtEl = prevOperandTxtEl;
        this.currOperandTxtEl = currOperandTxtEl;
        this.clear();
    }
    clear() {
        this.prevOperand, this.currOperand = '';
        this.operation = undefined;
    }
    delete(){
        this.currOperand = this.currOperand.toString().slice(0,-1);
    }
    appendNumber(num){
        if (num === '.' && this.currOperand.includes('.')) return;
        this.currOperand = this.currOperand.toString() + num.toString();
    }
    chooseOperation(operation){
        if (this.currOperand === '') return;
        if (this.prevOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.prevOperand = this.currOperand;
        this.currOperand = '';
    }
    compute(){
        let computation;
        const prev = parseFloat(this.prevOperand);
        const curr = parseFloat(this.currOperand);
        if (isNaN(prev) || isNaN(curr)) return;
        switch (this.operation) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case 'x':
                computation = prev * curr;
                break;
            case '/':
                computation = prev / curr;
                break;
        
            default:
                return;
        }
        this.currOperand = computation;
        this.operation = undefined;
        this.prevOperand = '';
    }
    getDisplayNumber(num){
        const numStr = num.toString();
        const integerPart = parseFloat(numStr.split('.')[0]);
        const decimalPlace = numStr.split('.')[1];
        let integerDisplay;
        if (isNaN(integerPart)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerPart.toLocaleString("en", {maximumFractionDigits: 0});
        }
            
        if (decimalPlace != null) {
            return `${integerDisplay}.${decimalPlace}`;
        }
        else {
            return integerDisplay;
        }
    }
    updateDisplay(){
        this.currOperandTxtEl.innerText = this.getDisplayNumber(this.currOperand);
        if (this.operation != null) {
            this.prevOperandTxtEl.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
        } else {
            this.prevOperandTxtEl.innerText = '';
        }
    }
}

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const calculationBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const clearAllBtn = document.querySelector("[data-all-clear]");
const prevOperandTxtEl = document.querySelector("[data-prev-operand]");
const currOperandTxtEl = document.querySelector("[data-curr-operand]");

const calculator = new Calculator(prevOperandTxtEl, currOperandTxtEl);

numberBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNumber(btn.innerText);
        calculator.updateDisplay();
    });
});

operationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOperation(btn.innerText);
        calculator.updateDisplay();
    });
});

calculationBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

clearAllBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});