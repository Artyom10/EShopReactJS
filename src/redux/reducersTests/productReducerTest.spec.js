import { shallow } from 'enzyme';
import React from 'react';
import productPagesReducer from '../reducers/productPagesReducer';
import { addNewProduct } from '../actions/productActions';

const state = {
    products: [
        {id: 'fyETt' , photo: null , price: '500' , producer: 'No' , type: 'After' , size: 'XS' , tags: 'No', description: 'Yes', rated: []},
        {id: 'FGRrsad' , photo: null , price: '35' , producer: 'Yes' , type: 'Before' , size: 'XS' , tags: 'Yes' , description: 'No', rated: []},
    ]
}

const newProduct = {
    photo: null,
    price: '300',
    producer: 'Me',
    type: 'Who care',
    size: 'XS',
    tags: 'Me',
    description: 'The best choise',
    rated: [],
}

describe('Testing productReducer', () => {
    it('new product should be added', () => {
        const action = addNewProduct(newProduct);
        const newstate = productPagesReducer(state, action);
        expect(newstate.products.length).toBe(3);
    });
});