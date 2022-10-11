import '../styles/index.css';
import MySection from './Section/MySection';
import SectionPart_1 from './Section/SectionPart_1';
import SectionPart_2 from './Section/SectionPart_2';
import SectionPart_3 from './Section/SectionPart_3';
import SectionPart_4 from './Section/SectionPart_4';


function Main() {
    return (
        <>
        <main>
            <MySection h1="HTML" p="testHTML"/>
            <MySection h1="CSS" p="testCSS"/>
            <MySection h1="JavaScript" p="testJS"/>
            <MySection h1="React" p="testReact"/>
    </main>
    </>
    );
}

export default Main;
