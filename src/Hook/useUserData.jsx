import { useEffect, useState } from "react";

const useUserData = (userId) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // console.log(data?.user);
        setUserData(data?.user);
      });
  }, [userId]);

  return userData;
};

export default useUserData;
