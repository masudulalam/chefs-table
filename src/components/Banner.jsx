import './Banner.css';
const Banner = () => {
    return (
        <div className="text-center bg-cover bg-no-repeat md:w-full h-full md:h-[35rem] rounded-3xl  " style={{
            backgroundImage: 'url(https://i.ibb.co.com/3kYtv41/banner.png)',
        }}>
            <div className='w-9/12 mx-auto flex flex-col items-center justify-center text-center space-y-6 py-4'>
                <h1 className="text-5xl text-center text-white">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mt-6 mb-10 text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div>
                    <button className="btn btn-success text-xl font-semibold">Explore Now</button>
                    <button className="btn btn-outline btn-success ml-6 text-xl font-semibold">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;