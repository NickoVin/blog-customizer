import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	ArticleStateType,
	OptionType,
} from 'src/constants/articleProps';

import { useState, useRef } from 'react';
import classNames from 'classnames';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	setPageState: (params: React.SetStateAction<ArticleStateType>) => void;
};

export const ArticleParamsForm = ({ setPageState }: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const [selectedFont, setSelectedFont] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] =
		useState<OptionType>(defaultArticleState.backgroundColor);
	const [selectedContentWidth, setSelectedContentWidth] = useState<OptionType>(
		defaultArticleState.contentWidth
	);

	const formElement = useRef<HTMLElement | null>(null);

	const toggleIsOpen = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	const resetForm = () => {
		setSelectedFont(defaultArticleState.fontFamilyOption);
		setSelectedFontSize(defaultArticleState.fontSizeOption);
		setSelectedFontColor(defaultArticleState.fontColor);
		setSelectedBackgroundColor(defaultArticleState.backgroundColor);
		setSelectedContentWidth(defaultArticleState.contentWidth);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setPageState({
			fontFamilyOption: selectedFont,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			contentWidth: selectedContentWidth,
			fontSizeOption: selectedFontSize,
		});
	};

	useOutsideClickClose({
		isOpen: isOpen,
		rootRef: formElement,
		onChange: setIsOpen,
	});

	return (
		<>
			<ArrowButton onClick={toggleIsOpen} isOpen={isOpen} />
			<aside
				className={classNames(
					styles.container,
					isOpen ? styles.container_open : ''
				)}
				ref={formElement}>
				<form className={styles.form} onSubmit={onSubmit}>
					<Text as={'h1'} size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={selectedFont}
						onChange={setSelectedFont}
						options={fontFamilyOptions}
						title='шрифт'
					/>
					<RadioGroup
						selected={selectedFontSize}
						name='radio'
						onChange={setSelectedFontSize}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>
					<Select
						selected={selectedFontColor}
						onChange={setSelectedFontColor}
						options={fontColors}
						title='цвет шрифта'
					/>
					<Separator />
					<Select
						selected={selectedBackgroundColor}
						onChange={setSelectedBackgroundColor}
						options={backgroundColors}
						title='цвет фона'
					/>
					<Select
						selected={selectedContentWidth}
						onChange={setSelectedContentWidth}
						options={contentWidthArr}
						title='ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetForm} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
