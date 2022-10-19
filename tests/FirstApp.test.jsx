import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {
    test('should match with snapshot', () => {
        const title = 'Hola, Soy Kristoffer'
        const { container, getByText } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();

    });



    test('should show up title in h1', () => {
        const title = 'Hola, Soy Kristoffer'
        const { getByText, container } = render(<FirstApp title={title} />);

        // expect(getByText(title)).toBeTruthy();
        
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

    });
})