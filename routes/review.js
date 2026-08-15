const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync");
const ExpressError=require("../utils/ExpressError");
const Review = require("../models/review");
const Listing = require("../models/listing");
const{validateReview,isLoggedIn,isReviewAuthor}=require("../middleware");
const { isExpression } = require("joi");
const { createReview } = require("../controllers/reviews");


const reviewController=require("../controllers/reviews");

//reviews
//post review Route
router.post("/", 
    isLoggedIn,
    validateReview, 
    wrapAsync(reviewController.createReview));


//delete review route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview));

module.exports=router;


