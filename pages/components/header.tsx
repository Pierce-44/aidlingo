import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky top-0 left-0 w-full border-b-2 border-b-[#e5e5e5]">
      <div className="mx-auto flex max-w-[1328px] items-center justify-between py-3">
        <p className="text-3xl text-[#58cc02]">aidlingo</p>
        <Image
          className="rounded-full"
          src="/avatar.jpeg"
          alt="menu"
          width={38}
          height={38}
        />
      </div>
    </div>
  );
}
