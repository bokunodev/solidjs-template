import { Component } from 'solid-js';

import icon_solidjs from '~/assets/solidjs.svg';

import css from '~/App.module.css';

const App: Component = () => {
	return (
		<div class={css.Container}>
			<img src={icon_solidjs} />
		</div>
	);
};

export default App;
