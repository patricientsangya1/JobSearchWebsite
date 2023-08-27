import React from 'react'

// Imported Icons ===>
import {BiTimeFive} from 'react-icons/bi'


// Imported images =====>
import logo1 from '../../assets/logo (1).jpg'
import logo2 from '../../assets/logo (2).jpg'
import logo3 from '../../assets/logo (3).jpg'
import logo4 from '../../assets/logo (4).jpg'
import logo5 from '../../assets/logo (5).jpg'
import logo6 from '../../assets/logo (6).jpg'
import logo7 from '../../assets/logo (7).jpg'
import logo8 from '../../assets/logo (8).jpg'

// For all the jobs, I'm going to use high order array method called Map...
// In this case I shall list all the jobs into an array called Data

const Data =[
    
    {
        id: 1,
        image: logo1,
        title: 'Web Developer',
        time:'Now',
        location: 'Canada',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam facilis cupiditate nisi sed doloribus odit, minima est illo provident saepe facere quibusdam reiciendis nobis, debitis praesentium sunt consectetur sequi.',
        company: 'Novac Linus co.'
    },

    {
        id: 2,
        image: logo2,
        title: 'UI Designer',
        time:'Now',
        location: 'DRC',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam facilis cupiditate nisi sed doloribus odit, minima est illo provident saepe facere quibusdam reiciendis nobis, debitis praesentium sunt consectetur sequi.',
        company: 'T-Pat Engineering'
    },

    {
        id: 3,
        image: logo3,
        title: 'Software Engineer',
        time:'14Hrs',
        location: 'New York',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam facilis cupiditate nisi sed doloribus odit, minima est illo provident saepe facere quibusdam reiciendis nobis, debitis praesentium sunt consectetur sequi.',
        company: 'Consutancy Agency'
    },

    {
        id: 4,
        image: logo4,
        title: 'Data Analyst',
        time:'12Hrs',
        location: 'Lubumbashi',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam facilis cupiditate nisi sed doloribus odit, minima est illo provident saepe facere quibusdam reiciendis nobis, debitis praesentium sunt consectetur sequi.',
        company: 'T-Pat Engineering'
    },

    {
        id: 5,
        image: logo5,
        title: 'IT Support Officer',
        time:'Now',
        location: 'Kinshasa',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam facilis cupiditate nisi sed doloribus odit, minima est illo provident saepe facere quibusdam reiciendis nobis, debitis praesentium sunt consectetur sequi.',
        company: 'T-Pat Engineering'
    },

    {
        id: 6,
        image: logo6,
        title: 'Expansion Manager',
        time:'16Hrs',
        location: 'Goma',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam facilis cupiditate nisi sed doloribus odit, minima est illo provident saepe facere quibusdam reiciendis nobis, debitis praesentium sunt consectetur sequi.',
        company: 'T-Pat Engineering'
    },

    {
        id: 7,
        image: logo7,
        title: 'Web Developer',
        time:'Now',
        location: 'Canada',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam facilis cupiditate nisi sed doloribus odit, minima est illo provident saepe facere quibusdam reiciendis nobis, debitis praesentium sunt consectetur sequi.',
        company: 'Novac Linus co.'
    },

    {
        id: 8,
        image: logo8,
        title: 'Product Support Engineer',
        time:'Now',
        location: 'Kenya',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsam facilis cupiditate nisi sed doloribus odit, minima est illo provident saepe facere quibusdam reiciendis nobis, debitis praesentium sunt consectetur sequi.',
        company: 'Novac Linus co.'
    },

]

const Jobs = () => {
  return (
    <div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

            {
                Data.map(({id, image, title,time,location,desc, company}) =>{
                    return (
                        // This will return a single job post based on the ID
                        <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

                            <span className='flex justify-between items-center grap-4'>

                                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                                <span className='flex items-center text-[#ccc] gap-1'>
                                    <BiTimeFive/>{time}
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>{location}</h6>

                            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>

                            <div className='company flex items-center gap-2'>
                                <img src={image} alt="Company Logo" className='w-[10%]'/>
                                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                            </div>

                            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                                Apply Now
                            </button>

                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Jobs