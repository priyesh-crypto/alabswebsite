import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';

export function Services() {
  const services = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models tailored to your business needs',
      features: [
        'Predictive Analytics',
        'Pattern Recognition',
        'Anomaly Detection',
        'Recommendation Systems',
      ],
      tags: ['ML', 'Data Science'],
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text and language understanding capabilities',
      features: [
        'Sentiment Analysis',
        'Text Classification',
        'Named Entity Recognition',
        'Language Translation',
      ],
      tags: ['NLP', 'AI'],
    },
    {
      title: 'Computer Vision',
      description: 'Intelligent image and video analysis systems',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'Video Analytics',
      ],
      tags: ['CV', 'Deep Learning'],
    },
    {
      title: 'AI Strategy Consulting',
      description: 'Expert guidance for AI adoption and implementation',
      features: [
        'AI Readiness Assessment',
        'Technology Roadmapping',
        'Implementation Planning',
        'Training & Support',
      ],
      tags: ['Consulting', 'Strategy'],
    },
    {
      title: 'Data Engineering',
      description: 'Robust data pipelines and infrastructure',
      features: [
        'Data Pipeline Design',
        'ETL Development',
        'Data Warehouse Solutions',
        'Real-time Processing',
      ],
      tags: ['Data', 'Infrastructure'],
    },
    {
      title: 'AI Model Deployment',
      description: 'Production-ready AI model deployment and scaling',
      features: [
        'Model Optimization',
        'API Development',
        'Cloud Deployment',
        'Monitoring & Maintenance',
      ],
      tags: ['MLOps', 'DevOps'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Services Hero */}
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          We offer comprehensive AI and machine learning services to help your
          organization harness the power of intelligent technology.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can transform your business.
            Contact us today for a free consultation.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
