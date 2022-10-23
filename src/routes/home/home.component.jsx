import {Fragment} from "react";
import PricingTable from "../../components/blocks/pricing-table.component";
import SliderSection from "../../components/blocks/slider.component";

const Home = () => {
    return (
        <Fragment>
            <SliderSection/>
            <PricingTable/>
        </Fragment>
    )
}

export default Home;