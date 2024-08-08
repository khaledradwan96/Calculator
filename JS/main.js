const display = document.getElementById('display')

function appendToDisplay(input){
    if(display.value == '0'){
        display.value = input
    }else if(input == '+' || input == '-' || input == '*' || input == '/'){
        console.log('operation')
        if(display.value.slice(-1) == '+' || 
            display.value.slice(-1) == '-' || 
            display.value.slice(-1) == '*' || 
            display.value.slice(-1) == '/'
        ){
            display.value = display.value.slice(0, -1) + input
        }else{
            display.value +=input;
        }
    }else{
        display.value +=input;
    }
}

function deleteNum(){
    if(display.value.length == 1){
        display.value = '0'
    }else if(display.value == '0'){
        display.value = '0'
    }else{
        display.value = display.value.slice(0, -1)
    }
}

function clearDisplay(){
    display.value = "0";
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'Error';
    }
}
