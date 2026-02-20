var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "ap-cardinality",
  "level": "1",
  "url": "ap-cardinality.html",
  "type": "Appendix",
  "number": "A",
  "title": "Cardinality",
  "body": " Cardinality  "
},
{
  "id": "ap-axioms-of-real-numbers",
  "level": "1",
  "url": "ap-axioms-of-real-numbers.html",
  "type": "Appendix",
  "number": "B",
  "title": "Axioms of Real Numbers",
  "body": " Axioms of Real Numbers  "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
