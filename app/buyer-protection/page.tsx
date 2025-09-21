import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  ShoppingCart,
  Factory,
  Shield,
  CheckCircle,
  DollarSign,
  FileText,
  Truck,
  Clock,
  Users,
} from "lucide-react"

export default function BuyerProtectionPage() {
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
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="/submit-rfq">Submit RFQ</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              100% Buyer Protection Guarantee
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Your chemical purchases are fully protected
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Advanced escrow system, quality guarantees, and comprehensive insurance ensure every transaction is
              secure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <a href="/submit-rfq">Start Protected Purchase</a>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border/50 hover:bg-muted/50 bg-transparent">
                View Protection Terms
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete protection coverage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every aspect of your chemical purchase is secured with multiple layers of protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Escrow",
                description: "Funds held in escrow until delivery confirmation and quality verification",
                icon: DollarSign,
                features: ["Multi-signature release", "Automated dispute resolution", "Instant refunds"],
                color: "primary",
              },
              {
                title: "Quality Guarantee",
                description: "Independent lab verification of purity, composition, and specifications",
                icon: CheckCircle,
                features: ["Third-party testing", "COA verification", "Specification matching"],
                color: "accent",
              },
              {
                title: "Shipping Insurance",
                description: "Full coverage for damage, loss, or contamination during transit",
                icon: Truck,
                features: ["Global coverage", "Hazmat specialists", "Real-time tracking"],
                color: "primary",
              },
              {
                title: "Supplier Verification",
                description: "Comprehensive KYC and compliance screening of all manufacturers",
                icon: Shield,
                features: ["License verification", "Financial screening", "Audit reports"],
                color: "accent",
              },
              {
                title: "Documentation Guarantee",
                description: "Complete compliance documentation including COAs, SDSs, and certifications",
                icon: FileText,
                features: ["Regulatory compliance", "Chain of custody", "Digital certificates"],
                color: "primary",
              },
              {
                title: "Dispute Resolution",
                description: "Expert mediation and arbitration for any transaction disputes",
                icon: Users,
                features: ["Industry experts", "Fast resolution", "Fair outcomes"],
                color: "accent",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Protection Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How buyer protection works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step-by-step protection throughout your entire purchase journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Secure Payment",
                description: "Funds held in escrow until delivery confirmation",
                icon: DollarSign,
              },
              {
                step: "02",
                title: "Quality Check",
                description: "Independent verification of chemical specifications",
                icon: CheckCircle,
              },
              {
                step: "03",
                title: "Protected Shipping",
                description: "Insured transport with real-time tracking",
                icon: Truck,
              },
              {
                step: "04",
                title: "Guaranteed Delivery",
                description: "Full refund if quality or delivery issues arise",
                icon: Shield,
              },
            ].map((step, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <step.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                stat: "$50M+",
                label: "Protected Transactions",
                icon: DollarSign,
              },
              {
                stat: "99.8%",
                label: "Successful Deliveries",
                icon: Truck,
              },
              {
                stat: "<24hrs",
                label: "Dispute Resolution",
                icon: Clock,
              },
              {
                stat: "100%",
                label: "Buyer Satisfaction",
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{item.stat}</div>
                  <div className="text-muted-foreground">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently asked questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What happens if the chemical doesn't meet specifications?",
                answer:
                  "If independent testing shows the chemical doesn't meet your specifications, you receive a full refund through our escrow system. We also cover return shipping costs.",
              },
              {
                question: "How long does dispute resolution take?",
                answer:
                  "Most disputes are resolved within 24 hours through our automated system. Complex cases involving expert review typically take 3-5 business days.",
              },
              {
                question: "Is there additional cost for buyer protection?",
                answer:
                  "Buyer protection is included at no extra cost. Our protection fees are built into the platform commission paid by sellers.",
              },
              {
                question: "What if the shipment is damaged or lost?",
                answer:
                  "All shipments are fully insured. If damage or loss occurs, you receive immediate replacement or full refund, with no impact to your operations.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl"></div>
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready for worry-free chemical procurement?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of buyers who trust ChemFlow's comprehensive protection for their chemical purchases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  <a href="/submit-rfq">Start Protected Purchase</a>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border/50 hover:bg-muted/50 bg-transparent">
                  <a href="/catalog">Browse Catalog</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
