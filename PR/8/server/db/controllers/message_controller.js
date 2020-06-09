const Message = require('../models/message.js');

module.exports = {
    async load (req, res) {
        let msgs = await Message.find();
        msgs = msgs.filter(m => m.chatId == req.params.id)
        res.json(msgs);
        // let msgs = await Message.find();
        // msgs = msgs.filter(m => m._chatId == id);
        // res.json(msgs);
    },
    async send (req, res) {
        try {
            const { chatId, sender, text } = req.body;
            const newMsg = await Message.create({
                chatId, sender, text
            });
            res.json({ _id: newMsg._id, status: true });
        }
        catch {
            res.json({ status: false }); //.catch на фронте не сработает
        }
    }
};