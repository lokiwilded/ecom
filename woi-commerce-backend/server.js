const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const redis = require('redis');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Redis Client Setup
const redisClient = redis.createClient();

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

// Middleware to check cache
const checkCache = (req, res, next) => {
    const { id } = req.params;

    redisClient.get(id, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            console.log('Cache hit');
            res.send(JSON.parse(data));
        } else {
            console.log('Cache miss');
            next();
        }
    });
};

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define Order Schema with Indexing
const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    orderDate: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true }
});

// Create Indexes
orderSchema.index({ userId: 1, orderDate: -1 }); // Compound index for optimized queries

const Order = mongoose.model('Order', orderSchema);

// Product Routes with Caching
app.get('/api/products/:id', checkCache, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            redisClient.setex(req.params.id, 3600, JSON.stringify(product)); // Cache for 1 hour
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving product' });
    }
});

// Order Routes with Optimized Queries
app.get('/api/orders', async (req, res) => {
    try {
        // Use projections to return only necessary fields
        const orders = await Order.find({ userId: req.user.id }, 'orderId orderDate totalAmount status');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving orders' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
