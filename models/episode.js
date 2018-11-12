const mongoose = require('mongoose')

const Episode = mongoose.model('Episode', {
    city: [
        {
            href: {
                type: String,
                required: false,
                minlength: 1,
                trim: true
            },
            text: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
            }
        }
    ],
    description: [
        
    ]

})