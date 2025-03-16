//  reduce.. use case shopping cart
//  It takes initialvalue, accumulator, currentvalue

const arr1 = [1,2,3,4,5]
const result = arr1.reduce((acc,curr)=> acc + curr,0)
console.log(result)


const shoppingCart = [
    {
    itemName: "mobile development course",
    price : 2999       
    },
    {
    itemName: "Java Script course",
    price : 999       
    },
    {
      itemName: "Data Science Course",
      price: 12999  
    }]

    const total_price_to_pay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
    console.log(total_price_to_pay)