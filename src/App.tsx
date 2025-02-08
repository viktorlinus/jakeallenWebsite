import React from 'react';
import { 
  Target, 
  Brain, 
  Trophy, 
  ChevronRight, 
  Star, 
  CheckCircle2,
  Users,
  Rocket,
  BarChart3
} from 'lucide-react';

// Add TypeScript interface for window.Calendly
declare global {
  interface Window {
    Calendly?: any;
  }
}

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = "Jake Allen | Elite Performance Coach";
  }, []);

  const calendlyUrl = 'https://calendly.com/coachjakeallen/athlete-check-in';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              ACHIEVING PEAK PERFORMANCE THROUGH OPTIMIZING HEALTH
            </h1>
            <p className="text-xl text-gray-600">
              Helping you reach the top 1% of the 1% in your domain through personalized coaching and health optimization.
              Remote and In-Person Packages Available.
            </p>
            <div className="space-y-4">
              <a 
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center hover:bg-blue-700 transition-colors"
              >
                Schedule Your Strategy Session
                <ChevronRight className="ml-2" />
              </a>
              <p className="text-gray-500 text-sm">Free 30-minute consultation to discuss your goals and create a roadmap for success.</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/hero-image.webp"
              alt="Jake Allen - Performance Coach"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Elite Performance Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <Trophy className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Sports Performance</h3>
              <p className="text-gray-600">
                Expert coaching for Olympians, MLB All Stars, NBA Champions, and athletes at all levels. Customized programs for speed, agility, strength, power, endurance, and mobility.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Blood Panel Analysis</h3>
              <p className="text-gray-600">
                As a Certified Metabolic Health Professional, I'll help you achieve optimal health ranges through personalized analysis and action plans.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <Brain className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Cognitive Coaching</h3>
              <p className="text-gray-600">
                Unlock your brain's full potential with proven stress reduction strategies and customized nootropic protocols for elite performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Alex",
                location: "New Zealand",
                sport: "Boxing",
                age: "32",
                quote: [
                  "I have been into combat sports since my teenage years and have always struggled to find a coach that could dynamically work with me.",
                  "I flew into Miami looking for a sharp trainer and luckily I found Jake. He knows his functional movements extremely well, along with the pros and cons of each exercise and movement.",
                  "I enjoyed our in-person sessions so much that I have been working with him through his remote coaching program ever since, and am looking forward to flying back to Miami soon to train with him in-person again."
                ]
              },
              {
                name: "Andrew",
                location: "Ireland",
                sport: "Soccer",
                age: "25",
                quote: [
                  "From the initial consultation with Jake, I knew I was making the right decision by handing my training and rehab over to his expertise.",
                  "Jake has reassured me every step of the way through my MCL rehab, and has kept me accountable the entire time.",
                  "His programming really is tailored to my needs, and consistently altered with constant feedback after my training sessions.",
                  "He makes himself available 24/7 and I am looking forward to continue working with him well beyond my rehab process."
                ]
              },
              {
                name: "Jhonathan",
                location: "San Francisco, CA",
                profession: "Medical Sales",
                age: "37",
                quote: [
                  "Growing up I always stayed active. Like many people, once COVID hit I gained some weight and lost my gym routine.",
                  "I started working with Jake right around the holidays in December 2023, and with his custom protocol based around my blood panels, I have lost 14 pounds in just 6 weeks.",
                  "I have noticed an enormous increase in my energy, my mood has felt happier more consistently, and I am overall much more productive at work and at home with my family.",
                  "Definitely going to continue working with Jake for a long time!"
                ]
              },
              {
                name: "Sandor",
                location: "Dubai",
                sport: "BJJ",
                age: "46",
                quote: [
                  "This training is definitely next level!",
                  "I believe that I was overtraining before, so having this nice and balanced program has been a huge benefit to my sport performance.",
                  "I see these workouts focus on strength, power, and endurance that all carry over to BJJ and I really appreciate that.",
                  "Overall, working with Jake has been a great experience, thank you"
                ]
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">
                      {testimonial.age} • {testimonial.location}
                    </p>
                    <div className="mt-1 inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {testimonial.sport || testimonial.profession}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {testimonial.quote.map((paragraph, j) => {
                    // Define highlighted phrases for each testimonial focusing on emotional impact and results
                    const highlights = {
                      "Alex": [
                        "enjoyed our in-person sessions so much",
                        "looking forward"
                      ],
                      "Andrew": [
                        "reassured me every step of the way",
                        "kept me accountable",
                        "looking forward"
                      ],
                      "Jhonathan": [
                        "lost 14 pounds in just 6 weeks",
                        "enormous increase in my energy",
                        "mood has felt happier",
                        "much more productive"
                      ],
                      "Sandor": [
                        "huge benefit to my sport performance",
                        "great experience"
                      ]
                    };

                    // Function to bold phrases
                    const boldText = (text: string) => {
                      let result = text;
                      highlights[testimonial.name]?.forEach(phrase => {
                        const regex = new RegExp(`(${phrase})`, 'gi');
                        result = result.replace(regex, '<strong>$1</strong>');
                      });
                      return { __html: `"${result}"` };
                    };

                    return (
                      <p 
                        key={j} 
                        className="text-gray-600 italic"
                        dangerouslySetInnerHTML={boldText(paragraph)}
                      />
                    );
                  })}
                </div>
                <div className="mt-6 flex items-center text-blue-600">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Verified Client</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Elite Athletic Experience
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  With nearly a decade of coaching experience at the Division 1 and professional level, 
                  I have learned from the top performance coaches and minds in the world.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Trophy className="text-blue-500 mr-3 h-6 w-6 mt-1" />
                    <span>Olympians and World Champions</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="text-blue-500 mr-3 h-6 w-6 mt-1" />
                    <span>MLB All Stars and Cy Young Award Winners</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="text-blue-500 mr-3 h-6 w-6 mt-1" />
                    <span>NBA Champions</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="text-blue-500 mr-3 h-6 w-6 mt-1" />
                    <span>Super Bowl Champions</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="text-blue-500 mr-3 h-6 w-6 mt-1" />
                    <span>World Champion Boxers and BJJ Fighters</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/training-image.webp"
                alt="Jake Allen Training"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Options Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Training Options
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">In-Person Training</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-3 h-6 w-6 mt-1" />
                  <div>
                    <span className="font-semibold">One-on-One Sessions</span>
                    <p className="text-gray-600">Personalized attention and hands-on coaching in Miami</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-3 h-6 w-6 mt-1" />
                  <div>
                    <span className="font-semibold">Performance Assessment</span>
                    <p className="text-gray-600">Comprehensive evaluation of your current fitness and health status</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-3 h-6 w-6 mt-1" />
                  <div>
                    <span className="font-semibold">Direct Technique Coaching</span>
                    <p className="text-gray-600">Immediate feedback and form correction</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Remote Coaching</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-3 h-6 w-6 mt-1" />
                  <div>
                    <span className="font-semibold">Customized Programming</span>
                    <p className="text-gray-600">Tailored workouts and nutrition plans delivered digitally</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-3 h-6 w-6 mt-1" />
                  <div>
                    <span className="font-semibold">Regular Check-ins</span>
                    <p className="text-gray-600">Consistent feedback and program adjustments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-3 h-6 w-6 mt-1" />
                  <div>
                    <span className="font-semibold">24/7 Support</span>
                    <p className="text-gray-600">Always available for questions and guidance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Achieve Peak Performance?
          </h2>
          <a 
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center hover:bg-gray-100 transition-colors"
          >
            Schedule Your Strategy Session
            <ChevronRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;