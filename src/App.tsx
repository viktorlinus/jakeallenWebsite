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

function App() {
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
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center hover:bg-blue-700 transition-colors">
                Book Your Free Strategy Session
                <ChevronRight className="ml-2" />
              </button>
              <p className="text-gray-500 text-sm">No pressure, just a conversation about how you can reach the next level.</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/cr=w_1002,h_1000.webp"
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
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-600">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">
                      {testimonial.age} • {testimonial.location}
                    </p>
                    <p className="text-blue-600 font-medium">
                      {testimonial.sport || testimonial.profession}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {testimonial.quote.map((paragraph, j) => (
                    <p key={j} className="text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-6 flex items-center">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
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
                src="/rs=w_400,cg_true.webp"
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
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center hover:bg-gray-100 transition-colors">
            Book Your Free Strategy Session
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;