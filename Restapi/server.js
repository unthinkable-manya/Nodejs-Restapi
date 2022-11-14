const express = require("express")
const app = express();
const port = 5000;
const studentsRoutes = require('./src/student/routes')


app.use(express.json());
app.get("/",(req,res) => {
    res.send("Hello World!")
})

app.use('/api/v1/students',studentsRoutes);

app.listen(port,() => console.log(`app listening port ${port}`))