var mongoose = require('mongoose')
const Loan = mongoose.model('Loan', {
    account_no: { 
        type: Number, 
        min: 1, 
        required: true,
        unique: true
    },
    customer_name:{ 
        type: String,  
        required: true,
    },
    loan_amount: { 
        type: Number,  
        required: true,
    },
    instalments: { 
        type: Number,  
        required: true,
    },
    int_rate: { 
        type: Number,  
    },
    start_date: { 
        type: Date,  
        required: true,
    },
    father_name:{ 
        type: String,  
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'open',
        enum : ['open','closed']
    }

});
module.exports = Loan