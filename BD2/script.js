var file; var table;
var pages = []; var buckets = [];
var colisions = 0;
var overflows = 0;
var bucketAmount = 0;

async function loadFile(file) {
  let text = await file.text();
  table = text.split("\n");
}

async function iniciarBanco(pageQuantity, pageLength, bucketSize, bucketNumber) {
  bucketAmount = bucketNumber;
  pageLength = parseInt(pageLength);
  pageQuantity = parseInt(pageQuantity);
  nBuckets = (pageQuantity * pageLength) / bucketSize

  if (bucketAmount < nBuckets) {
    alert("o número ideal de buckets é " + nBuckets);
    return
  }

  for (i = 0; i <= table.length; i += pageLength)
    pages.push(new Page(i, i + pageLength, table));

  for (i = 0; i < bucketAmount; i++)
    buckets.push(new Bucket(bucketSize, i));

  for (i = 0; i < pages.length; i++) {
    pages[i].content.forEach((tuple) => {
      if (tuple)
        buckets[hash(tuple, bucketAmount)].addTuple(tuple, i);
    });
  }

  console.log("BUCKETS:")
  console.log(buckets)
  console.log("PÁGINAS:")
  console.log(pages)
}

function checkPageQuantity(e) {
  document.getElementById("pageAmount").value = Math.round(table.length / e.value)
}

function searchWord() {
  w = document.getElementById("key").value
  index = hash(w, bucketAmount)
  buckets[index].searchString(w)
}

function generateStatistics() {
  [emptyBuckets, fullBuckets, usedBuckets] = [0, 0, 0]
  buckets.forEach((bucket) => {
    if (bucket.isFull())
      fullBuckets++
    if (bucket.content.length == 0)
      emptyBuckets++
    else
      usedBuckets++
  })

  alert(
    `
    De ${bucketAmount} buckets: 
    Buckets utilizados: ${usedBuckets} 
    Buckets vazios: ${emptyBuckets} 
    Buckets lotados: ${fullBuckets}
    Overflows: ${overflows}
    Colisões: ${colisions}
    * Colisões são contadas sempre que uma inserção falha devido a falta de espaço em um dado bucket
    `
  )
}

function hash(string, bucketAmount) {
  return (parseInt(Math.floor((
    string.slice(0, 1).charCodeAt(0) ** 2 +
    string.slice(-1).charCodeAt(0) ** 3 +
    string.slice(parseInt(string.length / 2)).charCodeAt(0) ** 3 +
    string.slice(parseInt(string.length * 3 / 5)).charCodeAt(0) ** 2 +
    string.slice(parseInt(string.length * 7 / 11)).charCodeAt(0) ** 3
  ) % bucketAmount)));
}
