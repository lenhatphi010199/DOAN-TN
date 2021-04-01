import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  ComboContainer,
  ComboWrapper,
  ComboH1,
  ComboH2,
  ComboHC,
  ComboP,
} from "./ImpCombo";

function Combo() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://localhost:8080/api/v1/combo");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          const result = await axios.get(url);
          setData(result.data.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
      console.log(data);
      fetchData();
    } catch (err) {
      console.log({ err });
    }
  }, [url]);

  return (
    <Fragment>
      <ComboContainer id="combo">
        <ComboH1>Homecare</ComboH1>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <ComboWrapper>
            {data.map((item) => (
              <ComboHC key={item.id}>
                <img src={item.image} alt="Product Name"/>
                <ComboH2>{item.name}</ComboH2>
                <ComboP>{item.information}</ComboP>
                <Link to={`/detailsCombo/${item.id}`}>Xem Chi Tiết</Link>
              </ComboHC>
            ))}
          </ComboWrapper>
        )}
      </ComboContainer>
    </Fragment>
  );
}

export default Combo;
