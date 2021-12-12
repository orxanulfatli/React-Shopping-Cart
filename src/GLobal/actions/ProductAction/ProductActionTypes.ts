export enum ProductActionTypes {
    GET_PRODUCT_ID = 'GET_PRODUCT_ID'
}

interface GetProductId {
    type:ProductActionTypes.GET_PRODUCT_ID
    payload:number|null
}
export type ProductActionType = GetProductId