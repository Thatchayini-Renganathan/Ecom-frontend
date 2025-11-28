import SellerNavbar from "@/components/SellerNavbar";
import React, { useState } from "react";
import sellerLogo1 from "/src/assets/seller-logo-1.jpg";
import sellerLogo2 from "/src/assets/seller-logo-2.jpg";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { PiBinocularsFill } from "react-icons/pi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbShoppingBagCheck } from "react-icons/tb";
import createIcon from "/src/assets/create-icon.jpg";
import listIcon from "/src/assets/list-icon.jpg";
import ordersIcon from "/src/assets/orders-icon.jpg";
import paymentIcon from "/src/assets/payment-icon.jpg";
import shipmentIcon from "/src/assets/shipment-icon.jpg";
import { Textarea } from "@/components/ui/textarea";
import contact from "/src/assets/contact-us.jpg";
import Footer from "@/components/Footer";
import SellerLoginForm from "@/components/SellerLoginForm";

function SellerHomePage() {

    const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <div>
        <div>
          <SellerNavbar openLogin={setOpenLogin}/>
        </div>

        <div className="text-center pt-25">
          <h2 className="text-6xl font-semibold font-poppins text-blue-700 tracking-wider">
            Welcome to the Seller Hub!
          </h2>
          <p className="font-semibold text-xl py-7">
            We're here to help you list, manage, and grow your business with
            ease.
          </p>
          <img src={sellerLogo1} alt="logo-1.jpg" className="h-120 mx-auto" />
        </div>

        <div id="about" className="mt-10 ml-15">
          <h3 className="text-4xl font-semibold font-poppins">
            Why do{" "}
            <span className="text-blue-700">sellers love selling on ECOM?</span>
          </h3>
          <p className="pt-5 text-gray-500">
            With millions of shoppers across India choosing our platform as
            their trusted online marketplace,
            <br />
            it’s no surprise that countless sellers rely on us to showcase their
            products 24/7 and grow their business seamlessly.
          </p>
        </div>

        <div className="flex mx-5 justify-between">
          <div className="grid grid-cols-2 gap-5 m-5">
            <Card className="sellerCard">
              <CardHeader>
                <PiBinocularsFill size={30} />
                <CardTitle>Opportunity</CardTitle>
                <CardDescription className={"text-justify"}>
                  Reach millions of customers across thousands of pincodes and
                  tap into major shopping events, seasonal sales, and
                  high-traffic promotions to boost your business.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="sellerCard">
              <CardHeader>
                <TbShoppingBagCheck size={30} />
                <CardTitle>Ease of Doing Business</CardTitle>
                <CardDescription className={"text-justify"}>
                  Create your seller account in just a few minutes with minimal
                  documentation. List your first product quickly and start
                  selling without any hassle.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="sellerCard">
              <CardHeader>
                <MdOutlineAutoGraph size={30} />
                <CardTitle>Growth</CardTitle>
                <CardDescription className={"text-justify"}>
                  Sellers experience higher visibility, increased conversions,
                  and consistent business growth especially during mega sale
                  events that attract massive customer traffic.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="sellerCard">
              <CardHeader>
                <BiSupport size={30} />
                <CardTitle>Additional Support</CardTitle>
                <CardDescription className={"text-justify"}>
                  Gain access to expert account management, seller training
                  programs, powerful analytics, cataloging and photoshoot
                  services, and continuous support to help you scale smoothly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grow">
            <img
              src={sellerLogo2}
              alt="logo-2.jpg"
              className="h-110 mx-auto my-5 rounded-2xl"
            />
          </div>
        </div>

        <div className="mt-10 ml-15">
          <h3 className="text-4xl font-semibold font-poppins">
            Your Journey with
            <span className="text-blue-700 pl-2">ECOM</span>
          </h3>
          <p className="pt-5 text-gray-500">
            Starting your online business with us is simple and seamless.
            Thousands of sellers trust our platform to grow their business every
            day.
          </p>

          <div className="flex mr-15">
            <Card className="sellerCard2">
              <CardHeader>
                <img src={createIcon} alt="" className="sellerImageIcon" />
                <CardTitle>Create</CardTitle>
                <CardDescription className={"text-justify"}>
                  Register your seller account in just a few minutes with basic
                  details like GST, address, and bank information.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="sellerCard2">
              <CardHeader>
                <img src={listIcon} alt="" className="sellerImageIcon" />
                <CardTitle>List</CardTitle>
                <CardDescription className={"text-justify"}>
                  Upload and list the products you want to sell start with even
                  a single item.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="sellerCard2">
              <CardHeader>
                <img src={ordersIcon} alt="" className="sellerImageIcon" />
                <CardTitle>Orders</CardTitle>
                <CardDescription className={"text-justify"}>
                  Begin receiving orders from millions of customers across the
                  country.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="sellerCard2">
              <CardHeader>
                <img src={shipmentIcon} alt="" className="sellerImageIcon" />
                <CardTitle>Shipment</CardTitle>
                <CardDescription className={"text-justify"}>
                  Enjoy hassle-free delivery services as we ensure your products
                  reach buyers safely and on time.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="sellerCard2">
              <CardHeader>
                <img src={paymentIcon} alt="" className="sellerImageIcon" />
                <CardTitle>Payments</CardTitle>
                <CardDescription className={"text-justify"}>
                  Get your payments deposited securely into your bank account
                  within a few days of dispatch.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div id="contact" className="mt-10 ml-15">
          <h3 className="text-4xl font-semibold font-poppins">
            We are happy to help
            <span className="text-blue-700 pl-2">you 😊</span>
          </h3>
          <p className="pt-5 text-gray-500">
            Still have questions or queries that are left unanswered?
            <br />
            Share your thoughts below which will help us improve your website
            experience.
          </p>
        </div>

        <div className="flex justify-between mt-5">
          <div className="grow-2">
            <p className="font-semibold text-2xl ml-25 py-2">Contact</p>
            <form action="" className="ml-15">
              <input
                type="text"
                placeholder="Enter Name"
                className="contactForm"
                required
              />
              <input
                type="text"
                placeholder="Enter Email"
                className="contactForm"
                required
              />
              <Textarea
                placeholder="Type Your Message"
                className="w-90 h-25 ml-10 bg-gray-200"
                required
              />
              <button className="ml-10 my-5 rounded bg-my-colour w-25 h-10 font-semibold hover:bg-orange-400 transition-transform hover:scale-105">
                Send
              </button>
            </form>
          </div>

          <div className="grow-2">
            <img
              src={contact}
              alt="contact-logo.jpg"
              className="h-120 mx-auto"
            />
          </div>
        </div>
        <Footer />
        { openLogin && 
        <div  className="fixed inset-0 backdrop-blur-sm bg-transparent flex justify-center items-center z-50">
            <SellerLoginForm closeForm={()=>setOpenLogin(false)}/>
        </div>   
        }
      </div>
    </>
  );
}

export default SellerHomePage;
