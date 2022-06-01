import renderer from 'react-test-renderer';
import Quote from '../Quote';
import Home from '../Home';

describe('Test Quote and Home component', () => {
  it('should render Quote component correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Home Component correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
