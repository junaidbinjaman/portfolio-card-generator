import './App.css';
import Paragraph from './components/Paragraph';
import PrimaryHeading from './components/PrimaryHeading';
import SecondaryHeading from './components/SecondaryHeading';
import Subheading from './components/Subheading';
import SmallText from './components/SmallText';
import Button from './components/Button';
import Input from './components/Input';
import {useForm, SubmitHandler} from 'react-hook-form';
import Avatar from './components/Avatar';

const imgUrl =
    'https://junaidbinjaman.com/wp-content/uploads/2025/01/Profile-picture.webp';

type InputTypes = {
    firstName: string;
    lastName: string;
};

function App() {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<InputTypes>({mode: 'onChange'});

    const onSubmit: SubmitHandler<InputTypes> = (data) => console.log(data);

    return (
        <>
            <PrimaryHeading>Primary Heading</PrimaryHeading>
            <SecondaryHeading>Secondary Heading</SecondaryHeading>
            <Subheading>Subheading</Subheading>
            <Paragraph>Paragraph</Paragraph>
            <SmallText>Small Text</SmallText>
            <Button>Click Me</Button>

            <form
                className='p-6 flex flex-col gap-3'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <Input
                        type='text'
                        placeholder='First Name..'
                        register={register('firstName', {
                            required: 'First name is required',
                        })}
                        errors={errors.firstName?.message as string}
                    />
                </div>
                <div>
                    <Input
                        type='text'
                        placeholder='Last Name..'
                        register={register('lastName', {
                            required: 'Last name is required',
                        })}
                        errors={errors.lastName?.message as string}
                    />
                </div>

                <input
                    type='submit'
                    value='Submit'
                    className='text-white bg-gradient-to-r from-0% from-accent1 to-100% to-accent2 py-3.5 px-5 rounded-[10px] cursor-pointer transition-all ease-in-out active:scale-80'
                />
            </form>

            <Avatar source={imgUrl} alt='Profile pic' width={80} height={80} />
            <Avatar source={undefined} alt='Profile pic icon' width={80} />
        </>
    );
}

export default App;
