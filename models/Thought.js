const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // create getter method to format the timestamp
      get:(newDate) => newDate.toLocaleDateString()
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  // need a virtual to retrieve reactions array field on query
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// reactionCount
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
