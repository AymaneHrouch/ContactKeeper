const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');

// @route   GET api/contacts
// @desc    Get All user contacts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('SERVER ERROR');
    }
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post(
    '/',
    [auth, [body('name', 'Name is required').notEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, type } = req.body;

        try {
            const newContact = new Contact({
                name,
                email,
                phone,
                type,
                user: req.user.id,
            });
            const contact = await newContact.save();

            res.json(contact);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('SERVER ERROR');
        }
        res.send('Add contact');
    }
);

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { name, email, phone, type } = req.body;

    // Build contact object
    const contactsFields = {};
    if (name) contactsFields.name = name;
    if (email) contactsFields.email = email;
    if (phone) contactsFields.phone = phone;
    if (type) contactsFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) return res.status(404).send({ msg: 'Contact not found.' });

        // Make sure user owns contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { $set: contactsFields },
            { new: true }
        );

        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('SERVER ERROR');
    }
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) return res.status(404).send({ msg: 'Contact not found.' });

        // Make sure user owns contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Contact.findByIdAndRemove(req.params.id);

        res.send({ msg: 'Contact removed.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('SERVER ERROR');
    }
});

module.exports = router;
