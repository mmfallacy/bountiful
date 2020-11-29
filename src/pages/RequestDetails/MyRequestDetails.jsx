import React, {useState, useEffect} from "react";
import {BackgroundBlob, PageHeader, OfferCard} from "../../components"
import Style from "./RequestDetails.module.scss";
import {useAPI} from "../../store"



export default function RequestDetails(props) {
  const uid = props.match.params.productId

  const [listing, setListing] = useState({})

  const API = useAPI(state=>state.instance)

  useEffect(()=>{
    async function onComponentMount(){
      const result = await API.retrieveMultipleListingsById([uid])[0]
      setListing(result)
    }
    onComponentMount()
  }, [])

  return (
    <div className={Style.RequestDetails}>
      <PageHeader label="My Request" />
      {listing && <>
      <img className={Style.ProductImage} src={listing.photo} alt={listing.title} />
      <div className={Style.Info}>
        <h1 className={Style.Label}>{listing.title}</h1>
        <h4 className={Style.Price}>Php {listing.price}</h4>
      </div>
      <div className={Style.Desc}>
        <p>{listing.description}</p>
      </div>
      <div className={Style.Offers}>
        <BackgroundBlob />
        <h3 className={Style.OffersLabel}>Offers</h3>
        { listing.offers && 
          listing.offers.map(({ id, photo, title, price, author }) =>
            <OfferCard
              key={id}
              imgSrc={photo}
              seller={author}
              offer={price}
              product={title}
            />
          )
        }
      </div>
      </>}
    </div>
  );
}
