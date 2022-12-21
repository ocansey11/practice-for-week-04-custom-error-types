const ValidationError = require('./validation-error');

// Your code here

class MaximumLengthExceededError extends ValidationError{
  constructor(excessLength, message = 'Maximum length exceeded',...params){
    super(message,...params)

    this.name = 'MaximumLengthExceededError'
    if(excessLength){
      this.message =  `Maximum length exceeded by ${excessLength}`
    }

  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
