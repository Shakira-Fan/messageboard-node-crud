const Message = require("../models/Message");

const findMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createMessage = async (req, res, next) => {
  try {
    console.log(res.body);
    const message = await Message.create(req.body);
    res.status(201).json({ message });
  } catch (error) {
    console.log({ error });
  }
};

const deleteMessage = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const del = await Message.findByIdAndDelete({ _id });

    if (!del) {
      return res.status(404).json({ messgae: "No Items with that ID" });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  findMessages,
  deleteMessage,
  createMessage,
};
