import React from 'react';
import PricingBox from '../pricing/PricingBox';
import Footer from './Footer';
import Header from './Header';

const HomeContainer = () => {
    return (
        <div>
            {/* <TopMenu /> */}
            <Header
                title="Bạn muốn chuyển nhà?"
                description="Không còn đau đầu suy nghĩ nữa. Hãy để chúng tôi đồng hành cùng bạn để quá trình chuyển nhà trở nên đơn giản hơn bao giờ hết."
            />
            <div className="container">
                <PricingBox />
                <Footer />
            </div>
        </div>
    );
};

export default HomeContainer;