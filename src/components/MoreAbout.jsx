import Mask from "../assets/Mask.png";
import Pool from "../assets/pool.png";
import Vacations from "../assets/vacations.png";

const MoreAbout = () => {
  return (
    <div className="sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16" >
      <h2 className="text-3xl font-semibold leading-10 tracking-tight text-black-600 sm:text-3xl sm:leading-none text-4xl">
        More About Projects
      </h2>

      <p className="mt-4">
        Gateway Porto Al Zorah is a low-rise residential project in Al Zorah
        City by Al Zorah Development Company, which is a joint venture between
        the Government of Ajman and Solidere International. The marina-front
        complex comprises 2 buildings and features 157 units made up of studios,
        1-3 bedroom apartments and 2-3 bedroom duplexes. Residents will enjoy
        outstanding panoramic views of the creek, marina, mangroves and lush
        inner courtyards from the comfort of their homes.
      </p>

      <p className="mt-8">
        Property sizes at Gateway Porto Al Zorah range from 657 sq. ft to 4,030
        sq. ft. The functional layouts incorporate dressing areas and balconies,
        whilst select units also have staff quarters. It is worth noting that
        the 3-bedroom duplexes will be equipped with 2 patios, a private
        swimming pool and a garden, which are not available in any other
        property type.
      </p>

      <p className="mt-8">
        Each bedroom features built-in closets, providing residents with plenty
        of space to organise their belongings. At the same time, the
        floor-to-ceiling glass windows throughout the homes not only flood the
        space with natural light, but also serve to seamlessly blend the indoor
        and outdoor environments.
      </p>

      <p className="mt-8">
        One of the major advantages of the complex is its close proximity to the
        Al Zorah Mangrove Natural Reserve Forest. This will instil a deep
        connection to nature, and provide high air quality in the surroundings.
      </p>

      <p className="mt-8">
        Occupants of Gateway Porto Al Zorah will be treated to an abundance of
        world-class amenities onsite. These include a floating pool deck with a
        lawn, gardens, a gym, a children’s play area, a waterfront promenade, a
        multi-purpose room and underground parking facilities.
      </p>

      <div className="flex justify-center space-x-5 mt-5">
        <div className="w-1/3 border border-primary flex flex-col items-center p-5 rounded-xl shadow-xl">
          <img src={Pool} alt="Pool" className="mb-2" />
          <p className="text-center mt-5 text-2xl text-primary">Pool</p>
        </div>
        <div className="w-1/3 border border-primary flex flex-col items-center p-5 rounded-xl shadow-xl">
          <img src={Vacations} alt="Vacations" className="mb-2" />
          <p className="text-center mt-5 text-2xl text-primary">Vacations</p>
        </div>
        <div className="w-1/3 border border-primary flex flex-col items-center p-5 rounded-xl shadow-xl">
          <img src={Mask} alt="Mask" className="mb-2" />
          <p className="text-center mt-5 text-2xl text-primary">Mask</p>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
