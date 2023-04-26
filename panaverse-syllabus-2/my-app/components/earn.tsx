import Image from "next/image";

export default function Earn() {
  return (
    <>



      <div className="w-full flex justify-center mt-24 border-4 ">
        <div className="flex flex-col 2md:flex-row    border-black w-full  xl:max-w-10/12 2md:mx-0 mx-auto items-center">


          <Image width={'500'} height={'0'} src="/earn.png" alt="123" className="w-72 2md:w-102 mx-auto 2md:ml-20 rounded-lg 2md:h-64 h-48 border-black" />


          <div className=" 2md:w-112 w-full border-black p-2 space-y-4  px-2 2md:mt-0 mt-10   2md:mr-20 2md:mx-0 mx-auto ">

            <h1 className=" text-3xl font-bold border-l-4 border-color5 px-4">  
              The Program in a Nutshell{" "}
            </h1>
            <p className="border-l-4 border-color6 px-4 mt-2 text-lg font-normal">
              Earn While You Learn In this brand-new type of curriculum,
              students will learn how to make <span className=" text-color5 font-semibold ">money and boost exports in the
              classroom</span>  and will begin doing so within six months of the
              program's beginning. It resembles a cross between a corporate
              venture and an educational project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
