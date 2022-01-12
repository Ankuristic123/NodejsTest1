const mongoose = require('mongoose');


var dataSchema = new mongoose.Schema({
    PacketNo:{type:String},
    Shape:{type:String},
    Weight:{type:Number},
    Color:{type:String},
    Purity:{type:String},
    Cut:{type:String},
    Pol:{type:String},
    Sym:{type:String},
    Fls:{type:String},
    Lab:{type:String},
    Rate:{type:Number},
    Disc:{type:Number}

})

module.export = mongoose.model("data",dataSchema);