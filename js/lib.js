const productList = [
        {id:"01", name:"Bánh Cống", price:120, image:"../assets/images/banh cong.jpg", productLink:"product-detail.html"},
        {id:"02", name:"Bánh In", price:90, image:"../assets/images/banh in.jpg", productLink:"product-detail.html"},
        {id:"03", name:"Bánh Pía Sóc Trăng", price:75, image:"../assets/images/banh.jpg", productLink:"product-detail.html"},
        {id:"04", name:"Gạo ST25", price:60, image:"../assets/images/gao.jpg", productLink:"product-detail.html"},
        {id:"05", name:"XáS Bấu", price:110, image:"../assets/images/xa bau.jpg", productLink:"product-detail.html"}
    ]
function addProduct(id, name, price, image, hyperLink)
{
    const productItem = document.createElement("div");
    productItem.setAttribute("class","product-item col m-2");

    const productImage = document.createElement ("div");
        productImage.setAttribute("class","product-image h-75 ratio ratio-1x1 overflow-hidden");

    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute("class", "img-fluid object-fit-cover");   
    
    productImage.appendChild(Image);

    const productInfo = document.createElement("div");
    productInfo.setAttribute("class","product-info h-25 text-center");

    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price);
    productPrice.appendChild(productPriceText);

    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", hyperLink);
    productLink.setAttribute("class", "d-block mt-2 text-decoration-none text-primary");

    const buyButton = document.createElement("a");
    const buyButtonText = document.createTextNode("Mua ngay");
    buyButton.appendChild(buyButtonText);
    buyButton.setAttribute("href", hyperLink);
    buyButton.setAttribute("class", "btn btn-success mt-2");

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);
    productInfo.appendChild(buyButton);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    document.getElementById("product-list").appendChild(productItem);
}﻿
