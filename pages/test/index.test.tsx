import { css } from '@emotion/css';
import { basicStyles } from '@src/pages/test/component/Container';
import Link from 'next/link';

const color = 'white';
const DivRender = () => {
  return (
    <div
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
  );
};

const TestPage = () => {
  return (
    <>
      <div className={basicStyles}>234234</div>
      <h1>Test 진입 페이지</h1>
      <DivRender />
      <div className="menu">
        <ul>
          <li>
            <Link href="/test/axios.test">
              <a>Axios Test </a>
            </Link>
          </li>
          <li>
            <Link href="/test/emotion.test">
              <a>emotion Test </a>
            </Link>
          </li>
          <li>
            <Link href="/test/hook.test">
              <a>Hook Test </a>
            </Link>
          </li>
          <li>
            <Link href="/test/props.test">
              <a>Props Test </a>
            </Link>
          </li>
          <li>
            <Link href="/test/redux.test">
              <a>Redux Test </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TestPage;
