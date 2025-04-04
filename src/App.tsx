import './App.css';
import Paragraph from './components/Paragraph';
import PrimaryHeading from './components/PrimaryHeading';
import SecondaryHeading from './components/SecondaryHeading';
import Subheading from './components/Subheading';
import SmallText from './components/SmallText';
import Button from './components/Button';

function App() {
    return (
        <>
            <PrimaryHeading>Primary Heading</PrimaryHeading>
            <SecondaryHeading>Secondary Heading</SecondaryHeading>
            <Subheading>Subheading</Subheading>
            <Paragraph>Paragraph</Paragraph>
            <SmallText>Small Text</SmallText>
            <Button>Click Me</Button>
        </>
    );
}

export default App;
