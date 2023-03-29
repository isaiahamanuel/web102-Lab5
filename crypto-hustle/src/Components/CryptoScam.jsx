import React, { Component, useEffect, useState } from "react";

const CryptoScam = () => {
  const [scamList, setScamList] = useState(null);

  useEffect(() => {
    const getScams = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const response = await fetch(
        "https://api.cryptoscamdb.org/v1/scams",
        requestOptions
      );
      const json = await response.json();
      console.log(json);
      setScamList(json);
    };
    getScams().catch(console.error);
  }, []);

  return (
    <div>
      Here is a list of coins and platforms involved in recent crypto-related
      scams:
      <ul className="side-list">
        {scamList &&
          scamList.result.map((scam) => <li key={scam.name}>{scam.name}</li>)}
      </ul>
    </div>
  );
};

export default CryptoScam;
