import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, role, company, desiredFeatures, painPoints } = body;

    // Create email content
    const emailContent = `
New Feature Request from ReconcileAI Website

Name: ${name}
Email: ${email}
Role: ${role || 'Not specified'}
Company: ${company || 'Not specified'}

Desired Features:
${desiredFeatures}

Current Pain Points:
${painPoints || 'Not specified'}

---
Submitted on: ${new Date().toLocaleString()}
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'ReconcileAI <onboarding@resend.dev>', // This is a default Resend domain for testing
      to: ['shinkahq@gmail.com'],
      subject: 'New Feature Request - ReconcileAI',
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Feature Request from ReconcileAI Website
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Role:</strong> ${role || 'Not specified'}</p>
            <p><strong>Company:</strong> ${company || 'Not specified'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Desired Features:</h3>
            <div style="background: #fff; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
              ${desiredFeatures.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Current Pain Points:</h3>
            <div style="background: #fff; padding: 15px; border-left: 4px solid #dc3545; margin: 10px 0;">
              ${painPoints ? painPoints.replace(/\n/g, '<br>') : 'Not specified'}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            Submitted on: ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    });
    
    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Feature request submitted successfully!' 
    });

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit feature request' },
      { status: 500 }
    );
  }
}