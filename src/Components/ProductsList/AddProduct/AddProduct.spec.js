import { shallow } from 'enzyme';
import React from 'react';
import AddProduct from './AddProduct';
import { addNewProduct } from '../../../redux/actions/productActions';
import { render } from '@testing-library/react';

const props = {
    addNewProduct,
}

const setUp = (props) => shallow(<AddProduct {...props} />)

describe('AddProduct component', () => {
    it('should render AddProduct component', () => {
        const component = setUp(props);
        expect(component.debug()).toMatchSnapshot();
    });
});