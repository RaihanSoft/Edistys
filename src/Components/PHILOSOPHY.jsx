import bg from "../assets/icons/easy-banking/Bridge.svg";
import line1 from '../assets/icons/easy-banking/Line1.svg'
import line2 from '../assets/icons/easy-banking/Line2.svg'
import line3 from '../assets/icons/easy-banking/Line3.svg'
import line4 from '../assets/icons/easy-banking/Line4.svg'
import image from '../../public/img.avif'
const   PHILOSOPHY = () => {
  return (
    <div>
      <div className="my-10">
        <h4 className="text-xl font-semibold text-blue-400 text-center">
          OUR PHILOSOPHY
        </h4>
        <h1 className="text-5xl font-bold text-center">
          Human-centred innovation
        </h1>
      </div>\
      <section>
        <div className="max-w-[500px] mx-auto xl:hidden " > <img src={image} alt="" className="w-full" /></div>
      </section>
      <section className="relative hidden xl:block">
        <div className=" w-11/12 mx-auto  rounded-2xl grid grid-cols-12 gap-10">
          <div className=" bg-gradient-to-br from-[#e6f4ff] to-white py-16 px-20  col-span-5 rounded-2xl">
            <div className=" shadow-xl bg-white   text-center p-6 rounded-xl mt-20  ">
              <h4 className="text-blue-500 font-bold text-xs" >CORE TECH</h4>
              <h1 className="font-bold text-2xl text-gray-500 " >Artifical <br />Intelligence</h1>
            </div>
            <p className="text-xs text-center mt-2 px-6" >Using AI/ML to upgrade legacy processes, reduce cost, and improve efficiency</p>
          </div>
          <div className="col-span-7 rounded-2xl  bg-gradient-to-bl from-[#e6f4ff] to-white py-16  px-20">
            <div className="flex gap-10 items-center ">
              <div>
                <div className=" mt-10 -ml-10  shadow-xl bg-white  text-center p-6 rounded-2xl  relative z-10">
                  <h4 className="text-orange-500 text-xs  font-bold">MECHANISM</h4>
                  <h1 className="font-bold text-2xl text-gray-500">Blockchain</h1>
                </div>
                <p className="-ml-14 mt-2 text-xs">Enhanced security by <br /> eliminating intermediaries</p>
              </div>
              <div className="flex flex-col gap-20">

                <div className=" shadow-xl ml-14 bg-white  shadow- text-center p-6 rounded-2xl   ">
                  <h4 className="text-accent text-xs  font-bold" >INFRASTRUCTURE</h4>
                  <h1 className="font-bold text-2xl text-gray-500" >Cloud</h1>
                </div>


                <div className=" ml-14 shadow-xl bg-white  text-center p-6 rounded-2xl   ">
                  <h4 className="text-orange-500 text-xs  font-bold">RESOURCE</h4>
                  <h1 className="font-bold text-2xl text-gray-500">Data</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className=" rotate-90 absolute top-40 left-[396px] -z-20"
          src={bg}
          alt=""
        />
        <img className="rotate-90 absolute top-40 left-[525px] " src={line1} alt="" />
        <img className="-rotate-90 w-30 absolute top-44 left-[725px]   " src={line2} alt="" />
        <img className="-rotate-90 w-30 absolute top-24 left-[725px]   " src={line3} alt="" />
        <img className="-rotate-90 w-16 absolute top-48 right-[265px]   " src={line4} alt="" />

     
      </section>
    </div>
  );
};

export default PHILOSOPHY;
