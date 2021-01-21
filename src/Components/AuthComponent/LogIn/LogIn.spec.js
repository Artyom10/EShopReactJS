import { shallow } from 'enzyme';
import React from 'react';
import LogIn from './LogIn';
import {signIn} from '../../../redux/actions/authActions';



const props = {
    auth: {
        uid: null,
    },
    authError: null,
    signIn,
}

const setUp = (props) => shallow(<LogIn {...props} />);

describe('LogIn component', () => {
    it('should render LogIn component', () => {
       const component = setUp(props);
        expect(component.debug()).toMatchSnapshot();
    });
});