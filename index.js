const { express } = require('./routes/authRoutes');
const cors = require('cors');
const app = express()
const authRoutes = require('./routes/authRoutes').router;

/**
 * Initialisation of the server
 */
app.use(cors());
app.use(express.json())
app.use('/', authRoutes);
app.listen(3000,()=>{
    console.log("Server connected on http://localhost:3000")
})