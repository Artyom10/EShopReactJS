import { shallow } from 'enzyme';
import React from 'react';
import ProductAdminCard from './ProductAdminCard';
import { editProduct, removeProduct } from '../../../redux/actions/productActions';



const props = {
   editProduct,
   removeProduct,
   products: [
       {id: 1, producer: 'Fred Perry', price: '270', type: 'Olympic',  photo: null,
       description: `As far as I'm concerd it's your favorite clothes`, isBought: false, size: 'M', rated: [],},
       {id: 2, producer: 'Fashion', price: '5000', type: 'Jacket',  photo: null,
       description: `Always here`, isBought: false, size: 'L', rated: [],},
       {id: 3, producer: 'Milk', price: '10', type: 'T-Shirt',  photo: null,
       description: `That's it`, isBought: true, size: 'XS', rated: [],},
       
   ]
}

const setUp = (props) => shallow(<ProductAdminCard {...props} />);

describe('Profile component', () => {
    it('should render Profile component', () => {
       const component = setUp(props);
       expect(component.debug()).toMatchSnapshot();
    });
});