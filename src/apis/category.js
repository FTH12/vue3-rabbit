import request from "@/utils/http"

export const getCategoryAPI = (id) => {
  return request.get('/category', {
    params: {
      id
    }
  })
}

export const getCategoryFilterAPI = (id) => {
  return request.get('/category/sub/filter',{
    params: {
      id
    }
  })
}

/**
 *
 * @param {*} data {
 *     categoryId: 100500,
 *     page:1 ,
 *     pageSize:20,
 *     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 * }
 * @returns
 */
export const getSubCategoryAPI = (data) => {
  return request.post('/category/goods/temporary', data)
}
