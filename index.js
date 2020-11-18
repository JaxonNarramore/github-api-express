// Modules
const express = require('express');

const axios = require('axios');

// Create app
const app = express();

// Create a port
const PORT = process.env.PORT || 3000;

// Create HOME route
app.get('/', (req, res) => {

    // Acess API endpoint from Github
    axios.get('https://api.github.com/users/JaxonNarramore')
    .then(response => {
        // Print inside of terminal
        // console.log(response.data.login);
        const jaxonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(jaxonObject);
        res.send(jaxonObject)
    });
});

// Create SEI1019 route
app.get('/nitish', (req, res) => {

    // Acess API endpoint from Github
    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        // Print inside of terminal
        // console.log(response.data.login);
        const nitishObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(nitishObject);
        res.send(nitishObject)
    });
});

app.get('/nicole', (req, res) => {

    // Acess API endpoint from Github
    axios.get('https://api.github.com/users/NikkiHmltn')
    .then(response => {
        // Print inside of terminal
        // console.log(response.data.login);
        const nicoleObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(nicoleObject);
        res.send(nicoleObject)
    });
});

app.get('/carolina', (req, res) => {

    // Acess API endpoint from Github
    axios.get('https://api.github.com/users/canourrea23')
    .then(response => {
        // Print inside of terminal
        // console.log(response.data.login);
        const carolinaObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(carolinaObject);
        res.send(carolinaObject)
    });
});

app.get('/ariel', (req, res) => {

    // Acess API endpoint from Github
    axios.get('https://api.github.com/users/ajstrizzy')
    .then(response => {
        // Print inside of terminal
        // console.log(response.data.login);
        const arielObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(arielObject);
        res.send(arielObject)
    });
});

app.get('/ashton', (req, res) => {

    // Acess API endpoint from Github
    axios.get('https://api.github.com/users/swolepenguin')
    .then(response => {
        // Print inside of terminal
        // console.log(response.data.login);
        const ashtonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        }
        console.log(ashtonObject);
        res.send(ashtonObject)
    });
});

// Listen on a PORT 
app.listen(PORT, () => {
    console.log(`You're vibing to the sound of PORT ${PORT}`);
});