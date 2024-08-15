import React from 'react';

const InterviewPrep = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-4xl w-full mx-auto bg-white shadow-md rounded-sm p-8 text-center">
                <h1 className="text-3xl font-bold mb-4 text-[#E45826]">Interview Prep</h1>
                <p className="text-lg text-gray-600 mb-6">We are currently working on getting interview preparation materials ready for you. Stay tuned!</p>
                <p className="text-md text-gray-500">In the meantime, here are a few tips:</p>
                <ul className="list-disc list-inside text-left text-gray-600 mt-4">
                    <li>Research common interview questions and practice your answers.</li>
                    <li>Review the job description and align your skills and experiences with it.</li>
                    <li>Prepare questions to ask the interviewer about the role and company.</li>
                    <li>Practice mock interviews with friends or mentors.</li>
                </ul>
                <p className="text-sm text-gray-400 mt-6">We appreciate your patience and will update this page with relevant content as soon as possible.</p>
            </div>
        </div>
    );
};

export default InterviewPrep;
