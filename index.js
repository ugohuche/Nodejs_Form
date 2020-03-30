const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<fieldset style="width:fit-content;">');
        res.write('<legend><i>Please enter a message below</i></legend>');
        res.write('<p>');
        res.write('<label>Message</label><br>');
        res.write('<form action="/message.js" method="POST">');
        res.write('<input name="message">');
        res.write('<p>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</fieldset>');
        return res.end();
        
        
    }
    
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

