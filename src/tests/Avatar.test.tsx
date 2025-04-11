import {render, screen} from '@testing-library/react';
import Avatar from '../components/Avatar';

const imgUrl =
    'https://junaidbinjaman.com/wp-content/uploads/2025/01/Profile-picture.webp';

describe('Avatar', () => {
    it('should display the avatar with the correct image, alt tag, classes (if passed) and the size', () => {
        render(
            <Avatar
                source={imgUrl}
                alt='Junaid Head Shot'
                classes='test'
                width='80'
                height='80'
            />
        );

        const avatar = screen.getByRole('img');
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveClass('test');
        expect(avatar).toHaveAttribute('width', '80');
        expect(avatar).toHaveAttribute('height', '80');
    });

    it.todo(
        'should display the fallback image if invalid image url is passed or image url left empty'
    );
});
