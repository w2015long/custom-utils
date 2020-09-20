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
    }
}
