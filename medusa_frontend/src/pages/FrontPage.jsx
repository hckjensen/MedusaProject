import Testimonies from "../components/Testimonies/Testimonies";
import Header from "../components/Header/Header";
import SalesPitch from "../components/SalesPitch/SalesPitch";
import Beans from "../../src/assets/images/beans.jpeg";
import Bags from "../../src/assets/images/bags.jpeg";
import Coffee from "../../src/assets/images/coffee.jpeg";
import Seperator from "../components/Seperator/Seperator";
import ShopNow from "../components/ShopNow/ShopNow";

const FrontPage = () => {

    const heading = "We Love Coffee And all the people who make it"
    const headerBackground = "../../src/assets/images/header.jpeg"

    const testimonies = [
        { name: "John", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" },
        { name: "Eva", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" },
        { name: "Peter", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" },
        { name: "Michelle", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" }
    ];
    const pitchItems = [
        { heading: "The right beans", content: "Our journey begins with a deep-rooted connection to the land, as we seek out farmers who uphold environmentally-friendly practices and prioritize the well-being of their communities. Through personal relationships and mutual respect, we collaborate closely with these farmers, understanding their methods and values.", image: Beans },
        { heading: "Carefully handled", content: "Each bean is carefully handpicked at the peak of ripeness, ensuring optimal flavor and aroma. We embrace diversity in our selection, cherishing the unique characteristics of each region and varietal. From the lush mountainsides to the sun-kissed valleys, we traverse the landscapes in search of perfection.", image: Bags },
        { heading: "From us to you", content: "Our commitment to organic farming means that our beans are free from harmful chemicals, allowing the natural flavors to shine through. We believe in transparency and traceability, providing our customers with a genuine connection to the origins of their coffee.", image: Coffee },
    ];


    return (
        <>
            <Header heading={heading} background={headerBackground} />
            <Seperator />
            <SalesPitch pitchItems={pitchItems} />
            <Seperator />
            <ShopNow />
            <Seperator />
            <Testimonies testimonies={testimonies} />
        </>
    )
}

export default FrontPage;