require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000

app.use(cors({
    origin: [
        'https://ifinityscrollbydata.netlify.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}))
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xlnwpku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const userCollection = client.db('userDB').collection('allUsers');

        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result)
        })
        app.get('/allUsers', async (req, res) => {
            const take = parseInt(req.query.take) || 12;
            const skip = parseInt(req.query.skip) || 0;
            const total = await userCollection.countDocuments();
            const result = await userCollection.find()
                .skip(skip)
                .limit(take)
                .toArray();
            res.send({ total, result })
        })
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (err) {

        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send({ message: 'users api server in running' })
})

app.listen(port, () => {
    console.log(`users api server in running on port ${port}`);
})