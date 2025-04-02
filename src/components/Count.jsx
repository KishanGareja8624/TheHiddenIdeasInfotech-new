import CountUp from 'react-countup';



const Count = () => {
    const Card = ({ value, title }) => {
        return (
            <div className="w-full sm:w-6/12 lg:w-3/12 ">
                <div className="shadow-sm rounded-t-2xl py-[40px]  flex flex-col items-center transform transition-all duration-300   relative overflow-hidden z-1   wow animate__animated animate__zoomIn">
                    <CountUp
                        start={0}
                        end={value}
                        className="text-white text-[40px] xl:text-[48px] font-bold text-white font-Secondary"
                        duration={2}
                        suffix="+"
                    />
                    <h6 className='text-[16px] xl:text-[24px] text-white font-Primary font-medium'>{title}</h6>
                </div>
            </div>
        );
    };

    const countData = [
        {
            value: 10,
            title: 'Tech stacks',  // Years Experiance
        },
        {
            value: 40,
            title: 'Successful Project Delivered',
        },
        {
            value: 70,
            title: 'Happy Clients',
        },
        {
            value: 10,
            title: 'IT Experts',
        },
    ]

    return (
        <>
            <section className='py-[50px] bg-THI_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000b3] bg-fixed'>
                <div className="container">
                    <div className="row">
                        <div className="flex flex-wrap xl:flex-nowrap w-full xl:gap-[20px]">
                            {countData.map((count, index) => (
                                <Card
                                    key={index}
                                    value={count.value}
                                    title={count.title}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Count
