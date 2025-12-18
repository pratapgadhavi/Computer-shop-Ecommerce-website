import React, { useEffect, useState } from "react";

const Clock = ({ Heading = "Clock Project" }) => {
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl text-blue-600">{Heading}</h1>

      <h5
        className="font-semibold"
        style={{
          width: "150px",
          background: "grey",
          borderRadius: "10px",
          margin: "15px Auto",
          padding: "10px",
          fontSize: "20px",
        }}
      >
        {loading ? <span className="font-normal">Loading...</span> : time}
      </h5>
    </>
  );
};

export default Clock;
