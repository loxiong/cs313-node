// set up the configuration of your PostgreSQL connection

require('dotenv').config();

const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://hivlxyadabcmit:1e70a4f15f0ec3bc1d55e1fb765cbfdbd52c5f257c10544d39ed312bc7e1678c@ec2-184-73-210-189.compute-1.amazonaws.com:5432/dckg6v1tvo0r3a?ssl=true';

const pool = new Pool({connectionString: connectionString});