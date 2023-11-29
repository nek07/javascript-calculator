document.addEventListener('DOMContentLoaded', function () {
    let process = '';
    let firstNumber = 0;
    let operator;


    document.querySelectorAll('.num').forEach(function (button) {
        button.addEventListener('click', function () {
            let innerValue = this.textContent;
            process = process + innerValue;
            document.querySelector('.pole').textContent = process;
        });
    });
   

    document.querySelector('.remove-one').addEventListener('click', function() {
        process = process.slice(0, process.length - 1);
        document.querySelector('.pole').textContent = process;
        clearInput();
    });
    
    document.querySelector('.remove-all').addEventListener('click', function() {
        
        process = ""
        clearInput();
    });
    document.querySelector('.remove').addEventListener('click', function() {
        process = ""
        clearInput()
    });
    document.querySelectorAll('.operator').forEach(function (button) {
        button.addEventListener('click', function () {
        firstNumber = parseInt(process, 10);
        console.log(firstNumber);
        operator = this.textContent;
        process = ""; 
        clearInput(); 
    })
    });
    
    
    document.querySelector('.result').addEventListener('click', function() {
        let result = concreteOperatorResult(operator,firstNumber,process);
        console.log(result)
        if(result!=null){
            process = result.toString()
            document.querySelector('.pole').textContent = process;
        }
        else {
            document.querySelector('.pole').textContent = "ERROR";        
        }
        
    });
    document.querySelector('.sqrt').addEventListener('click', function() {
        process = Math.sqrt(parseInt(process)).toString();
        document.querySelector('.pole').textContent = process;
    })
    document.querySelector('.one-divide-x').addEventListener('click', function() {
        process = (1/parseInt(process)).toString();
        document.querySelector('.pole').textContent = process;
    })
    document.querySelector('.x-power').addEventListener('click', function() {
        process = Math.pow(parseInt(process),2).toString();
        document.querySelector('.pole').textContent = process;
    })
    function isZero(){
        return process.length == 0 ? true : false;
    }
    function clearInput() {
        if(isZero()==true){
            document.querySelector('.pole').textContent = 0;
        }
   
    }
    function concreteOperatorResult(operator,firstNumber,secondNumber) {
        let result;
        switch (operator) {
            case '+':
                result = parseInt(firstNumber,10) + parseInt(secondNumber,10);
                break;
            case '-':
                result = parseInt(firstNumber,10) - parseInt(secondNumber,10);
                break;
            case '/':
                result = parseInt(firstNumber,10) / parseInt(secondNumber,10);
                break;
            case '*':
                result = parseInt(firstNumber,10) * parseInt(secondNumber,10);
                break;
            default:
                result = null;
        }
        return result;
    }
    

});