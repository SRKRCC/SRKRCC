import mongoose from 'mongoose';

const homeSchema = new mongoose.Schema({
    heroSection: {
        imageOrVideo: String,
        title: String,
        tagline: String
    },
    aboutUs: {
        type: String,
    },
    eventsSpotlight: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    testimonials: [{
        name: String,
        image: String,
        quote: String
    }],
    contactInfo: {
        email: String,
        phone: String,
        address: String
    }
})

export const Home = mongoose.model("Home", homeSchema);