import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useMemo, useState } from "react";

import { providersData } from "./data";
import options from "./data/barChartOptions";
import CustomLegend from "./components/Legend";
import BarVertical from "./components/BarVertical";
import CustomSlider from "./components/CustomSlider";
import BarHorizontal from "./components/BarHorizontal";
import getArrWithLowestBgColor from "./helpers/getArrWithLowestBgColor";
import calculateProvidersPrices from "./helpers/calculateProvidersPrices";
import getArrWithLowestBorderColor from "./helpers/getArrWithLowestBorderColor";

import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["", "", "", ""];

export default function App(props) {
  const [storageGB, setStorageGB] = useState(300);
  const [transferGB, setTransferGB] = useState(300);
  const [providers, setProviders] = useState(providersData);
  const [providersPrices, setProvidersPrices] = useState(
    calculateProvidersPrices(storageGB, transferGB, providers)
  );
  const [barType, setBarType] = useState(
    window.innerWidth >= 1024 ? "horizontal" : "vertical"
  );

  useEffect(() => {
    const listener = window.addEventListener("resize", () => {
      setBarType(window.innerWidth >= 1024 ? "horizontal" : "vertical");
    });
    return () => window.removeEventListener("resize", listener);
  }, []);

  useEffect(() => {
    setProvidersPrices(
      calculateProvidersPrices(storageGB, transferGB, providers)
    );
  }, [storageGB, transferGB, providers]);

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Cost in $",
          data: providersPrices,
          borderColor: getArrWithLowestBorderColor(
            [
              "rgb(209, 25, 25)",
              "rgb(209, 125, 25)",
              "rgb(194, 25, 209)",
              "rgb(25, 118, 210)",
            ],
            providersPrices
          ),
          backgroundColor: getArrWithLowestBgColor(
            [
              "rgba(209, 25, 25, 0.5)",
              "rgba(209, 125, 25, 0.5)",
              "rgba(194, 25, 209, 0.5)",
              "rgba(25, 118, 210, 0.5)",
            ],
            providersPrices
          ),
        },
      ],
    }),
    [providersPrices]
  );

  const updateStoragePrice = (price, providerName) => {
    setProviders((prev) =>
      prev.map((p) => {
        if (p.name === providerName) p.storagePerGbPrice = price;
        return p;
      })
    );
  };

  return (
    <div className="app">
      <div className="container">
        <div className="panel">
          <div className="sliders-box">
            <CustomSlider
              value={storageGB}
              label={`Storage: ${storageGB} GB`}
              onChahge={(e) => setStorageGB(e.target.value)}
            />
            <CustomSlider
              value={transferGB}
              label={`Transfer: ${transferGB} GB`}
              onChahge={(e) => setTransferGB(e.target.value)}
            />
          </div>

          <div className="chart-box">
            <div className="bar-wrap">
              {barType === "horizontal" ? (
                <BarHorizontal data={data} options={options} />
              ) : (
                <BarVertical data={data} options={options} />
              )}
            </div>
            <CustomLegend
              items={providers}
              updateStoragePrice={updateStoragePrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
