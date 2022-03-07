var file;
var table;

var pages = [];
var buckets = [];
var colisions = 0;

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
  pageLength = parseInt(pageLength);
  pageQuantity = parseInt(pageQuantity);

  // if(bucketAmount < (pageQuantity * pageLength) / bucketSize){
  //   alert("Calculo do Numero de Buckets deu BO");
  //   return
  // }

  for (i = 0; i < pageQuantity * pageLength; i += pageLength)
    pages.push(new Page(i, i + pageLength, table));

  for (i = 0; i < bucketAmount; i++) buckets.push(new Bucket(bucketSize));

  for (i = 0; i < pages.length; i++) {
    pages[i].content.forEach((tuple) => {
      buckets[hash(tuple, bucketAmount)].addTuple(tuple, i);
    });
  }

  // console.log(pages);
  console.log(buckets);
  console.log(colisions)
}

function hash(string, bucketAmount) {
  return (
    (string.slice(0, 1).charCodeAt(0) - string.slice(-1).charCodeAt(0)) %
    bucketAmount
  );
}
