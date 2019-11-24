const express= require('express');
const app = express();
const path = require('path');

const PORT = process.env.port || 3000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })

}

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
})