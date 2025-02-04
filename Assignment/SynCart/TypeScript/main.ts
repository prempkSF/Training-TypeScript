
let CustomerIdAutoIncrement = 3000;
let OrderIdAutoIncrement = 1000;
let ProductIdAutoIncrement = 2000;

//Enum Order Status
enum OrderStatus { Ordered = "Ordered", Cancelled = "Cancelled" }

//Customer Class
class Customer {
    CustomerId: string;
    CustomerName: string;
    City: string;
    MobileNumber: string;
    WalletBalance: number = 0;
    EmailId: string;
    Password: string;

    constructor(name: string, city: string, mobileNumber: string, walletbalance: number, email: string, password: string,) {
        CustomerIdAutoIncrement++;
        this.CustomerId = "CID" +CustomerIdAutoIncrement;
        this.CustomerName = name;
        this.City = city;
        this.MobileNumber = mobileNumber;
        this.WalletBalance = walletbalance;
        this.EmailId = email;
        this.Password = password;
    }

}

//Product Class
class Product {
    ProductId: string;
    ProductName: string;
    Stock: number;
    Price: number;
    ShippingDuration: number;
    constructor(productName: string, stock: number, price: number, shippingDuration: number) {
        ProductIdAutoIncrement++;
        this.ProductId = "PID" + ProductIdAutoIncrement;
        this.ProductName = productName;
        this.Stock = stock;
        this.Price = price;
        this.ShippingDuration = shippingDuration;
    }

}

//Order Class
class Order {
    OrderId: string;
    CustomerId: string;
    ProductId: string;
    TotalPrice: number;
    PurchaseDate: Date;
    Quantity: number;
    OrderStatus: OrderStatus
    constructor(customerId: string, productId: string, totalPrice: number, purchaseDate: Date, quantity: number, orderStatus: OrderStatus) {
        OrderIdAutoIncrement++;
        this.OrderId = "OID" + OrderIdAutoIncrement;
        this.CustomerId = customerId;
        this.ProductId = productId;
        this.TotalPrice = totalPrice;
        this.PurchaseDate = purchaseDate;
        this.Quantity = quantity;
        this.OrderStatus = orderStatus;
    }
}


//Array to store all elements
let CustomersArrayList: Array<Customer> = new Array<Customer>();
let ProductsArrayList: Array<Product> = new Array<Product>();
let OrdersArrayList: Array<Order> = new Array<Order>();

//Add Default Users
CustomersArrayList.push(new Customer("Prem", "Chennai", "+91434343942", 100000, "prempk@gmail.com", "123"));

//Add Default Products
ProductsArrayList.push(new Product("Mobile(Samsung)", 10, 10000, 3));
ProductsArrayList.push(new Product("Tablet(Lenovo)", 5, 15000, 2));
ProductsArrayList.push(new Product("Camera(Sony)", 3, 20000, 4));
ProductsArrayList.push(new Product("IPhone", 5, 50000, 6));
ProductsArrayList.push(new Product("Laptop(Lenovo I3)", 3, 40000, 3));
ProductsArrayList.push(new Product("Headphone(Boat)", 5, 1000, 2));
ProductsArrayList.push(new Product("Speakers(Boat)", 4, 500, 2));

var loggedCustomer: Customer;

//Display Block, None Div 
var homepage = document.getElementById("homePage") as HTMLDivElement;
var productspage = document.getElementById("productPage") as HTMLDivElement;
var purchasePage = document.getElementById("purchasePage") as HTMLDivElement;
var orderHistoryPage = document.getElementById("orderHistoryPage") as HTMLDivElement;
var rechargePage = document.getElementById("rechargePage") as HTMLDivElement;
var addEditProductPage = document.getElementById("addEditProductForm") as HTMLDivElement;

//Sign Up, Sign In Page Div
var signInForm = document.getElementById("signIn") as HTMLDivElement;
var signUpForm = document.getElementById("signUp") as HTMLDivElement;
var signInButton = document.getElementById("signInButton") as HTMLDivElement;
var signUpButton = document.getElementById("signUpButton") as HTMLDivElement;

function signInBtn(): void {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    signInButton.style.background = "orange";
    signUpButton.style.background = "none";
}

function signUpBtn(): void {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    signInButton.style.background = "none";
    signUpButton.style.background = "orange";
}

async function userSignUp(event) {
    event.preventDefault();
    var name = document.getElementById("name") as HTMLInputElement;
    var city = document.getElementById("city") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var phone = document.getElementById("phone") as HTMLInputElement;

    var userExists: boolean = false;
    CustomersArrayList.forEach(user => {
        if (user.EmailId == email.value) {
            userExists = true;
        }
    })

    if (userExists) {
        alert("Customer with Same Email ID. Already Exists.");
    }
    else {
        let customer: Customer = new Customer(name.value, city.value, phone.value, 0, email.value, password.value);
        CustomersArrayList.push(customer);
        alert(`Sign Up Successful Your Customer ID is ${customer.CustomerId}`);
        name.value = "";
        city.value = "";
        email.value = "";
        password.value = "";
        phone.value = "";
    }
}

async function userSignIn(event) {
    event.preventDefault();
    var email = document.getElementById("email-signIn") as HTMLInputElement;
    var password = document.getElementById("password-signIn") as HTMLInputElement;

    var userExists: boolean = false;
    CustomersArrayList.forEach(user => {
        if (user.EmailId.toLowerCase() == email.value.toLowerCase() && user.Password == password.value) {
            userExists = true;
            loggedCustomer = user;
            var box = document.getElementById("box") as HTMLDivElement;
            //Hide Login Box
            box.style.display = "none";
            //Show NavBar
            var menu = document.getElementById("menu") as HTMLDivElement;
            menu.style.display = "block";
            //Empty Sign Box TextField
            email.value = "";
            password.value = "";
            //Show Home Page only
            home();
            alert(`Sign In Successful`);
        }
    });
    if (!userExists) {
        alert("Invalid Email or Password");
    }
}

async function home() {
    displayNone();
    homepage.style.display = "block";
    var welcome = document.getElementById("welcome") as HTMLHeadingElement;
    welcome.innerHTML = "Welcome " + loggedCustomer.CustomerName;
}

async function displayNone() {
    homepage.style.display = "none";
    productspage.style.display = "none";
    purchasePage.style.display = "none";
    orderHistoryPage.style.display = "none";
    rechargePage.style.display = "none";
    addEditProductPage.style.display = "none";
    (document.getElementById("emptyOrderHistory") as HTMLDivElement).style.display = "none";
}

async function showproducts() {
    displayNone();
    productspage.style.display = "block";
    var table = document.getElementById("productTable") as HTMLTableElement;
    var len = table.getElementsByTagName("tr").length;
    if (table.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            table.removeChild(table.children[i]);
        }
    }
    ProductsArrayList.forEach((product) => {
        var row = document.createElement("tr") as HTMLTableRowElement;
        row.innerHTML = `<td>${product.ProductId} </td>  <td> ${product.ProductName} </td> <td> ${product.Price} </td> <td>${product.Stock} </td> 
        <td>${product.ShippingDuration} </td>
        <td>
            <button onclick="editProduct('${product.ProductId}')">Edit</button>
            <button onclick="deleteProduct('${product.ProductId}')">Delete</button>
        </td>`;
        table.appendChild(row);
    });
}

let editProductID: string;
async function deleteProduct(productId: string) {
    var index = ProductsArrayList.findIndex((product) => product.ProductId == productId);
    ProductsArrayList.splice(index, 1);
    showproducts();
}
async function addProduct() {
    (document.getElementById("addEditProductForm") as HTMLDivElement).style.display = "block";
    editProductID = "";
}


async function editProduct(productId: string) {
    (document.getElementById("addEditProductForm") as HTMLDivElement).style.display = "block";
    var product = ProductsArrayList.find((product) => product.ProductId == productId);
    if (product) {
        var name = document.getElementById("productName") as HTMLInputElement;
        var stock = document.getElementById("productStock") as HTMLInputElement;
        var price = document.getElementById("productPrice") as HTMLInputElement;
        var shippingDuration = document.getElementById("shippingDuration") as HTMLInputElement;
        name.value = product.ProductName;
        stock.value = product.Stock.toString();
        price.value = product.Price.toString();
        shippingDuration.value = product.ShippingDuration.toString();
        editProductID = product.ProductId;
    }
}

async function addEditProduct() {
    var name = document.getElementById("productName") as HTMLInputElement;
    var stock = document.getElementById("productStock") as HTMLInputElement;
    var price = document.getElementById("productPrice") as HTMLInputElement;
    var shippingDuration = document.getElementById("shippingDuration") as HTMLInputElement;

    var product = ProductsArrayList.find(product => product.ProductId == editProductID);
    if (product) {
        product.ProductName = name.value;
        product.Stock = Number(stock.value);
        product.Price = Number(price.value);
        product.ShippingDuration = Number(shippingDuration.value);
        alert("Product Details updated successfully");
        editProductID = "";
    }
    else {
        if (name.value.trim() != "") {
            ProductsArrayList.push(new Product(name.value, Number(stock.value), Number(price.value), Number(shippingDuration.value)));
            editProductID = "";
        }
    }
    name.value = "";
    stock.value = "";
    price.value = "";
    shippingDuration.value = "";
    showproducts();
}

async function purchase() {
    displayNone();
    purchasePage.style.display = "block";
    var purchaseTable = document.getElementById("purchaseTable") as HTMLTableElement;
    var len = purchaseTable.getElementsByTagName("tr").length;
    if (purchaseTable.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            purchaseTable.removeChild(purchaseTable.children[i]);
        }
    }

    ProductsArrayList.forEach((product) => {
        var row = document.createElement("tr") as HTMLTableRowElement;
        row.innerHTML = `<td>${product.ProductId} </td>  <td> ${product.ProductName} </td> <td> ${product.Price} </td> <td>${product.Stock} </td> 
        <td>${product.ShippingDuration} </td>
        <td>
            <button onclick="buy('${product.ProductId}')">Buy</button>
        </td>`;
        purchaseTable.appendChild(row);
    });
}

async function buy(productID: string) {
    const product = ProductsArrayList.find(product => product.ProductId === productID);
    if (product) {
        let countValue = prompt("Please enter your name:", "0");
        var count: number = Number(countValue);
        if (product.Stock > count) {
            //Total Price --> Product Price + Delivery Price Rs.50
            if (loggedCustomer.WalletBalance >= ((product.Price * count) + 50)) {

                product.Stock -= Number(count);
                loggedCustomer.WalletBalance -= product.Price * count;
                OrdersArrayList.push(new Order(loggedCustomer.CustomerId, product.ProductId, ((count * product.Price)+50), new Date(), count, OrderStatus.Ordered));
                alert(`You have successfully purchased ${product.ProductName}. Order ID is ${OrdersArrayList[OrdersArrayList.length - 1].OrderId}`);
                orderHistory();
            }
            else {
                alert("Insufficient balance to make this purchase.");
            }

        }
        else {
            alert("Sorry Product is out of stock.");
        }
    }
}

async function orderHistory() {
    displayNone();
    if (OrdersArrayList.length > 0) {
        orderHistoryPage.style.display = "block";
    }
    else {
        (document.getElementById("emptyOrderHistory") as HTMLDivElement).style.display = "block";
    }
    var orderTable = document.getElementById("orderTable") as HTMLTableElement;
    var len = orderTable.getElementsByTagName("tr").length;
    if (orderTable.hasChildNodes()) {
        for (var i = len - 1; i >= 1; i--) {
            orderTable.removeChild(orderTable.children[i]);
        }
    }

    OrdersArrayList.forEach((order) => {
        if (order.CustomerId == loggedCustomer.CustomerId) {
            var row = document.createElement("tr") as HTMLTableRowElement;
            row.innerHTML = `<td>${order.OrderId} <td>${order.CustomerId}</td> <td>${order.ProductId}</td> <td>${order.Quantity}</td> <td>${order.TotalPrice}</td> 
            <td>${order.PurchaseDate.toLocaleDateString()}</td> <td>${order.OrderStatus}</td>
            <td><button id="cancelbtn" onclick="cancelOrder('${order.OrderId}')">Cancel</button></td>`;
            orderTable.appendChild(row);
        }
    })
}

async function cancelOrder(orderID: string) {
    var orderData = OrdersArrayList.find(o => o.OrderId == orderID && o.CustomerId == loggedCustomer.CustomerId && o.OrderStatus == OrderStatus.Ordered);
    if (orderData) {

        orderData.OrderStatus = OrderStatus.Cancelled;
        loggedCustomer.WalletBalance += orderData.TotalPrice;
        var productID = orderData.ProductId;
        var product = ProductsArrayList.find(product => product.ProductId == productID);
        if (product) {
            product.Stock += orderData.Quantity;
        }
        alert("Order Cancelled successfully");
        orderHistory();
    }
    else {
        alert("Order not found");
    }
}

async function recharge() {
    displayNone();
    rechargePage.style.display = "block";
    (document.getElementById("currentBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${loggedCustomer.WalletBalance}`;
}

async function deposit() {
    var amount = document.getElementById("amount") as HTMLInputElement;
    loggedCustomer.WalletBalance += Number(amount.value);
    alert("Amount Deposited Successfully");
    amount.value = "";
    (document.getElementById("currentBalance") as HTMLHeadingElement).innerHTML = `Available Balance :${loggedCustomer.WalletBalance}`;

}


async function logout() {
    displayNone();
    (document.getElementById("menu") as HTMLDivElement).style.display = "none";
    (document.getElementById("box") as HTMLDivElement).style.display = "block";
    // loggedCustomer = null;
}