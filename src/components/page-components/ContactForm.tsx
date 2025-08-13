// components/ContactFormAdvanced.tsx
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Loader2, CheckCircle } from 'lucide-react'

// ✅ Zod Schema
const contactFormSchema = z.object({
  name: z.string()
    .min(2, { message: "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร" })
    .max(50, { message: "ชื่อต้องไม่เกิน 50 ตัวอักษร" }),
  
  email: z.string()
    .email({ message: "รูปแบบอีเมลไม่ถูกต้อง" }),
  
  phone: z.string()
    .min(9, { message: "เบอร์โทรต้องมีอย่างน้อย 9 หลัก" })
    .max(15, { message: "เบอร์โทรต้องไม่เกิน 15 หลัก" })
    .regex(/^[0-9+\-\s()]+$/, { message: "รูปแบบเบอร์โทรไม่ถูกต้อง" }),
  
  service: z.string({
    error: "กรุณาเลือกบริการ",
  }),
  
  subject: z.string()
    .min(5, { message: "หัวข้อต้องมีอย่างน้อย 5 ตัวอักษร" })
    .max(100, { message: "หัวข้อต้องไม่เกิน 100 ตัวอักษร" }),
  
  message: z.string()
    .min(10, { message: "ข้อความต้องมีอย่างน้อย 10 ตัวอักษร" })
    .max(1000, { message: "ข้อความต้องไม่เกิน 1000 ตัวอักษร" }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

interface ContactFormAdvancedProps {
  className?: string
  title?: string
  description?: string
}

const ContactForm = ({ 
  className = '',
  title = "ติดต่อเรา",
  description = "ส่งข้อความถึงเรา เราจะติดต่อกลับภายใน 24 ชั่วโมง"
}: ContactFormAdvancedProps) => {
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // ✅ React Hook Form with Zod
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
    },
  })

  // ✅ Service options
  const serviceOptions = [
    { value: "knockdown", label: "บ้านน็อคดาวน์" },
    { value: "furniture", label: "เฟอร์นิเจอร์" },
    { value: "safebox", label: "ตู้เซฟ" },
    { value: "other", label: "อื่นๆ" }
  ]

  // ✅ Submit handler
  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true)
    
    try {
      // ✅ Mock API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Form submitted:", values)
      
      setIsSubmitted(true)
      form.reset()
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
      
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ✅ Success state
  if (isSubmitted) {
    return (
      <div className={`w-full py-8 ${className}`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">ส่งข้อความสำเร็จ!</h3>
            <p className="text-green-700">
              เราได้รับข้อความของคุณแล้ว ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full py-8 ${className}`}>
          <div className={`relative flex items-center ${className}`}>
      <div className="flex-grow border-t border-gray-300"></div>

        <h2 className="text-3xl font-bold prompt-r mb-2">
        {title}
        </h2>

      <div className="flex-grow border-t border-gray-300"></div>
    </div>
      {/* Header */}
      <div className="text-center mb-8">
        
          
        <p className="text-muted-foreground text-sm prompt-r">{description}</p>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* ✅ Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold prompt-r text-gray-800 mb-6">ข้อมูลการติดต่อ</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">ที่อยู่</h4>
                  <p className="text-gray-600">10/10 หมู่ 10 อำเภอศรีราชา ชลบุรี 20110</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">โทรศัพท์</h4>
                  <p className="text-gray-600">
                    <a href="tel:033-166-699" className="hover:text-green-600 transition-colors">033-166-699</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">อีเมล</h4>
                  <p className="text-gray-600">
                    <a href="mailto:needfurnitured@gmail.com" className="hover:text-purple-600 transition-colors">needfurnitured@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-muted-foreground">เวลาทำการ</h4>
                  <p className="text-gray-600">จันทร์ - เสาร์: 08:00 - 18:00</p>
                  <p className="text-gray-600">อาทิตย์: ปิดทำการ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ ShadCN Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ชื่อ-นามสกุล *</FormLabel>
                      <FormControl>
                        <Input placeholder="กรอกชื่อ-นามสกุล" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>อีเมล *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="example@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Phone & Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>เบอร์โทรศัพท์ *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="08X-XXX-XXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>บริการที่สนใจ *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกบริการ" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Subject */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>หัวข้อ *</FormLabel>
                    <FormControl>
                      <Input placeholder="หัวข้อที่ต้องการสอบถาม" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ข้อความ *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="รายละเอียดที่ต้องการสอบถาม..."
                        className="resize-none"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      ข้อความต้องมีความยาว 10-1000 ตัวอักษร
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-bold prompt-r"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    กำลังส่ง...
                  </>
                ) : (
                  'ส่งข้อความ'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm