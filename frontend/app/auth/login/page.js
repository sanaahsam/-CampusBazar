import React from "react";
import "../login/login.css";
import NavHead from "@/app/Components/NavHead";
import { FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { SlSocialGoogle } from "react-icons/sl";
import { TbBrandFacebook } from "react-icons/tb";

function page() {
  return (
    <main className="authPage">
      <div className="authContainer">
        <NavHead />
        <div className="w-[100%] h-[545px]   flex flex-row items-center justify-between p-5">
          <div className="h-[550px] pt-5  w-[350px] flex flex-col items-center">
            <p className='mt-5 mb-12 underline text-4xl font-["Kulim Park",sans-serif] '>
              No Ones Store
            </p>

            <img
              className="w-[280px] mb-12"
              src="https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2982a41b93c71_63184c5867aa7b2b84a1e2ca_DrawKit0035_Startups_%2526_Tech_Thumbnail.png"
              alt="picture"
            />
            <a
              href="/auth/register"
              className='font-["Kulim Park",sans-serif] underline'
            >
              Create an account
            </a>
          </div>
          <div className="signupConatiner">
            <p className='mb-15 underline text-3xl font-["Kulim Park",sans-serif] '>
              Login
            </p>

            <div className="flex  items-center border-b-[2px] w-[310px] mb-10 ">
              <MdEmail size={19} />
              <input
                type="text"
                placeholder="Email Address"
                className="AuthInput"
              />
            </div>
            <div className="flex  items-center border-b-[2px] w-[310px] mb-10 ">
              <LuLock size={19} />
              <input
                type="text"
                placeholder=" Password"
                className="AuthInput"
              />
            </div>
            <div className="w-[310px] flex flex-row justify-start items-start">
              <a
                href="/"
                className='underline text-lg font-["Kulim Park",sans-serif}'
              >
                Forget Password?
              </a>
            </div>
            <div className="w-[310px] h-[42px]  flex justify-start items-start mt-7">
              <button className=' bg-[#D9D9D9] w-[120px] h-[38px] border-2 font-["Kulim Park", sans-serif] text-lg flex justify-center items-center ml-0'>
                Login
              </button>
            </div>
            <div className="flex flex-row  items-center w-[310px] h-[50px] mt-14">
              <p className='font-["Kulim Park", sans-serif] text-lg'>
                Or login with
              </p>
              <SlSocialGoogle size={20} className="ml-[20px]" />
              <TbBrandFacebook size={25} className="ml-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
