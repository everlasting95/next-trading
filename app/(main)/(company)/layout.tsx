import Header from "@/components/organisms/Header";
import CompanySideBar from "@/components/organisms/companySidebar";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Header mode={"main"} />
        <div className="flex">
          <CompanySideBar />
          <div className="w-full bg-[white]">{children}</div>
        </div>
      </div>
    </div>
  );
}