import { shallow } from 'enzyme';
import React from 'react';
import Profile from './Profile';


const props = {
    profile: {
        firstName: 'Name',
        secondName: 'SecondName',
        request: false,
    },
    updateProfile(){},
    removeRequest(){},
    cancelRequest(){},
    auth: {
        uid: 111,
    }
}

const setUp = (props) => shallow(<Profile {...props} />);

describe('Profile component', () => {
    it('should render Profile component', () => {
       const component = setUp(props);
        expect(component.debug()).toMatchSnapshot();
    });
});