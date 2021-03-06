const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definition of the group schema

const PeriodSchema = new Schema({
    Mon : Array,
    Tue : Array,
    Wed : Array,
    Thu : Array,
    Fri : Array
});

const GroupSchema = new Schema ({
    Group : String,
    Calendar : String,
    Subject: String,
    Alumni: Array,
    Activities: Array,
    Periods: PeriodSchema,
    Status: String
});

const GroupModel = mongoose.model('group', GroupSchema);
const PeriodModel = mongoose.model('period', PeriodSchema); 

module.exports = { GroupModel, PeriodModel };