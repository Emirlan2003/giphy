export const addLocal = async(details: any) => {
    let data = JSON.parse(localStorage.getItem('cart') || '{}')
    let filteredCart = data.filter((elem: any) => elem.id === details.id)
     if(filteredCart.length > 0){
         data = data.filter((elem: any) => elem.id !== details.id)
     }else{
         data.push(details)
     }
    localStorage.setItem('cart', JSON.stringify(data))
}


export function checkProductInCart(id: any){
    let cart = JSON.parse(localStorage.getItem('cart') || '{}')
    if(cart){
        let newCart = cart.filter((elem: any) => elem.id === id)
        return newCart.length > 0 ? true : false
    }else if(!cart){
        localStorage.setItem('cart', '[]')
    }
}