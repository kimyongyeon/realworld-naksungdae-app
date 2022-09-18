import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../../store/store';

const charCountState = selector({
	key: 'charCountState', // unique ID (with respect to other atoms/selectors)
	get: ({ get }) => {
		const text = get(textState);

		return text.length;
	},
});

function CharacterCount() {
	const count = useRecoilValue(charCountState);

	return <>Character Count: {count}</>;
}

function CharacterCounter() {
	return (
		<div>
			<TextInput />
			<CharacterCount />
		</div>
	);
}

function TextInput() {
	const [text, setText] = useRecoilState(textState);

	const onChange = (event: {
		target: { value: string | ((currVal: string) => string) };
	}) => {
		setText(event.target.value);
	};

	return (
		<div>
			<input type="text" value={text} onChange={onChange} />
			<br />
			Echo: {text}
		</div>
	);
}

const Main = () => {
	return (
		<>
			<h1>아티클 화면 입니다. </h1>
			<CharacterCounter />
		</>
	);
};
export default Main;
