import CarouselShop from "../component/CarouselShop"
import ShopItems from "../component/ShopItems"

export default function ShopPage()  {

    return(
        <div>
            
            <div className="background">
                <h1>Mutant Marketplace</h1>
                <p>Your #1 spot for X-Men Merchandise!</p>
            </div>
        
            <CarouselShop/>
            <div style={{marginLeft:'15%', marginTop:"5%"}}>
                <h2 style={{marginBottom:'5%',fontFamily:"Anton SC, sans serif", color:'#721CB8'}}>Featured Items</h2>
                <ShopItems/>
            </div>

        </div>
    )
}
