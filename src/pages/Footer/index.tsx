import { SelectedPage } from "@/shared/types";
import React from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer id="invest" className=" w-full bg-gray-20 py-20">
      <div className="flex items-start justify-start px-36 lg:items-center lg:justify-between">
        <div className="flex w-full flex-col justify-between gap-[67px] [@media_(min-width:_658px)]:flex-row">
          <div className="flex items-center gap-[8px]">
            <h1 className="text-[20px] font-bold">IFEANYI</h1>
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <span className="text-[18px] font-bold">Main</span>
            <ul>
              <li className="no">Back To Top</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="text-[18px] font-bold">Legal</span>
            <ul className="flex flex-col gap-4">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <span className="text-[18px] font-bold">Social</span>
            <ul className="flex flex-col gap-4">
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="text-[18px] font-bold">Contact Us</span>
            <ul className="flex flex-col gap-4">
              <li>Support</li>
              <li>Whatsapp</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
