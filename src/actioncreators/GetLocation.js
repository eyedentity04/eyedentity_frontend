import { GET_LOCATION } from "./Type";

export const getlocation = () => {
  return (disptach) => {
    const geolocation = navigator.geolocation;

    
    
    // geolocation.getCurrentPosition((position) => {
    //   disptach({
    //     type: GET_LOCATION,
    //     payload: {
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude,
    //     },
    //   });
    // });

    geolocation.getCurrentPosition((position) => {
      disptach({
        type: GET_LOCATION,
        payload: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    });

    // };
    // console.log(location);
  };
};
