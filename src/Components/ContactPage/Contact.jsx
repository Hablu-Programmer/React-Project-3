import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Contact() {
  const Items = [
    {
      img: "./Influencer.png",
      heading: "Become an Influencer",
      description:
        "Join a company that’s passionate about design and technology.",
      website: "hablu-programmer.com",
    },
    {
      img: "./help.png",
      heading: "Need help?",
      description:
        "Join a company that’s passionate about design and technology.",
      website: "hablu-programmer.com",
    },
    {
      img: "./refund.png",
      heading: "Refunds & Others",
      description:
        "Join a company that’s passionate about design and technology.",
      website: "hablu-programmer.com",
    },
  ];
  return (
    <section>
      <div className="lg:w-[70%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
          {/* left side */}
          <div className="lg:w-1/2 w-full mb-8 text-center lg:text-start">
            <h2 className="text-3xl  font-bold text-gray-800 mb-4 mt-12">
              Contact Us
            </h2>
            <p className="w-[60%] text-gray-600 mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nunc,
              quisque ultricies netus elit massa aliquam quis cras. Enim leo, in
              massa sapien facilisi netu.
            </p>

            <div className="text-gray-800 mt-5 w-[50%] mx-auto lg:w-full lg:mx-0">
              <p className="flex gap-3 font-semibold">
                <img className="w-6 h-5" src="./phone.png" alt="" />{" "}
                <span>01816986263</span>{" "}
              </p>
              <p className="flex gap-3 font-semibold">
                <img className="w-6 h-5" src="./email.png" alt="" />{" "}
                <span>habluprogrammer@gmail.com</span>{" "}
              </p>
            </div>
          </div>

          {/* right section  */}
          <div className="md:w-1/2 w-full bg-white p-6 rounded-2xl shadow-xl">
            <form className="space-y-8">
              <div className="flex flex-cols md:flex-row gap-4">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  labelPlacement="outside"
                />
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  labelPlacement="outside"
                />
              </div>
              <div className="flex flex-cols md:flex-row gap-4">
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="habluprogrammer@gmail.com"
                  labelPlacement="outside"
                />
                <Input
                  label="Phone Number"
                  type="number"
                  placeholder="Phone Number"
                  labelPlacement="outside"
                />
              </div>

              <div className="!mt-10">
                <Select
                  label="Subject"
                  placeholder="Select an Option"
                  labelPlacement="outside"
                >
                  <SelectItem>Frontend Web development course</SelectItem>
                  <SelectItem>Full Stack Web development course</SelectItem>
                </Select>
              </div>
              <div>
                <Textarea
                  isRequired
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                />
                <Button color="primary" className="w-full mb-4 mt-5">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* card section  */}
        <div className="mt-24 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Items.map((item, index) => (
              <div
                key={index}
                className="text-center justify-center items-center"
              >
                <img
                  className="w-20 h-20 object-cover rounded mb-4 mx-auto"
                  src={item.img}
                  alt=""
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.heading}
                </h3>
                <p className="text-gray-800 mb-4 w-[60%] mx-auto">
                  {item.description}
                </p>
                <a className="text-blue-500 font-medium hover:underline">
                  {item.website}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FBFCFF] p-24">
        <div className="lg:w-[70%] mx-auto ">
          <h3 className="text-center font-bold text-3xl">
            Frequently Asked Questions
          </h3>
          <p className="text-md text-center lg:w-[50%] mx-auto mb-12 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            neque, repellat quasi ipsum ullam architecto consequuntur
            necessitatibus eius sapiente vel.
          </p>
          <Accordion
            className="gap-5 font-semibold"
            variant="splitted"
            defaultExpandedKeys={["1"]}
          >
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="Do you offer refunds for purchased products?"
              className="p-4 "
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="How does Chillsbay work?"
              className="p-4"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Can I pay with Crypto on Chillsbay.com? "
              className="p-4"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 4"
              title="How can I become a Chillsbay Host?"
              className="p-4"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 5"
              className="p-4"
              title="Can I pay with Crypto on Chillsbay.com? "
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum adipiscing tristique ut blandit massa tellus amet
                at. Amet, arcu tellus cursus leo. Eget malesuada a enim, at at
                cursus ornare et nunc. Enim ultrices platea morbi.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Contact;
