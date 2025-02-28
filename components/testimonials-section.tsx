import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      image: "/placeholder.svg?height=100&width=100",
      role: "JEE Advanced 2023",
      content:
        "Shakti Bodh helped me achieve my dream of getting into IIT. The faculty is excellent and the study material is comprehensive. I'm grateful for their guidance.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      image: "/placeholder.svg?height=100&width=100",
      role: "NEET 2023",
      content:
        "The structured approach at Shakti Bodh made my NEET preparation smooth. The regular tests and feedback helped me improve consistently.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      image: "/placeholder.svg?height=100&width=100",
      role: "JEE Mains 2023",
      content:
        "Being able to study near my home while getting quality education was the best part. The teachers are very supportive and always available for doubt clearing.",
      rating: 4,
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Student</span> <span className="text-secondary">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who achieved their dreams with Shakti Bodh
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

