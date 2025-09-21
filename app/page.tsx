"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ArrowRight,
  Zap,
  CheckCircle,
  Star,
  Clock,
  TrendingDown,
  DollarSign,
  Camera,
  Mail,
  FileSpreadsheet,
  Brain,
  Users,
  Lock,
  BarChart3,
  Globe,
  X,
} from "lucide-react"

export default function ReconcileAIPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = React.useState(false);
  const [waitlistEmail, setWaitlistEmail] = React.useState('');
  const [waitlistPainPoints, setWaitlistPainPoints] = React.useState('');
  const [isWaitlistSubmitting, setIsWaitlistSubmitting] = React.useState(false);
  const [waitlistStatus, setWaitlistStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [waitlistError, setWaitlistError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
      company: formData.get('company'),
      desiredFeatures: formData.get('desired-features'),
      painPoints: formData.get('pain-points'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsWaitlistSubmitting(true);
    setWaitlistStatus('idle');
    setWaitlistError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: waitlistEmail,
          pain_points: waitlistPainPoints 
        }),
      });

      const result = await response.json();

      if (result.success) {
        setWaitlistStatus('success');
        setWaitlistEmail('');
        setWaitlistPainPoints('');
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsWaitlistModalOpen(false);
          setWaitlistStatus('idle');
        }, 2000);
      } else {
        setWaitlistStatus('error');
        setWaitlistError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error joining waitlist:', error);
      setWaitlistStatus('error');
      setWaitlistError('Network error. Please check your connection and try again.');
    } finally {
      setIsWaitlistSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-foreground">ReconcileAI</div>
              <div className="hidden md:flex space-x-6">
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
                <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">
                  Integrations
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => {
                  setIsWaitlistModalOpen(true);
                  setWaitlistError('');
                  setWaitlistStatus('idle');
                  setWaitlistPainPoints('');
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Stop doing bookkeeping busywork — reclaim hours every month.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              ReconcileAI extracts receipts, auto-categorizes expenses, matches invoices to payments and syncs with
              QuickBooks/Xero — with a human-in-the-loop review that guarantees accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-muted/50 bg-transparent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>

            {/* Hero bullets */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: Camera,
                  text: "Snap, forward, or upload receipts — we capture line items and vendor details automatically.",
                },
                {
                  icon: Brain,
                  text: "Auto-categorize and reconcile transactions, with a one-click human review.",
                },
                {
                  icon: FileSpreadsheet,
                  text: "Export clean ledgers to QuickBooks, Xero, Google Sheets or CSV.",
                },
              ].map((item, index) => (
                <div key={`hero-bullet-${index}`} className="flex items-start gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Success metric */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <TrendingDown className="h-4 w-4" />
              Save 3–8 hours per month on bookkeeping
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground">
            We help small teams and freelancers replace manual expense processing with an intelligent, audit-ready
            workflow that saves time and reduces errors.
          </p>
        </div>
      </section>


      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How it works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to automated bookkeeping
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Sign up & connect",
                description: "Connect QuickBooks / Xero or export target.",
                icon: Globe,
              },
              {
                step: "02",
                title: "Upload receipts",
                description: "Forward receipts by email, upload photos, or drop CSVs.",
                icon: Mail,
              },
              {
                step: "03",
                title: "Review & confirm",
                description: "Review flagged items and confirm categories (1–2 clicks).",
                icon: CheckCircle,
              },
              {
                step: "04",
                title: "Sync & export",
                description: "Sync to your ledger and export audit-ready reports.",
                icon: FileSpreadsheet,
              },
            ].map((item, index) => (
              <Card key={`how-it-works-${index}`} className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for intelligent expense processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Receipt & invoice capture",
                subtitle: "(mobile + email + CSV)",
                description:
                  "Take a photo, forward vendor emails, or upload spreadsheets — ReconcileAI pulls totals, taxes, vendor names and line items automatically.",
                icon: Camera,
              },
              {
                title: "Accurate OCR + context parsing",
                subtitle: "",
                description:
                  "Combination of layout OCR and small LLM enrichment to extract ambiguous fields (taxes, tips, line-items) and normalize vendors.",
                icon: Brain,
              },
              {
                title: "Auto-categorization & matching engine",
                subtitle: "",
                description:
                  "Customizable category maps for your accounting chart — machine suggestions plus rules ensure consistent posting.",
                icon: BarChart3,
              },
              {
                title: "Human-in-the-loop review dashboard",
                subtitle: "",
                description:
                  "Quick review queue to confirm AI suggestions — corrections train the model and improve accuracy for your account.",
                icon: Users,
              },
              {
                title: "One-click sync to QuickBooks & Xero",
                subtitle: "",
                description:
                  "Push reconciled transactions to your accounting system or export sanitized CSV/Google Sheets for your bookkeeper.",
                icon: Zap,
              },
              {
                title: "Security & audit trails",
                subtitle: "",
                description:
                  "Encrypted storage, role-based access, and full logs for every edit — exportable audit trail for tax time.",
                icon: Lock,
              },
            ].map((feature, index) => (
              <Card key={`feature-${index}`} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                    {feature.subtitle && <span className="text-sm text-muted-foreground ml-1">{feature.subtitle}</span>}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Help us build what you need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about the features and functionality you'd like to see in ReconcileAI. Your input helps us prioritize our development roadmap.
            </p>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Role & Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label htmlFor="role" className="text-sm font-medium text-foreground">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select your role</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="small-business-owner">Small Business Owner</option>
                      <option value="bookkeeper">Bookkeeper</option>
                      <option value="accountant">Accountant</option>
                      <option value="agency-owner">Agency Owner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Main Feature Request */}
                <div className="space-y-3">
                  <label htmlFor="desired-features" className="text-sm font-medium text-foreground">
                    What features would you like to see? *
                  </label>
                  <textarea
                    id="desired-features"
                    name="desired-features"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about the specific features, integrations, or functionality you'd like to see in ReconcileAI. What would make your bookkeeping process easier?"
                  />
                </div>

                {/* Current Challenges */}
                <div className="space-y-3">
                  <label htmlFor="pain-points" className="text-sm font-medium text-foreground">
                    What's your biggest bookkeeping challenge?
                  </label>
                  <textarea
                    id="pain-points"
                    name="pain-points"
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="What are the biggest challenges you face with your current bookkeeping process?"
                  />
                </div>


                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-base font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Feature Request'}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                  
                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 text-sm font-medium">
                        ✅ Feature request submitted successfully! We'll get back to you within 2-3 business days.
                      </p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 text-sm font-medium">
                        ❌ Failed to submit feature request. Please try again or contact us directly.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              We'll review your request and get back to you within 2-3 business days.
            </p>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently asked questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How accurate is the OCR and categorization?",
                answer:
                  "Most receipts parse correctly on the first pass. A lightweight human review queue lets you confirm or fix items; corrections improve your account's accuracy over time.",
              },
              {
                question: "Do you store financial data? Is it secure?",
                answer:
                  "Yes — we store encrypted data with TLS in transit and AES-256 at rest. We're SOC2-ready and provide exportable audit logs.",
              },
              {
                question: "Can I use it with my bookkeeper?",
                answer: "Yes — invite team members or your bookkeeper to a client workspace with role permissions.",
              },
              {
                question: "What countries do you support?",
                answer:
                  "Global — we handle currency and VAT/GST fields for major regions. Let us know if you need a localized tax mapping.",
              },
              {
                question: "What happens if ReconcileAI mis-categorizes something?",
                answer:
                  'You can correct it in the review queue; all edits create an audit trail. For high-risk categories, we default to "suggest" mode so nothing posts automatically.',
              },
              {
                question: "Do you offer an API?",
                answer: "Yes — paid plans include API access for bulk uploads and custom integrations.",
              },
            ].map((faq, index) => (
              <AccordionItem key={`faq-${index}`} value={`item-${index}`} className="border-border/50 bg-card/50 backdrop-blur-sm rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl"></div>
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Help us build the features you need
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tell us about your bookkeeping challenges and desired features. Your input helps us prioritize our development roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Submit Feature Request
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-border hover:bg-muted/50 bg-transparent"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                We'll review your request and get back to you within 2-3 business days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-foreground mb-4">ReconcileAI</div>
              <p className="text-muted-foreground text-sm">
                Automate receipts, invoices & bookkeeping for freelancers, agencies & SMBs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 ReconcileAI. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {isWaitlistModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Join the Waitlist</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsWaitlistModalOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Be the first to know when ReconcileAI launches. Get early access and exclusive updates.
            </p>

            <form onSubmit={handleWaitlistSubmit} className="space-y-4">
              <div>
                <Label htmlFor="waitlist-email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="waitlist-email"
                  type="email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="waitlist-pain-points" className="text-sm font-medium">
                  What do you want us to solve? <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <textarea
                  id="waitlist-pain-points"
                  value={waitlistPainPoints}
                  onChange={(e) => setWaitlistPainPoints(e.target.value)}
                  placeholder="Tell us what you'd like us to solve for you..."
                  rows={3}
                  className="w-full px-3 py-2 mt-1 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              {waitlistStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <CheckCircle className="h-4 w-4" />
                  Successfully joined the waitlist!
                </div>
              )}

              {waitlistStatus === 'error' && (
                <div className="text-red-600 text-sm">
                  {waitlistError || 'Something went wrong. Please try again.'}
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsWaitlistModalOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isWaitlistSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isWaitlistSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
