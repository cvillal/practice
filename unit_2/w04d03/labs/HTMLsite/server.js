const express = require('express');
const app = express();

app.get('/hey', (request, response)=>{
    response.send(`
    <html>
        <body>
            <h1>HeyHEyHEY</h1>
        </body>
    </html>
`);
})



app.listen(3000, ()=>{
    console.log('listening...');
})