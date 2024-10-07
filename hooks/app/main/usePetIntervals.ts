import { useEffect, useState } from 'react';
import { petPhysicalRecover } from '../../../features/api/petPhysicalRecover';
import { petStatDecrease } from '../../../features/api/petStatDecrease';
import { usePetIntervalsProps } from '../../../types';

const usePetIntervals = ({
  petType,
  petDetails,
  setPetDetails 
}: usePetIntervalsProps ) => {
  const [physicalRecoveryIntervalId, setPhysicalRecoveryIntervalId] = useState<number | NodeJS.Timeout | null>(null);
  const [statDecreaseIntervalId, setStatDecreaseIntervalId] = useState<number | NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (petType && petDetails) {
      const physicalInterval = setInterval(() => {
        petPhysicalRecover(setPetDetails);
      }, 60000);
      setPhysicalRecoveryIntervalId(physicalInterval);

      const statDecreaseInterval = setInterval(() => {
        petStatDecrease(setPetDetails); // setPetDetailsを渡す
      }, 600000);
      setStatDecreaseIntervalId(statDecreaseInterval);

      return () => {
        clearInterval(physicalInterval);
        clearInterval(statDecreaseInterval);
      };
    }
  }, [petType, petDetails, setPetDetails]); // setPetDetailsも依存関係に追加

  return { physicalRecoveryIntervalId, statDecreaseIntervalId };
};

export default usePetIntervals;