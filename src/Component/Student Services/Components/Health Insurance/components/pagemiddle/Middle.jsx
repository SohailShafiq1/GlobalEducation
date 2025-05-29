import React , { useEffect } from 'react'
import middlecss from './middle.module.css'
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './button/button'

function Middle() {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);
  return (
    <div className={middlecss.maincontainer}>
        <div className={middlecss.container1}>
            <div className={middlecss.text}>
                <div className={middlecss.subcontainer1}>
                    <h2 data-aos="fade-down-left" data-aos-easing="ease-in-out" data-aos-once="true">Types of Healthcare Systems in Australia</h2>
                    <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">The Australian healthcare system is world-renowned for its comprehensive services, from general and preventative care to more complex specialist treatments. The system is divided into two parts: the public health system and the private health system. When you need healthcare, you can access it through one of these two systems or a mix of both.</p>
                </div>
                <br />
                <div className={middlecss.subcontainer2}>
                    <h3 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true"><span>Public health system</span></h3>
                    <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Public healthcare in Australia is delivered through several different channels, including public hospitals, community-based services, and affiliated health organisations. Australian residents can access healthcare within the public system for free or at a reduced cost through Medicare. Health care in Australia has been provided by Medicare, a universal health care scheme, since 1984. The scheme provides access to medical services, public hospitals and medicines.</p>
                </div>
                <br />
                <div className={middlecss.subcontainer2}>
                    <h3 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-once="true"><span>Private health system</span> </h3>
                    <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">Many health service providers, such as private hospitals, specialist medical and allied health clinics, and pharmacies, are privately owned and managed. These services may be funded by a combination of government and private entities.</p>
                </div>
                <div className={middlecss.button} data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true"><Button/></div>
            </div>
            <div className={middlecss.imgs}>
                <img src={img1} alt="" data-aos="flip-up" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>
        </div>

        <div className={middlecss.container2}>
            <div className={middlecss.text}>
                <h2 data-aos="fade-down-right" data-aos-easing="ease-in-out" data-aos-once="true">What is <span>OSHC</span>, And What are its Benefits?</h2>
                <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Overseas Student Health Cover (OSHC) is a health cover the Australian government designed to help international students cover their medical and hospital care while studying in Australia. This health cover is provided for international students who don't have access to the Australian Public Health Care - Medicare.
                    <br />
                    <br />
                    Basic OSHC provides coverage for doctor's visits, hospital treatments, limited pharmaceuticals, ambulance service, prosthetic devices, and access to private hospitals and day surgeries. Dental care, optical services and physiotherapy are not typically included in basic OSHC plans but may be available as part of more comprehensive coverage from some providers.
                    <br />
                    <br />

                    It is highly beneficial for international students to have health insurance in the long run. Hospital and medical expenses can be expensive; without health insurance, these costs can be challenging. Health insurance covers will make it more affordable and convenient for students without putting a strain on their finances. They will also provide a sense of security and safety for students.</p>
            </div>
            <div className={middlecss.imgs}>
                <img src={img2} alt="" data-aos="flip-right" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>        
        </div>

        <div className={middlecss.container3}> 
            <div className={middlecss.text}>
                <h2 data-aos="fade-down-left" data-aos-easing="ease-in-out" data-aos-once="true">Why is Health Cover Required? 
                <br />
                <br /></h2>
                <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">As an international student in Australia, you are required to have health insurance for the duration of your stay. This is in accordance with visa condition 8501 and to ensure that you are covered in case of any medical emergencies that may occur. There are a few different options available to you regarding health insurance, so be sure to do your research before deciding.
                    <br />
                    <br />
                    Once you have chosen a plan, make sure that it is valid for the entirety of your stay in Australia. If you are extending your stay in Australia to continue your studies, you will need to purchase a new OSHC policy and ensure no lapse in coverage between the two policies.
                </p>
            </div>
            <div className={middlecss.imgs}>
                <img src={img3} alt="" data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>        
        </div>

        <div className={middlecss.container4}>
            <div className={middlecss.text}>
                <h2 data-aos="fade-down-right" data-aos-easing="ease-in-out" data-aos-once="true">Cost of Health Insurance in Australia</h2>
                <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">The cost of OSHC will depend on the duration of your study in Australia, your visa and the number of people included in your policy. The Department of Health in Australia has approved the following health funds to offer OSHC:
                </p>
                <ul className={middlecss.textul} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">
                    <li >ahm OSHC</li>
                    <li >Allianz Care Australia</li>
                    <li >Bupa</li>
                    <li >Medibank</li>
                    <li >nib</li>
                </ul>
                <p data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-once="true">Before taking out an OSHC policy, you must research the various providers to ensure that the level of cover meets your needs. It can be helpful to compare policies from different providers to get the best benefits for the lowest cost.
                </p>
            </div>
            <div className={middlecss.imgs}>
                <img src={img4} alt="" data-aos="flip-right" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>  
        </div>

        <div className={middlecss.container5}>
           <div className={middlecss.text}>
                <h2 data-aos="fade-down-left" data-aos-easing="ease-in-out" data-aos-once="true">Age of Students</h2>
                <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">As an international student, you will need to have an Overseas Student Health Cover (OSHC) for the duration of your studies. This also applies to your family members, such as partners and children under 18. The only exceptions are Belgian, Norwegian, and Swedish students.
                </p>
            </div>
            <div className={middlecss.imgs}>
                <img src={img5} alt="" data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>  
        </div>

        <div className={middlecss.container6}>
            <div className={middlecss.text}>
                <h2 data-aos="fade-down-right" data-aos-easing="ease-in-out" data-aos-once="true">Length and Level of Coverage</h2>
                <p data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true">Certain requirements must be met to obtain a student visa for Australia. One of these is having continuous health insurance (OSHC) for your stay. When you purchase OSHC, you will need to pay the policy premium in foll upfront, which will cover you for the length of your student visa.
                    <br />
                    <br />
                    If you are an international student without adequate health insurance, you risk your visa getting cancelled. You will need to obtain OSHC insurance for the duration of your student visa and renew your policy if you extend your stay. Be sure to ask about any waiting periods, exclusions, or other limitations on the plan.
                    <br />
                    <br />
                    The health insurance can be for singles that cover only the international student who is the primary student visa holder. The dual family option offers coverage for the international student, an adult partner, or one or more children under the age of 18. In the multi-family option, the insurance covers the international student and more than one dependent, including a partner and one or more dependent children.
                </p>
            </div>
            <div className={middlecss.imgs}>
                <img src={img6} alt="" data-aos="flip-right" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>  
        </div>

        <div className={middlecss.container7}>
            <div className={middlecss.text}>
                <h2 data-aos="fade-down-left" data-aos-easing="ease-in-out" data-aos-once="true">Ways to Apply for Health Insurance in Australia</h2>
                <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true">
                There are two ways to get OSHC insurance while studying in Australia
                1. Your education provider can purchase it for you. The university will schedule your first payment to the health fund provider, but you will be personally responsible for any future renewals. 
                2. You can choose your own OSHC-approved provider and pay for the insurance yourself.
                Either way, you must maintain continuous coverage throughout your stay in Australia. This is especially important for students studying at two different institutions, as each may purchase insurance on the student's behalf.                
                </p> 
            </div>
            <div className={middlecss.imgs}>
                <img src={img7} alt=""  data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-once="true"/>
            </div>  
        </div>

    </div>
  )
}

export default Middle
