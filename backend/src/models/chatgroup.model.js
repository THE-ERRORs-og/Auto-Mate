const mongoose = require("mongoose");
// this is the schema for the chatgroup collection in the database
// this schema is used to store the chat goups joined by the user
const chatGroupSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    chat_room_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ChatRoom",
    },
    travel_status: {
      type: String,
      maxlength: 4, // n = not started, s = started, f = finished ,c = cancelled
      default: "n",
    },
    nop_with_you: {
      type: String,
      maxlength: 2, // number of persons travelling with the user
      default: "1",
    },
  },
  { timestamps: true }
);

const ChatGroup = mongoose.model("ChatGroup", chatGroupSchema);

module.exports = ChatGroup;
