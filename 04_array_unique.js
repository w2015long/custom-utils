    /*
    方法1: 利用forEach()和indexOf()
      说明: 本质是双重遍历, 效率差些
    */
   Array.prototype.unique = function () {
    const arr = []
    this.forEach(item => {
      if (arr.indexOf(item)===-1) {
        arr.push(item)
      }
    })
    return arr
  }

  /*
  方法2: 利用forEach() + 对象容器
  说明: 只需一重遍历, 效率高些
  */
  Array.prototype.unique2 = function () {
    const arr = []
    const obj = {}
    this.forEach(item => {
      if (!obj.hasOwnProperty(item)) {
        obj[item] = true
        arr.push(item)
      }
    })
    return arr
  }

  /*
  方法3: 利用ES6语法
      1). from + Set
      2). ... + Set
  说明: 编码简洁
  */
  Array.prototype.unique3 = function () {
    return Array.from(new Set(this))
  }
  Array.prototype.unique4 = function () {
    return [...new Set(this)]
  }
  
  Array.prototype.unique = function () {
    const arr = []
    this.forEach(item => {
      if (arr.indexOf(item)===-1) {
        arr.push(item)
      }
      
    })
    return arr
  }

  Array.prototype.unique2 = function () {
    const arr = []
    const obj = {} // 对象容器
    this.forEach(item => {
      if (!obj.hasOwnProperty(item)) {
        obj[item] = true
        arr.push(item)
      }
      
    })
    return arr
  }

  Array.prototype.unique3 = function () {
    return [...new Set(this)]
  }
  Array.prototype.unique4 = function () {
    return Array.from(new Set(this))
  }

  console.log([2, 3, 2, 7, 6, 7].unique())
  console.log([2, 3, 2, 7, 6, 7].unique2())
  console.log([2, 3, 2, 7, 6, 7].unique3())
  console.log([2, 3, 2, 7, 6, 7].unique4())