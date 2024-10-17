import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Drill, Mail, MapPin, Phone, Shield, Tent, TreePine } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ShadeNet Solutions</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-muted py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Your One-Stop Shop for Shading and Drilling Solutions</h2>
            <p className="text-xl mb-8">We provide top-quality net shading, borehole drilling, and pole supply services.</p>
            <Button size="lg">Get a Quote</Button>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Tent className="mr-2" /> Net Shading Supply
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>High-quality net shading solutions for various applications.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Drill className="mr-2" /> Borehole Drilling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Professional borehole drilling services for water access.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TreePine className="mr-2" /> Poles Supply
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Durable poles for various construction and agricultural needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="products" className="py-16 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <CardTitle>Product {item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Product ${item}`}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Request Quote</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Fill out the form below for inquiries or quotations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="john@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message here" />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2" />
                    <p>123 Shade Street, Drillington, DR1 2SH</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2" />
                    <p>+1 (234) 567-8901</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2" />
                    <p>info@shadenetsolutions.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShadeNet Solutions</h3>
            <p>Providing top-quality shading and drilling solutions since 2005.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">Facebook</a>
              <a href="#" className="hover:text-accent">Twitter</a>
              <a href="#" className="hover:text-accent">Instagram</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-4 border-t border-primary-foreground/10 text-center">
          <p>&copy; 2023 ShadeNet Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}