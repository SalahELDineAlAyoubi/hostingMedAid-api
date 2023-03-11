const ChatModel =require ("../Models/ChatModel.js");

exports.createChat = async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
   if (chat) {
     res.status(200).json(chat);
   } else {
     const newChat = new ChatModel({
       members: [req.params.firstId, req.params.secondId],
     });
     const result = await newChat.save();
     res.status(200).json(result);
   }
  } catch (error) {
    res.status(500).json(error);
  }
};
 