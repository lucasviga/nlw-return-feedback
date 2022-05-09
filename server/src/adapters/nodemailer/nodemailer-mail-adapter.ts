import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5bb537fd9daf7e",
    pass: "7b6dbdd6baa2fd"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: 'Team Feedget <hi@feedget.com>',
      to: 'Lucas Viga <lucasviga12@gmail.com>',
      subject,
      html: body,
    })
  };
}