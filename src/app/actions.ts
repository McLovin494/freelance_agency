"use server";

import { Resend } from "resend";

interface EnquiryData {
  name: string;
  email: string;
  company: string;
  details: string;
}

export async function sendEnquiry(data: EnquiryData) {
  try {
    const { name, email, company, details } = data;

    if (!name || !email || !details) {
      return { success: false, error: "Missing required fields" };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables.");
      return { success: false, error: "Email service is not configured. Please define RESEND_API_KEY in your environment variables." };
    }

    const resend = new Resend(apiKey);

    const { data: resData, error } = await resend.emails.send({
      from: "Freelance Agency <onboarding@resend.dev>",
      to: "blueprintstudio.agency@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: `
You have received a new enquiry.

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Project Details:
${details}
      `.trim(),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="color: #111111; font-weight: normal; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">New Project Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #111111; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #555555;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #111111;">Email:</td>
              <td style="padding: 8px 0; color: #555555;"><a href="mailto:${email}" style="color: #111111; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #111111;">Company:</td>
              <td style="padding: 8px 0; color: #555555;">${company || "Not provided"}</td>
            </tr>
          </table>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 3px solid #111111; color: #333333; line-height: 1.5; white-space: pre-wrap;">${details}</div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return { success: false, error: error.message || "Failed to send email via Resend" };
    }

    console.log(`Enquiry email successfully sent via Resend. ID: ${resData?.id}`);
    return { success: true };
  } catch (error: any) {
    console.error("Failed to send enquiry email:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
