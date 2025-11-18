import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD, 
      },
    });

    // Send email
    await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from Your Portfolio Contact Page</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent!" }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Email Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send message" }),
      { status: 500 }
    );
  }
}
