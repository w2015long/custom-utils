export default {
    /**
     * 经典爬楼梯问题
     * 递归
     */
    recursionFn(n) {
        if (n === 1) return 1;
        if (n === 2) return 2;
        return this.recursionFn(n - 1) + this.recursionFn(n - 2);
    },
    /**
     * 动态规划
     */
    dpFn(n) {
        if (n === 1) return 1;
        if (n === 2) return 2;
        let a = 1,
            b = 2;
        let temp = a + b;
        for (let i = 3; i < n; i++) {
            a = b;
            b = temp;
            temp = a + b;
        }
        return temp;
    },
    /**
     * 冒泡排序
     * 外层循环，从最大值开始递减，因为内层是两两比较，因此最外层当>=2时即可停止；
     * 内层是两两比较，从0开始，比较j与j+1，因此，临界条件是j<i
     */
    bubleSort(array) {
        const arr = [...array];
        const len = arr.length;
        for (let i = len; i > 1; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    },
    /**
     * [选择排序]
     * 选择排序是从数组的开头开始，将第一个元素和其他元素作比较，
     * 检查完所有的元素后，最小的放在第一个位置
     * 接下来再开始从第二个元素开始，重复以上一直到最后。
     */
    selectSort(array) {
        const arr = [...array];
        const len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = i; j < len; j++) {
                if (arr[j] < arr[i]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
        return arr;
    },
    /**
     * [插入排序]
     * 首先将待排序的第一个记录作为一个有序段
     * 从第二个开始，到最后一个，依次和前面的有序段进行比较，确定插入位置
     */
    insertSort(array) {
        const arr = [...array];
        const len = arr.length;
        for (let i = 1; i < len; i++) {
            for (let j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                } else {
                    break;
                }
            }
        }
        return arr;
    },
    /**
     * 快速排序
     * 简单说： 找到一个数作为参考，比这个数字大的放在数字左边，比它小的放在右边； 然后分别再对左边和右变的序列做相同的操作:
     * 1.选择一个基准元素，将列表分割成两个子序列；
     * 2.对列表重新排序，将所有小于基准值的元素放在基准值前面，所有大于基准值的元素放在基准值的后面；
     * 3.分别对较小元素的子序列和较大元素的子序列重复步骤1和2
     */
    quickSort(array) {
        const arr = [...array];
        if (arr.length < 2) {
            return arr;
        }
        const thanValue = arr.shift(),
            left = [],
            right = [];
        for (let i = 0; i < arr.length; i++) {
            const curr = arr[i];
            if (thanValue < curr) {
                right.push(curr);
            } else {
                left.push(curr);
            }
        }
        return [
            ...this.quickSort(left),
            thanValue,
            ...this.quickSort(right)
        ];
    },
    /**
     * 希尔排序是插入排序的改良算法，但是核心理念与插入算法又不同，它会先比较距离较远的元素，而非相邻的元素
     * 让步长按照3、2、1来进行比较，相当于是三层循环和嵌套
     */
    shellSort(array, gap) {
        const arr = [...array];
        for (let k = 0; k < gap.length; k++) {
            let n = gap[k]; // 步长为n
            for (let i = k + n; i < arr.length; i++) {
                for (let j = i; j > 0; j -= n) {
                    if (arr[j] < arr[j - n]) {
                        [arr[j], arr[j - n]] = [arr[j - n], arr[j]];
                    } else {
                        continue;
                    }
                }
            }
        }
        return arr;
    },
    /**
     * [二分查找] 递归
     * 设定区间,low和high
     * 找出口： 找到target，返回target；
     *  否则寻找，当前次序没有找到，把区间缩小后递归
     */
    binaryFind(arr, target, low = 0, high = arr.length - 1) {
        const n = Math.floor((low + high) / 2);
        const curr = arr[n];
        if (target === curr) {
            return n;
        } else if (target > curr) {
            // tatget 在右边 区间右移
            return this.binaryFind(arr, target, n + 1, high);
        } else if (target < curr) {
            // tatget 在左边 区间左移
            return this.binaryFind(arr, target, low, n - 1);
        } else {
            return -1;
        }
    },
    /**
     * [二分查找] 循环
     * 设定区间,low和high
     * 找出口： 找到target，返回target；
     *  否则寻找，当前次序没有找到，把区间缩小
     */
    binaryFindByLoop(arr, target) {
        let low = 0,
            high = arr.length - 1,
            middle = undefined;
        while (low <= high) {
            middle = Math.floor((low + high) / 2);
            const curr = arr[middle];
            if (target === curr) {
                return middle;
            } else if (target > curr) {
                // tatget 在右边 区间右移
                low = middle + 1;
            } else if (target < curr) {
                // tatget 在左边 区间左移
                high = middle - 1;
            } else {
                return -1;
            }
        }
    },
    /**
     * 寻找出无重复字符的最长子串 
     */
    lengthOfLongestSubstring (s) {
        // 用于存储指针移动过程中的值
        let map = {};
        // 双指针
        let left = 0;
        let right = 0;
        // 结果
        let count = 0;
        // 指针移动终止条件
        while (right < s.length) {
            const char = s[right];
            // 根据题意我们需要寻找不重复的最长子串
            // 当 char 出现时我们需要移动左指针到重复字符的下一位
            if (char in map) {
                left = Math.max(left, map[char] + 1);
            }
            // 求解
            count = Math.max(count, right - left + 1);
            // 移动右指针并存下索引
            map[char] = right++;
        }
        return count;
    },
    /*
      防抖:
        @params:
          func[function]:最后要触发执行的函数
          wait[number]:频繁设定的界限
          immediate[boolean]:默认多次操作，我们识别的是最后一次，但是immediate=true，让其识别第一次
        @return
          可以被调用执行的函数
     */
    debounce(func,wait = 300,immediate = false){
        let timer = null;
        return function anonymous(...params){
        let now = immediate && !timer;

        //每次点击都把之前设置的定时器清除掉
        clearInterval(timer)
        //重新设置一个新的定时器监听wait事件内是否触发第二次
        timer = setTimeout(() => {
            timer = null;//垃圾回收机制
              //wait这么久的等待中，没有触发第二次
              !immediate ? func.call(this,...params) : null;
            }, wait);
            //如果是立即执行
            now ? func.call(this,...params) : null;
        }
    },
    /*
    @params:
        func[function]:最后要触发执行的函数
        wait[number]:触发的频率
    @return
        可以被调用执行的函数
    */
    throttle(func,wait = 300){
        let timer = null,
            previous = 0;//记录上一次操作时间
        return function anonymouse(...params){
            let now = new Date(),//记录当前时间
            remaining = wait - (now - previous);//记录还差多久达到我们一次触发的频率
            if (remaining <= 0) {
                //两次操作的间隔时间已经超过wait了
                window.clearInterval(timer);
                timer = null;
                previous = now;
                func.call(this,...params);
            } else if (!timer) {
                //两次操作的间隔时间还不符合触发的频率
                timer = setTimeout(() => {
                    timer = null;
                    previous = new Date();
                    func.call(this,...params);
                }, remaining);
            }
        }
    }
}
