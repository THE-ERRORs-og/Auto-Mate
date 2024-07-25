const mongoose = require("mongoose");

// this is the schema for the chatroom collection in the database
// this schema is used to store the meta data of a chat room
const chatRoomSchema = new mongoose.Schema(
  {
    travel_time: {
      type: String, // Store time as string in "HH:MM:SS" format
      match: /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, // Simple regex for time format validation
    },
    no_of_person: {
      type: String,
      maxlength: 4,
    },
    date: {
      type: Date,
    },
    room_name: {
      type: String,
      maxlength: 100,
    },
    dest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },
    jstart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },
  },
  { timestamps: true }
);

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

module.exports = ChatRoom;
