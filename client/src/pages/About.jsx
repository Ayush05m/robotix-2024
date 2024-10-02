import eventImage from '../assets/eventImage.png';
import memberImage from '../assets/memberImage.png';
import participationImage from '../assets/participationImage.png';
import NumberAnimation from "../components/Animation/Animation";

function About() {
  return (
    <div>
      <div className="aboutPage py-12 bg-yellow-500">
        <main className="flex flex-col items-center min-h-[72vh]">
          <section className="about-section max-w-5xl w-full">
            <div className="flex justify-center px-4 py-7 bg-yellow-500 rounded-50 text-white">
              <h2 id="typewriter" className="text-3xl font-bold text-black">Few Words About Us</h2>
            </div>
            <div className="container-fluid content mt-8">
              <div className="flex justify-center gap-6 flex-col items-center sm:flex-row sm:items-stretch">
                <div className="text-center bg-white p-8 rounded-lg shadow-lg w-[95%] mr-4 sm:w-[45%]">
                  <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Who Are We ??</h2>
                  <p className="text-center text-sm text-gray-600 leading-relaxed">
                    The Robotix Club of NIT Raipur is a convergence of innovators,
                    contributors, and experts in the field of Robotics. Since its
                    inception in 2014, the club has inspired minds. Founded by enthusiastic
                    and ardent students, our vision is to promote the versatile field of
                    robotics and its ever-growing applications. We ensure that every student
                    seeking knowledge receives it. Under the guidance of our esteemed faculty
                    In-charge, Dr. Rajesh Doriya (Department of Information Technology), the club
                    operates smoothly.
                  </p>
                </div>
                <div className="text-center bg-white p-8 rounded-lg shadow-lg w-[95%] mr-4 sm:w-[45%]">
                  <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Our Vision</h2>
                  <p className="text-center text-sm text-gray-600 leading-relaxed">
                    Robotix Club NITRR aims to foster technological skills in mechatronics and robotics
                    by translating theoretical knowledge into real-life applications. We strive to
                    provide simple yet creative solutions for complex real-world problems. Emphasizing
                    student-centric events and workshops, we aim to expand the reach of robotics within
                    the college. The club operates as a cohesive unit, involving students and teachers
                    alike.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="py-12 bg-black">
        <div className="flex justify-center space-x-8">
          <div className="text-center bg-yellow-500 p-8 rounded-lg shadow-lg w-64 min-w-[20%]">
            <p className="text-2xl font-bold text-gray-700 mb-4">Total Members</p>
            <p className="text-3xl font-extrabold text-black">
              <NumberAnimation targetNumber={100} />
            </p>
            <img src={memberImage} alt="Total Members" className="w-16 h-16 mx-auto mt-4" />
          </div>

          <div className="text-center bg-yellow-500 p-8 rounded-lg shadow-lg w-64 min-w-[20%]">
            <p className="text-2xl font-bold text-gray-700 mb-4">Events Organized</p>
            <p className="text-3xl font-extrabold text-black">
              <NumberAnimation targetNumber={25} />
            </p>
            <img src={eventImage} alt="Events Organized" className="w-16 h-16 mx-auto mt-4" />
          </div>

          <div className="text-center bg-yellow-500 p-8 rounded-lg shadow-lg w-64 min-w-[20%]">
            <p className="text-xl font-bold text-gray-700 mb-4">Total Participations</p>
            <p className="text-3xl font-extrabold text-black">
              <NumberAnimation targetNumber={60} />
            </p>
            <img src={participationImage} alt="Total Participations" className="w-16 h-16 mx-auto mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;