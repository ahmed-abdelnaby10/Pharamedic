import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/Logo_Pharamedic_1.png"
            alt="Logo"
            width={200}
            height={40}
            style={{
                height: "auto"
            }}
            priority={true}
        />
    )
}
