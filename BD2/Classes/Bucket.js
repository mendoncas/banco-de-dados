class Bucket {
  constructor(size) {
    this.content = [];
    this.size = size;
    this.next = null;
  }

  addTuple(string, pageIndex) {
    console.log(`adicionando ${string} da página ${pageIndex}`);
    if (this.content.length < this.size)
      this.content.push(new Tuple(string, pageIndex));
    else {
      if (this.next == null) {
        this.next = new Bucket(this.size);
        colisions++;
      }
      this.next.addTuple(string, pageIndex);
    }
  }

  // TODO
  // fazer a busca passando como parâmetro a string
  searchString(string) {
    this.content.forEach((tuple) => {
      if (tuple.content == string) return tuple;
    });
    if (this.next != null) return this.next.searchString(string);
  }
}
