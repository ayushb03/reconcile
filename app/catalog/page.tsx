import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Star,
  Shield,
  Truck,
  Globe,
  ArrowRight,
  ShoppingCart,
  Factory,
  CheckCircle,
  Zap,
} from "lucide-react"

export default function CatalogPage() {
  const chemicals = [
    {
      name: "Sodium Chloride (NaCl)",
      purity: "99.9%",
      supplier: "Global Chemical Co.",
      rating: 4.9,
      price: "$2.50/kg",
      minOrder: "25kg",
      location: "Germany",
      certifications: ["ISO 9001", "GMP"],
      inStock: true,
    },
    {
      name: "Ethanol (C2H5OH)",
      purity: "95%",
      supplier: "Pure Solutions Ltd.",
      rating: 4.8,
      price: "$3.20/L",
      minOrder: "100L",
      location: "USA",
      certifications: ["FDA", "USP"],
      inStock: true,
    },
    {
      name: "Acetone (C3H6O)",
      purity: "99.5%",
      supplier: "ChemTech Industries",
      rating: 4.7,
      price: "$1.80/L",
      minOrder: "50L",
      location: "China",
      certifications: ["ISO 9001"],
      inStock: false,
    },
    {
      name: "Sulfuric Acid (H2SO4)",
      purity: "98%",
      supplier: "Industrial Chemicals Inc.",
      rating: 4.9,
      price: "$0.85/kg",
      minOrder: "500kg",
      location: "India",
      certifications: ["ISO 14001", "OHSAS"],
      inStock: true,
    },
  ]

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
                <a href="/catalog" className="text-primary font-medium">
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Browse verified chemical catalog
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Discover thousands of chemicals from verified manufacturers with instant quotes and compliance
              documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search chemicals by name, CAS number, or formula..."
                className="pl-10 bg-background/50 border-border/50"
              />
            </div>
            <Button variant="outline" className="border-border/50 hover:bg-muted/50 bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Chemical Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {chemicals.map((chemical, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{chemical.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span>Purity: {chemical.purity}</span>
                            <span>Min Order: {chemical.minOrder}</span>
                            <div className="flex items-center gap-1">
                              <Globe className="h-3 w-3" />
                              {chemical.location}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="text-sm font-medium">{chemical.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">by {chemical.supplier}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary mb-1">{chemical.price}</div>
                          <Badge variant={chemical.inStock ? "default" : "secondary"} className="text-xs">
                            {chemical.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {chemical.certifications.map((cert, certIndex) => (
                          <Badge key={certIndex} variant="outline" className="text-xs border-accent/50 text-accent">
                            <Shield className="h-3 w-3 mr-1" />
                            {cert}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          KYC Verified
                        </div>
                        <div className="flex items-center gap-1">
                          <Truck className="h-4 w-4 text-accent" />
                          Global Shipping
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4 text-accent" />
                          Instant Quote
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:w-48">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="border-border/50 hover:bg-muted/50 bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-border/50 hover:bg-muted/50 bg-transparent">
              Load More Results
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Can't find what you're looking for?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Submit an RFQ and get custom quotes from verified manufacturers worldwide.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <a href="/submit-rfq">Submit RFQ</a>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
