import React from 'react'
import footerLogo from "../../assets/footerLogo.png"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className='footer py-4 md:py-6 bg-[#E6E6E6]'>

      <div className='footerWrapper container'>
        <div dir='rtl' className='topFooter flex md:flex-row flex-col items-center justify-between'>

          <div className='footerInfo'>
            <h2 dir="rtl" className='text-[24px] leading-[150%] font-bold '>سجل دخولك الي موقعنا...</h2>
            <p dir="rtl" className='text-[#4D4D4D] text-[18px] font-normal text-end'>لتبقي علي اطلاع علي جميع عروضنا باستمرار!</p>
          </div>

          <div className='footerContact flex md:flex-row flex-col items-center gap-[14px]'>

            <input dir="rtl" className='userEmail py-[12px] md:mt-0 mt-3 md:w-[451px] w-[250px] focus:outline-none	 px-[18px] rounded-[40px]' type="email" placeholder='أدخل ايميلك' />
            <button className='footerSubscribeBtn py-[10px] px-[24px] rounded-[60px] bg-black text-white'><a href="#">أشترك الان</a></button>

          </div>

          



        </div>

        <div dir='rtl' className='mainInfo mt-[40px] flex-wrap flex items-start justify-between'>

            <div className='rightMain  md:flex-row flex-col w-full md:w-1/3 '>
              <div className='flex md:flex-row flex-col  items-center gap-1'>
                <img className='w-[92px]' src={footerLogo} alt="footer logo" />
                <p className='text-[16px] text-center md:text-start text-[#4D4D4D] '>اختر من بين حلولنا التمويلية المرنة، واستمتع بتجربة امتلاك سيارة تناسب ميزانيتك وأسلوب حياتك</p>
              </div>
              <div className='footerSocialMedia my-3 flex justify-center md:justify-start items-center gap-1'>
                <a href="#" target='_blank'><FaFacebook size={24}/></a>
                <a href="#" target='_blank'><FaXTwitter size={24}/></a>
                <a href="#" target='_blank'><FaInstagramSquare size={24}/></a>
                <a href="#" target='_blank'><FaYoutube size={24}/></a>
              </div>
              <div dir='rtl' className='flex justify-center items-center mb-5 md:justify-start md:mb-0' >
                <button dir='ltr' className='footerContactBtn rounded-[60px] py-[10px] px-[24px] bg-black text-white flex items-center mt-[32px] gap-1'>اتصل بنا <PiPhoneCall size={24} style={{ transform: 'rotate(270deg)' }}/></button>
              </div>
            </div>

            <div className='footerLinks w-full md:w-2/3  flex md:flex-row flex-col gap-5 md:gap-0 items-start justify-between'>

                
              <div className='companyLinks text-center md:w-1/3 w-full'>
                  <h2 className='text-[18px] font-bold'>الشركه</h2>
                  <ul className='list-none'>
                    <li>
                      <Link className='text-[#4D4D4D] text-[16px]' to={"/Flight"}>رحلات الطيران</Link>
                    </li>
                    <li>
                      <Link className='text-[#4D4D4D] text-[16px]' to={"/limousine"}>رحلات ليموزين</Link>
                    </li>
                    <li>
                      <Link className='text-[#4D4D4D] text-[16px]' to={"/Hotel"}>حجز الفنادق</Link>
                    </li>
                    <li>
                      <Link className='text-[#4D4D4D] text-[16px]' to={"/aboutUs"}>عن قافلة الايمان</Link>
                    </li>
                    <li>
                      <Link className='text-[#4D4D4D] text-[16px]' to={"/contact"}>تواصل معنا</Link>
                    </li>
                  </ul>
              </div>




              <div className='policies text-center md:w-1/3  w-full'>
                  <h2 className='text-[18px] font-bold'>السياسات</h2>
                  <ul className='list-none'>
                    <li>
                      <a className='no-underline text-[16px] text-[#4D4D4D]' href="#">سياسات الخصوصيه</a>
                    </li>
                    <li>
                      <a className='no-underline text-[16px] text-[#4D4D4D]' href="#">الشروط والاحكام</a>
                    </li>
                  </ul>
              </div>


              <div className='support text-center md:w-1/3  w-full'>
                <h2 className='text-[18px] font-bold'>المساعدة والدعم</h2>

                  <ul className='list-none'>
                    <li>
                      <a className='no-underline text-[16px] text-[#4D4D4D]' href="#">طلب أو شكوي</a>
                    </li>
                    <li>
                      <a className='no-underline text-[16px] text-[#4D4D4D]' href="#">مبادئ حماية العملاء</a>
                    </li>
                  </ul>
              </div>
                
                
            
            </div>

            
            

        </div>
      </div>

    </div>
  )
}

export default Footer