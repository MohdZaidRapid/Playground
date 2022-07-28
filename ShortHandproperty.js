const name = "Andrew"
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: "Philadelphia"
}
console.log(user)

// Object destructuring

const product = {
    label: "Red notebook",
    price: 20,
    stock: 201,
    salePrice: undefined,
    rating
}

const { label, price, stock, salePrice } = product

const arr = ({ label, price, stock, salePrice }) => {
    console.log(label)
}
arr(product)