"use client";
import React, { useState } from "react";
import { ReactNode } from "react";
import Input from "@/components/atoms/input";
import Button, { ButtonType } from "@/components/atoms/button";

export interface SearchBarProps {
  extendChild: ReactNode;
  title?: ReactNode;
}

const SearchBar: React.FC<SearchBarProps> = ({
  extendChild,
  title,
}: SearchBarProps) => {
  const [showOption, setShowOption] = useState(false);
  return (
    <div className="bg-[#F8F9FA] w-full border border-[#D3D3D3] mt-[28px] sp:mt-[0px] px-[35px] sp:px-[14px] mb-[34px] sp:mb-[14px]">
      <div className="flex gap-x-[20px] sp:gap-x-[12px] py-[12px] items-center  ">
        {!title && (
          <Input
            inputClassName="max-w-[420px] grow sp:text-sp text-small border-[#D3D3D3]"
            placeholder=" キーワードを入力してください"
          />
        )}
        {title && title}
        {!title && (
          <Button
            buttonType={ButtonType.DEFAULT}
            buttonClassName="sp:text-small sp:px-[12px]"
          >
            検索
          </Button>
        )}
        <div
          className="flex items-center"
          onClick={() => setShowOption(!showOption)}
        >
          <span className="text-[#3F8DEB] hover:cursor-pointer sp:text-spsmall sp:hidden">
            オプション検索
          </span>
          <img src="/img/triangle-down.svg" className="w-[10px] ml-[5px]" />
        </div>
      </div>
      {extendChild && showOption && (
        <div className="mb-[28px]">{extendChild}</div>
      )}
    </div>
  );
};

export default SearchBar;
