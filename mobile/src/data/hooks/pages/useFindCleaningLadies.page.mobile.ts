import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default function useFindCleaningLadies() {
  const [autoCep, setAutoCep] = useState(''),
    [coordinates, setCoordinates] = useState<{
      latitude: number;
      longitude: number;
    }>();

  useEffect(() => {
    (async () => {
      try {
        const gpsAllowed = await askPermission();
        if (gpsAllowed) {
          setCoordinates(await getCoordinates());
        }
      } catch (error) { }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (coordinates) {
          setAutoCep(await getCep());
        }
      } catch (error) { }
    })();
  }, [coordinates]);

  async function askPermission(): Promise<boolean> {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      return false;
    }
  }

  async function getCoordinates(): Promise<{
    latitude: number;
    longitude: number;
  }> {
    const localization = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest
    });

    return localization.coords;
  }

  async function getCep(): Promise<string> {
    if (coordinates) {
      const address = await Location.reverseGeocodeAsync(coordinates);

      if (address.length > 0) {
        return address[0].postalCode || '';
      }
    }
    return '';
  }

  return {
    autoCep,
  };
}
