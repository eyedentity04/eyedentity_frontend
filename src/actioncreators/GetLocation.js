import { GET_LOCATION } from "./Type";

export const getlocation = () => {
  return (disptach) => {
    const geolocation = navigator.geolocation;

    // const location = (resolve, reject) => {
    //   console.log("halo");
    //   if (!geolocation) {
    //     reject(new Error("NOT SUPORTED"));
    //   }

    
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
