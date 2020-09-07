import stats from '../data/stats.json';

const useStats = ({ zoneId, areaId, storeId }) => {
  if (zoneId === 4 && areaId === 31 && storeId === 543) {
    return stats[`${zoneId}${areaId}${storeId}`];
  }

  if (zoneId === 4 && areaId === 31) {
    return stats[`${zoneId}${areaId}`];
  }

  if (zoneId === 4) {
    return stats[`${zoneId}`];
  }

  return stats['0'];
};

export default useStats;
