import mongoose from 'mongoose';

const Agent = new mongoose.Schema({
    firstName: {
        type: String,
    },
    nationality: {
        type: String,
    },
    languages: {
        type: [String],
    },
    yearOfCareerStart: {
        type: Number,
    },
    area: {
        type: String,
    },
    contacts: {
        phoneNumber: {
            type: String,
        },
        email: {
            type: String,
        },
    },
    company: {
        name: {
            type: String
        },
        logo: {
            type: String,
        },
    },
});

 module.exports = {
     Agent,
 }

