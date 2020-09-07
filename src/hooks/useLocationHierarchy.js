import zones from '../data/zones.json';
import areas from '../data/areas.json';
import stores from '../data/stores.json';

const useLocationHierarchy = () => {
  return { zones, areas, stores };
};

export default useLocationHierarchy;
