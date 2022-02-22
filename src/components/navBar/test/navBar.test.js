import NavBar from "../navBar";
import renderer from 'react-test-renderer';

describe('Navbar', () => {
    it('renders', () => {
        const component = renderer.create(<NavBar totalCount={4} />);
        expect(component.toJSON()).toMatchSnapshot();
    })
})