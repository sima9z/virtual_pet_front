import { useState, useEffect } from 'react';
import { getPetInfo } from '../../features/api/getPetInfo';
import { PetDetails } from '../../types';

const usePetInfo = () => {
  const [petType, setPetType] = useState<string | null>(null);
  const [petDetails, setPetDetails] = useState<PetDetails | null>(null);
  const [offspringCount, setOffspringCount] = useState<number>(0);

  useEffect(() => {
    async function fetchPetInfo() {
      try {
        const petInfo = await getPetInfo();
        console.log('Pet type:', petInfo.petType);
        setPetType(petInfo.petType);
        setPetDetails(petDetails);
        setOffspringCount(petInfo.offspringCount);
      } catch (error) {
        console.error('Error fetching pet information:', error);
      }
    }

    fetchPetInfo();
  }, []);

  return { petType, petDetails, setPetDetails, offspringCount, setOffspringCount };
};

export default usePetInfo;