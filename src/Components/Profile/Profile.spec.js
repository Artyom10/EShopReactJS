import { shallow } from 'enzyme';
import React from 'react';
import Profile from './Profile';
import { cancelRequest, removeRequest, updateProfile } from '../../redux/actions/profileActions';


const props = {
    profile: {
        firstName: 'Name',
        secondName: 'SecondName',
        request: false,
        userPhoto: 'https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png',
    },
    updateProfile,
    removeRequest,
    cancelRequest,
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