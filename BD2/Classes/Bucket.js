class Bucket {
  constructor(size, pageSize) {
	  this.size = size
	  this.page = new Page(pageSize)
  }
}
