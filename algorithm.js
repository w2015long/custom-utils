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
     * 选择排序
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
     * 快速排序
     * 简单说： 找到一个数作为参考，比这个数字大的放在数字左边，比它小的放在右边； 然后分别再对左边和右变的序列做相同的操作:
     1.选择一个基准元素，将列表分割成两个子序列；
     2.对列表重新排序，将所有小于基准值的元素放在基准值前面，所有大于基准值的元素放在基准值的后面；
     3.分别对较小元素的子序列和较大元素的子序列重复步骤1和2
     */
    quickSort(array) {
        const arr = [...array];
        if (arr.length < 2) {
            return arr;
        }
        const thanValue = arr.shift(), left = [], right = [];
        for (let i = 0; i < arr.length; i++) {
            const curr = arr[i];
            if (thanValue < curr) {
                right.push(curr);
            } else {
                left.push(curr);
            }
        }
        return [...this.quickSort(left), thanValue, ...this.quickSort(right)]
    }
}