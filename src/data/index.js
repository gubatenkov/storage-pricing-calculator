import bunnyImg from "../assets/bunny.ico";
import vultrImg from "../assets/vultr.webp";
import scalewayImg from "../assets/scaleway.svg";
import backblazeImg from "../assets/backblaze.ico";

export const providersData = [
  {
    name: "Backblaze",
    icon: backblazeImg,
    minPay: 7,
    maxPay: null,
    storagePerGbPrice: 0.005,
    transferPerGbPrice: 0.01,
    storageFreeGbLimit: 0,
    transferFreeGbLimit: 0,
    options: null,
  },
  {
    name: "Bunny",
    icon: bunnyImg,
    minPay: null,
    maxPay: 10,
    storagePerGbPrice: 0.01,
    transferPerGbPrice: 0.01,
    storageFreeGbLimit: 0,
    transferFreeGbLimit: 0,
    options: [
      {
        label: "HDD",
        value: 0.01,
      },
      {
        label: "SSD",
        value: 0.02,
      },
    ],
  },
  {
    name: "Scaleway",
    icon: scalewayImg,
    minPay: null,
    maxPay: null,
    storagePerGbPrice: 0.03,
    transferPerGbPrice: 0.02,
    storageFreeGbLimit: 75,
    transferFreeGbLimit: 75,
    options: [
      {
        label: "Multi",
        value: 0.06,
      },
      {
        label: "Single",
        value: 0.03,
      },
    ],
  },
  {
    name: "Vultr",
    icon: vultrImg,
    minPay: 5,
    maxPay: null,
    storagePerGbPrice: 0.01,
    transferPerGbPrice: 0.01,
    storageFreeGbLimit: 0,
    transferFreeGbLimit: 0,
    options: null,
  },
];
