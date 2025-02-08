const bus = require("../models/bus");

const express=require("express")
const router=express.Router();

router.post("/bus",bus.addbus)

module.exports=router;


