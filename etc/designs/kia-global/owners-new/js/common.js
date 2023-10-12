$.fn.chunk = function(size) {
    var arr = [];
    console.log('size', size);
    console.log('this', this);

    for (var i = 0; i < this.length; i += size) {
      arr.push(this.slice(i, i + size));
    }
    
    return this.pushStack(arr, "chunk", size);
} 