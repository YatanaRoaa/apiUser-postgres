// controllers/index.js
const models = require("../database/models");

// CREATE
const createUser = async (req, res) => {
  try {
    const user = await models.User.create(req.body);
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// READ ALL
const getAllUsers = async (req, res) => {
  try {
    const users = await models.User.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// UPDATE
const updateUser = async (req, res) => {
  const { id } = req.params;
  const nuevosDatos = req.body;

  try {
    const [rowsUpdated] = await models.User.update(nuevosDatos, {
      where: { id }
    });
    if (rowsUpdated === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const userActualizado = await models.User.findByPk(id);
    return res.status(200).json({ user: userActualizado });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await models.User.destroy({ where: { id } });
    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
};
