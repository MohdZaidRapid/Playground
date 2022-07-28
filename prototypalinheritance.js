const arr = ["Zaid", "Mohd"]

let object = {
    name: "Rayan",
    city: "Delhi",
    getIntro: function () {
        console.log(this.name + "From" + this.city)
    }

}

let object2 = {
    name: "aditya",


}


object2.__proto__ = object.__proto__
