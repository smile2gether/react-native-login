import React from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';

export default class LoginScreen extends React.Component {
	render() {
		return (
            <Wallpaper>
				<Logo />
				<Form />
				<ButtonSubmit/>
			</Wallpaper>
		);
	}
}