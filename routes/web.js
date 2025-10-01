import express from "express"
import * as profilecontroller from "../contoller/profileController.js"

const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})

web.get('/:username',profilecontroller.publicProfile)

web.get('/:profile', profilecontroller.publicProfile)

export default web