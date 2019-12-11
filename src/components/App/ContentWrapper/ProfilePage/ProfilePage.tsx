import React from 'react';
import './ProfilePage.css';
import Button from '../../../shared/Button/Button';
import Input from '../../../shared/Input/Input';
import Checkbox from '../../../shared/Checkbox/Checkbox';

const ProfilePage = () => {
  return (
    <div>
      <Input name="input1" placeholder="your name*" />
      <Input name="input1" placeholder="your password*" />
      <Checkbox name="check" />
      <Button handleClick={ () => alert('clicked') }  label="BUTTON"/>
    </div>
  )
}

export default ProfilePage;