
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { BookOpen, Calendar, Info, ExternalLink, Film, FileText, FileType } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'

function App() {
  // Sample course data - replace with your actual cours information
  const courseInfo = {
    title: "Advanced Web Development",
    code: "CS4080",
    instructor: "Dr. Jane Smith",
    semester: "Spring 2025",
    description:
      "This course covers modern web development techniques, frameworks, and best practices. Students will learn to build responsive, accessible, and performant web applications using the latest technologies.",
    objectives: [
      "Understand modern web architecture and design patterns",
      "Build responsive web applications using React and Next.js",
      "Implement accessibility best practices",
      "Deploy and manage web applications in production environments",
    ],
  }

  // Sample weeks data - replace with your actual weekly content
  const weeks = [
    {
      number: 1,
      title: "Introduction to Modern Web Development",
      description: "Overview of the course, introduction to modern web development concepts and tools.",
      topics: ["Course overview", "Web development landscape", "Setting up development environment"],
      resources: [
        { name: "Course Introduction Slides", type: "slides", url: "#" },
        { name: "Development Environment Setup Guide", type: "doc", url: "#" },
      ],
    },
    {
      number: 2,
      title: "HTML5 and CSS3 Fundamentals",
      description: "Deep dive into HTML5 semantic elements and CSS3 features.",
      topics: ["HTML5 semantic elements", "CSS3 features", "Responsive design principles"],
      resources: [
        { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
        { name: "CSS3 Features Documentation", type: "doc", url: "#" },
        { name: "Responsive Design Exercise", type: "pdf", url: "#" },
      ],
    },
    // Weeks 3-16 would follow the same pattern
  ]

  // Generate remaining weeks for the sample
  for (let i = 3; i <= 16; i++) {
    weeks.push({
      number: i,
      title: `Week ${i} Content`,
      description: `Description for week ${i} of the course.`,
      topics: [`Topic ${i}.1`, `Topic ${i}.2`, `Topic ${i}.3`],
      resources: [
        { name: `Week ${i} Slides`, type: "slides", url: "#" },
        { name: `Week ${i} Assignment`, type: "doc", url: "#" },
      ],
    })
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero section with course info */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-0" />
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{courseInfo.title}</h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center text-sm bg-primary/10 px-3 py-1 rounded-full">
                <BookOpen className="w-4 h-4 mr-2" />
                <span>{courseInfo.code}</span>
              </div>
              <div className="flex items-center text-sm bg-primary/10 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{courseInfo.semester}</span>
              </div>
              <div className="flex items-center text-sm bg-primary/10 px-3 py-1 rounded-full">
                <Info className="w-4 h-4 mr-2" />
                <span>{courseInfo.instructor}</span>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">{courseInfo.description}</p>
            <Button asChild>
              <a href="#syllabus">View Syllabus</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Course details section */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="objectives">Objectives</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-6 bg-white dark:bg-slate-900 rounded-lg mt-4 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-muted-foreground">{courseInfo.description}</p>
            <div className="mt-6">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Course overview image"
                width={600}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent value="objectives" className="p-6 bg-white dark:bg-slate-900 rounded-lg mt-4 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Learning Objectives</h2>
            <ul className="space-y-2">
              {courseInfo.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="resources" className="p-6 bg-white dark:bg-slate-900 rounded-lg mt-4 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Course Resources</h2>
            <div className="grid gap-4">
              <div className="flex items-start p-4 border rounded-lg">
                <BookOpen className="w-8 h-8 text-primary mr-4" />
                <div>
                  <h3 className="font-medium">Textbook</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern Web Development: Principles and Practices (2024)
                  </p>
                </div>
              </div>
              <div className="flex items-start p-4 border rounded-lg">
                <ExternalLink className="w-8 h-8 text-primary mr-4" />
                <div>
                  <h3 className="font-medium">Online Resources</h3>
                  <p className="text-sm text-muted-foreground">
                    Course materials available on the university learning platform
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Syllabus section */}
      <section id="syllabus" className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Course Syllabus</h2>

          <div className="space-y-6">
            {weeks.map((week) => (
              <Card key={week.number} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>
                        Week {week.number}: {week.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{week.description}</CardDescription>
                    </div>
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                      {week.number}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Topics:</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {week.topics.map((topic, index) => (
                      <li key={index} className="text-muted-foreground">
                        {topic}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mb-2">Resources:</h4>
                  <div className="grid gap-2">
                    {week.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        className="flex items-center p-2 border rounded-md hover:bg-muted transition-colors"
                      >
                        {resource.type === "slides" && <Film className="w-4 h-4 mr-2 text-primary" />}
                        {resource.type === "doc" && <FileText className="w-4 h-4 mr-2 text-primary" />}
                        {resource.type === "pdf" && <FileType className="w-4 h-4 mr-2 text-primary" />}
                        <span className="text-sm">{resource.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 flex justify-end">
                  <Button variant="outline" size="sm">
                    <a href={`#week-${week.number}`}>View Details</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {courseInfo.title} - {courseInfo.code}
          </p>
          <p className="text-sm text-muted-foreground mt-2">Created by [Your Name] for {courseInfo.semester}</p>
        </div>
      </footer>
    </main>
  )
}
export default App
