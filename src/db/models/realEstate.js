const mongoose = require ("mongoose")

const realEstate = new mongoose.Schema({
    series: {
        type: String
    },
    roomNumber: {
        type: Number
    },
    bathroom: {
        type: String
    },
    parkingType: {
        type: String
    },
    location: {
        type: String
    },
    square: {
        type: Number
    },
    floor: {
        actual: {
            type: Number
        },
        total: {
            type: Number
        },
    },
    price: {
        type: Number
    },
    description: String,
    conveniencies: {
        balcony: {
            required: Boolean,
        microwave: Boolean,
        wifi: Boolean,
        coveredParking: Boolean,
        tv: Boolean,
        centralHeating: Boolean,
        washingMachine: Boolean,
        airConditioner: Boolean,
        tableware: Boolean,
        swimmingPool: Boolean,
        gym: Boolean,
        workspace: Boolean,
        petFriendly: Boolean,
    }
})