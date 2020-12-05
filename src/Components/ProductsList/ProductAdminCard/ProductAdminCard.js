import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import firebaseDb from '../../../firebase';
import stylesFor from './ProductAdminCard.module.css';
import generalStyles from '../GeneralStyles.module.css';


function ProductAdminCard(props) {

  let [products, setProducts] = useState({})
  useEffect(() => {
    firebaseDb.child('products').on('value', snapshot => {
      if(snapshot.val() != null)
      setProducts({
        ...snapshot.val()
      })
    } )
  }, [])

  if(props.products.length === 0 ){
    /*props.setProducts(
      [
        {
          id: 1,
          urlPhoto:
            "https://sun9-75.userapi.com/impg/v9-83eUNEQ5s5JdHfLDdcFXVoSdZ8CvseVH3Tw/JAxl7sVkPs4.jpg?size=762x1100&quality=96&proxy=1&sign=524d2c12b64f491a17abd599fa4318f7",
          price: "50",
          producer: "Mango",
          type: "Jacket",
          sizes: "XS,S,M,L",
          description: "Something",
          tags: "#mango, #jacket, #streetware",
        },
        {
          id: 2,
          urlPhoto:
            "https://sun9-68.userapi.com/impg/BHwQV6ItiqEBIU0jgzXb4LpWm4R_8639f7WF9g/tBB8NyRwMhE.jpg?size=1496x2160&quality=96&proxy=1&sign=17b1b3045f69aab4a771d0fb9e4511a4",
          price: "100",
          producer: "Carhartt",
          type: "Down jacket",
          sizes: "S,M,L",
          description: "Something",
          tags: "#carhartt, #jacket",
        },
        {
          id: 3,
          urlPhoto:
            "https://sun9-66.userapi.com/impg/VrtHC75OfFYYCa9JfkL-W7cORCkFEIhGKFbwBw/ym1NDhSC9fs.jpg?size=1496x2160&quality=96&proxy=1&sign=b908d4ad177c98974ad56576acfa6bf3",
          price: "35",
          producer: "Diesel",
          type: "Shirt",
          sizes: "S",
          description: "Something",
          tags: "#diesel, #shirt",
        },
        {
          id: 4,
          urlPhoto:
            "https://sun9-52.userapi.com/impg/kz7_A2GPc8s3WwGZDSkyNGgcWJactYgDYlQqug/WQpW-9mdTWU.jpg?size=600x866&quality=96&proxy=1&sign=bc15dc8d948e3c67970b3d255f2b19f6",
          price: "70",
          producer: "Mango",
          type: "Jacket",
          sizes: "XS,S,M,L",
          description: "Something",
          tags: "#mango, #jacket",
        },
        {
          id: 5,
          urlPhoto:
            "https://sun9-51.userapi.com/impg/mP-HyBe0hlpJkK8JLrjuDsvlfC5N897l38-cJQ/q656OVsD3Xk.jpg?size=600x866&quality=96&proxy=1&sign=2aa238d9da68b421b4aafb1f652d2b36",
          price: "70",
          producer: "Mango",
          type: "Coat",
          sizes: "M,L",
          description: "Something",
          tags: "#mango, #coat",
        },
        {
          id: 6,
          urlPhoto:
            "https://sun9-53.userapi.com/impg/rZO7uzY77jW4S1C_bZFjOEDbjO40s8bk-rgGRA/q3v79SyeC5I.jpg?size=600x866&quality=96&proxy=1&sign=1085920c0f91da8084a5005d9f1b18c0",
          price: "47",
          producer: "Mango",
          type: "Pants",
          sizes: "M,L,XL",
          description: "Something",
          tags: "#mango, #pants",
        },
        {
          id: 7,
          urlPhoto:
            "https://sun9-13.userapi.com/impg/6bJBE1DBLwKvFu8csRcfTtHkHHuMKZaQCOkMeg/QYXQybTR_Uo.jpg?size=1496x2160&quality=96&proxy=1&sign=33b12de91d790063bef8b9b6a52f0abe",
          price: "500",
          producer: "Diesel",
          type: "Coat",
          sizes: "XS,S,M",
          description: "Something",
          tags: "#diesel, #coat",
        },
        {
          id: 8,
          urlPhoto:
            "https://sun9-52.userapi.com/impg/xWd_NaCKK7vVjAIBP0dTekN36nsRI9kidnelOw/V7IfJ1kIGO8.jpg?size=762x1100&quality=96&proxy=1&sign=ec477ba05df76b5c6a800f2f0b3ebeee",
          price: "47",
          producer: "Mango",
          type: "Pants",
          sizes: "M,L,XL",
          description: "Something",
          tags: "#mango, #pants",
        },
        ]
    )*/
    Object.keys(products).map(id => {
      props.setProducts([products[id]])
    })
  }



  let setPrice = React.createRef();
  let setProducer = React.createRef();
  let setType = React.createRef();
  let setSizes = React.createRef();
  let setDescription = React.createRef();
  let setTags = React.createRef();
  let setId = React.createRef();
 
  const changeProduct = () => {
    const data = {
       id: setId.current.value,
      "price": `${setPrice.current.value}`,
      "producer": `${setProducer.current.value}`,
      "type": `${setType.current.value}`,
      "sizes": `${setSizes.current.value}`,
      "description": `${setDescription.current.value}`,
      "tags": `${setTags.current.value}`
    };
   props.changeProduct(data);
  }


   return (
     props.products.map(product => 
      <div className={`col d-md-flex ${stylesFor.colInContainer}`} key={product.id}>
    <div className={`card mb-3 ${stylesFor.cardStyle}`}>
      <div className="row no-gutters justify-content-center">
        <div className="col-md-6">
          <img src={product.urlPhoto} className={`card-img`} alt={product.type} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Main information</h5>
            <ul className="list-group">
              <form>
                <div className="form-group">
                <label for="price">id</label>
                  <input className="form-control" type="text" id="id" placeholder={product.id} ref={setId} onChange={changeProduct} value={props.changedProductObject.id}/>
                  <label for="price">Price</label>
                  <input className="form-control" type="text" id="price" placeholder={product.price} ref={setPrice} onChange={changeProduct} value={props.changedProductObject.price}/>
                  <label for="producer">Producer</label>
                  <input type="text" className="form-control" id="producer" placeholder={product.producer} ref={setProducer} onChange={changeProduct} value={props.changedProductObject.producer}/>
                  <label for="type">Type</label>
                  <input type="text" className="form-control" id="type" placeholder={product.type} ref={setType} onChange={changeProduct} value={props.changedProductObject.type}/>
                  <label for="sizes">Sizes</label>
                  <input className="form-control" type="text" id="sizes" placeholder={product.sizes} ref={setSizes} onChange={changeProduct} value={props.changedProductObject.sizes} />
                  <label for="description">Description</label>
                  <textarea className="form-control" id="description" rows="3" ref={setDescription} onChange={changeProduct} value={props.changedProductObject.description}>{product.description}</textarea>
                  <label for="tags">Tags</label>
                  <input type="text" className="form-control" id="tags" placeholder={product.tags} ref={setTags} onChange={changeProduct} value={props.changedProductObject.tags}/>
                </div>
            </form>
              <li className="list-group-item">
              <div className="row justify-content-center">
                <div className="col">
                  <button className={`btn ${generalStyles.generalButton} ${stylesFor.editButton}`} onClick={() => (props.editProductAdmin(product.id))}>Edit product</button>
                </div>
                <div className="col">
                  <button className={`btn ${generalStyles.generalButton} ${stylesFor.deleteButton}`} onClick={() => (props.removeProduct(product.id))} >Delete product</button>
                </div>
              </div>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
      )
  );
}

ProductAdminCard.propTypes = {
  product: PropTypes.object.isRequired,
  urlPhoto: PropTypes.string,
  price: PropTypes.string,
  producer: PropTypes.string,
  type: PropTypes.string,
  sizes: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string
}

export default ProductAdminCard;
