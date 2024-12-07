import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { UserIcon } from "@heroicons/react/24/outline";

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const HandleClose = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div className="flex flex-wrap gap-3">
        <Button variant="flat" onPress={handleOpen}>
          <UserIcon className="text-gray-500 w-4 h-4" />
          Account
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        backdrop="blur"
        onClose={HandleClose}
        size="5xl"
        placement="top"
      >
        <ModalContent>
          <ModalBody className="px-0 py-0">
            <div className="flex flex-col md:flex-row w-full h-full md:max-h-[90vh] overflow-y-auto md:overflow-visible">
              {/* left side  */}
              <div className='bg-[url("LoginImg.png")] bg-cover bg-no-repeat bg-center flex flex-col text-white w-full md:w-1/3 p-8'>
                <h3 className="text-4xl font-bold mb-5 text-start mt-10">
                  Sign Up
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  tellus ullamcorper hendrerit quis purus pellentesque. Ac
                  sagittis, convallis non tincidunt interdum eu nullam aliquam
                  maecenas. Enim sed tortor morbi ut suspendisse.{" "}
                </p>
              </div>

              {/* right side*/}

              <div className="w-full md:w-2/3 p-8 bg-white">
                <div>
                  <img className="w-fit mx-auto" src="/logo.png" alt="" />
                  <h2 className="text-2xl font-bold text-[#26395C] mt-5 mb-2">
                    Sign up and get exploring!
                  </h2>
                  <p className="text-md mb-4">
                    Already have an account? <a href="" className="text-blue-500">Sign In</a>
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md hover:bg-gray-100">
                    <img className="w-5 h-5 mr-3" src="/google.png" alt="" />
                    Sign up with Google
                  </button>
                  <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md hover:bg-gray-100">
                    <img className="w-5 h-5 mr-3" src="/facebook.png" alt="" />
                    Sign up with Facebook
                  </button>
                  <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md hover:bg-gray-100">
                    <img className="w-5 h-5 mr-3" src="/apple.png" alt="" />
                    Sign up with Apple
                  </button>
                </div>
                {/* Divider */}
                <div className="flex items-center my-6 text-center text-gray-500">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="px-3 text-gray-600">or continue with</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Manual Signup Form */}
                <form action="" className="mt-10">

                  <div className=" !mb-4 ">
                    <Input type="email" label="Email" placeholder="habluprogrammer@gmail.com" labelPlacement="outside" />
                  </div>

                  <div className="mb-4 mt-12">
                    <Input type="password" label="Password" placeholder="****************" labelPlacement="outside" />
                  </div>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-xl">
                    Sign Up
                  </button>

                  <p className="text-sm mt-2 text-center"> 
                  By creating an account, you agree to our <a href="" className="text-blue-500">Terms & Conditions</a> and <a href="" className="text-blue-500">Privacy Policy</a>.
                  </p>

                </form>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}

export default MyModal;
