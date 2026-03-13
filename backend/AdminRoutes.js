const express = require('express');
const router = express.Router();

// @route   POST /api/admin/login
// @desc    Admin login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    
    // Hardcoded logic as requested for now
    if (email === "admin@admin.com" && password === "admin") {
        res.status(200).json({
            success: true,
            message: "Login successful",
            admin: {
                id: "admin-1",
                email: "admin@admin.com",
                role: "admin"
            }
        });
    } else {
        res.status(401).json({
            success: false,
            message: "Invalid email or password"
        });
    }
});

module.exports = router;
