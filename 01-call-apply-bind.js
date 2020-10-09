  <!-- 
    1. 区别call()/apply()/bind()
      call()/apply(): 调用函数, 指定函数中的this为第一个参数的值
      bind(obj): 返回一个新的函数, 新函数内部会调用原来的函数, 且this为第一参数的值
    2. 自定义call()/apply()
    3. 自定义实现bind()
   -->


    /* 自定义call() */
    Function.prototype.call = function (obj) {
      const args = [...arguments].filter((item, index) => index>0) // 得到所有需要传递的参数的数组
      obj.tempFn = this // 将当前函数保存到obj对象(临时)
      obj.tempFn(...args) // 方法(当前函数)执行, 内部的this是obj
      delete obj.tempFn // 删除属性
    }

    /* 自定义apply() */
    Function.prototype.apply = function (obj, args) {
      obj.tempFn = this // 将当前函数保存到obj对象(临时)
      obj.tempFn(...args) // 方法(当前函数)执行, 内部的this是obj
      delete obj.tempFn // 删除属性
    }
    
    
    /* 自定义bind() */
    Function.prototype.bind = function (obj) {
      obj = obj || window
      const args = []
      // arguments: 调用bind函数时传递的实参伪数组, 需要将从第2个开始, 都保存到args中
      if (arguments.length>1) {
        for (let i = 1; i < arguments.length; i++) {
          args.push(arguments[i])
        }
      }
      const self = this  // fn
      return function () { // 返回的新函数, 内部执行fn, 而且指定this为obj
        // arguments: 调用新函数时传递的实参伪数组, 所有都放到args中
        if (arguments.length>0) {
          for (let i = 0; i < arguments.length; i++) {
            args.push(arguments[i])
          }
        }
        // 调用原来函数, 并指定this为obj, 指定实参为args
        self.apply(obj, args)
      }
    }

    /* 自定义函数对象的call方法 */
    Function.prototype.call = function (obj, ...args) {
      // 如果传入的是null/undefined, this指定为window
      obj = obj || window

      // this(...args)
      // 给obj添加一个方法: 属性名任意, 属性值必须当前调用call的函数对象
      obj.tempFn = this
      // 通过obj调用这个方法
      obj.tempFn(...args)
      // 删除新添加的方法
      delete obj.tempFn
    }

    /* 自定义函数对象的apply方法 */
    Function.prototype.apply = function (obj, args) {
      // 如果传入的是null/undefined, this指定为window
      obj = obj || window
      // this(...args)
      // 给obj添加一个方法: 属性名任意, 属性值必须当前调用call的函数对象
      obj.tempFn = this
      // 通过obj调用这个方法
      obj.tempFn(...args)
      // 删除新添加的方法
      delete obj.tempFn
    }

    /* 
      自定义函数对象的bind方法
     */
    Function.prototype.bind = function (obj, ...args) {
      return (...args2) => {
        this.call(obj, ...args, ...args2)
      }
    }

    function fn(a, b) {
      console.log(a, b, this)
    }

    const obj = {m: 1}

    fn.call(obj, 2, 3)  // 相当于执行了obj.fn(2, 3)
    fn.apply(obj, [2, 3])
    fn.bind(obj)(2, 3)
    fn.bind(obj, 4)(2, 3)
    new fn.bind(obj, 4, 5)(2, 3)
