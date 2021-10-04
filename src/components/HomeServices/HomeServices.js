import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import '../AllServices/AllServices.css';

const HomeServices = () => {
    const [homeservices, setHomeservices] = useState([])
    useEffect(() => {
        fetch('../../../fakeData/Home.JSON')
            .then(res => res.json())
            .then(data => setHomeservices(data))
    }, [])
    return (
        <div className="all-services">
            {
                homeservices.map(service => <Services key={service.id} service={service}></Services>)
            }
        </div>
    );
};

export default HomeServices;