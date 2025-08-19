'use client';

import { useState } from 'react';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import Navbar from '../components/Header';
import CommonHeading from '../components/other/CommonHeading';
import Footer from '../components/Footer';

export default function SkinCare() {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [expandedTreatment, setExpandedTreatment] = useState(null);

    const faqItems = [
        {
            id: 1,
            question: "What types of treatments do you offer?",
            answer: "We offer a wide range of dermatology treatments, including acne care, psoriasis management, skin cancer screening, cosmetic procedures like Botox etc."
        },
        {
            id: 2,
            question: "Do I need a consultation before getting treatment?",
            answer: "Yes, we recommend a consultation to assess your skin condition and determine the most suitable treatment plan for your specific needs."
        },
        {
            id: 3,
            question: "Are your treatments suitable for all skin types?",
            answer: "Our dermatologists customize treatments based on your individual skin type and condition. We work with all skin types to ensure safe and effective results."
        },
        {
            id: 4,
            question: "Do you offer cosmetic dermatology services?",
            answer: "Yes, we provide various cosmetic dermatology services including anti-aging treatments, skin rejuvenation, and aesthetic procedures."
        },
        {
            id: 5,
            question: "What should I expect during my first visit?",
            answer: "During your first visit, our dermatologist will conduct a comprehensive skin examination, discuss your concerns, and develop a personalized treatment plan."
        }
    ];

    const treatmentFaqs = [
        {
            id: 1,
            question: "What types of treatments do you offer?",
            answer: "We offer comprehensive dermatological treatments including medical dermatology, cosmetic procedures, laser treatments, chemical peels, and preventive skin care services."
        },
        {
            id: 2,
            question: "How long do treatments take?",
            answer: "Treatment times vary depending on the procedure. Most sessions last between 30 to 90 minutes."
        },
        {
            id: 3,
            question: "Are the treatments painful?",
            answer: "Our treatments are minimally invasive, and we take every measure to ensure your comfort. Some procedures may involve slight discomfort."
        }
    ];

    const sidebarItems = [
        { name: "Skin Care", icon: "→", target: "skin-care" },
        { name: "Treatment Options", icon: "→", target: "treatment-options" },
        { name: "Product Guidance", icon: "→", target: "product-guidance" },
        { name: "Service Policies", icon: "→", target: "service-policies" }
    ];

    const toggleFaq = (id) => setExpandedFaq(expandedFaq === id ? null : id);
    const toggleTreatment = (id) => setExpandedTreatment(expandedTreatment === id ? null : id);

    const scrollToSection = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <Navbar />
            <CommonHeading Text="Frequently Asked Questions" />
            
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* Sidebar */}
                        <aside className="lg:w-1/4 lg:sticky lg:top-24 self-start">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <nav className="space-y-4">
                                    {sidebarItems.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => scrollToSection(item.target)}
                                            className="flex items-center justify-between p-3 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
                                        >
                                            <span className="font-medium">{item.name}</span>
                                            <span className="text-teal-600">{item.icon}</span>
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="lg:w-3/4 space-y-12 overflow-auto max-h-[calc(100vh-6rem)] scrollbar-none">
                            
                            {/* Skin Care Section */}
                            <section id="skin-care" className="bg-white rounded-lg shadow-sm p-8">
                                <h1 className="text-4xl font-bold text-teal-700 mb-8">Skin Care</h1>
                                <p className="text-gray-600 mb-4">
                                    At The Salon Company, we specialize in maintaining and improving your skin health with advanced treatments and personalized care.
                                </p>
                                <div className="space-y-4">
                                    {faqItems.map((item) => (
                                        <div key={item.id} className="border border-gray-200 rounded-lg">
                                            <button
                                                onClick={() => toggleFaq(item.id)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                                                <FaArrowAltCircleDown className="h-5 w-5 text-gray-500" />
                                            </button>
                                            {expandedFaq === item.id && (
                                                <div className="px-6 pb-6">
                                                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Treatment Options Section */}
                            <section id="treatment-options" className="bg-white rounded-lg shadow-sm p-8">
                                <h2 className="text-3xl font-bold text-teal-700 mb-6">Treatment Options</h2>
                                <p className="text-gray-600 mb-4">
                                    Our salon offers a variety of treatments designed for skin rejuvenation, hair care, and cosmetic enhancements.
                                </p>
                                <div className="space-y-4">
                                    {treatmentFaqs.map((item) => (
                                        <div key={item.id} className="border border-gray-200 rounded-lg">
                                            <button
                                                onClick={() => toggleTreatment(item.id)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                                                <FaArrowAltCircleDown className="h-5 w-5 text-gray-500" />
                                            </button>
                                            {expandedTreatment === item.id && (
                                                <div className="px-6 pb-6">
                                                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Product Guidance Section */}
                            <section id="product-guidance" className="bg-white rounded-lg shadow-sm p-8">
                                <h2 className="text-3xl font-bold text-teal-700 mb-6">Product Guidance</h2>
                                <p className="text-gray-600 mb-2">
                                    Our experts recommend skincare products based on your skin type and treatment plan. We ensure you have the right products for home care.
                                </p>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Cleansers and exfoliators suitable for daily use</li>
                                    <li>Moisturizers for hydration and repair</li>
                                    <li>Sun protection with SPF guidance</li>
                                    <li>Specialty serums and masks for specific concerns</li>
                                </ul>
                            </section>

                            {/* Service Policies Section */}
                            <section id="service-policies" className="bg-white rounded-lg shadow-sm p-8">
                                <h2 className="text-3xl font-bold text-teal-700 mb-6">Service Policies</h2>
                                <p className="text-gray-600 mb-2">
                                    To ensure a smooth experience, please review our policies:
                                </p>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Appointments should be canceled at least 24 hours in advance</li>
                                    <li>Arrive 10 minutes early for your scheduled treatment</li>
                                    <li>Children under 16 must be accompanied by an adult</li>
                                    <li>Payment is accepted via cash, card, or online methods</li>
                                    <li>We prioritize hygiene and safety during all treatments</li>
                                </ul>
                            </section>

                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
