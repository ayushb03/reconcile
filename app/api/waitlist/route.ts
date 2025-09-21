import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email, pain_points } = await request.json()

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists in waitlist
    const { data: existingEmail, error: checkError } = await supabaseAdmin
      .from('waitlist')
      .select('email')
      .eq('email', email.toLowerCase().trim())
      .single()

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Error checking existing email:', checkError)
      return NextResponse.json(
        { success: false, error: 'Database error' },
        { status: 500 }
      )
    }

    if (existingEmail) {
      return NextResponse.json(
        { success: false, error: 'Email already registered for waitlist' },
        { status: 409 }
      )
    }
    
    // Store email in Supabase database
    const { error: dbError } = await supabaseAdmin
      .from('waitlist')
      .insert([
        {
          email: email.toLowerCase().trim(),
          pain_points: pain_points?.trim() || null,
        }
      ])

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { success: false, error: 'Failed to join waitlist' },
        { status: 500 }
      )
    } else {
      console.log('Successfully stored waitlist signup in database:', email)
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist!',
      data: { email }
    })

  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
