import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function CoursesSection() {
  const courses = [
    {
      title: "IIT-JEE Preparation",
      image: "/placeholder.svg?height=200&width=400",
      description: "Comprehensive preparation for JEE Main & Advanced with focus on Physics, Chemistry & Mathematics",
      features: [
        "Regular mock tests and assessments",
        "Doubt clearing sessions",
        "Study material and practice papers",
        "Performance tracking",
      ],
      popular: true,
    },
    {
      title: "NEET Preparation",
      image: "/placeholder.svg?height=200&width=400",
      description: "Complete preparation for NEET with in-depth coverage of Biology, Physics & Chemistry",
      features: [
        "Biology practical sessions",
        "Regular test series",
        "Conceptual clarity focus",
        "Previous year paper analysis",
      ],
      popular: false,
    },
    {
      title: "Foundation Course",
      image: "/placeholder.svg?height=200&width=400",
      description: "Building strong fundamentals for students in classes 9th and 10th for future competitive exams",
      features: [
        "Basic to advanced concepts",
        "School curriculum integration",
        "Analytical thinking development",
        "Regular assessments",
      ],
      popular: false,
    },
  ]

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Our</span> <span className="text-secondary">Courses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized programs designed to help students excel in competitive examinations
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                course.popular ? "border-primary" : "border-gray-200"
              }`}
            >
              {course.popular && (
                <div className="bg-primary text-white text-center py-1 text-sm font-medium">Most Popular</div>
              )}
              <div className="relative">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

