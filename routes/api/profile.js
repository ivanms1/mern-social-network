const express = require('express');
const router = express.Router();

// GET to api/profile/test
// Tests profile route
// Public router
router.get('/test', (req, res) => {
	res.json({msg: "profile works"})
});

module.exports = router;