let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}



const btn = document.querySelectorAll("button");
btn.forEach(function (button) {
    button.addEventListener("click", function (event) {
        let btnItem = event.target;
        let product = btnItem.parentElement.parentElement;
        let productImg = product.querySelector("img").src;
        let productName = product.querySelector(".name").innerText;
        let productPrice = product.querySelector(".order .box-container .box .info h4 span").innerText;
        addcart(productImg, productName, productPrice);
        deleteCart();
    })

})


function addcart(productImg, productName, productPrice) {
    let addtr = document.createElement("tr");
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let productT = document.querySelectorAll(".title");
        if (productT[i].innerHTML == productName) {
            alert("Your product is already in the cart");
            return;
        }
    }
    let trcontent = '<tr><td style = "display: flex; align-items: center" ><img style="width: 10rem" src="' + productImg + '"><span class="title">' + productName + '</span></td><td class="price"><p><span>' + productPrice + '</span><sup>VNĐ</sup></p></td><td><input class="number" style="width: 4rem; outline: none;" type="number" value="1" min="1"></td><td class="delete" style="cursor: pointer">Delete</td></tr>'
    addtr.innerHTML = trcontent;
    let cartTable = document.querySelector("tbody");
    cartTable.appendChild(addtr);
    carttotal()
}

function carttotal() {
    let cartItem = document.querySelectorAll("tbody tr");
    let totalC = 0;
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value;
        let productPriceValue = cartItem[i].querySelector(".price p span").innerText;
        let totalA = inputValue * productPriceValue * 1000;
        totalC = totalC + totalA;
    }

    let totalB = totalC.toLocaleString('de-DE');

    document.getElementById("total").innerHTML = totalB;
    inputChange();
}

function deleteCart() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let productD = document.querySelectorAll(".delete");
        productD[i].addEventListener("click", function (event) {
            let cartDelete = event.target;
            let cartItemR = cartDelete.parentElement;
            cartItemR.remove();
            carttotal();
            console.log(cartItemR);
        })

    }
}

function inputChange() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            carttotal();
        })

    }

}

const orderbtn = document.querySelector(".orderbtn")
    orderbtn.addEventListener("click", function (event) {
        alert("Thank you for using our service");
        location.reload();
    })

const cartbtn = document.querySelector(".bi-x-lg");
const cartshow = document.querySelector(".bi-cart-plus");
cartshow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0";
})
cartbtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%";
})


document.querySelector(".qanda .button").onclick = function () { check() };
function check() {
    let name = document.querySelector(".qanda .name").value;
    let email = document.querySelector(".qanda .email").value;
    let question = document.querySelector(".qanda .question").value;

    if (name.length == 0) {
        document.getElementById("name").value = "Please enter your name";
    }
    else if (email.length == 0) {
        document.getElementById("email").value = "Please enter your email";
    }
    else if (question.length == 0) {
        document.getElementById("question").value = "Please enter your question";
    }
    else {
        document.querySelector(".qanda h2").style.display = "block";
        document.querySelector(".qanda .row").style.display = "none";
    }

}
