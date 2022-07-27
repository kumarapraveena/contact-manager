const mongoose = require("mongoose");

const userContactsSchema = new mongoose.Schema({
    username: {
        type : String,
        require: true
    },
    contacts: {
        type : Array,
        require: true
    }
})

const userContacts = mongoose.model("userContacts",userContactsSchema);

module.exports = userContacts;