var file;
var table;

var pages = [];
var buckets = [];

async function loadFile(file) {
  let text = await file.text();
  table = text.split("\n");
  console.log(table);
}

async function iniciarBanco(
  pageQuantity,
  pageLength,
  bucketSize,
  bucketAmount
) {
  pageLength = parseInt(pageLength)
  pageQuantity = parseInt(pageQuantity)

  for (i = 0; i < (pageQuantity * pageLength); i += pageLength) 
    pages.push(new Page(i, i + pageLength, table));
  

  for (i = 0; i < bucketAmount; i++) buckets.push(new Bucket(bucketSize));

  console.log(pages);
  console.log(buckets);
}

function hash(string, bucketAmount) {
  return (
    (string.slice(0, 1).charCodeAt(0) - string.slice(-1).charCodeAt(0)) %
    bucketAmount
  );
}
