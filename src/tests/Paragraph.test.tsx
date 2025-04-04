import {render, screen} from '@testing-library/react';
import Paragraph from '../components/Paragraph';

describe('Paragraph', () => {
    it('should test the paragraph with correct tag, classname and content as children', () => {
        render(<Paragraph>Welcome</Paragraph>);
        const paragraph = screen.getByRole('paragraph');

        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toHaveTextContent(/Welcome/i);
        expect(paragraph).toHaveClass(/paragraph/i);
    })
})