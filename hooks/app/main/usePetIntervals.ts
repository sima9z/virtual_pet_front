import { useEffect, useState, useRef } from 'react';
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

  const petDetailsRef = useRef(petDetails);

  useEffect(() => {
    // petDetailsが更新されたらrefの値も更新
    petDetailsRef.current = petDetails;
  }, [petDetails]);

  useEffect(() => {
    if (petType) {
      // 体力回復のインターバル
      if (!physicalRecoveryIntervalId) {
        const physicalInterval = setInterval(() => {
          petPhysicalRecover(setPetDetails);
        }, 60000); // 1分ごと
        setPhysicalRecoveryIntervalId(physicalInterval);
      }

      // ステータス減少のインターバル
      if (!statDecreaseIntervalId) {
        const statDecreaseInterval = setInterval(() => {
          petStatDecrease(setPetDetails);
        }, 600000); // 10分ごと
        setStatDecreaseIntervalId(statDecreaseInterval);
      }

      // クリーンアップ関数でインターバルをクリア
      return () => {
        if (physicalRecoveryIntervalId) clearInterval(physicalRecoveryIntervalId);
        if (statDecreaseIntervalId) clearInterval(statDecreaseIntervalId);
      };
    }
  }, [petType]); // petTypeの変更のみを監視

  return { physicalRecoveryIntervalId, statDecreaseIntervalId };
};

export default usePetIntervals;