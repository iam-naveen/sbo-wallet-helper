import Member from "./Member/Member";
import { useState, useEffect } from "react";

export default function List() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getData = async function () {
      const res = await fetch("api/data");
      const data = await res.json();
      setDetails(data);
    };
    getData();
  }, []);

  return (
    <div className="mt-6 flex flex-col w-80 md:w-96 lg:w-[28rem] items-center justify-around">
      {details.map((member, index) => (
        <Member name={member.name} memberid={member.id} key={index} />
      ))}
    </div>
  );
}
