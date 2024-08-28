import React from 'react';

const InterviewPrep = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-4xl w-full mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4 text-[#E45826] text-center">Interview Prep</h1>
                <p className="text-lg text-gray-600 mb-6 text-center">We are currently working on getting interview preparation materials ready for you. Stay tuned!</p>
                <p className="text-md text-gray-500 mb-4 text-center">In the meantime, here are a few tips:</p>
                <div className="flex justify-center">
                    <ul className="list-disc text-gray-600 text-left">
                        <li className="mb-2">Research common interview questions and practice your answers.</li>
                        <li className="mb-2">Review the job description and align your skills and experiences with it.</li>
                        <li className="mb-2">Prepare questions to ask the interviewer about the role and company.</li>
                        <li className="mb-2">Practice mock interviews with friends or mentors.</li>
                    </ul>
                </div>
                <p className="text-sm text-gray-400 mt-6 text-center">We appreciate your patience and will update this page with relevant content as soon as possible.</p>
            </div>
        </div>
    );
};

export default InterviewPrep;
