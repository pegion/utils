// 题目描述
// 给定一个double类型的数组arr，其中的元素可正可负可0，返回子数组累乘的最大乘积。
// 例如arr=[-2.5，4，0，3，0.5，8，-1]，子数组[3，0.5，8]累乘可以获得最大的乘积12，所以返回12。

/**
 *
 * @param arr double浮点型一维数组
 * @return double浮点型
 */
function maxProduct (arr) {
  /**
    动态规划
    类似最大子序和
    不过需要考虑负数的问题：因为一个负数乘以一个负数可能会变为最大
  */
  let min = arr[0]
  let max = min
  let res = min //注意：max记录的不是最终的最大值，而是途中每一个选择的最大值，于是需要重新用一个值保存全局最大值。
  for (let i = 1; i < arr.length; i++) {
    let t_max = max
    //最大值可以从哪些地方产生：
    // 1. arr[i]  2. min*arr[i] 3.max*arr[i]
    max = Math.max(Math.max(arr[i], arr[i] * max), min * arr[i])
    //最小值可以从哪些地方产生：
    // 1. arr[i]  2.max*arr[i] 3.min*arr[i]
    min = Math.min(Math.min(arr[i], arr[i] * min), t_max * arr[i])
    res = Math.max(res, max) //更新全局最大值
  }
  return res
}
module.exports = {
  maxProduct: maxProduct
}
