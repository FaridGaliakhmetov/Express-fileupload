import express from "express";
import fileUpload from "express-fileupload";
const app = express();
const port = 3000;

app.use(fileUpload({}));

app.get("/", (req, res, next) => {
    res.send("Hello World");
    next();
});
app.get("/form", (req, res, next) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.write('<form action="/upload" method="POST" enctype="multipart/form-data">');
    res.write('<input type="file" name="avatar">');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
    next();
});
app.post("/upload", (req, res, next) => {
    
    req.files.avatar.mv('foto/'+req.files.avatar.name);
    res.end(req.files.avatar.name)
    console.log(req.files.avatar);
    
});


app.listen(port, () => { console.log(`Server sterted on port: ${port}`); });