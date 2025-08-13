import Image from "next/image";

export default function Header() {

    const perks = [
        {
            title: "การออกแบบ",
            description: "เรามีทีมสถาปนิกมืออาชีพบริษัทที่พร้อมให้บริการออกแบบแบบบ้านสำเร็จรูป ที่ตรงตามความต้องการเฉพาะของลูกค้าและให้คำปรึกษาด้านการออกแบบอย่างครอบคลุม ทั้งในส่วนของ ฐานราก รูปทรง โครงสร้าง สถาปัตย์ และงานบิ้วอิน",
            image: "/perks/design.svg"
        },
        {
            title: "งานก่อสร้าง",
            description: "ฟเราเป็นผู้นำด้านการก่อสร้างบ้านโครงสร้างเหล็ก โดยทุกขั้นตอนการก่อสร้างอยู่ภายใต้การควบคุมโดยวิศวกรผู้เชี่ยวชาญ พร้อมทั้งดำเนินการโดยทีมช่างมืออาชีพ เพื่อให้มั่นใจว่างานก่อสร้างทุกโครงการมีความสมบูรณ์แบบที่สุด และสอดคล้องกับมาตรฐานที่กำหนดไว้",
            image: "/perks/crane.svg"
        },
        {
            title: "งานจัดส่งและติดตั้ง",
            description: "บริการจัดส่งและติดตั้งบ้านสำเร็จรูปบ้านโครงสร้างเหล็ก ด้วยความรวดเร็ว และปลอดภัย โดยทีมช่างผู้เชี่ยวชาญกระบวนการติดตั้งได้รับการวางแผนอย่างละเอียด รอบคอบ เพื่อให้มั่นใจว่าทุกขั้นตอนเป็นไปอย่างราบรื่นและมีประสิทธิภาพ",
            image: "/perks/truck.svg"
        },
        {
            title: "การรับประกัน",
            description: "บริการจัดส่งและติดตั้งบ้านสำเร็จรูปบ้านโครงสร้างเหล็ก ด้วยความรวดเร็ว และปลอดภัย โดยทีมช่างผู้เชี่ยวชาญกระบวนการติดตั้งได้รับการวางแผนอย่างละเอียด รอบคอบ เพื่อให้มั่นใจว่าทุกขั้นตอนเป็นไปอย่างราบรื่นและมีประสิทธิภาพ",
            image: "/perks/document.svg"
        },
        
    ]

    return (
        <>
            <div className="flex-col justify-center items-center">
                <div className="flex justify-center items-center w-full h-full">
                    <Image src="/header-assets/hero-image.jpg" alt="header-image" width={2000} height={1000} />
                </div>
                <div className="flex flex-col justify-center items-center w-full h-full gap-4">
                    <div className="flex-col justify-center items-center w-72 mt-4">
                    <p className="text-xl font-bold prompt-r text-end">ทำไมต้อง&nbsp;&quot;น็อคดาวน์&quot;&nbsp;ต้อง</p>
                    <h3 className="text-4xl font-bold prompt-r text-center text-teal-500">NEED&nbsp;SHOPPING</h3>
                    </div>
                </div>
                    {/* ANCHOR :  perks */}
                <div
            id="perk"
            className="md:flex md:justify-between w-full h-full mt-4"
          >
            {perks.map((perk , i)=>(
                <div className=" flex flex-col justify-center items-center text-center p-5" key={i}>
                    <Image src={perk.image} alt={perk.title} width={100} height={100} className="w-16 h-16" />
                    <h3 className="text-2xl font-bold prompt-r text-center text-teal-500 mt-4">{perk.title}</h3>
                    <p className="text-xs prompt-r text-center text-muted-foreground">{perk.description}</p>
                </div>
            ))}
          </div>
            </div>
        </>
    )
}