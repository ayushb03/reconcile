import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ShoppingCart, Factory, Upload, Shield, Zap, Globe, CheckCircle, Clock, Users } from "lucide-react"

export default function SubmitRFQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-xl font-bold text-foreground">
                ChemFlow
              </a>
              <div className="hidden md:flex space-x-6">
                <a href="/catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Catalog
                </a>
                <a
                  href="/#buyers"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <ShoppingCart className="h-4 w-4" />
                  For Buyers
                </a>
                <a
                  href="/#manufacturers"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <Factory className="h-4 w-4" />
                  For Manufacturers
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-border/50 hover:bg-muted/50 bg-transparent">
                Sell on ChemFlow
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Browse Catalog</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Submit Request for Quote
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Get competitive quotes from verified manufacturers worldwide. Secure, compliant, and fast.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                KYC Verified Suppliers
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                24hr Response Time
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-accent" />
                Global Network
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* RFQ Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Chemical Requirements</CardTitle>
                <p className="text-muted-foreground">Provide detailed specifications for accurate quotes</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="chemical-name">Chemical Name *</Label>
                    <Input
                      id="chemical-name"
                      placeholder="e.g., Sodium Chloride"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cas-number">CAS Number</Label>
                    <Input
                      id="cas-number"
                      placeholder="e.g., 7647-14-5"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="purity">Required Purity *</Label>
                    <Input id="purity" placeholder="e.g., 99.5%" className="bg-background/50 border-border/50" />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Quantity Required *</Label>
                    <Input id="quantity" placeholder="e.g., 500 kg" className="bg-background/50 border-border/50" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="specifications">Additional Specifications</Label>
                  <Textarea
                    id="specifications"
                    placeholder="Include any specific requirements: grade, packaging, certifications needed, etc."
                    className="bg-background/50 border-border/50 min-h-[100px]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="delivery-location">Delivery Location *</Label>
                    <Input
                      id="delivery-location"
                      placeholder="City, Country"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <Label htmlFor="timeline">Required Timeline</Label>
                    <Input
                      id="timeline"
                      placeholder="e.g., Within 2 weeks"
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range (Optional)</Label>
                  <Input id="budget" placeholder="e.g., $1000 - $2000" className="bg-background/50 border-border/50" />
                </div>

                <div>
                  <Label>Upload Documents</Label>
                  <div className="border-2 border-dashed border-border/50 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Drop files here or click to upload</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Specifications, drawings, or reference documents
                    </p>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" className="bg-background/50 border-border/50" />
                    </div>
                    <div>
                      <Label htmlFor="contact-name">Contact Name *</Label>
                      <Input id="contact-name" className="bg-background/50 border-border/50" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" className="bg-background/50 border-border/50" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" className="bg-background/50 border-border/50" />
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Submit RFQ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Process Overview */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">How it works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Submit RFQ",
                    description: "Provide detailed chemical specifications",
                    icon: Upload,
                  },
                  {
                    step: "2",
                    title: "Get Matched",
                    description: "Verified suppliers receive your request",
                    icon: Users,
                  },
                  {
                    step: "3",
                    title: "Receive Quotes",
                    description: "Compare competitive offers within 24hrs",
                    icon: Clock,
                  },
                  {
                    step: "4",
                    title: "Secure Purchase",
                    description: "Complete transaction with buyer protection",
                    icon: Shield,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Why use RFQ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Access to 1000+ verified manufacturers",
                  "Competitive pricing through bidding",
                  "Full compliance documentation",
                  "Secure escrow payment protection",
                  "Global shipping coordination",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">Need help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our procurement specialists are here to assist with complex requirements.
                </p>
                <Button variant="outline" className="w-full border-border/50 hover:bg-muted/50 bg-transparent">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
