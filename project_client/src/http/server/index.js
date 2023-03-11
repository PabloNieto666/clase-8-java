const express = requiere('express')
const cors = requiere('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/item', (req, res)=>{
    const data = {name: "Jhon", age:30}
    res.json(data)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})