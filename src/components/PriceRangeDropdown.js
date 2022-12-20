import React, { useState, useEffect, useContext } from "react";

// import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

// import house context
import { Menu } from "@headlessui/react";

// import houses context

import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice, properties } = useContext(HouseContext);

  console.log(properties);

  const [isOpen, setOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: " 100000 - 1300000",
    },
    {
      value: " 100000 - 1600000",
    },
    {
      value: " 190000 - 2200000",
    },
    {
      value: " 100000 - 300000",
    },
    {
      value: " 300000 - 400000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className=" text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary " />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary " />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className=" cursor-pointer hover:text-violet-700 transition duration-700"
              as="li"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
