class Bucket {
  constructor(size, index) {
    this.content = [];
    this.size = size;
    this.next = null;
    this.index = index;
  }

  addTuple(string, pageIndex) {
    if (this.content.length < this.size)
      this.content.push(new Tuple(string, pageIndex));
    else {
      if (this.next == null) {
        this.next = new Bucket(this.size, this.index);
        colisions++;
      }
      this.next.addTuple(string, pageIndex);
    }
  }

  isFull() {
    return this.content.length >= this.size
  }

  searchString(string) {
    this.content.forEach((tuple) => {
      if (tuple.content == string) {
        console.log(`tupla encontrada no bucket ${this.index}, apontando para a página ${tuple.index}`)
        pages[tuple.index].searchString(tuple.content)
      }
    });
    if (this.next != null) return this.next.searchString(string);
  }
}
