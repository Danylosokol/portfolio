import nodemailer from "nodemailer";
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("in api route...");
  const body = await request.json();
  const result = await sendMail(body);
  if (result.accepted) {
    return NextResponse.json({
      status: true,
      text: "Your message is received and I will contact you soon.",
    });
  } else {
    return NextResponse.json({
      status: "Something went wrong...",
    });
  }
}

const sendMail = async (data: any): Promise<any> => {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );
  oAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });
  console.log("after oAuth2Client...");
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      // @ts-ignore
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "danylo.sokol2504@gmail.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    console.log("having transport...");
    const text = `
    <b>Name:</b> ${data.name}<br/>
    <b>Email:</b> ${data.email}<br/>
    <b>Message:</b> ${data.message}<br/>
    `;
    const mailOptions = {
      from: "danylo.sokol2504@gmail.com",
      to: "danylo.sokol2504@gmail.com",
      subject: "Portfolio contact form submition",
      html: text,
    };
    const result = await transport.sendMail(mailOptions);
    console.log("having result...");
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
