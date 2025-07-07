
"use client"
import { ArrowLeft, Play, Star, Users, Zap, ArrowRight, Sparkles, Rocket, CheckCircle, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Former VP at Google with 15+ years in tech leadership",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Ex-Meta engineer passionate about scalable systems",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "Award-winning designer from Apple's design team",
    avatar: "ER"
  },
  {
    name: "David Kim",
    role: "VP of Sales",
    bio: "Growth expert who scaled 3 startups to $100M ARR",
    avatar: "DK"
  }
];
export const AboutSections2:React.FC = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <section className="border rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b">
              <h3 className="font-semibold text-gray-900">Team Bio Grid</h3>
            </div>
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12"> 
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We're a diverse group of passionate individuals working together to build the future.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                        {member.avatar}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                      <div className="flex justify-center gap-3">
                        <button  className="w-8 h-8 p-0">
                          <Linkedin className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 p-0">
                          <Twitter className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    </div>
  );
};
