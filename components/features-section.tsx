import { BookOpen, ClipboardCheck, Users, Award, Clock, Brain, BookMarked, BarChart } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Comprehensive Learning Approach",
      description: "From basics to advanced levels, ensuring concept clarity for all students.",
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
      title: "Integrated Preparation",
      description: "Focus on both competitive exams & school curriculum for balanced learning.",
    },
    {
      icon: <BookMarked className="h-10 w-10 text-primary" />,
      title: "Expert-Curated Study Material",
      description: "Well-researched resources based on the latest syllabus & exam patterns.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Exclusive Test Series",
      description: "Regular practice tests designed specifically for IIT-JEE and NEET preparation.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Regular Assessments",
      description: "Performance tracking, student feedback, and detailed PTMS reports.",
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Dedicated Practice Sessions",
      description: "Strengthen problem-solving skills and exam readiness through regular practice.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Distraction-Free Learning",
      description: "Mobile-free full-day batches for focused and concentrated study.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual attention to every student.",
    },
  ]

  return (
    <section id="features" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Why Join</span> <span className="text-secondary">Shakti Bodh?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive learning environment designed to help students excel in competitive exams
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

