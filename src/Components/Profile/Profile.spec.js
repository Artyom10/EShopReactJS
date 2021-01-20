import { shallow } from 'enzyme';
import React from 'react';
import Profile from './Profile';

const profile = {
    firstName: 'Name',
    secondName: 'SecondName',
    request: false,
};

const updateProfile = () => {};
const removeRequest = () => {};
const cancelRequest = () => {};

describe('Profile component', () => {
    it('should render Profile component', () => {
        const component = shallow(<Profile profile={profile} updateProfile={updateProfile} removeRequest={removeRequest} cancelRequest={cancelRequest} auth={{uid: 122, }}  />);
        expect(component).toMatchSnapshot();
    });
});