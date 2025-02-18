const $ = document
const toggleTheme = $.querySelector('.toggleTheme')
let typeIng = $.getElementById('typeIng');
const numBtn = $.querySelectorAll('.num-btn')
const result =$.getElementById('result')
const equal =$.getElementById('equal')
const clear = $.getElementById('clear')
const backSpaceBtn = $.getElementById('back-space')

let currentInput = '';



// **** Function **** //
function backSpace(){
    typeIng.innerHTML = typeIng.innerText.slice(0, -1)
    currentInput = typeIng.innerHTML
}

function deleteBtn(){
    currentInput = '';
    result.innerHTML = '';
    typeIng.innerHTML = '';
}

function equalBtn(){
    let num1 = typeIng.innerHTML
    result.innerHTML =  eval(num1)
}

function backSpaceToClearAll(){
    if(typeIng.innerHTML === ''){
        result.innerHTML = '';
    }
}
// **** Events **** //

toggleTheme.addEventListener('click', ()=>{
    if(localStorage.theme === 'dark'){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else{
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
})

numBtn.forEach(item =>{
    item.addEventListener('click', ()=>{
        currentInput += item.innerHTML;
        console.log(currentInput)
        typeIng.innerHTML = currentInput;
    })

})


window.addEventListener('keyup', (event)=>{

    switch (event.key){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '/':
        case '*':
        case '-':
        case '+':
        case '.':
            currentInput += event.key;
            typeIng.innerHTML = currentInput;
            break;
        case '=':
            equalBtn()
            break;
    }


    backSpaceToClearAll()

    if(event.keyCode === 8){
        backSpace()
    }

    if(event.keyCode === 46){
        deleteBtn()
    }

    if(event.keyCode === 13){
        equalBtn()
    }




})







equal.addEventListener('click' , equalBtn)

clear.addEventListener('click', deleteBtn)

backSpaceBtn.addEventListener('click',backSpace)
backSpaceBtn.addEventListener('click',backSpaceToClearAll)








