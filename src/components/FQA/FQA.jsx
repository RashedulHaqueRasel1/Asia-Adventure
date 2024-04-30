

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
                            <img className="w-[900px]" src='https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?t=st=1714484010~exp=1714487610~hmac=68c2a297ae9d05799faf44d42bf89db7894ed5b604fa4a678c4286eac497ccfd&w=740' alt="" />
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
                                What safety measures should I consider when going on an adventure trip in Asia?
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70 ">It's essential to research and follow local safety guidelines, hire experienced guides for activities like trekking and climbing, ensure you have proper equipment, stay hydrated, and be aware of weather conditions.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus mt-4">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-extrabold text-[#131318]">
                                How can I find reputable adventure tour operators in Asia?
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70">Look for tour operators with positive reviews and certifications, such as membership in adventure travel associations. Ask for recommendations from fellow travelers or use online platforms that specialize in adventure travel.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus  mt-4">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-extrabold text-[#131318]">
                                What are some popular adventure activities for families in Asia?
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70 "> Family-friendly adventure activities in Asia include snorkeling in the Philippines, wildlife safaris in Sri Lanka, and cycling tours in Vietnam's countryside.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus  mt-4">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-extrabold  text-[#131318]">
                                Are there any eco-friendly adventure options in Asia?
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70 ">Yes, many eco-friendly adventure options exist in Asia, such as sustainable trekking in the Annapurna region of Nepal, wildlife conservation projects in Borneo, and responsible diving in the Coral Triangle.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus  mt-4">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-extrabold  text-[#131318]">
                                How can I ensure responsible tourism while enjoying adventure activities in Asia?
                                </div>
                                <div className="collapse-content">
                                    <p className="opacity-70 ">Practice Leave No Trace principles, respect local customs and traditions, support local communities by choosing sustainable tour operators and purchasing locally made souvenirs, and minimize your environmental impact by reducing waste and conserving resources.</p>
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