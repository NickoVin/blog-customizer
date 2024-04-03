import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import classNames from 'classnames';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [open, setOpen] = useState(false);

	const toggleAside = () => setOpen(true);

	return (
		<>
			<ArrowButton onClick={toggleAside} />
			<aside
				className={classNames(
					styles.container,
					open ? styles.container_open : ''
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
