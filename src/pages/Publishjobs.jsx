import React from 'react'
import { usePostDataContext } from '../contexts/PostContext'
function Publishjobs() {
    const {name,email,employer_name,employer_logo,employer_website,job_title,job_apply_link,job_country,job_city,job_employment_type,job_is_remote_yes , job_is_remote_no , job_max_salary,job_min_salary,job_posted_at_datetime_utc,job_offer_expiration_datetime_utc,job_required_experience,job_required_skills,job_description,job_responsibilities,job_benefits,job_qualifications , handleChange , handlesubmit} = usePostDataContext()


    return (
        <div className='w-full border border-red-700 p-3  mt-20 '>
            <h1 className='font-bold text-lg'>Add Job</h1>

            <form action="" className='flex flex-col gap-2' onSubmit={handlesubmit}>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="name" >Name : </label>
                    <input onChange={handleChange} value={name} type="text" name='name' id='name'  className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="email">email :</label>
                    <input onChange={handleChange} value={email} type="email" name='email' id='email' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="employer_name">employer name :</label>
                    <input onChange={handleChange} value={employer_name} type="text" name='employer_name' id='employer_name' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="employer_logo">employer logo :</label>
                    <input onChange={handleChange} value={employer_logo} type="file" name='employer_logo' id='employer_logo' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="employer_website">employer website :</label>
                    <input onChange={handleChange} value={employer_website} type="text" name='employer_website' id='employer_website' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_title">job title :</label>
                    <input onChange={handleChange} value={job_title} type="text" name='job_title' id='job_title' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_apply_link">job link :</label>
                    <input onChange={handleChange} value={job_apply_link} type="text" name='job_apply_link' id='job_apply_link' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_country">job country :</label>
                    <input onChange={handleChange} value={job_country} type="text" name='job_country' id='job_country' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_city">job city :</label>
                    <input onChange={handleChange} value={job_city} type="text" name='job_city' id='job_city' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_employment_type">job employment type :</label>
                    <input onChange={handleChange} value={job_employment_type} type="text" name='job_employment_type' id='job_employment_type' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='flex gap-3 w-full border border-orange-600 p-1'>
                    <label className='font-semibold' htmlFor="">is job remote? :</label>
                    <div className='flex gap-1 items-center' >
                        <label className='font-semibold' htmlFor="job_is_remote_yes"> Yes</label>
                        <input onChange={handleChange} value={job_is_remote_yes} type="radio" name='job_is_remote' id='job_is_remote_yes' className='outline-none border border-gray-600 flex-1' />
                    </div>
                    <div className='flex gap-1  items-center'>
                        <label className='font-semibold' htmlFor="job_is_remote_no"> No</label>
                        <input onChange={handleChange} value={job_is_remote_no} type="radio" name='job_is_remote' id='job_is_remote_no' className='outline-none border border-gray-600 flex-1' />
                    </div>
                </div>

                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_max_salary">job max salary :</label>
                    <input onChange={handleChange} value={job_max_salary} type="text" name='job_max_salary' id='job_max_salary' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_min_salary">job min salary :</label>
                    <input onChange={handleChange} value={job_min_salary} type="text" name='job_min_salary' id='job_min_salary' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_posted_at_datetime_utc">job posting date :</label>
                    <input onChange={handleChange} value={job_posted_at_datetime_utc} type="date" name='job_posted_at_datetime_utc' id='job_posted_at_datetime_utc' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_offer_expiration_datetime_utc">job expiration date :</label>
                    <input onChange={handleChange} value={job_offer_expiration_datetime_utc} type="date" name='job_offer_expiration_datetime_utc' id='job_offer_expiration_datetime_utc' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_required_experience">job required experience :</label>
                    <input onChange={handleChange} value={job_required_experience} type="number" name='job_required_experience' id='job_required_experience' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_required_skills">job required skills :</label>
                    <input onChange={handleChange} value={job_required_skills} type="text" name='job_required_skills' id='job_required_skills' className='outline-none border border-gray-600 flex-1' />
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold ' htmlFor="job_description">job description :</label>
                    <textarea onChange={handleChange} value={job_description} name="job_description" id="job_description" cols="25" rows="2"></textarea>
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_responsibilities">job responsibilities : </label>
                    <textarea onChange={handleChange} value={job_responsibilities} name="job_description" id="job_description" cols="25" rows="2"></textarea>
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_benefits">job benefits : </label>
                    <textarea onChange={handleChange} value={job_benefits} name="job_benefits" id="job_benefits" cols="25" rows="2"></textarea>
                </div>
                <div className='w-full border border-orange-600 p-1 '>
                    <label className='font-semibold' htmlFor="job_qualifications">job qualifications : </label>
                    <textarea onChange={handleChange} value={job_qualifications} name="job_qualifications" id="job_qualifications" cols="25    " rows="2"></textarea>
                </div>
                <input type='submit' value={'submit'} className='w-[100px]  hover:bg-[#E45826] transition-all duration-300 hover:text-white p-2 text-sm font-semibold text-[black]  rounded-sm  border-[#e4a64988] border ' />

            </form>


        </div>
    )
}

export default Publishjobs