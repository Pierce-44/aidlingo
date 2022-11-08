import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky top-0 left-0 z-50 w-full border-b-2 border-b-[#e5e5e5] bg-white">
      <div className="mx-auto flex max-w-[1328px] items-center justify-between py-3">
        <p className="ml-2 text-3xl text-[#58cc02]">aidlingo</p>
        <Image
          className="mr-2 rounded-full"
          src="/avatar.jpeg"
          alt="menu"
          width={38}
          height={38}
        />
      </div>
    </div>
  );
}
