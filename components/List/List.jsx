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
    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around">
      {details.map((member, index) => (
        <Member name={member.name} memberid={member.id} key={index} />
      ))}
    </div>
  );
}
