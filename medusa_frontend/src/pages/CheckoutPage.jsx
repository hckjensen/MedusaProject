import Testimonies from "../components/Testimonies/Testimonies";
import Seperator from "../components/Seperator/Seperator";
import Checkout from "../components/Checkout/Checkout";

const CheckoutPage = () => {



    const testimonies = [
        { name: "John", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" },
        { name: "Eva", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" },
        { name: "Peter", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" },
        { name: "Michelle", content: "“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”" }
    ];

    return (
        <>
            <Checkout />
            <Seperator />
            <Testimonies testimonies={testimonies} />
        </>
    )
}

export default CheckoutPage;