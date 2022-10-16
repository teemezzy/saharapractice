import React from 'react'
import { useForm } from 'react-hook-form'

const ContactUs = () => {
    const { register, formState: { errors }, reset, formState, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className=' lg:pt-[134px] pt-[56px] pb-[108px] lg:pb-[152px] '>
            <h1 id='contact-us' className=' font-bold text-center text-[30px] lg:text-[40px]'>Contact Us</h1>
            <p className='py-[40px] lg:py-[80px] text-center w-[95%] lg:w-[100%] m-auto text-[20px]'>How can we be of help to you? </p>
            <h2 className='text-center lg:-[24px] font-semibold '>Contact Person</h2>

            <form className='w-[70%] m-auto' onSubmit={handleSubmit(onSubmit)} action="">
                <div className="my-4">
                    <label>Full Name</label>

                    <input style={{ border: errors.fullname ? '1px solid #e03434' : '' }}
                        type="text"
                        placeholder="Enter Fullname"
                        className="outline-none w-full  rounded-lg  px-5 outline-[1px] outline-[#BBC2D9] bg-white h-[56px] "
                        {...register("fullname", {
                            required: {
                                value: true,
                                message: 'Can not be blank'
                            },
                        })}
                    />
                    {errors.fullname && (
                        <p className="text-[#e03434] text-sm">{errors.fullname.message}</p>
                    )}
                </div>

                <div className="my-10">
                    <label>Email</label>

                    <input style={{ border: errors.email ? '1px solid #e03434' : '' }}
                        type="email"
                        placeholder="Enter email"
                        className="outline-none w-full  rounded-lg  px-5 outline-[1px] outline-[#BBC2D9] bg-white h-[56px] "
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Can not be blank'
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-[#e03434] text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div className="my-10">
                    <label>Phone Number</label>

                    <div className="flex justify-between">
                        <div className="relative w-[25%] lg:w-[14%] flex items-center ">
                            <span className='absolute lg:px-4 '> <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1665796582/Sahara%20Practice/nigeria_z6ruzp.png' alt="" /></span>

                            <select style={{ border: errors.phonenumber ? '1px solid #e03434' : '' }}
                                type="number"
                                placeholder="+234"
                                className="outline-none w-full  rounded-lg lg:px-12  px-6 outline-[1px] outline-[#BBC2D9] bg-white h-[56px] "
                                {...register("phonenumber", {
                                    required: {
                                        value: true,
                                        message: 'Can not be blank'
                                    },
                                })}
                            >
                                <option value="" key=""><span> <img src='https://res.cloudinary.com/egator-finance-ltd/image/upload/v1665796582/Sahara%20Practice/nigeria_z6ruzp.png' alt="" /></span> +234</option>
                            </select>
                        </div>


                        <input style={{ border: errors.phonenumber ? '1px solid #e03434' : '' }}
                            type="tel"
                            placeholder="Enter phonenumber"
                            className="outline-none w-[72%] lg:w-[82%]  rounded-lg  px-5 outline-[1px] outline-[#BBC2D9] bg-white h-[56px] "
                            {...register("phonenumber", {
                                required: {
                                    value: true,
                                    message: 'Can not be blank'
                                },
                            })}
                        />
                    </div>

                    {errors.phonenumber && (
                        <p className="text-[#e03434] text-sm">{errors.phonenumber.message}</p>
                    )}
                </div>

                <h2 className='font-semibold lg:text-[24px] text-center lg:pt-[64px] '>Company Information</h2>

                <div className="my-4">
                    <label>Company Name</label>

                    <input style={{ border: errors.companyName ? '1px solid #e03434' : '' }}
                        type="text"
                        placeholder="Enter Company Name"
                        className="outline-none w-full  rounded-lg  px-5 outline-[1px] outline-[#BBC2D9] bg-white h-[56px] "
                        {...register("companyName", {
                            required: {
                                value: true,
                                message: 'Can not be blank'
                            },
                        })}
                    />
                    {errors.companyName && (
                        <p className="text-[#e03434] text-sm">{errors.companyName.message}</p>
                    )}
                </div>

                <div className="my-10">
                    <label>Website</label>

                    <input style={{ border: errors.website ? '1px solid #e03434' : '' }}
                        type="text"
                        placeholder="Enter Website"
                        className="outline-none w-full  rounded-lg  px-5 outline-[1px] outline-[#BBC2D9] bg-white h-[56px] "
                        {...register("website", {
                            required: {
                                value: true,
                                message: 'Can not be blank'
                            },
                        })}
                    />
                    {errors.website && (
                        <p className="text-[#e03434] text-sm">{errors.website.message}</p>
                    )}
                </div>

                <div className="my-10">
                    <label>Location </label>

                    <input style={{ border: errors.location ? '1px solid #e03434' : '' }}
                        type="text"
                        placeholder="EnterLocation "
                        className="outline-none w-full  rounded-lg  px-5 outline-[1px] outline-[#BBC2D9] bg-white h-[56px] "
                        {...register("location", {
                            required: {
                                value: true,
                                message: 'Can not be blank'
                            },
                        })}
                    />
                    {errors.location && (
                        <p className="text-[#e03434] text-sm">{errors.location.message}</p>
                    )}
                </div>

                <div className="my-10">
                    <label>How can we help</label>

                    <input style={{ border: errors.HowCanWeHelp ? '1px solid #e03434' : '' }}
                        type="text"
                        placeholder="Enter "
                        className="outline-none w-full  rounded-lg  px-5 outline-[1px] outline-[#BBC2D9] bg-white h-[56px] "
                        {...register("HowCanWeHelp", {
                            required: {
                                value: true,
                                message: 'Can not be blank'
                            },
                        })}
                    />
                    {errors.HowCanWeHelp && (
                        <p className="text-[#e03434] text-sm">{errors.HowCanWeHelp.message}</p>
                    )}
                </div>

                <div className="my-10">
                    <label>Additional information</label>

                    <textarea style={{ border: errors.additionalInformation ? '1px solid #e03434' : '' }}
                        type="text"
                        placeholder=" "
                        className="outline-none w-full  rounded-lg  px-5 outline-[1px] outline-[#BBC2D9] bg-white h-[176px] "
                        {...register("additionalInformation", {
                        })}
                    />
                    {errors.additionalInformation && (
                        <p className="text-[#e03434] text-sm">{errors.additionalInformation.message}</p>
                    )}
                </div>

                <div className="lg:w-[750px] text-center w-[294px] m-auto">
                    <input
                        type="checkbox"
                        {...register("checked", { required: true })}
                        className={`border-2 bg-[#F6F4FF] py-1 pl-4 accent-[#007B40] ${errors.checkbox &&
                            "focus:border-red-600/100 focus:ring-red-600 border-red-600 border-2"
                            }`}
                    />
                    <label
                        className={` pl-2 lg:text-[24px] text-[#666666] ${errors.checkbox && "focus:text-red-600"
                            }`}
                    >
                        I am an authorized representative of my employer/ venture.
                    </label>
                </div>
                <div className=" m-auto flex justify-center  ">
                    <button className='bg-[#FC9500] mt-[80px] m-auto  w-[289px] rounded-[20px] h-[56px] ' >Get Started</button>

                </div>

            </form>
        </div>
    )
}

export default ContactUs