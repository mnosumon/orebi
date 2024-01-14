import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import Flex from '../components/utilities/Flex'
import Input from '../components/utilities/Input'
import { Link } from 'react-router-dom'

const SingUp = () => {
    let pathName = window.location.href
    let pathArr = pathName.split("/")
    let finalPath = pathArr[pathArr.length - 1]
  return (
    <>
    <section className='mt-[124px] mb-[140px]'>
        <div className="max-w-container mx-auto">
            <div className="">
                <h3 className='font-dm text-[#262626] font-bold text-[49px]'>Sing Up</h3>
                <BreadCrumb pathLastChild={finalPath}/>
            </div>
            <div className="mt-[127px] mb-28">
                <p className='w-[644px] text-[#767676] text-base font-normal font-dm leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>
            <div className="w-[1055px]">
                <div className="">
                    <h4 className='font-dm text-[#262626] font-bold text-[39px]'>Your Personal Details</h4>
                    <Flex className="mt-10 w-full flex-col gap-y-6">
                        <Flex className="gap-x-10">
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="firstName">First Name</label>
                                <Input className="singUpPageInput" type="text" placeholder="First Name" name="firstNmae"/>
                            </Flex>
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="lastName">Last Name</label>
                                <Input className="singUpPageInput" type="text" placeholder="Last Name" name="lastName"/>
                            </Flex>
                        </Flex>
                        <Flex className="gap-x-10">
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="email">Email address</label>
                                <Input className="singUpPageInput" type="email" placeholder="company@domain.com" name="email"/>
                            </Flex>
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="phoneNumber">Telephone</label>
                                <Input className="singUpPageInput" type="number" placeholder="Your phone number" name="phoneNumber"/>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
                <div className="mt-[145px] mb-[127px]">
                    <h4 className='font-dm text-[#262626] font-bold text-[39px]'>New Customer</h4>
                    <Flex className="mt-10 w-full flex-col gap-y-6">
                        <Flex className="gap-x-10">
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="address">Address 1</label>
                                <Input className="singUpPageInput" type="text" placeholder="4279 Zboncak Port Suite 6212" name="address"/>
                            </Flex>
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="address">Address 2</label>
                                <Input className="singUpPageInput" type="text" placeholder="Sadipura Chnadpur" name="address"/>
                            </Flex>
                        </Flex>
                        <Flex className="gap-x-10">
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="city">City</label>
                                <Input className="singUpPageInput" type="text" placeholder="Your city" name="city"/>
                            </Flex>
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="postCode">Post Code</label>
                                <Input className="singUpPageInput" type="number" placeholder="05228" name="postCode"/>
                            </Flex>
                        </Flex>
                        <Flex className="gap-x-10">
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="country">Country</label>
                                <select className='singUpPageInput' name="country" id="">
                                    <option selected value="">Please select</option>
                                    <option value="bangladesh">Bangladesh</option>
                                    <option value="pakistan">Pakistan</option>
                                    <option value="india">India</option>
                                    <option value="afganistan">Afganistan</option>
                                </select>
                            </Flex>
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="state">Region/State</label>
                                <select className='singUpPageInput' name="state" id="">
                                    <option selected value="">Please select</option>
                                    <option value="">Dhaka</option>
                                    <option value="">Chottogram</option>
                                    <option value="">Syleth</option>
                                    <option value="">Barishal</option>
                                </select>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
                <div className="mb-[136px]">
                    <h4 className='font-dm text-[#262626] font-bold text-[39px]'>Your Password</h4>
                    <Flex className="mt-10">
                        <Flex className="gap-x-10 w-full">
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="password">Password</label>
                                <Input className="singUpPageInput" type="password" placeholder="Password" name="password"/>
                            </Flex>
                            <Flex className="flex-col w-1/2">
                                <label className='singUpPageLabel' htmlFor="password">Repeat password</label>
                                <Input className="singUpPageInput" type="password" placeholder="Repeat password" name="password"/>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
            </div>
            <div className="">
                <Flex className="gap-x-4 items-center">
                    <Input className="h-3 w-3" name="aggred" type="checkbox"/>
                    <span className='text-[#767676] text-sm font-dm'>I have read and agree to the Privacy Policy</span>
                </Flex>
                <Flex className="gap-x-10 my-6">
                    <span className='text-[#767676] text-sm font-dm'>Subscribe Newsletter</span>
                    <Flex className="gap-x-4 items-center">
                        <Input className="h-3 w-3" name="selectOne" type="checkbox"/>
                        <span className='text-[#767676] text-sm font-dm'>Yes</span>
                    </Flex>
                    <Flex className="gap-x-3 items-center">
                        <Input className="h-3 w-3" name="selectOne" type="checkbox"/>
                        <span className='text-[#767676] text-sm font-dm'>No</span>
                    </Flex>
                </Flex>
            </div>
            <div className="">
                <Link className='bg-[#262626] inline-block font-dm text-white font-bold leading-normal not-italic text-base px-16 py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-[#F0F0F0] hover:text-black' to='#'>Sing Up</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default SingUp