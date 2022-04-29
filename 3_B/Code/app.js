const express = require('express');
const mongoose = require('mongoose');
const User = require('./model/db');

const app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

const dbURI = "mongodb://127.0.0.1:27017/wad-db";

(async () => {
    await mongoose.connect(dbURI);
    console.log("connected to db");
    app.listen(3000);
}) ()

app.get("/user", async (req, res) => {
    try {
        const users = await User.find();
        const userNames = users.map(ele => ele.username);
        res.send(userNames);
    } catch (error) {
        console.log(error);
        res.status(404).send("Could not find users");   
    }
});

app.post("/user", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send("Added user successfully");
    } catch (error) {
        console.log(error);
        res.status(404).send("Could not add user");
    }
});

app.put("/user", async (req, res) => {
    try {
        await User.findOneAndUpdate({username : req.body.username}, {username: req.body.usernameNew, password : req.body.password});
        res.status(200).send("Updated user successfully");
    } catch (error) {
        console.log(error);
        res.status(404).send("Could not update user");
    }
});

app.delete("/user", async (req, res) => {
    try {
        await User.findOneAndDelete({username : req.body.username});
        res.status(200).send("Deleted user successfully");
    } catch (error) {
        console.log(error);
        res.status(200).send("Could not delete user");
    }
});