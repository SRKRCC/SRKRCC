import React, { useState, useEffect } from 'react';
import { Check, Upload, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Sun, Moon, Calendar, Users, BookOpen, UserCheck, GitBranch, Award } from 'lucide-react';

export default function Registrations() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        college: '',
        department: '',
        yearOfStudy: '',
        technicalSkills: '',
        motivation: '',
        resume: null,
        additionalDocs: null
    });

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load theme preference from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            [field]: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Application submitted successfully!');
    };

    return (
        <div className="min-h-screen bg-muted/40 transition-all duration-300">


            {/* Hero Section with Modern Design */}
            <div className="text-center mb-16 px-4 sm:px-6 lg:px-2 py-4 ">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFA500]/10 dark:bg-[#FF8C00]/20 text-[#FFA500] dark:text-[#FF8C00] text-sm font-medium mb-6 mt-6">
                    <span className="w-2 h-2 bg-[#FFA500] dark:bg-[#FF8C00] rounded-full mr-2 "></span>
                    Join Our Community
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    Become an
                    <span className="block bg-accent dark:from-[#FF8C00] to-red-500 bg-clip-text text-transparent">
                        Affiliate
                    </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Join SRKR Coding Club as an affiliate and be a part of our growing community of tech
                    enthusiasts, innovators, and problem solvers. Unlock exclusive opportunities and accelerate your tech journey.
                </p>
            </div>

            {/* Benefits Section with Modern Cards */}
            <section className="mb-24 bg-card/40 px-2 sm:px-6 lg:px-5 py-16">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6">Why Join Us?</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-16"></div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-16">
                    {/* Exclusive Events Access */}
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-300 dark:border-gray-700 hover:border-[#FFA500]/20 dark:hover:border-[#FF8C00]/80 text-center max-w-md">
                        <div className="flex flex-col items-center gap-4 mb-1">
                            <div className="w-12 h-12 bg-gradient-to-l from-accent to-[#FFA500] dark:from-red-500 dark:to-[#FF8C00] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight text-center">Exclusive Events Access</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                            Get priority access to all SRKR Coding Club events, workshops, hackathons, and tech meetups.
                        </p>
                    </div>


                    {/* Learning Resources */}
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-300 dark:border-gray-700 hover:border-[#FFA500]/20 dark:hover:border-[#FF8C00]/30 text-center max-w-md">
                        <div className="flex flex-col items-center gap-4 mb-1">
                            <div className="w-12 h-12 bg-gradient-to-l from-accent to-[#FFA500] dark:from-red-500 dark:to-[#FF8C00] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight text-center">Learning Resources</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                            Learn through courses conducted by our club, with live sessions covering the latest technologies and industry-relevant skills.
                        </p>

                    </div>

                    {/* Networking Hub */}
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-300 dark:border-gray-700 hover:border-[#FFA500]/20 dark:hover:border-[#FF8C00]/30 text-center max-w-md">
                        <div className="flex flex-col items-center gap-4 mb-1">
                            <div className="w-12 h-12 bg-gradient-to-l from-accent to-[#FFA500] dark:from-red-500 dark:to-[#FF8C00] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight text-center">Hackathons & Competitions</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                            Engage in events like HackOverflow and IconCoders, where you collaborate, innovate, and compete to solve real-world challenges and showcase your skills.
                        </p>
                    </div>

                    {/* Mentorship Programs */}
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-300 dark:border-gray-700 hover:border-[#FFA500]/20 dark:hover:border-[#FF8C00]/30 text-center max-w-md">
                        <div className="flex flex-col items-center gap-4 mb-1">
                            <div className="w-12 h-12 bg-gradient-to-l from-accent to-[#FFA500] dark:from-red-500 dark:to-[#FF8C00] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <UserCheck className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight text-center">Daily Coding Challenges</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                            Sharpen your skills with daily problems (POTD) on the CodeQuest platform, curated for all levels — from beginner to advanced.
                        </p>
                    </div>

                    {/* Project Collaboration */}
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-300 dark:border-gray-700 hover:border-[#FFA500]/20 dark:hover:border-[#FF8C00]/30 text-center max-w-md">
                        <div className="flex flex-col items-center gap-4 mb-1">
                            <div className="w-12 h-12 bg-gradient-to-l from-accent to-[#FFA500] dark:from-red-500 dark:to-[#FF8C00] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <GitBranch className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight text-center">Workshops</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                            Gain practical knowledge through hands-on workshops organized by our club, focusing on modern technologies and industry practices.
                        </p>
                    </div>

                    {/* Recognition & Certificates */}
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-300 dark:border-gray-700 hover:border-[#FFA500]/20 dark:hover:border-[#FF8C00]/30 text-center max-w-md">
                        <div className="flex flex-col items-center gap-4 mb-1">
                            <div className="w-12 h-12 bg-gradient-to-l from-accent to-[#FFA500] dark:from-red-500 dark:to-[#FF8C00] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight text-center">Recognition & Certificates</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                            Earn certificates and recognition for your contributions to the tech community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Registration Form with Modern Design */}
            <section className="mb-20" >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ready to Join?</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-6"></div>

                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Fill out the form below to start your journey with SRKR Coding Club
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your first name"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your last name"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="college" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        College/Institution
                                    </label>
                                    <input
                                        type="text"
                                        id="college"
                                        name="college"
                                        value={formData.college}
                                        onChange={handleInputChange}
                                        placeholder="Enter your college name"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="department" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Department
                                    </label>
                                    <select
                                        id="department"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-200"
                                        required
                                    >
                                        <option value="">Select your department</option>
                                        <option value="cse">Computer Science & Engineering</option>
                                        <option value="ece">Electronics & Communication</option>
                                        <option value="eee">Electrical & Electronics</option>
                                        <option value="mech">Mechanical Engineering</option>
                                        <option value="civil">Civil Engineering</option>
                                        <option value="it">Information Technology</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label htmlFor="yearOfStudy" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Year of Study
                                    </label>
                                    <select
                                        id="yearOfStudy"
                                        name="yearOfStudy"
                                        value={formData.yearOfStudy}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-200"
                                        required
                                    >
                                        <option value="">Select your year</option>
                                        <option value="1">1st Year</option>
                                        <option value="2">2nd Year</option>
                                        <option value="3">3rd Year</option>
                                        <option value="4">4th Year</option>
                                        <option value="graduate">Graduate</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="technicalSkills" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                        Primary Technical Skill
                                    </label>
                                    <select
                                        id="technicalSkills"
                                        name="technicalSkills"
                                        value={formData.technicalSkills}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-200"
                                        required
                                    >
                                        <option value="">Select your primary skill</option>
                                        <option value="javascript">JavaScript</option>
                                        <option value="python">Python</option>
                                        <option value="java">Java</option>
                                        <option value="cpp">C++</option>
                                        <option value="web">Web Development</option>
                                        <option value="mobile">Mobile Development</option>
                                        <option value="ai-ml">AI/ML</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    Why do you want to join SRKR Coding Club?
                                </label>
                                <textarea
                                    id="motivation"
                                    name="motivation"
                                    value={formData.motivation}
                                    onChange={handleInputChange}
                                    rows={4}
                                    placeholder="Tell us why you want to join and what you hope to achieve"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    Upload Resume (Optional)
                                </label>
                                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-xl bg-gray-50 dark:bg-gray-700 hover:border-[#FFA500] dark:hover:border-[#FFA500] transition-colors duration-200">
                                    <div className="space-y-2 text-center">
                                        <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                                        <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                            <label
                                                htmlFor="resume"
                                                className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-[#FFA500] dark:text-[#FFA500] hover:text-[#FFA500] dark:hover:text-[#FFA500] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#FFA500]"
                                            >
                                                <span className='p-2'>Choose File</span>
                                                <input
                                                    id="resume"
                                                    name="resume"
                                                    type="file"
                                                    className="sr-only"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={(e) => handleFileChange(e, 'resume')}
                                                />
                                            </label>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {formData.resume ? formData.resume.name : 'No file chosen'}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Accepted formats: PDF, DOCX (Max size: 2MB)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="additionalDocs" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    Upload Additional Documents (Optional)
                                </label>
                                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-xl bg-gray-50 dark:bg-gray-700 hover:border-[#FFA500] dark:hover:border-[#FFA500] transition-colors duration-200">
                                    <div className="space-y-2 text-center">
                                        <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                                        <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                            <label
                                                htmlFor="additionalDocs"
                                                className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-[#FFA500] dark:text-[#FFA500] hover:text-[#FFA500] dark:hover:text-[#FFA500] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#FFA500]"
                                            >
                                                <span className='p-2'>Choose Files</span>
                                                <input
                                                    id="additionalDocs"
                                                    name="additionalDocs"
                                                    type="file"
                                                    className="sr-only"
                                                    multiple
                                                    accept=".pdf,.doc,.docx,.jpg,.png"
                                                    onChange={(e) => handleFileChange(e, 'additionalDocs')}
                                                />
                                            </label>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            {formData.additionalDocs ? formData.additionalDocs.name : 'No files chosen'}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Upload certificates, project reports, or any other relevant documents.
                                            Accepted formats: PDF, DOCX, JPG, PNG (Max size: 5MB)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent/80 text-white py-4 px-6 rounded-xl hover:bg-accent dark:hover:from-[#FF8C00] hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-[#FFA500] dark:focus:ring-[#FF8C00] focus:ring-offset-2 font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section >

            {/* Contact Section with Modern Design */}
            <section section className="p-12 bg-card/40" >
                <div className=" p-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Have Questions?</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        If you have any questions about the affiliation process or need assistance, feel free to
                        reach out to us. We're here to help!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                        <div className="flex items-center bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                            <Mail className="w-5 h-5 text-[#FFA500] dark:text-[#FF8C00] mr-3" />
                            <a href="mailto:affiliates@srkrcodingclub.org" className="text-[#FFA500] dark:text-[#FF8C00] hover:text-[#FFA500] dark:hover:text-[#FF8C00] font-medium">
                                srkrcodingclubofficial@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center bg-white dark:bg-gray-800 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                            <Phone className="w-5 h-5 text-[#FFA500] dark:text-[#FF8C00] mr-3" />
                            <a href="tel:+911234567890" className="text-[#FFA500] dark:text-[#FF8C00] hover:text-[#FFA500] dark:hover:text-[#FF8C00] font-medium">
                                +91 1234567890
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}