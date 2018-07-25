import ajax from './ajax'
let base = '/api'
export const getGoods = ({page, pageSize, orderFlag, priceLevel}) => ajax(base + '/goods/list',{page, pageSize, orderFlag, priceLevel})
