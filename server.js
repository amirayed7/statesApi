const express = require('express')
const app = express()
const PORT = 8000

const States = {
    'massachusetts': {
        'Capital': 'Boston',
        'Bird':'Chickopee'
    },

    'vermont':{
        'Capital': 'Montpelier',
        'Bird':'humming'
    },

    'new hampshire':{
        'Capital': 'Manchester',
        'Bird':'eagle'
    },

    'nada':{
        'Capital': 'nada',
        'Bird':'nada'
    }
}
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:state', (req,res)=>{
    const theStates = req.params.state.toLocaleLowerCase()

    if(States[theStates]){
        res.json(States[theStates])
    }
    else{
        res.json(States['nada'])
    }
})

app.listen(PORT, ()=>{
    console.log('port is running')
})