// /inventory
// /inventory/vegetable

// HTTP Method	Behavior
// GET	Get all vegetable in inventory
// POST	Add vegetable to to inventory

const express = require('express');

const router = express.Router();

const Inventory = require('../../models/inventory');

router.get('/all', (req, res) => res.json(Inventory.getAllItem()));

router.post('/add', (req, res) => res.json(Inventory.addItem(req.body)))

module.exports = router;