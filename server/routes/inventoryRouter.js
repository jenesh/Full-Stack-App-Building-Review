// /inventory/vegetable/<id>

// HTTP Method	Behavior
// GET	Get vegetable by id
// PATH	Update vegetable
// DELETE	Delete vegetable

const express = require('express');

const router = express.Router();

const Inventory = require('../../models/inventory');

router.get('/id', (req, res) => res.json(Inventory.getItemById(req.query.id, req.query.type)));

router.put('/update', (req, res) => res.json(Inventory.updateItem(req.body.item, req.body.type)));

router.delete('/delete', (req, res) => res.json(Inventory.removeItem(req.body.name, req.body.type)));

module.exports = router;