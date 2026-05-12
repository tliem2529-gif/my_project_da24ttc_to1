const productList = [
    {id:"01", name:"Bánh Cống", price:12000, image:"../assets/images/banh cong.jpg", description:"Bánh cống là một loại bánh truyền thống của vùng Đồng bằng sông Cửu Long, đặc biệt là tỉnh Sóc Trăng. Bánh có hình dáng giống như chiếc cống nhỏ, vỏ bánh giòn tan, nhân bánh ngọt ngào với đậu xanh và đường."},
    {id:"02", name:"Bánh In", price:30000, image:"../assets/images/banh in.jpg", description:"Bánh in là một loại bánh đặc sản của Sóc Trăng, có vỏ bánh mỏng, giòn, nhân bánh được làm từ đậu xanh, đường và vani, mang hương vị ngọt ngào và thơm ngon."},
    {id:"03", name:"Bánh Pía Sóc Trăng", price:75000, image:"../assets/images/banh.jpg", description:"Bánh pía Sóc Trăng là món bánh nổi tiếng với vỏ bánh mỏng, nhân bánh dừa tươi, đường phèn và vani, có hương vị độc đáo và được yêu thích khắp nơi."},
    {id:"04", name:"Gạo ST25", price:30000, image:"../assets/images/gao.jpg", description:"Gạo ST25 là giống gạo ngon nổi tiếng của Sóc Trăng, hạt gạo dài, trắng tinh, dẻo thơm, phù hợp cho các món ăn hàng ngày và đặc sản địa phương."},
    {id:"05", name:"Xá Bấu", price:70000, image:"../assets/images/xa bau.jpg", description:"Xá Bấu là loại trái cây nhiệt đới phổ biến ở Sóc Trăng, có vị ngọt, chua nhẹ, giàu vitamin C, thường được dùng làm nước ép hoặc ăn trực tiếp."},
    {id:"06", name:"Bún Nước Lèo", price:50000, image:"../assets/images/bun.jpg", description:"Bún nước lèo là món ăn đặc trưng của Sóc Trăng, với bún tươi, nước lèo ngọt từ cá và rau, mang hương vị truyền thống miền Tây, thường ăn kèm với thịt heo quay và rau sống."},
    {id:"07", name:"Hành Tím", price:20000, image:"../assets/images/hanh tim.jpg", description:"Hành tím là loại củ được trồng phổ biến ở Vĩnh Châu, Sóc Trăng, với màu tím đặc trưng chỉ có khi được trồng ở địa phương, có vị cay nhẹ, thơm ngon, giàu vitamin, thường dùng để nấu ăn, làm gia vị hoặc ăn sống."}
]

function addProduct(id, name, price, image, description)
{
    const productItem = document.createElement("div");
    productItem.setAttribute("class","product-item col m-2 card shadow-sm");

    const productImage = document.createElement ("div");
    productImage.setAttribute("class","product-image h-75 ratio ratio-1x1 overflow-hidden");

    const Image = document.createElement("img");
    Image.setAttribute("src", image);
    Image.setAttribute("alt", name);
    Image.setAttribute("class", "card-img-top img-fluid object-fit-cover");   
    
    productImage.appendChild(Image);

    const productInfo = document.createElement("div");
    productInfo.setAttribute("class","product-info h-25 text-center d-flex flex-column justify-content-center card-body");

    const productName = document.createElement("p");
    productName.setAttribute("class", "mb-1 fw-bold");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "mb-2 text-success");
    const productPriceText = document.createTextNode(price + " VND");
    productPrice.appendChild(productPriceText);

    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("href", "detail.html?id=" + id);
    productLink.setAttribute("class", "d-block mt-1 text-decoration-none text-primary small");

    const buyButton = document.createElement("a");
    const buyButtonText = document.createTextNode("Mua ngay");
    buyButton.appendChild(buyButtonText);
    buyButton.setAttribute("href", "detail.html?id=" + id);
    buyButton.setAttribute("class", "btn btn-success btn-sm mt-1");

    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productLink);
    productInfo.appendChild(buyButton);

    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    document.getElementById("product-list").appendChild(productItem);
}
