import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function contactEmailHtml({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const replyUrl = `mailto:${encodeURIComponent(email)}`;

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:0;background:#f4f4f1;color:#142a1f;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f4f1;padding:32px 12px;">
          <tr><td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#ffffff;border-top:8px solid #b97e3c;">
              <tr><td style="padding:42px 40px 20px;">
                <p style="margin:0;color:#9a6630;font-family:monospace;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Petrichor Consulting · Website enquiry</p>
                <p style="margin:28px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:23px;line-height:1.2;color:#142a1f;">Petrichor Consulting</p>
                <h1 style="margin:10px 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:42px;line-height:1.08;font-weight:400;color:#142a1f;">A new conversation starts here.</h1>
                <p style="margin:0;color:#5c615b;font-size:16px;line-height:1.55;">${safeName} has asked Petrichor Consulting to get in touch.</p>
              </td></tr>
              <tr><td style="padding:28px 40px;border-top:1px solid #d8d9d2;border-bottom:1px solid #d8d9d2;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td width="50%" valign="top" style="padding:0 16px 22px 0;"><p style="margin:0 0 7px;color:#8a8f88;font-family:monospace;font-size:10px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Contact</p><p style="margin:0;font-size:16px;color:#142a1f;">${safeName}</p></td>
                    <td width="50%" valign="top" style="padding:0 0 22px 16px;"><p style="margin:0 0 7px;color:#8a8f88;font-family:monospace;font-size:10px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Email</p><p style="margin:0;font-size:16px;color:#142a1f;word-break:break-word;">${safeEmail}</p></td>
                  </tr>
                  <tr><td valign="top" style="padding:0 16px 0 0;"><p style="margin:0 0 7px;color:#8a8f88;font-family:monospace;font-size:10px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Phone</p><p style="margin:0;font-size:16px;color:#142a1f;">${safePhone}</p></td><td valign="top" style="padding:0 0 0 16px;"><p style="margin:0 0 7px;color:#8a8f88;font-family:monospace;font-size:10px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Received</p><p style="margin:0;font-size:16px;color:#142a1f;">Via the website</p></td></tr>
                </table>
              </td></tr>
              <tr><td style="padding:36px 40px 42px;">
                <p style="margin:0 0 14px;color:#9a6630;font-family:monospace;font-size:10px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;">Their message</p>
                <div style="font-family:Georgia,'Times New Roman',serif;font-size:23px;line-height:1.5;color:#142a1f;">“${safeMessage}”</div>
                <p style="margin:34px 0 0;"><a href="${replyUrl}" style="display:inline-block;background:#1e3a2b;border-radius:24px;color:#f4f4f1;font-size:14px;font-weight:700;padding:13px 20px;text-decoration:none;">Reply to ${safeName}</a></p>
              </td></tr>
              <tr><td style="padding:20px 40px;border-top:1px solid #d8d9d2;color:#8a8f88;font-size:12px;line-height:1.5;">This enquiry was sent securely from petrichor-consult.com.</td></tr>
            </table>
          </td></tr>
        </table>
      </body>
    </html>`;
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, message, consent, company_website } = body;

  // Honeypot filled → silently accept and discard.
  if (company_website) return NextResponse.json({ ok: true });

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please complete your name, email and message." },
      { status: 400 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (consent !== "on") {
    return NextResponse.json(
      { error: "Please confirm consent to the privacy policy." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "The contact form isn't configured yet — please email us directly." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Website enquiry — ${name}`,
      html: contactEmailHtml({ name, email, phone, message }),
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        "",
        message,
      ].join("\n"),
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We couldn't send your message — please email us directly." },
      { status: 502 }
    );
  }
}
