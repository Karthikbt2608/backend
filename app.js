let express = require("express")
let app = express()
let port = 2000
let cors = require("cors")

let mongoose = require('mongoose')
mongoose.set('strictQuery', false);
//!require database models
let users = require('./models/users')


//!middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())//cross origin resource sharing


let dbURL = "mongodb://localhost:27017/foodie"
mongoose.connect(dbURL).then(() => {
    console.log("Connected to database");
})


app.post('/register', async (req, res) => {
    users.findOne({ email: req.body.email }, (err, userdata) => {
        if (userdata) {
            res.send({ message: "Seems like you already have an account with this name" })

        }
        else {
            let data = new users({
                name: req.body.name,
                number: req.body.number,
                email: req.body.email,
                password: req.body.password
            })
            data.save(() => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "user registered successfully" })
                }
            }
            )

        }



    })


})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})