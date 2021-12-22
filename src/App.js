import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  var products =[
     {     
          id:"1",
          isInCart: false,
          name: "Shirt1",
          price: "18.00"
      },
      {
        id:"2",
        isInCart: false,
        name: "Shirt2",
        price: "25.00"
    },
    {   id:"3",
        isInCart: false,
        name: "Shirt3",
        price: "20.00"
    },
    {   id:"4",
        isInCart: false,
        name: "Shirt4",
        price: "22.00"
    },
    {   id:"5",
        isInCart: false,
        name: "Shirt5",
        price: "18.00"
    },
    {   id:"6",
        isInCart: false,
        name: "Shirt6",
        price: "20.00"
    }
  ]
  const [isInCartStatusTrack,setEnableDisableButton] = useState(products)
  const [cartItems,cartItemsData] = useState([])
  const [cart,cartCount] = useState(0);
  const[total, totalPriceCalculator] = useState(0)

  function addToCart(event){
    cartCount(cart+1)
    let item = products[event.target.id-1]
    item.isInCart = true
    totalPriceCalculator(prev => prev + Number(item.price))
    cartItemsData([...cartItems,item])
    let tmp = isInCartStatusTrack[event.target.id-1]
    tmp.isInCart = true
    console.log(isInCartStatusTrack)
    // cartItems[event.target.id-1].isInCart = true

    }
function removeFromCart(event){
    cartCount(cart-1)
    console.log(event.target.id)
    var i=0;
    cartItems.forEach(element => {
        if(element.id===event.target.id){
            cartItems.splice(i,1);
            return;
        }
        else{
            i++;
        }
    });
    let tmp = isInCartStatusTrack[event.target.id-1]
    tmp.isInCart = false
    totalPriceCalculator(prev => prev - Number(tmp.price))
    console.log(isInCartStatusTrack)
    // cartItems.splice[event.target.id-1].isInCart = false
}
function removeAllFromCart(event){
    alert("Removing All Items from Cart")
    cartCount(0)
    totalPriceCalculator(0)
    cartItems.splice(0,cartItems.length);
    isInCartStatusTrack.forEach(item =>{
        item.isInCart=false
    })
}
function placeOrder(){
    alert("Ordered Successfully and Removing All Items from Cart")
    cartCount(0)
    totalPriceCalculator(0)
    cartItems.splice(0,cartItems.length);
    isInCartStatusTrack.forEach(item =>{
        item.isInCart=false
    })
}

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        {/* <!-- Header--> */}
        {/* <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header> */}
        {/* Cart Items Display */}
        
        { cartItems.length!==0  ? 
            <div>
            <p className="cartheading">CART ITEMS</p>
            <div className="cartdisplay">
            {
                cartItems.filter(item => item.isInCart===true).map(finalCartItem => {
                    return(
                        <div className="eachItem">
                            <b>{finalCartItem.name}</b><b>${finalCartItem.price}</b><button id={finalCartItem.id} className='btn btn-danger' onClick={removeFromCart}>Remove From Cart</button>
                        </div>
                        )})
            }
                <div className="eachItem">
                    <button className='btn btn-danger' onClick={removeAllFromCart}>Remove All Items</button>
                    <b>Total Price=${total}</b>
                    <button id="0" className='btn btn-success' onClick={placeOrder} >Place Order</button>
                </div>
            </div>
            </div> :

            <p className="cartheading">NO ITEMS IN CART</p>
        }
        
        
        
        
        {/* <!-- Section--> */}
        
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://m.media-amazon.com/images/I/51UCGNxvMHL._UL1268_.jpg" alt="..." width={"450px"} height={"300px"} />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                            <div class="text-center">
                            {/* <!-- Product name--> */}
                            <h5 class="fw-bolder">Charlie Chaplin 1920S</h5>
                            {/* <!-- Product price--> */}
                                $40.00 - $80.00
                            </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right:"0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://i5.walmartimages.com/asr/5afd86da-7233-49c5-8d44-93b52d8f9190_1.f64953dab623cf1744b4d1ecfe0a17a2.jpeg" alt="..." width={"450px"} height={"300px"} />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Shirt1</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* { siInCart ? 
                                <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={removeFromCart}>Remove From cart</button></div> : */}
                                <div class="text-center"><button id="1" class="btn btn-outline-dark mt-auto" disabled={isInCartStatusTrack[0].isInCart} onClick={addToCart}>Add To cart</button></div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right:"0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://5.imimg.com/data5/QH/QF/MY-53916936/men-stylish-shirt-500x500.jpg" alt="..." width={"450px"} height={"300px"}/>
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Shirt2</h5>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button id="2" class="btn btn-outline-dark mt-auto" disabled={isInCartStatusTrack[1].isInCart} onClick={addToCart}>Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://rukminim1.flixcart.com/image/332/398/kmccosw0/shirt/t/l/2/xl-men-regular-super-slim-fit-striped-casual-shirt-icome-original-imagf9q2epye5kks.jpeg?q=50" alt="..."  width={"450px"} height={"300px"}/>
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Shirt3</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    $20.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button id="3" class="btn btn-outline-dark mt-auto" disabled={isInCartStatusTrack[2].isInCart}  onClick={addToCart}>Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right:"0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://static.fibre2fashion.com/MemberResources/LeadResources/1/2018/4/Seller/18147194/Images/18147194_0_men-s-stylish-shirt.jpg?tr=w-320,h-320,cm-pad_resize,bg-F3F3F3" alt="Image Not Found" width={"450px"} height={"300px"}/>
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Shirt4</h5>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">$30.00</span>
                                    $22.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button id="4" class="btn btn-outline-dark mt-auto" disabled={isInCartStatusTrack[3].isInCart} onClick={addToCart}>Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://assets.onbuy.com/i21/product/358ea661c0e24fd795d862dadcbfa37b-m21747160/mens-black-bat-superhero-fancy-dress-costume-large.jpg" alt="..." width={"450px"} height={"300px"}/>
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Bat Man</h5>
                                    {/* <!-- Product price--> */}
                                    $120.00 - $280.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem" , right:"0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://assets.ajio.com/medias/sys_master/root/20210420/R70k/607ecc5baeb269a9e3972075/dennislingo_premium_attire_green_full_sleeves_slim_fit_shirt.jpg" alt="..." width={"450px"} height={"300px"}/>
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Shirt5</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button id="5" class="btn btn-outline-dark mt-auto"  disabled={isInCartStatusTrack[4].isInCart} onClick={addToCart}>Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-5">
                        <div class="card h-100">
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://img3.exportersindia.com/product_images/bc-full/2020/4/5195597/mens-stylish-shirts-1587122392-5377749.jpeg" alt="..." width={"450px"} height={"300px"}/>
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">Shirt6</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    $28.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button id="6" class="btn btn-outline-dark mt-auto" disabled={isInCartStatusTrack[5].isInCart} onClick={addToCart}>Add to cart</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
    </>
  );
}

export default App;
