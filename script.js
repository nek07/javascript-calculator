document.addEventListener('DOMContentLoaded', function () {
    let process = '';
    let result = '';
    function isZero(){
        return process.length == 0 ? true : false;
    }
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
        if(isZero()==true){
            document.querySelector('.pole').textContent = 0;
        }
    });
    
    isZero()
});