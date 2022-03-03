var file;
qtdPaginas = 10;
qtdTuplasPPagina = 5;
NumBucket = 5;
TamBucket = 2;

async function loadFile(file) {
  let text = await file.text();
  let table = text.split("\n");
  console.log(table[0]);
}

async function iniciarBanco(pageQuantity, pageLength, bucketAmount, bucketSize) {
  a = await hash("ta", NumBucket);
  buckets = []

  for (i = 0; i < bucketAmount; i++)
    buckets.push(new Bucket(bucketSize, pageLength));

  console.log(buckets);

  console.log(a);
}

function hash(string, bucketAmount) {
  return (
    (string.slice(0, 1).charCodeAt(0) - string.slice(-1).charCodeAt(0)) %
    bucketAmount
  );
}
