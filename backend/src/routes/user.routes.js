const { Router } = require("express")

const router = Router();


//to register the user
router.route("/createUser").post();

// to retrieve data o user info from db
router.route("/getUser").get();

// to retrive the user info from db to show in account page
router.route("/getCred").get();


//updating/changing password
router.route("/changePassword").post();

//update user info
router.route("/updateUser").post();

//retrieve all places in a city
router.route("/getPlaces").get();

//get travel history of a person
