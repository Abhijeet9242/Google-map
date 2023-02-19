import { useEffect, useState } from "react";
import style from "./Gmap.module.css";

const Gmap = () => {
  const [place, setPlace] = useState("patna");
  const [execPlace, setexecPlace] = useState("");
  const [view, setView] = useState("m");
  const [viewstatus, setViewStatus] = useState(true);
  const [zoom, setZoom] = useState("12");
  const [direction, setDirection] = useState(false);
  const [locationsttaus, setLocationStatus] = useState(true);
  const [origin, setOrigin] = useState("muzaffarpur");
  const [destination, setDestination] = useState("delhi");

  // useEffect(() => {}, [place, view]);

  const handleChange = (e) => {
    setPlace(e.target.value);
    setexecPlace(e.target.value);
  };

  const handleItem = (val) => {
    setPlace(val + execPlace);
  };

  const handleView = () => {
    setViewStatus(!viewstatus);
    if (view == "m") {
      setView("k");
    } else if (view == "k") {
      setView("m");
    }
    // console.log(view);
  };

  const handleZoom = (zoomval) => {
    setZoom(zoomval);
  };

  const handleDirection = () => {
    setDirection(!direction);
    setLocationStatus(false);
    console.log(direction);
  };

  const handleLocation = () => {
    setLocationStatus(!locationsttaus);
    setDirection(false);
  };

  // let baseurl = "https://maps.google.com/maps?q=patna&z=12&t=m&ie=UTF8&iwloc=&output=embed"
  let url1 = `https://maps.google.com/maps?q=${place}&z=${zoom}&t=${view}&ie=UTF8&iwloc=&output=embed`;
  let url2 = `https://maps.google.com/maps?q=${place}&z=${zoom}&t=${view}&saddr=${origin}&daddr=${destination}&f=d&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={style.container}>
      <h1 className={style.head}>Google Map</h1>

      <div className={style.searchoption}>
        <div className={style.location}>
          <button onClick={handleLocation}>Search Loaction</button>
        </div>

        <div className={style.direction}>
          <button onClick={handleDirection}>Check Direction</button>
        </div>
      </div>

      {locationsttaus ? (
        <>
          <div className={style.ipdiv}>
            <input placeholder="Enter Location" onChange={handleChange} />
          </div>
          <div className={style.ipdiv}>
            <button onClick={() => handleItem("Cinemas in ")}>Cinemas</button>
            <button onClick={() => handleItem("Restaurants in ")}>
              Restaurants
            </button>
            <button onClick={() => handleItem("Parks in ")}>Parks</button>
            <button onClick={() => handleItem("ATMS in")}>ATMS</button>
          </div>
        </>
      ) : (
        ""
      )}

      {direction ? (
        <div className={style.route}>
          <div>
            <input
              placeholder="Enter Origin"
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Enter Destination"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={style.satelite_and_range}>
        <div>
          <button onClick={handleView}>
            {viewstatus ? "Satelite view" : "Normal view"}
          </button>
        </div>
        <div>
          {" "}
          <input
            type="range"
            min="1"
            max="100"
            onChange={(e) => handleZoom(e.target.value)}
          />
        </div>
      </div>

      {direction === false ? (
        <div className={style.mapcont}>
          <iframe
            width="90%"
            height="400"
            style={{ border: "0" }}
            loading="lazy"
            allowfullscreen
            src={url1}
          ></iframe>
        </div>
      ) : (
        <div className={style.mapcont}>
          <iframe
            width="90%"
            height="400"
            style={{ border: "0" }}
            loading="lazy"
            allowfullscreen
            src={url2}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Gmap;
