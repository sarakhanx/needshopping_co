import React from "react";
import Image from "next/image";

export default function DbdCertificate() {
  return (
    <div className="bg-gray-50 inset-shadow-xs">
      {/* Container with max width and centered */}
      <div className="max-w-7xl mx-auto px-4 py-8  mt-8">
        <div className="md:flex justify-between items-start gap-12">
          {/* left section */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Company Title */}
            <div className=" flex flex-col justify-center text-center md:text-left mb-6">
              <h3 className="text-2xl font-bold mb-2 text-center text-teal-500 prompt-r">
                NEED Shopping co., LTD.
              </h3>
              <h1 className="text-3xl mb-2 text-center text-teal-500 prompt-r">
              เอกสารและข้อมูลบริษัท
              </h1>
            </div>

            {/* Company Details */}
            <div className="space-y-3 prompt-r">
              {/* Address */}
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold whitespace-nowrap prompt-r">
                  ที่ตั้ง (สำนักงานใหญ่)&nbsp;:
                </h3>
                <p className="flex-1">
                  เลขที่ 10/10 หมู่ 10 ตำบล บางพระ อำเภอ ศรีราชา จังหวัด ชลบุรี
                </p>
              </div>

              {/* Registration Number */}
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold whitespace-nowrap prompt-r">
                  เลขทะเบียน&nbsp;:
                </h3>
                <p className="prompt-r">0205563029342</p>
              </div>

              {/* Registration Date */}
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold whitespace-nowrap prompt-r">
                  วันที่จดทะเบียน&nbsp;:
                </h3>
                <p className="prompt-r">21 กันยายน 2563</p>
              </div>

              {/* Capital */}
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold whitespace-nowrap prompt-r">
                  ทุนจดทะเบียน&nbsp;:
                </h3>
                <p className="font-bold prompt-r">50,000,000 บาท</p>
              </div>

              {/* Business Description */}
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold whitespace-nowrap prompt-r">
                  ลักษณะกิจการ&nbsp;:
                </h3>
                <p className="flex-1 leading-relaxed prompt-r">
                  ประกอบกิจการด้านการให้บริการออกแบบ ผลิต จัดจำหน่าย
                  และติดตั้งบ้านสำเร็จรูป (บ้านน็อคดาวน์) ครบวงจร ด้วยดีไซน์หรู
                  วัสดุคุณภาพสูง และมาตรฐานติดตั้งที่เหนือระดับ
                  เพื่อตอบสนองความต้องการที่อยู่อาศัยทันสมัย สะดวกสบาย
                </p>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="flex justify-center flex-1 mt-8 md:mt-0">
            <div className="relative shadow-lg">
                <Image
                  src="/dbd/dbd_need.jpg"
                  width={600}
                  height={600}
                  alt="Dbd Certificate"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
