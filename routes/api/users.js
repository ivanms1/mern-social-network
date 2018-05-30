const express = require('express');
const router = express.Router();

// GET to api/users/test
// Tests users route
// Public router
router.get('/test', (req, res) => {
	res.json({msg: "users works"})
});

module.exports = router;