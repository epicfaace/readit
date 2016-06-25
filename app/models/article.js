// Example model


function Article (opts) {
  if(!opts) opts = {};
  this.title = opts.title || 'a';
  this.url = opts.url || 'a';
  this.text = opts.text || 'a';
}

module.exports = Article;

