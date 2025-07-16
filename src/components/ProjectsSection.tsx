
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Airbnb Listings Project Using Python, Excel & Power BI',
      description: 'Analyzed Airbnb New York data using Pythons Pandas, numpy, matplotlib advanced Excel techniques to transform data and Power BI for business growth.',
      image: '/project_image.jpg',
      link: 'https://github.com/RahulSharmaAnalyst/Combo-Project/tree/151d259a09ca572cf12f8ec1a7feed5d8088d889/Airbnb%20New%20York%20Project',
      tech: ['Python', 'MS Excel', 'Power BI','EDA']
    },
    {
      title: 'Ferns & Petals Sales Analysis Project using Pure Excel',
      description: 'Sales analysis of Ferns and Petals using integrated data to reveal key trends, customer insights, and performance metrics for strategic decisions.',
      image: '/project_image2.jpg',
      link: 'https://github.com/RahulSharmaAnalyst/Ms-Excel-Projects/tree/0200b5a826cb4c1b25b040e8ced3588e4ec01d81/Ferns%20%26%20Petals%20Sales%20Analysis',
      tech: ['MS Excel', 'Power Query', 'Pivot Table', 'Charts', 'Visualization']
    },
    {
      title: 'Cancer Prediction Analysis using Excel With Dynamic Dashboard',
      description: 'End-to-end cancer prediction through analytics, pattern discovery, association mining, basic prediction with dynamic Excel dashboards.',
      image: '/project_image3.jpg',
      link: 'https://github.com/RahulSharmaAnalyst/Ms-Excel-Projects/tree/ad0ebfb47d553a13f5cfe759b2ad73b56cd220e4/Cancer%20Prediction%20Analysis',
      tech: ['MS Excel', 'Data Cleaning', 'Advance Formulas', 'Power Query','predictive analysis']
    },
    {
      title: 'E-Commerce Supply Chain Analysis by Python',
      description: 'Comprehensive analysis of e-commerce supply chain data with insights on price, revenue, product performance, order, defective rate using Python.',
      image: '/project_image4.jpg',
      link: 'https://github.com/RahulSharmaAnalyst/Python-Projects/tree/31cc614edbc46035bab471e440b8ac26cc0eb574/E%20-%20Commerce%20Supply%20Chain%20Analysis',
      tech: ['Python', 'Pandas', 'Plotly', 'Vizualization']
    },
    {
      title: 'Bank-Loan Campaign Analysis Using MS Excel, Power BI',
      description: 'Data-driven bank loan campaign analysis using Excel and Power BI, exploring customer behavior, loan distribution, and repayment trends.',
      image: '/project_image5.jpg',
      link: 'https://github.com/RahulSharmaAnalyst/Power-BI-Projects/tree/512d605bc35dabbdf2792d63dbddb517a072b021/Bank-Loan%20Campaign%20Analysis',
      tech: ['MS Excel', 'Power Query', 'Data Transformation', 'Power BI','Visualization']
    }
  ];

  const stats = [
    { number: 7, label: 'Achievements' },
    { number: 10, label: 'Projects' },
    { number: 25, label: 'Mentored Students' },
    { number: 150, label: 'Cups of Coffee' }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-muted-foreground/20 mb-4">Projects</h1>
          <h2 className="text-4xl font-bold text-foreground mb-6 -mt-8">Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2.5xl mx-auto">
            Below are the sample Data Analytics projects on SQL, Python, Power BI & ML.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-primary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">
                {stat.number}+
              </div>
              <div className="text-foreground/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center section-gradient rounded-3xl p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-4">
            More projects on <span className="text-accent">Github</span>
          </h3>
          <p className="text-white/90 text-lg mb-8">
            I love to solve business problems & uncover hidden data stories
          </p>
          <Button asChild className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-lg">
            <a href="https://github.com/RahulSharmaAnalyst" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
