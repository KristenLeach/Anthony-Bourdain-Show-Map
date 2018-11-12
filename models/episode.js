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
        {
            text: {
                type: String,
                required: false,
                minlength: 1,
                trim: true
            }
        }
    ],
    show: [
        {
            text: {
                type: String,
                required: true,
                minlength: 1,
                trim: true
            }
        }
    ], 
    latlong: {
        lat: {
            type: Number,
            required: true,
            minlength: 1,
            trim: true
        }, 
        lng: {
            type: Number,
            required: true,
            minlength: 1,
            trim: true
        }
    }

})