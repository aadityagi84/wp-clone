const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  iss: {
    type: String,
  },
  nbf: {
    type: Number,
  },
  aud: {
    type: String,
  },
  sub: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  email_verified: { type: Boolean },
  azp: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  given_name: {
    type: String,
  },
  family_name: {
    type: String,
  },
  iat: {
    type: Number,
  },
  exp: {
    type: Number,
  },
  jti: {
    type: String,
  },
});
const userData = mongoose.model("userData", userSchema);
module.exports = { userData };
