import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const ServicesList = ({services}) => {
    const [current, setCurrent] = useState(0);
    const showDetails = (index) => {
        setCurrent(index);
    }
    return services.length > 0 ?
        services.map((service, index) => {
            return (
                <div className="services__lists animation" key={index}>
                    <h4 className={`services__lists__heading ${current === index ? 
                        'services__lists__heading--active' 
                        : 'services__lists__heading--normal'}`}
                        onClick={()=> showDetails(index)}
                    >
                        <BiChevronRight size={20} className={`${current === index ? 
                            'services__rotate' : 'services__back'}`}
                             color={`${current === index ? '#ff4d58' : 'black'}`}
                        />
                        {service.heading}
                    </h4>
                    <p className={`services__lists__details ${current === index ?
                     'services__lists__details--show' : 
                        ''}`}>{service.p}
                    </p>
                </div>
            )
        })
        : ''
}
export default ServicesList;