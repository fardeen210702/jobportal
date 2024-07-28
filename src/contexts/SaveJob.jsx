import { createContext, useContext, useEffect, useState } from "react";
import { useGlobalContext } from '../contexts/Maincontext';

const saveContext = createContext();

function SaveJob({ children }) {
    const { jobs } = useGlobalContext();
    const [flag , setFlag] = useState(false)
    const [savedJobs, setSavedJobs] = useState(() => {
        let updatedJobsList= localStorage.getItem('jobs-saved');
        if (!updatedJobsList) {
            return [];
        } else {
            try {
                return JSON.parse(updatedJobsList);
            } catch (error) {
                console.log("Error parsing JSON from localStorage:", error);
                return [];
            }
        }
    });

    useEffect(() => {
        localStorage.setItem('jobs-saved', JSON.stringify(savedJobs));
        console.log('LocalStorage updated:', savedJobs);

    }, [savedJobs]);


    const handleSaveJobs = (data) => {

        setSavedJobs((prevData) =>{
            const jobExists = prevData.find(job => job.job_id === data.job_id);
            if (jobExists) {
                setFlag(true)
                console.log('Job already exists:', data);
                return prevData;
            } else{
                setFlag(false)
                console.log('Adding new job:', data);
                return [...prevData, data];
            }
        } );
    };

    const handleErase = ()=>{
       setSavedJobs([])
    }
    
    const deleteJob = (el)=>{
        let filteredJobList = savedJobs.filter((elem,_) => elem.job_id !==el.job_id)
        setSavedJobs(filteredJobList)

    }
    return (
        <saveContext.Provider value={{ handleSaveJobs, savedJobs ,setFlag ,flag , handleErase , deleteJob}}>
            {children}
        </saveContext.Provider>
    );
}

const useSavedJobs = () => {
    return useContext(saveContext);
};

export { SaveJob, useSavedJobs };
