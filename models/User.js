const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      //Use regex to match email
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
  },
  {
    // Virtual to retrieve length of user's friends array field on query
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// get the user's friend count
userSchema
  .virtual('friendCount')
  // Getter to get length of friends array
  .get(function () {
    return `${this.friends.length}`;
  })
  

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
