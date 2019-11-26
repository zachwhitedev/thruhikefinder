const express= require('express');
const app = express();
const path = require('path');

app.use(
    expressStaticGzip(path.join(__dirname, 'build'), {
    }),
);

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })

}

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
})