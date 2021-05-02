const express = require('express')

const {getAllData,getAData,addPerson} =require("../controllers/dataController")
const router = express.Router()

router.route("/").get(getAllData)
router.route("/:_name").get(getAData)
router.route("/").post(addPerson)

module.exports =router
