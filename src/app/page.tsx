import Branches from "@/components/page-components/Branches";
import Carousel from "@/components/page-components/Carousel";
import ContactForm from "@/components/page-components/ContactForm";
import Header from "@/components/page-components/Header";
import ImageGrid from "@/components/page-components/ImageGrid";
import Maps from "@/components/page-components/Maps";
import Story from "@/components/page-components/Story_Telling";
import VideoReviewComponent from "@/components/page-components/Video-Review-Component";
import { CarouselItem, YouTubeShort, BranchLocation } from "@/lib/types";
import Image from "next/image";

export default function Home() {
  

  const product: CarouselItem[] = [
    {
        id: 1,
        title: 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Classic (ทรงกล่อง)',
        description: [
            {bullet1 : "โครงสร้างเหล็กกล้ามมืออาชีพ"},
            {bullet2 : "รับประผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)กันคุณภาพสูง"},
            {bullet3 : "รับประกันวัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากลคุณภาพสูง"},
            {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
            {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
            {bullet6 : "ระบบไฟพร้อมใช้งาน"},
        ],
        image: '/carousel/products/prod1.jpg'
    },
    {
        id: 2,
        title : 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Classic (ทรงกล่อง)',
        description: [
            {bullet1 : "โครงสร้างเหล็กกล้ามมืออาชีพ"},
            {bullet2 : "รับประผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)กันคุณภาพสูง"},
            {bullet3 : "รับประกันวัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากลคุณภาพสูง"},
            {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
            {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
            {bullet6 : "ระบบไฟพร้อมใช้งาน"},
        ],
        image: '/carousel/products/prod2.jpg'
    },
    {
        id: 3,
        title: 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Classic (ทรงกล่อง)',
        description: [
            {bullet1 : "โครงสร้างเหล็กกล้ามมืออาชีพ"},
            {bullet2 : "รับประผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)กันคุณภาพสูง"},
            {bullet3 : "รับประกันวัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากลคุณภาพสูง"},
            {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
            {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
            {bullet6 : "ระบบไฟพร้อมใช้งาน"},
        ],
        image: '/carousel/products/prod3.jpg'
    },
    {
        id: 4,
        title: 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Classic (ทรงกล่อง)',
        description: [
            {bullet1 : "โครงสร้างเหล็กกล้ามมืออาชีพ"},
            {bullet2 : "รับประผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)กันคุณภาพสูง"},
            {bullet3 : "รับประกันวัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากลคุณภาพสูง"},
            {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
            {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
            {bullet6 : "ระบบไฟพร้อมใช้งาน"},
        ],
        image: '/carousel/products/prod4.jpg'
    },
    {
        id: 5,
        title: 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Classic (ทรงกล่อง)',
        description: [
            {bullet1 : "โครงสร้างเหล็กกล้ามมืออาชีพ"},
            {bullet2 : "รับประผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)กันคุณภาพสูง"},
            {bullet3 : "รับประกันวัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากลคุณภาพสูง"},
            {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
            {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
            {bullet6 : "ระบบไฟพร้อมใช้งาน"},
        ],
        image: '/carousel/products/prod5.jpg'
    }
]
  const productUpgrade: CarouselItem[] = [
    {
        id: 1,
        title: 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Upgrade (ทรงกล่อง)',
        description: [
            {bullet1 : "โครงสร้างเหล็กกัลวาไนซ์"},
            {bullet2 : "ผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)"},
            {bullet3 : "วัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากล"},
            {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
            {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
            {bullet6 : "ระบบไฟพร้อมใช้งาน"},
            {bullet7 : "ฝ้าฉาบเรียบ uPVC พร้อมฉนวนกันความร้อน และพ่นกันสนิมอย่างดี"},
            {bullet8 : "พื้น SPC แข็งแรงทนทาน ไม่บวม ไม่ยวบ"},
        ],
        image: '/carousel/products_upgrade/129k.jpg'
    },
    {
        id: 2,
        title : 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Upgrade (ทรงกล่อง)',
        description: [
          {bullet1 : "โครงสร้างเหล็กกัลวาไนซ์"},
          {bullet2 : "ผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)"},
          {bullet3 : "วัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากล"},
          {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
          {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
          {bullet6 : "ระบบไฟพร้อมใช้งาน"},
          {bullet7 : "ฝ้าฉาบเรียบ uPVC พร้อมฉนวนกันความร้อน และพ่นกันสนิมอย่างดี"},
          {bullet8 : "พื้น SPC แข็งแรงทนทาน ไม่บวม ไม่ยวบ"},
        ],
        image: '/carousel/products_upgrade/159k.jpg'
    },
    {
        id: 3,
        title: 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Upgrade (ทรงกล่อง)',
        description: [
          {bullet1 : "โครงสร้างเหล็กกัลวาไนซ์"},
          {bullet2 : "ผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)"},
          {bullet3 : "วัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากล"},
          {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
          {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
          {bullet6 : "ระบบไฟพร้อมใช้งาน"},
          {bullet7 : "ฝ้าฉาบเรียบ uPVC พร้อมฉนวนกันความร้อน และพ่นกันสนิมอย่างดี"},
          {bullet8 : "พื้น SPC แข็งแรงทนทาน ไม่บวม ไม่ยวบ"},
        ],
        image: '/carousel/products_upgrade/169k.jpg'
    },
]
const nordict: CarouselItem[] = [
  {
      id: 1,
      title: 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Classic (ทรงนอร์ดิก)',
      description: [
          {bullet1 : "โครงสร้างเหล็กกัลวาไนซ์"},
          {bullet2 : "ผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)"},
          {bullet3 : "วัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากล"},
          {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
          {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
          {bullet6 : "ระบบไฟพร้อมใช้งาน"},
          {bullet7 : "ฝ้าฉาบเรียบ uPVC พร้อมฉนวนกันความร้อน และพ่นกันสนิมอย่างดี"},
          {bullet8 : "พื้น SPC แข็งแรงทนทาน ไม่บวม ไม่ยวบ"},
      ],
      image: '/carousel/nordict-classic/Nordic159000(เก่า).jpg'
  },
  {
      id: 2,
      title : 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Classic (ทรงนอร์ดิก)',
      description: [
        {bullet1 : "โครงสร้างเหล็กกัลวาไนซ์"},
        {bullet2 : "ผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)"},
        {bullet3 : "วัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากล"},
        {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
        {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
        {bullet6 : "ระบบไฟพร้อมใช้งาน"},
        {bullet7 : "ฝ้าฉาบเรียบ uPVC พร้อมฉนวนกันความร้อน และพ่นกันสนิมอย่างดี"},
        {bullet8 : "พื้น SPC แข็งแรงทนทาน ไม่บวม ไม่ยวบ"},
      ],
      image: '/carousel/nordict-classic/Nordic159000(เก่า).jpg'
  },
]
const nordictUp: CarouselItem[] = [
  {
      id: 1,
      title: 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Upgrade (ทรงนอร์ดิก)',
      description: [
          {bullet1 : "โครงสร้างเหล็กกัลวาไนซ์"},
          {bullet2 : "ผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)"},
          {bullet3 : "วัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากล"},
          {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
          {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
          {bullet6 : "ระบบไฟพร้อมใช้งาน"},
          {bullet7 : "ฝ้าฉาบเรียบ uPVC พร้อมฉนวนกันความร้อน และพ่นกันสนิมอย่างดี"},
          {bullet8 : "พื้น SPC แข็งแรงทนทาน ไม่บวม ไม่ยวบ"},
          {bullet9 : "ประตูมุ้งลวดอย่างดี"},
      ],
      image: '/carousel/nordict-upgrade/NOR169k-up.jpg'
  },
  {
      id: 2,
      title : 'บ้านน็อคดาวน์สำเร็จรูป รุ่น Upgrade (ทรงนอร์ดิก)',
      description: [
        {bullet1 : "โครงสร้างเหล็กกัลวาไนซ์"},
        {bullet2 : "ผนังเย็น ISOWALL แบบ Sandwich Panel (EPS โฟมแท้ หนา 2 นิ้ว)"},
        {bullet3 : "วัสดุอุปกรณ์ใช้แบรนด์มาตรฐานระดับสากล"},
        {bullet4 : "ขนาด 3 x 6 x 2.8 เมตร"},
        {bullet5 : "เก็บงานละเอียดภายในเนี๊ยบ ไม่มีสายไฟลอย"},
        {bullet6 : "ระบบไฟพร้อมใช้งาน"},
        {bullet7 : "ฝ้าฉาบเรียบ uPVC พร้อมฉนวนกันความร้อน และพ่นกันสนิมอย่างดี"},
        {bullet8 : "พื้น SPC แข็งแรงทนทาน ไม่บวม ไม่ยวบ"},
        {bullet9 : "ประตูมุ้งลวดอย่างดี"},
      ],
      image: '/carousel/nordict-upgrade/NOR-up199k.jpg'
  },
]
// Dont forget to edit title, it's still rick roll lol
const review: YouTubeShort[] = [
  {
    id: 1,
    videoId: 'ONK__VZ2axc',
    title: 'Rick Astley - Never Gonna Give You Up',
    description: 'Never Gonna Give You Up is a song by English singer-songwriter Rick Astley. It was written by Stock Aitken Waterman and produced by Stock Aitken Waterman. It was released as the first single from his second studio album, When You\'re Gone (1987).'
  },
  {
    id: 2,
    videoId: 'HJraktrgJAY',
    title: 'Rick Astley - Never Gonna Give You Up',
    description: 'Never Gonna Give You Up is a song by English singer-songwriter Rick Astley. It was written by Stock Aitken Waterman and produced by Stock Aitken Waterman. It was released as the first single from his second studio album, When You\'re Gone (1987).'
  },
  {
    id: 3,
    videoId: 'CmNhxGVQ_8U',
    title: 'Rick Astley - Never Gonna Give You Up',
    description: 'Never Gonna Give You Up is a song by English singer-songwriter Rick Astley. It was written by Stock Aitken Waterman and produced by Stock Aitken Waterman. It was released as the first single from his second studio album, When You\'re Gone (1987).'
  },
  {
    id: 4,
    videoId: '5Qtrrv8Vk_w',
    title: 'Rick Astley - Never Gonna Give You Up',
    description: 'Never Gonna Give You Up is a song by English singer-songwriter Rick Astley. It was written by Stock Aitken Waterman and produced by Stock Aitken Waterman. It was released as the first single from his second studio album, When You\'re Gone (1987).'
  },

]

const nk_branch: CarouselItem[] = [
  {
    id: 1,
    title: 'สาขานครปฐม',
    description: [/* ... */],
    image: '/carousel/branches/สาขานครปฐม/Scene 1.png'
  }
]
const ay_branch: CarouselItem[] = [
  {
    id: 1,
    title: 'สาขาอยุธยา',
    description: [/* ... */],
    image: '/carousel/branches/สาขาอยุธยา/Scene 2_0.png'
  }
]
const branchesData: BranchLocation[] = [
  {
    id: 1,
    name: "สาขาหลัก ชลบุรี",
    address: "10/10 หมู่ 10 อำเภอศรีราชา ชลบุรี 20110",
    coordinates: { lat: 13.230725859467064, lng: 100.9513013244066 },
    phone: "033166699",
    // email: "bangkok@needshopping.co.th",
    hours: "จันทร์-เสาร์ 08:00-18:00",
    image: "/carousel/branches/สาขานครปฐม/Scene 1.png",
    description: "สาขาหลักที่ให้บริการครบวงจร"
  },
  {
    id: 2,
    name: "สาขานครปฐม",
    address: "8, 47 ตำบล ห้วยพลู อำเภอนครชัยศรี นครปฐม 73120",
    coordinates: { lat: 13.859855652387568, lng: 100.20583784091326 },
    phone: "0812333949",
    // email: "chonburi@needshopping.co.th", 
    hours: "จันทร์-เสาร์ 08:00-17:00",
    image: "/branches/chonburi.jpg",
    description: "สาขาภาคตะวันออก พร้อมให้บริการ"
  },
  {
    id: 3,
    name: "สาขาอยุธยา",
    address: "อุทัย ตำบล อุทัย อำเภออุทัย จังหวัดพระนครศรีอยุธยา 13210",
    coordinates: { lat: 14.356678948818319, lng: 100.66570102882302 },
    phone: "0891617703",
    // email: "chonburi@needshopping.co.th", 
    hours: "จันทร์-เสาร์ 08:00-17:00",
    image: "/carousel/branches/สาขาอยุธยา/Scene 2_0.png",
    description: "สาขาภาคตะวันออก พร้อมให้บริการ"
  }
]
  return (
    <>
    <Header/>
    <div className="py-2 bg-gray-50 inset-shadow-sm">
      <Story/>
    </div>
{/* Catalog */}
        <div
        className="flex flex-col gap-4 mt-10 shadow-sm mb-4" 
        id="catalog">
          <h1 className="text-xl font-bold prompt-r text-center">บ้านน็อคดาวน์สำเร็จรูป รุ่น Classic (ทรงกล่อง)</h1>
          <Carousel data={product}/>
          <h1 className="text-xl font-bold prompt-r text-center">บ้านน็อคดาวน์สำเร็จรูป รุ่น Upgrade (ทรงกล่อง)</h1>
          <Carousel data={productUpgrade}/>
          <h1 className="text-xl font-bold prompt-r text-center">บ้านน็อคดาวน์สำเร็จรูป รุ่น Classic (ทรงนอร์ดิก)</h1>
          <Carousel data={nordict}/>
          <h1 className="text-xl font-bold prompt-r text-center">บ้านน็อคดาวน์สำเร็จรูป รุ่น Upgrade (ทรงนอร์ดิก)</h1>
          <Carousel data={nordictUp}/>
        </div>
{/* Structure */}
        <div className="flex flex-col justify-center items-center relative w-full h-full">
        <h1 
        id="structure"
        className="text-4xl font-bold prompt-r mb-2" >โครงสร้าง</h1>
        <Image src="/material/material.jpg" alt="Material" width={2000} height={2000}/>
        </div>
{/* Review */}
        <div id="review" className="flex flex-col gap-4 p-10">
          <VideoReviewComponent videos={review}/>
        </div>
{/* Install */}
        <div id="install" className="shadow-xs bg-gray-50">
        <ImageGrid
        />
        </div>
{/* Branch */}
        <div id="branches" className="flex flex-col gap-4 rounded-lg">
          <Branches data={nk_branch}
          title="สาขานครปฐม"
          className=""
          />
          <Branches data={ay_branch}
          title="สาขาอยุธยา"
          className=""
          />
        </div>
        <Maps locations={branchesData}/>
{/* Contact */}
        <div id="contact">
        <ContactForm className=""/>
        </div>
    </>
  );
}
