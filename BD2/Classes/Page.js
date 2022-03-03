class Page {
  constructor(size) {
    this.content = [];
    this.size = size;
  }

  isFull() {
    return this.content.length == size;
  }
}
