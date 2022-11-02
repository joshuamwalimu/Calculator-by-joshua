const expressionInput = document.querySelector('.expression')
const answer = document.querySelector('.answer')

const buttons = document.querySelector('.buttons')

let expressionArray = []
let displayArray = []

buttons.addEventListener('click',function(event){
  const clicked = event.target
  const classes=clicked.classList
  const isSpecial = classes.contains('btn-special')
  
  if(isSpecial){
    const isEquals = classes.contains('btn-equals')
    const isC = classes.contains('c')
    const isTimes = classes.contains('times')
    const isDivide = classes.contains('divide')
    const isDelete = classes.contains('delete')
    if(isEquals){
      try{
      answer.value = eval(expressionArray.join('')).toFixed(8)*1
      }catch(e){
        answer.value = 'Syntax error!'
      }
    }else if(isC){
      expressionArray = []
      displayArray = []
      answer.value = 0
    }else if(isDelete){
      expressionArray.pop()
      displayArray.pop()
      answer.value = 0
    }else if(isDivide){
      displayArray.push('÷')
      expressionArray.push('/')
    }else if(isTimes){
      displayArray.push('×')
      expressionArray.push('*')
    }
  }else{
    expressionArray.push(clicked.innerText)
    displayArray.push(clicked.innerText)
    answer.value = 0
  }
  
  expressionInput.value = displayArray.join('')
  
})
