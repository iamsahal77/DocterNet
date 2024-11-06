import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Docters = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState(speciality || '');
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleSpecialityClick = (spec) => {
    setSelectedSpeciality(spec === selectedSpeciality ? '' : spec); // Toggle selection
    navigate(spec === selectedSpeciality ? '/doctors' : `/doctors/${spec}`);
  };

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          {[
            'General physician',
            'Gynecologist',
            'Dermatologist',
            'Pediatricians',
            'Neurologist',
            'Gastroenterologist',
          ].map((spec) => (
            <p
              key={spec}
              onClick={() => handleSpecialityClick(spec)}
              className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer
                ${selectedSpeciality === spec ? 'bg-primary text-white border-primary' : 'border-gray-300 hover:bg-gray-100 '}`}
            >
              {spec}
            </p>
          ))}
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:border-primary hover:translate-y-[-10px] transition-all duration-500'
              key={index}
            >
              <img className='bg-blue-50' src={item.image} alt={`${item.name}'s profile`} />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-green-500'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  <span>Available</span>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Docters;
