var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var CustomerIdAutoIncrement = 3000;
var OrderIdAutoIncrement = 1000;
var ProductIdAutoIncrement = 2000;
//Enum Order Status
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Ordered"] = "Ordered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
//Customer Class
var Customer = /** @class */ (function () {
    function Customer(name, city, mobileNumber, walletbalance, email, password) {
        this.WalletBalance = 0;
        CustomerIdAutoIncrement++;
        this.CustomerId = "CID" + CustomerIdAutoIncrement;
        this.CustomerName = name;
        this.City = city;
        this.MobileNumber = mobileNumber;
        this.WalletBalance = walletbalance;
        this.EmailId = email;
        this.Password = password;
    }
    return Customer;
}());
//Product Class
var Product = /** @class */ (function () {
    function Product(productName, stock, price, shippingDuration) {
        ProductIdAutoIncrement++;
        this.ProductId = "PID" + ProductIdAutoIncrement;
        this.ProductName = productName;
        this.Stock = stock;
        this.Price = price;
        this.ShippingDuration = shippingDuration;
    }
    return Product;
}());
//Order Class
var Order = /** @class */ (function () {
    function Order(customerId, productId, totalPrice, purchaseDate, quantity, orderStatus) {
        OrderIdAutoIncrement++;
        this.OrderId = "OID" + OrderIdAutoIncrement;
        this.CustomerId = customerId;
        this.ProductId = productId;
        this.TotalPrice = totalPrice;
        this.PurchaseDate = purchaseDate;
        this.Quantity = quantity;
        this.OrderStatus = orderStatus;
    }
    return Order;
}());
//Array to store all elements
var CustomersArrayList = new Array();
var ProductsArrayList = new Array();
var OrdersArrayList = new Array();
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
var loggedCustomer;
//Display Block, None Div 
var homepage = document.getElementById("homePage");
var productspage = document.getElementById("productPage");
var purchasePage = document.getElementById("purchasePage");
var orderHistoryPage = document.getElementById("orderHistoryPage");
var rechargePage = document.getElementById("rechargePage");
var addEditProductPage = document.getElementById("addEditProductForm");
//Sign Up, Sign In Page Div
var signInForm = document.getElementById("signIn");
var signUpForm = document.getElementById("signUp");
var signInButton = document.getElementById("signInButton");
var signUpButton = document.getElementById("signUpButton");
function signInBtn() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    signInButton.style.background = "orange";
    signUpButton.style.background = "none";
}
function signUpBtn() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    signInButton.style.background = "none";
    signUpButton.style.background = "orange";
}
function userSignUp(event) {
    return __awaiter(this, void 0, void 0, function () {
        var name, city, email, password, phone, userExists, customer;
        return __generator(this, function (_a) {
            event.preventDefault();
            name = document.getElementById("name");
            city = document.getElementById("city");
            email = document.getElementById("email");
            password = document.getElementById("password");
            phone = document.getElementById("phone");
            userExists = false;
            CustomersArrayList.forEach(function (user) {
                if (user.EmailId == email.value) {
                    userExists = true;
                }
            });
            if (userExists) {
                alert("Customer with Same Email ID. Already Exists.");
            }
            else {
                customer = new Customer(name.value, city.value, phone.value, 0, email.value, password.value);
                CustomersArrayList.push(customer);
                alert("Sign Up Successful Your Customer ID is ".concat(customer.CustomerId));
                name.value = "";
                city.value = "";
                email.value = "";
                password.value = "";
                phone.value = "";
            }
            return [2 /*return*/];
        });
    });
}
function userSignIn(event) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, userExists;
        return __generator(this, function (_a) {
            event.preventDefault();
            email = document.getElementById("email-signIn");
            password = document.getElementById("password-signIn");
            userExists = false;
            CustomersArrayList.forEach(function (user) {
                if (user.EmailId.toLowerCase() == email.value.toLowerCase() && user.Password == password.value) {
                    userExists = true;
                    loggedCustomer = user;
                    var box = document.getElementById("box");
                    //Hide Login Box
                    box.style.display = "none";
                    //Show NavBar
                    var menu = document.getElementById("menu");
                    menu.style.display = "block";
                    //Empty Sign Box TextField
                    email.value = "";
                    password.value = "";
                    //Show Home Page only
                    home();
                    alert("Sign In Successful");
                }
            });
            if (!userExists) {
                alert("Invalid Email or Password");
            }
            return [2 /*return*/];
        });
    });
}
function home() {
    return __awaiter(this, void 0, void 0, function () {
        var welcome;
        return __generator(this, function (_a) {
            displayNone();
            homepage.style.display = "block";
            welcome = document.getElementById("welcome");
            welcome.innerHTML = "Welcome " + loggedCustomer.CustomerName;
            return [2 /*return*/];
        });
    });
}
function displayNone() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            homepage.style.display = "none";
            productspage.style.display = "none";
            purchasePage.style.display = "none";
            orderHistoryPage.style.display = "none";
            rechargePage.style.display = "none";
            addEditProductPage.style.display = "none";
            document.getElementById("emptyOrderHistory").style.display = "none";
            return [2 /*return*/];
        });
    });
}
function showproducts() {
    return __awaiter(this, void 0, void 0, function () {
        var table, len, i;
        return __generator(this, function (_a) {
            displayNone();
            productspage.style.display = "block";
            table = document.getElementById("productTable");
            len = table.getElementsByTagName("tr").length;
            if (table.hasChildNodes()) {
                for (i = len - 1; i >= 1; i--) {
                    table.removeChild(table.children[i]);
                }
            }
            ProductsArrayList.forEach(function (product) {
                var row = document.createElement("tr");
                row.innerHTML = "<td>".concat(product.ProductId, " </td>  <td> ").concat(product.ProductName, " </td> <td> ").concat(product.Price, " </td> <td>").concat(product.Stock, " </td> \n        <td>").concat(product.ShippingDuration, " </td>\n        <td>\n            <button onclick=\"editProduct('").concat(product.ProductId, "')\">Edit</button>\n            <button onclick=\"deleteProduct('").concat(product.ProductId, "')\">Delete</button>\n        </td>");
                table.appendChild(row);
            });
            return [2 /*return*/];
        });
    });
}
var editProductID;
function deleteProduct(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var index;
        return __generator(this, function (_a) {
            index = ProductsArrayList.findIndex(function (product) { return product.ProductId == productId; });
            ProductsArrayList.splice(index, 1);
            showproducts();
            return [2 /*return*/];
        });
    });
}
function addProduct() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            document.getElementById("addEditProductForm").style.display = "block";
            editProductID = "";
            return [2 /*return*/];
        });
    });
}
function editProduct(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var product, name, stock, price, shippingDuration;
        return __generator(this, function (_a) {
            document.getElementById("addEditProductForm").style.display = "block";
            product = ProductsArrayList.find(function (product) { return product.ProductId == productId; });
            if (product) {
                name = document.getElementById("productName");
                stock = document.getElementById("productStock");
                price = document.getElementById("productPrice");
                shippingDuration = document.getElementById("shippingDuration");
                name.value = product.ProductName;
                stock.value = product.Stock.toString();
                price.value = product.Price.toString();
                shippingDuration.value = product.ShippingDuration.toString();
                editProductID = product.ProductId;
            }
            return [2 /*return*/];
        });
    });
}
function addEditProduct() {
    return __awaiter(this, void 0, void 0, function () {
        var name, stock, price, shippingDuration, product;
        return __generator(this, function (_a) {
            name = document.getElementById("productName");
            stock = document.getElementById("productStock");
            price = document.getElementById("productPrice");
            shippingDuration = document.getElementById("shippingDuration");
            product = ProductsArrayList.find(function (product) { return product.ProductId == editProductID; });
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
            return [2 /*return*/];
        });
    });
}
function purchase() {
    return __awaiter(this, void 0, void 0, function () {
        var purchaseTable, len, i;
        return __generator(this, function (_a) {
            displayNone();
            purchasePage.style.display = "block";
            purchaseTable = document.getElementById("purchaseTable");
            len = purchaseTable.getElementsByTagName("tr").length;
            if (purchaseTable.hasChildNodes()) {
                for (i = len - 1; i >= 1; i--) {
                    purchaseTable.removeChild(purchaseTable.children[i]);
                }
            }
            ProductsArrayList.forEach(function (product) {
                var row = document.createElement("tr");
                row.innerHTML = "<td>".concat(product.ProductId, " </td>  <td> ").concat(product.ProductName, " </td> <td> ").concat(product.Price, " </td> <td>").concat(product.Stock, " </td> \n        <td>").concat(product.ShippingDuration, " </td>\n        <td>\n            <button onclick=\"buy('").concat(product.ProductId, "')\">Buy</button>\n        </td>");
                purchaseTable.appendChild(row);
            });
            return [2 /*return*/];
        });
    });
}
function buy(productID) {
    return __awaiter(this, void 0, void 0, function () {
        var product, countValue, count;
        return __generator(this, function (_a) {
            product = ProductsArrayList.find(function (product) { return product.ProductId === productID; });
            if (product) {
                countValue = prompt("Please enter your name:", "0");
                count = Number(countValue);
                if (product.Stock > count) {
                    //Total Price --> Product Price + Delivery Price Rs.50
                    if (loggedCustomer.WalletBalance >= ((product.Price * count) + 50)) {
                        product.Stock -= Number(count);
                        loggedCustomer.WalletBalance -= product.Price * count;
                        OrdersArrayList.push(new Order(loggedCustomer.CustomerId, product.ProductId, ((count * product.Price) + 50), new Date(), count, OrderStatus.Ordered));
                        alert("You have successfully purchased ".concat(product.ProductName, ". Order ID is ").concat(OrdersArrayList[OrdersArrayList.length - 1].OrderId));
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
            return [2 /*return*/];
        });
    });
}
function orderHistory() {
    return __awaiter(this, void 0, void 0, function () {
        var orderTable, len, i;
        return __generator(this, function (_a) {
            displayNone();
            if (OrdersArrayList.length > 0) {
                orderHistoryPage.style.display = "block";
            }
            else {
                document.getElementById("emptyOrderHistory").style.display = "block";
            }
            orderTable = document.getElementById("orderTable");
            len = orderTable.getElementsByTagName("tr").length;
            if (orderTable.hasChildNodes()) {
                for (i = len - 1; i >= 1; i--) {
                    orderTable.removeChild(orderTable.children[i]);
                }
            }
            OrdersArrayList.forEach(function (order) {
                if (order.CustomerId == loggedCustomer.CustomerId) {
                    var row = document.createElement("tr");
                    row.innerHTML = "<td>".concat(order.OrderId, " <td>").concat(order.CustomerId, "</td> <td>").concat(order.ProductId, "</td> <td>").concat(order.Quantity, "</td> <td>").concat(order.TotalPrice, "</td> \n            <td>").concat(order.PurchaseDate.toLocaleDateString(), "</td> <td>").concat(order.OrderStatus, "</td>\n            <td><button id=\"cancelbtn\" onclick=\"cancelOrder('").concat(order.OrderId, "')\">Cancel</button></td>");
                    orderTable.appendChild(row);
                }
            });
            return [2 /*return*/];
        });
    });
}
function cancelOrder(orderID) {
    return __awaiter(this, void 0, void 0, function () {
        var orderData, productID, product;
        return __generator(this, function (_a) {
            orderData = OrdersArrayList.find(function (o) { return o.OrderId == orderID && o.CustomerId == loggedCustomer.CustomerId && o.OrderStatus == OrderStatus.Ordered; });
            if (orderData) {
                orderData.OrderStatus = OrderStatus.Cancelled;
                loggedCustomer.WalletBalance += orderData.TotalPrice;
                productID = orderData.ProductId;
                product = ProductsArrayList.find(function (product) { return product.ProductId == productID; });
                if (product) {
                    product.Stock += orderData.Quantity;
                }
                alert("Order Cancelled successfully");
                orderHistory();
            }
            else {
                alert("Order not found");
            }
            return [2 /*return*/];
        });
    });
}
function recharge() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            displayNone();
            rechargePage.style.display = "block";
            document.getElementById("currentBalance").innerHTML = "Available Balance :".concat(loggedCustomer.WalletBalance);
            return [2 /*return*/];
        });
    });
}
function deposit() {
    return __awaiter(this, void 0, void 0, function () {
        var amount;
        return __generator(this, function (_a) {
            amount = document.getElementById("amount");
            loggedCustomer.WalletBalance += Number(amount.value);
            alert("Amount Deposited Successfully");
            amount.value = "";
            document.getElementById("currentBalance").innerHTML = "Available Balance :".concat(loggedCustomer.WalletBalance);
            return [2 /*return*/];
        });
    });
}
function logout() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            displayNone();
            document.getElementById("menu").style.display = "none";
            document.getElementById("box").style.display = "block";
            return [2 /*return*/];
        });
    });
}
