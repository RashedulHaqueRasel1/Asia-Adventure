

const FQA = () => {
    return (
        <div className="mx-auto container items-center">

            <section className="container mx-auto p-4 lg:container lg:mx-auto mt-32 ">


                {/* <!-- ===== Clients Question Content ===== --> */}

                <div className="text-center rounded-lg">
                    <h2 className="text-2xl lg:text-4xl text-primary-text-color font-extrabold ">Clients Question</h2>
                    <p className="font-medium opacity-60 mt-6 text-sm px-8 lg:p-0 lg:text-lg mx-auto  w-full lg:w-2/4">
                        Start with a brief introduction to set the context. Mention the teams that played, the date of the game, and
                        any notable circumstances (e.g., playoffs, rivalry matchup).</p>
                </div>

                {/* <!--===== Clients Question Container  =====--> */}

                <div className="flex flex-col lg:flex-row justify-center mt-10 lg:space-x-10 border rounded-lg">

                    {/* <!--===== Clients Question Img  =====--> */}

                    <div className="">

                        <div className="">
                            {/* <img class="  " src="Images/11.png" alt=""> */}
                            <img className="w-[550px]" src='https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?t=st=1714484010~exp=1714487610~hmac=68c2a297ae9d05799faf44d42bf89db7894ed5b604fa4a678c4286eac497ccfd&w=740' alt="" />
                        </div>

                    </div>

                    {/* <!--===== Clients Question Qna  =====--> */}

                    <div className="">

                        <div className="">
                            <div className="collapse collapse-plus ">
                                <input type="radio" name="my-accordion-3" checked="checked" />
                                <div className="collapse-title text-xl font-extrabold  text-[#131318]">
                                What are some must-visit adventure destinations in Asia?
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70 text-[16px] ">Some top adventure destinations in Asia include Nepal for trekking in the Himalayas, Thailand for rock climbing in Railay Beach, and Indonesia for surfing in Bali.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus mt-4">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-extrabold text-[#131318]">
                                    Hockey Training
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70 ">Official Game Pucks: Used in professional and amateur hockey games.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus mt-4">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-extrabold text-[#131318]">
                                    Private Lessons
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70">Console and PC Games: Virtual simulations allowing players to experience hockey
                                        on-screen.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus  mt-4">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-extrabold text-[#131318]">
                                    Ski Touring
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70 ">Stickhandling Aids: Such as synthetic ice or stickhandling balls for skill
                                        development.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus  mt-4">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-extrabold  text-[#131318]">
                                    Booking
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70 ">Subscription Services: Access to live streaming, exclusive content, or
                                        behind-the-scenes footage.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus  mt-4">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-extrabold  text-[#131318]">
                                    Pricings
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70 ">Virtual Reality (VR) Training: Simulations for players to practice in a virtual
                                        environment.</p>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>



            </section>

        </div>
    );
};

export default FQA;