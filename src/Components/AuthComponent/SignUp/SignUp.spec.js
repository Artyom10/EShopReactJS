import { shallow } from 'enzyme';
import React from 'react';
import {signUp} from '../../../redux/actions/authActions';
import SignUp from './SignUp';

const auth = {
    uid: null,
};

const authRedirect = {
    uid: 111,
};

const props = {
    authError: null,
    signUp,
};

const setUp = (props,authInfo) => shallow(<SignUp {...props} auth={authInfo} />);

describe('LogUp component', () => {
    it('should render LogUp component', () => {
       const component = setUp(props, auth);
       expect(component.debug()).toMatchSnapshot();
    });

    it('should redirect', () => {
        const component = setUp(props, authRedirect);
        expect(component.debug()).toMatchSnapshot();
    });
});