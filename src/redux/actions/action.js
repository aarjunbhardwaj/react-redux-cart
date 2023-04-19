export const ADD = (item) => {
    return{
        type:"ADD_CART",
        payload:item
    }
}

// remove items 

export const DLT = (id) => {
    return {
        type : "RMV_CART",
        payload : id
    }
}

// remove individual items

export const Remove = (item) => {
    return{
        type:"RMV_ONE",
        payload:item
    }
}