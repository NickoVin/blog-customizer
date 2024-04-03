import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import classNames from 'classnames';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [status, setStatus] = useState('close');

	const toggleAside = () => {
		status == 'close' ? setStatus('open') : setStatus('close');
	};

	return (
		<>
			<ArrowButton onClick={toggleAside} asideStatus={status} />
			<aside
				className={classNames(
					styles.container,
					status == 'open' ? styles.container_open : ''
				)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
