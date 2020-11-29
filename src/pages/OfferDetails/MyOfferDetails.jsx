import React, {useState, useEffect}from "react";
import { ReactComponent as DeleteSvg } from "./DeleteSvg.svg";
import {PageHeader} from "../../components";
import Style from "./OfferDetails.module.scss";

const mockQuery = _ => ({
 imgSrc: "https://via.placeholder.com/160x90",
  offer : 130,
product : "Black lamp",
desc :
    "She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day. She wondered what they would do if something ever happened to her. Would they miss the meals she provided if she failed to put out the food one morning?"
})
export default function OfferDetails(props) {

  const productId = props.match.params.productId
  const backButtonRef = React.createRef();
  const actionButtonRef = React.createRef();

  const [product, setProduct] = useState(null)

  useEffect(()=>{
    async function onComponentMount(){
      setProduct(mockQuery(productId))

    }

    onComponentMount()
  },[])

  return (
    <div className={Style.OfferDetails}>
      <PageHeader ref={{ backRef: backButtonRef, actionRef: actionButtonRef }} actionIcon={<DeleteSvg />} label="Offer" />
      { product && <>
        <img className={Style.ProductImage} src={product.imgSrc} alt={product} />
        <div className={Style.Content}>
          <h2 className={Style.Label}>{product.product}</h2>
          <p className={Style.Offer}>Offer: Php {product.offer}</p>
          <p className={Style.Desc}>{product.desc}</p>
        </div>
      </>
      }
    </div>
  );
}
