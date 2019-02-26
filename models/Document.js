const mongoose = require('mongoose');

const layoutSchema = new mongoose.Schema({
  user: Number, // id for user
  name: String, // String
  tag: String, // String
  format: String //JSON
}, { timestamps: true });

const entrySchema = new mongoose.Schema({
  user: Number, // id for user
  name: String, //String
  title: String, //String
  value: String, // JSON
  links: String // JSON Array
}, { timestamps: true });

const Entry = mongoose.model('Entry', entrySchema);
const Layout = mongoose.model('Layout', layoutSchema);

module.exports.layout = Layout;
module.exports.entry = Entry;
