import { shallow } from 'enzyme';
import React from 'react';
import LogIn from './LogIn';
import {signIn} from '../../../redux/actions/authActions';


const auth = {
    uid: null,
};

const authRedirect = {
    uid: 111,
};

const props = {
    authError: null,
    signIn,
};

const setUp = (props,authInfo) => shallow(<LogIn {...props} auth={authInfo} />);

describe('LogIn component', () => {
    it('should render LogIn component', () => {
       const component = setUp(props, auth);
        expect(component.debug()).toMatchSnapshot();
    });

    it('should redirect', () => {
        const component = setUp(props, authRedirect);
        expect(component.debug()).toMatchSnapshot();
    });
});