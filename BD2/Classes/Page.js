class Page {
  constructor(first, last, table) {
    this.content = [];
    this.first = first;
    this.last = last;

    for (let i = first; i < last; i++) this.content.push(table[i]);
  }

  isFull() {
    return this.content.length == size;
  }
}
