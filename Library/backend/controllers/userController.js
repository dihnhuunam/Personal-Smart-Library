// userController.js

const db = require('../models');

// model
const User = db.users;

// functions

// 1. Add User
const addUser = async (req, res) => {
    const id = req.params.id;
    let data = {
        UserID: id,
        FullName: req.body.FullName,
        Email: req.body.Email,
        Password: req.body.Password,
        Gender: req.body.Gender,
        Dob: req.body.Dob,
        // Other user properties as needed
    };
    try {
        const user = await User.create(data);
        res.status(200).send(user);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).send('Error adding user');
    }
};

// 2. Get All Users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({});
        res.status(200).send(users);
    } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).send('Error fetching all users');
    }
};

// 3. Get Single User
const getOneUser = async (req, res) => {
    let id = req.params.id;
    try {
        const user = await User.findOne({ where: { UserID: id } });
        res.status(200).send(user);
    } catch (error) {
        console.error('Error fetching single user:', error);
        res.status(500).send('Error fetching single user');
    }
};

// 4. Update User
const updateUser = async (req, res) => {
    let id = req.params.id;
    try {
        const updatedUser = await User.update(req.body, { where: { UserID: id } });
        res.status(200).send(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Error updating user');
    }
};

// 5. Delete User by ID
const deleteUser = async (req, res) => {
    let id = req.params.id;
    try {
        await User.destroy({ where: { UserID: id } });
        res.status(200).send('User is deleted!');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Error deleting user');
    }
};

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
};


