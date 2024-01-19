"use client";
import Button from "@/components/atoms/button";
import { ButtonType } from "@/components/atoms/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-[#F5F5F5]  py-[300px] sp:py-[200px]">
      <div className="bg-[white] px-[20px] w-[614px] sp:w-[90%] rounded-[40px] block m-auto py-[70px] sp:py-[20px] shadow-lg">
        <img
          src="/img/logo(red).svg"
          className="blcok m-auto w-[265px] sp:hidden mb-[50px]"
        />
        <div className="flex text-center justify-center w-full items-center mb-[20px] sp:mt-[50px] text-title">
          <span>ログアウトしました。</span>
        </div>
        <div className="text-center mb-[10px]">
          <Link href={"/login"}>
            <Button buttonType={ButtonType.PRIMARY}>ログインページへ</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
