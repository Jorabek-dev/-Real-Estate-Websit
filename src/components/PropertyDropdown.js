import React, { useState, useEffect, useContext } from "react";

// import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// import house context
import { Menu } from "@headlessui/react";

// import houses context

import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property,setProperty,properties } = useContext(HouseContext);

  console.log(properties);

  const [isOpen, setOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className=" text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
              <RiArrowDownSLine className="dropdown-icon-secondary " /> 
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary " />
     
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className=" cursor-pointer hover:text-violet-700 transition duration-700"
              as="li"
              key={index}
            >
              {property }
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
