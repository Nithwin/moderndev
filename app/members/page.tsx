import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Members from "@/components/Members";

const MembersPage = () => {
  return (
    <div className="bg-[#1E1E1E] z-0 min-h-dvh relative pb-[3rem]">
      <Header />
      <Members />
      <Footer />
    </div>
  );
};

export default MembersPage;
