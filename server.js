const express = require('express');
console.log(express)

const app = express();

// Greetings

app.get('/greeting', (req, res) => {
        res.send("Hello, stranger.");
});

app.listen(3000);

app.get('/greeting/:name', (req, res) => {
    let myName = req.params.name
    res.send(` Hey what's up, ${myName}!`)

});

// Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
        let tipPercentage = Number(req.params.total) * Number(req.params.tipPercentage) / 100
        res.send(`The tip amount is ${tipPercentage}`)
});

// Magic 8 ball

const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/magic/:q', (req, res) => {
    req.params.q = "Will I find love?";
    
    
    res.send(`${req.params.q}: <h1>${answers[Math.floor(Math.random() * answers.length)]} </h1>`)
});

