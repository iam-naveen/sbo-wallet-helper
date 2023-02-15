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

  const addMember = async (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbxzUrfJCvh8Axle-H2ot0iYRaYO8bC_Qg6DYJed8LN0m8fJ4z1vutswsIByIof8kWgs/exec";
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const response = await res.text();
    if (response === "Added")
      setDetails((prev) => [
        ...prev,
        { name: formData.get("Name"), id: formData.get("ID") },
      ]);
    form.reset();
  };

  return (
    <div className="mt-6 flex flex-col w-80 md:w-96 lg:w-[28rem] items-center justify-around">
      <form
        className="flex justify-between items-center w-full"
        onSubmit={(e) => addMember(e)}
      >
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="border p-1"
            name="Name"
            placeholder="Enter Name here"
          />
          <input
            type="text"
            className="border p-1"
            name="ID"
            placeholder="Enter ID here"
          />
        </div>
        <input
          className="border px-8 py-4 rounded-lg bg-slate-100 font-bold hover:bg-slate-200"
          type="submit"
        />
      </form>
      {details.map((member, index) => (
        <Member name={member.name} memberid={member.id} key={index} />
      ))}
    </div>
  );
}
