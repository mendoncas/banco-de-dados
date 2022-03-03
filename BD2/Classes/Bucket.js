class Bucket {
  constructor(size) {
	  this.size = size
    this.content = [] //guardar índices de tuplas aqui
	  // this.page = new Page(pageSize) um bucket deve apontar para uma página?
    this.next = null
  }

  addIndex(index){ //adiciona uma tupla ao conteúdo do bucket
    console.log(this.isFull)
    if(!this.isFull){
      this.content.push(index)
      console.log("adicionado")
    }
    else {
      if(this.next == null){
        this.next = new Bucket(this.size)
      }
      this.next.addIndex(index)
    }
    return
  }

  searchForString(string){
    res = this.content.filter((x => x.content == string))
    if(res == [] && this.next != null)
      return this.next.searchForString(string)
    else
      return(res)
  }

  isFull(){
    return this.content.length == this.size
  }
}
