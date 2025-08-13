// components/page-components/Story_Telling.tsx
export default function Story() {
    
    return (
        <>
            <div className="w-full py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold prompt-r text-gray-800">
                        ทำความรู้จักกับ NEED SHOPPING
                    </h3>
                </div>

                {/* Main Content - Video + Text */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        
                        {/* ฝั่งซ้าย - Video */}
                        <div className="order-2 lg:order-1">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                                <iframe 
                                    src="https://drive.google.com/file/d/1KKm1N8DpuzeD1MLlf7WAMOnpdEg0b2av/preview"
                                    title="ทำความรู้จักกับ NEED SHOPPING"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>
                        </div>

                        {/* ฝั่งขวา - Text Content */}
                        <div className="order-1 lg:order-2 space-y-6">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold prompt-r text-gray-800 leading-tight">
        NEED SHOPPING
    </h2>
    
    <p className="text-lg text-gray-700 leading-relaxed">
        คือ อาณาจักรบ้านน็อคดาวน์ที่ใหญ่ที่สุดในภาคตะวันออก ส่งต่อคุณภาพกว่า 10,000 หลังทั่วประเทศไทย เราไม่ได้แค่จำหน่ายแต่เรายังเป็นผู้ผลิตที่มีทีมช่างมากฝีมือ ทุกหลังผ่านการตรวจสอบก่อนถึงมือลูกค้า เลือกได้ตั้งแต่บ้านราคาหลักหมื่นไปจนถึงบ้านหรูระดับหลักล้าน มีบริการครบวงจร ตั้งแต่ ดีไซน์ ผลิต ขนส่ง ติดตั้ง ครบจบในที่เดียว NEED SHOPPING เลือกเราเมื่อคุณต้องการบ้านที่มากกว่าคำว่า &quot;บ้าน&quot;
    </p>
</div>
                    </div>
                </div>
            </div>
        </>
    )
}