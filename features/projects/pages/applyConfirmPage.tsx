"use client";
import Button from "@/components/atoms/button";
import { ButtonType } from "@/components/atoms/button";
import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <div className="bg-[#F5F5F5]  py-[300px] sp:py-[200px]">
      <div className="bg-[white] text-center px-[20px] w-[614px] sp:w-[90%] rounded-[40px] block m-auto py-[70px] sp:py-[20px] shadow-lg">
        <img
          src="/img/logo(red).svg"
          className="blcok m-auto w-[265px] sp:hidden mb-[50px]"
        />
        <div className="m-[50px] text-left">
          〇〇サービスにご登録ありがとうございます。
          <br />
          ご入力いただいたメールアドレスにメールをお送りしましたので
          ご確認をお願いします。
          <br />
          不明点がございましたらお問い合わせフォームからご連絡ください。
          <br />
        </div>

        <Link href={"/login"}>
          <div className="text-center mb-[10px]">
            <Button buttonType={ButtonType.PRIMARY}>
              お問い合わせはこちら
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
