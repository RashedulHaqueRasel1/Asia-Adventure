import { Link } from "react-router-dom";




const CountryHome = ({country}) => {


    // console.log(country)



    return (
        <div>

            <div className="mx-auto container m-24">


                <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-4 gap-4  ">
                    {/* 1 */}
                    <div className="col-span-1 lg:col-span-2">
                        <Link to={`/countryDetails/Bangladesh`} className="group relative block bg-black rounded-3xl">
                            <img
                                alt=""
                                src="https://img.freepik.com/premium-photo/sustainable-habitat-map-bangladesh-environment-concept_559531-18108.jpg?w=1380"
                                className="rounded-3xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Sundarban</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Bangladesh</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Bangladesh is a country located in South Asia, bordered by India to the west, north, and east, Myanmar (Burma) to the southeast, and the Bay of Bengal to the south. With a population exceeding 160 million people, it's one of the most densely populated countries in the world.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* 2 */}
                    <div className="col-span-1 lg:col-span-2     ">
                        <Link to={`/countryDetails/Thailand`} className="group relative block bg-black rounded-3xl">
                            <img
                                alt=""
                                src="https://img.freepik.com/free-photo/ho-kham-luang-northern-thai-style-royal-flora-ratchaphruek-chiang-mai-thailand_335224-1358.jpg?t=st=1714551019~exp=1714554619~hmac=8c524ca1570e563db6e4352fc271480089508eea5bb54d5741be1114ed0ac8cf&w=1380"
                                className="rounded-3xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Bangkok</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Thailand</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Thailand, officially known as the Kingdom of Thailand, is a country situated in Southeast Asia. It shares borders with Myanmar (Burma) to the northwest, Laos to the northeast, Cambodia to the southeast, and Malaysia to the south. Its long coastline faces the Gulf of Thailand to the southeast and the Andaman Sea to the southwest.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* 3 */}
                    <div className="col-span-1 lg:col-span-2   ">
                        <Link to={`/countryDetails/Malaysia`} className="group relative block bg-black rounded-3xl">
                            <img
                                alt=""
                                src="https://img.freepik.com/free-photo/merlion-statue-cityscape-singapore_335224-666.jpg?t=st=1714551217~exp=1714554817~hmac=d8d8fa7732b362ee82aeb76f12798b721210eda1a38a14c55eb04966f5b8f949&w=1380"
                                className="rounded-3xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Kuala Lumpur</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Malaysia</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Malaysia, located in Southeast Asia, is a vibrant and diverse country known for its cultural richness, stunning natural landscapes, and thriving economy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* 4 */}
                    <div className="col-span-1 lg:col-span-2      ">
                        <Link to={`/countryDetails/Vietnam`} className="group relative block bg-black rounded-3xl">
                            <img
                                alt=""
                                src="https://img.freepik.com/free-photo/city-water_1417-1896.jpg?t=st=1714551300~exp=1714554900~hmac=0367cb8e556e3c7116569de3eb4412ca565bfc7076906655f27157f19343e65c&w=1380"
                                className="rounded-3xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Ha Long Bay</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Vietnam</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">

                                            Vietnam, located on the eastern edge of the Indochinese Peninsula in Southeast Asia, is a country renowned for its rich history, stunning landscapes, and resilient people.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* 5 */}
                    <div className="col-span-1 lg:col-span-2  ">
                        <Link to={`/countryDetails/Indonesia`} className="group relative block bg-black rounded-3xl">
                            <img
                                alt=""
                                src="https://img.freepik.com/free-photo/large-pool-with-umbrellas-hammocks_1203-182.jpg?t=st=1714552866~exp=1714556466~hmac=e29bd840a394ab45b5f0a53a4c87329897592ffd7fbd18ea1e4159a1cf5d767a&w=1380"
                                className="rounded-3xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Komodo National Park</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Indonesia</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">
                                            Indonesia, the largest archipelago in the world, is located in Southeast Asia and spans across a vast expanse of over 17,000 islands. It shares land borders with Papua New Guinea, East Timor, and Malaysia, and maritime borders with Singapore, the Philippines, Palau, and Australia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* 6 */}
                    <div className="col-span-1 lg:col-span-2   ">
                        <Link to={`/countryDetails/Indonesia`} className="group relative block bg-black rounded-3xl">
                            <img
                                alt=""
                                src="https://img.freepik.com/free-photo/ayutthaya-historical-park-wat-chaiwatthanaram-buddhist-temple-thailand_335224-1018.jpg?t=st=1714553416~exp=1714557016~hmac=7f64bd3b1f506807fb0bec6773eb432e17d7090f52fbae112cc10b92271a725a&w=1380"
                                className="rounded-3xl absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Angkor Wat</p>

                                <p className="text-xl font-bold text-white sm:text-2xl">Cambodia</p>

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-sm text-white">

                                            Cambodia, officially known as the Kingdom of Cambodia, is a country located in the southern portion of the Indochinese Peninsula in Southeast Asia. It shares borders with Thailand to the west and northwest, Laos to the north, Vietnam to the east and southeast, and the Gulf of Thailand to the southwest.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default CountryHome;