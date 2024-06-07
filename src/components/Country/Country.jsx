import { useLoaderData } from "react-router-dom";
import CardCountry from "../CardCountry/CardCountry";
import Empty from "../Empty/Empty";




const Country = () => {

    const countrys = useLoaderData();

    // console.log(countrys)

    if(countrys < 1){
        return <Empty message={'No Country Available'} address={'/'} label={'Go To Home'}></Empty>
       }


    return (
        <div className="mx-auto container">

            <div className="grid md:grid-cols-3 gap-4">
                {
                    countrys.map(countre => <CardCountry key={countre._id} countre={countre}></CardCountry>)
                }
            </div>




        </div>

    );
};

export default Country;