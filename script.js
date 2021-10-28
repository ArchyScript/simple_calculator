  const previousOperand = document.getElementById('previous-operand')
  const operator = document.getElementById('operator')
  const currentOperand = document.getElementById('current-operand')
  currentOperand.value = 0

  const numberBtns = document.querySelectorAll('.number-btn')
  // Loops through all the number buttons
  numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {

      // Allows user to insert 'just one dot' per currentOperand Value
      if (numberBtn.id === 'dot' && currentOperand.value.includes('.')) return
      // check if the current operand value is not zero(0) and add the number clicked number button innerHTML 
      // to the current operand value else ignore the ZERO(0) and input the clicked number button 
      currentOperand.value != 0 ? currentOperand.value += numberBtn.innerHTML : currentOperand.value = numberBtn.innerHTML
    })
  })

  // Adding functions to the special-key
  const specialKeys = document.querySelectorAll('.special-key')
  specialKeys.forEach(specialKey => {
    specialKey.addEventListener('click', () => {

      // Make the 'C' button work
      if (specialKey.id === 'clear-all') {
        currentOperand.value = 0
        previousOperand.value = ''
        operator.value = ''
      }
      // Make the 'CE' button 
      if (specialKey.id === 'clear-current-operand') currentOperand.value = 0  
      
      // Make the 'NEGATE' button work
      if (specialKey.id === 'negate') currentOperand.value *= (-1)
    
      // Make the 'BACKSPACE' button work
      if (specialKey.id === 'backspace') {
        // returns zero for backspacing last text value
        if (currentOperand.value.length <= 1) return currentOperand.value = 0
        // Returns zero for backspacing last number
        currentOperand.value <= 9 ? currentOperand.value = 0 : currentOperand.value = currentOperand.value.toString().slice(0, -1)
      }
      
      // Make the 'SQUARE' button work
      if (specialKey.id === 'square') currentOperand.value **= 2
      
      // Make the 'INVERSE' button work
      if (specialKey.id === 'inverse') {
        if (currentOperand.value == 0) return
        currentOperand.value **= (-1)
      }
      
      // Make the 'SQRT' button work
      if (specialKey.id === 'sqr-root') currentOperand.value **= (0.5)  
    
      // Make the '%' button work
      if (specialKey.id === 'percent') currentOperand.value *= (0.01)  
  
    })
  })

  const operatorKeys = document.querySelectorAll('.operator-key')

  operatorKeys.forEach(operatorKey => {
    operatorKey.addEventListener('click', () => {
    
      if (currentOperand.value == 0 && previousOperand.value == '' && operator.value == '') return

      // Assign main arithmetic sign to a variable and use them later
      var ADD = '+'
      var SUBTRACT = '-'
      var MULTIPLY = '*'
      var DIVIDE = '/'

      // Make the ADD button work
      if (operatorKey.id === 'add') {
        if (previousOperand.value === '') {
          previousOperand.value = currentOperand.value
          operator.value = ADD
          currentOperand.value = 0
          return
        }
        if (currentOperand.value == 0 && previousOperand.value !== '' && operator.value !== '') {
          operator.value = ADD
          return
        }
        if (previousOperand.value !== '' & operator.value !== '') {
          if (currentOperand.value !== '') {
            var total = parseFloat(previousOperand.value) + operator.value + parseFloat(currentOperand.value)
            previousOperand.value = eval(total)
            operator.value = operatorKey.innerHTML
            currentOperand.value = 0
            return
          }
        }
      }

      // Make the SUBTRACT button work
      if (operatorKey.id === 'subtract') {
        if (previousOperand.value === '') {
          previousOperand.value = currentOperand.value
          operator.value = SUBTRACT
          currentOperand.value = 0
          return
        }
        if (currentOperand.value == 0 && previousOperand.value !== '' && operator.value !== '') {
          operator.value = SUBTRACT
          return
        }
        if (previousOperand.value !== '' & operator.value !== '') {

          if (currentOperand.value !== '') {
            var total = parseFloat(previousOperand.value) + operator.value + parseFloat(currentOperand.value)
            previousOperand.value = eval(total)
            operator.value = SUBTRACT
            currentOperand.value = 0
            return
          }
        }
      }

      // Make the MULTIPLY button work
      if (operatorKey.id === 'multiply') {
        if (previousOperand.value === '') {
          previousOperand.value = currentOperand.value
          operator.value = MULTIPLY
          currentOperand.value = 0
          return
        }
        if (currentOperand.value == 0 && previousOperand.value !== '' && operator.value !== '') {
          operator.value = MULTIPLY
          return
        }
        if (previousOperand.value !== '' & operator.value !== '') {
          if (currentOperand.value !== '') {
            var total = parseFloat(previousOperand.value) + operator.value + parseFloat(currentOperand.value)
            previousOperand.value = eval(total)
            operator.value = MULTIPLY
            currentOperand.value = 0
            return
          }
        }
      }

      // Make the DIVIDE button work
      if (operatorKey.id === 'divide') {
        if (previousOperand.value === '') {
          previousOperand.value = currentOperand.value
          operator.value = DIVIDE
          currentOperand.value = 0
          return
        }
        if (currentOperand.value == 0 && previousOperand.value !== '' && operator.value !== '') {
          operator.value = DIVIDE
          return
        }
        if (previousOperand.value !== '' & operator.value !== '') {
          if (currentOperand.value !== '' && currentOperand.value > 0) {
            var total = parseFloat(previousOperand.value) + operator.value + parseFloat(currentOperand.value)
            previousOperand.value = eval(total)
            operator.value = DIVIDE
            currentOperand.value = 0
            return
          }
        }
      }
    })
  })

  // Add function to the Equal Key
  var equalKey = document.querySelector('.equal-key')

  equalKey.addEventListener('click', () => {
    /* Not compulsory to add the next line of code below
    since other conditions can't be met if one of 
     previousOperand or operator value are empty */
    if (currentOperand.value == 0 && previousOperand.value == '' && operator.value == '') return

    if (previousOperand.value !== '' && operator.value !== '') {
      if (currentOperand.value == 0) {
        currentOperand.value = previousOperand.value
        previousOperand.value = ''
        operator.value = ''
        return
      }
      if (currentOperand.value !== '') {
        var total = parseFloat(previousOperand.value) + operator.value + parseFloat(currentOperand.value)
        currentOperand.value = eval(total)
        previousOperand.value = ''
        operator.value = ''
        return
      }
    }
  })
