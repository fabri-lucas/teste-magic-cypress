Cypress.on('uncaught:exception', (err) => {
 if(err.message.includes('Failed to fetch')) {
    return false;
 }
    
})

import './commands'