import Testimonies from "../components/Testimonies/Testimonies";
import Header from "../components/Header/Header";

const FrontPage = () => {

    const heading = "We Love Coffee And all the people who make it"
    const headerBackground = "../../src/assets/images/header.jpeg"

    const testimonies = [
        { name: "John", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" },
        { name: "Eva", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" },
        { name: "Peter", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" },
        { name: "Michelle", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" }
    ]

    return (
        <>
            <Header heading={heading} background={headerBackground} />
            <Testimonies testimonies={testimonies} />
        </>
    )
}

export default FrontPage;