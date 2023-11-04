import { BugButton } from 'app/providers/error-boundary';
import { Counter } from 'entities/counter';

const MainPage = (): JSX.Element => {
  return (
    <div>
      <BugButton/>
      <Counter />
    </div>
  );
};

export default MainPage;
