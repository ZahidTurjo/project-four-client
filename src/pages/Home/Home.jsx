import { useLoaderData } from 'react-router-dom';
import Room from '../.../../../components/Rooms/Room'
const Home = () => {
    const rooms=useLoaderData()
    
    return (
        <div>
           
            <Room  ></Room>
        </div>
    );
};

export default Home;