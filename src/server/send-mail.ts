"use server";
import { Resend } from "resend";

export default async function sendMail(sender: string, body: string) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const res = await resend.emails.send({
      to: process.env.NINA_EMAIL as string,
      from: "no-replay@basys.ai",
      subject: `Message From: ${sender}`,
      html: `<p>${body}</p>`,
    });
    console.log("🚀 ~ file: send-mail.ts:14 ~ sendMail ~ res:", res);
  } catch (error) {
    console.log("🚀 ~ file: send-mail.ts:15 ~ sendMail ~ error:", error);
  }
}
