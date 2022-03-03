var file;
var table;
qtdPaginas = 10;
qtdTuplasPPagina = 5;
NumBucket = 5;
TamBucket = 2;

async function loadFile(file) {
  let text = await file.text();
  table = text.split("\n");
  console.log(table[0]);
}

async function iniciarBanco(pageQuantity, pageLength, bucketAmount, bucketSize) {
  buckets = []

  for (i = 0; i < bucketAmount; i++)
    buckets.push(new Bucket(bucketSize, pageLength));

  for (i = 0; i < 10; i++) {
    index = parseInt(Math.random()*400000)
    console.log(`a palavra ${table[index]} vai para o bucket ${hash(table[index], bucketAmount)}`)
    bucket = buckets[hash(table[index], bucketAmount)]
    bucket.addIndex(new Tuple(index, table[index]))
    
  }
}

function hash(string, bucketAmount) {
  return (
    (string.slice(0, 1).charCodeAt(0) - string.slice(-1).charCodeAt(0)) %
    bucketAmount
  );
}