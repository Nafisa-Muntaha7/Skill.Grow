import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import '../AllServices/AllServices.css'

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../../../fakeData/Data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="all-services">
            {
                services.map(service => <Services key={service.id} service={service}></Services>)
            }
        </div>
    );
};

export default AllServices;