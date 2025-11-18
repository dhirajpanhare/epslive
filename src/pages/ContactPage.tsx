import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have questions? Our team is here to help. Reach out to us anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">enprosys@epsinfotech.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">+91 9009733733</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm PST</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <CardTitle>Office</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Plot no. 17-A, Electronics Complex
Pardeshipura, Indore,
Madhya Pradesh, India 452003</p>
                  <p className="text-sm text-muted-foreground">GSTN : 23AAHCE5600L1ZS</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your name"
                      />
                      {errors.name && <span className="text-red-500 text-sm">{errors.name.message as string}</span>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        placeholder="your@email.com"
                      />
                      {errors.email && <span className="text-red-500 text-sm">{errors.email.message as string}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      {...register("subject", { required: "Subject is required" })}
                      placeholder="How can we help?"
                    />
                    {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message as string}</span>}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      {...register("message", { required: "Message is required" })}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message as string}</span>}
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
