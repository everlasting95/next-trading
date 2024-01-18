"use client";
import React from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import TextArea from "@/components/atoms/textarea";

export interface NotiProps {
  notiData?: object;
}

const NotiPage: React.FC<NotiProps> = ({ notiData }: NotiProps) => {
  return (
    <div className="bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">お知らせ更新</span>
      </div>
      <div className="w-[45%] sp:w-[100%] m-auto mt-[55px]">
        <div className="border-b-[1px] border-[#DDDDDD]">
          <span className="text-[18px] ">企業</span>
          <div className="px-[26px] py-[30px]">
            <span className="text-[#6F6F6F]">重要なお知らせ</span>
            <TextArea
              textAreaClassName="mt-[20px] w-[100%] h-[120px]"
              placeholder="テキストテキストテキスト"
            />
            <div className="w-[100%] text-right mt-[20px]">
              <Button buttonType={ButtonType.PRIMARY}>
                <span className="flex items-center">
                  <span>更新</span>
                  <img
                    className="w-[14px] ml-[5px]"
                    src="/img/refresh.svg"
                    alt="refresh"
                  />
                </span>
              </Button>
            </div>
          </div>
          <div className="px-[26px]">
            <span className="text-[#6F6F6F]">お知らせ</span>
            <TextArea
              textAreaClassName="mt-[20px] w-[100%] h-[120px]"
              placeholder="テキストテキストテキスト"
            />
            <div className="w-[100%] text-right mt-[20px] mb-[46px]">
              <Button buttonType={ButtonType.PRIMARY}>
                <span className="flex items-center">
                  <span>更新</span>
                  <img
                    className="w-[14px] ml-[5px]"
                    src="/img/refresh.svg"
                    alt="refresh"
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-[70px] mb-[150px]">
          <span className="text-[18px] ">インフルエンサー</span>
          <div className="px-[26px] py-[30px]">
            <span className="text-[#6F6F6F]">お知らせ</span>
            <TextArea
              textAreaClassName="mt-[20px] w-[100%] h-[120px]"
              placeholder="テキストテキストテキスト"
            />
            <div className="w-[100%] text-right mt-[20px]">
              <Button buttonType={ButtonType.PRIMARY}>
                <span className="flex items-center">
                  <span>更新</span>
                  <img
                    className="w-[14px] ml-[5px]"
                    src="/img/refresh.svg"
                    alt="refresh"
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotiPage;
