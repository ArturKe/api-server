// const express = require("express");
import Express from "express";
const app = Express()

app.get("/", (req, res) => {
	res.send("<li>Our api server is working</li>")
})

app.listen(8080, () => {
	console.log("Started api service")
})