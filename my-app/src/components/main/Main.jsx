import React, { useState, useEffect } from "react";

const Main = () => {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://loainguycap.ceid.gov.vn/api/loaicongbo?paginate=true&page=1&perpage=18"
      );
      const data = await response.json();
      const arr = data.list;
      setItems(arr);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div id="main" className="container">
        <ul className="list-item">
          {items.map((item) => (
            <li key={item.id}>{item.ten}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Main;
