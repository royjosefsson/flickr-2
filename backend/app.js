const express = require("express");
const cors = require('cors');

const { app: { PORT } } = require('./config');
const { v1 } = require('./routes');

const app = express();

app.use(cors());
app.use('/v1/search', v1.search)

const run = async () => {
    const maxHeapSz = require('v8').getHeapStatistics().heap_size_limit;
    const allocatedMemory = (maxHeapSz / 1024 ** 3).toFixed(1);
    await app.listen(PORT)
    console.table({
        "Name": "BACKEND",
        "Port": PORT,
        "Allocated Memory": allocatedMemory,
    });
}
run();