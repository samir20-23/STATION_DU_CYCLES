import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, phone, city, model, message } = body

    // Create email content
    const emailContent = `
      طلب جديد من موقع STATION DU CYCLES
      
      الاسم: ${fullName}
      الهاتف: ${phone}
      المدينة: ${city || "غير محدد"}
      الماركة/الموديل: ${model || "غير محدد"}
      
      الرسالة:
      ${message || "لا توجد رسالة إضافية"}
      
      ---
      تم إرسال هذا الطلب من موقع STATION DU CYCLES
      التاريخ: ${new Date().toLocaleString("ar-MA")}
    `

    // Here you would integrate with your email service
    // For now, we'll simulate sending an email
    console.log("Email would be sent to: aouladamarsamir@gmail.com")
    console.log("Email content:", emailContent)

    // You can integrate with services like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For demonstration, we'll just log and return success
    // In production, replace this with actual email sending logic

    return NextResponse.json({
      success: true,
      message: "تم إرسال طلبك بنجاح!",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "حدث خطأ أثناء إرسال الطلب" }, { status: 500 })
  }
}
