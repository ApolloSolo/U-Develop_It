// Centeral hub for all API Routes
const express = require('express');
const router = express.Router();

// Takes in routes form canadate and partyRoutes and passes to the main index.js 
router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));
router.use(require('./voteRoutes'));

module.exports = router;