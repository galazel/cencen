import { contacts } from "../../../constants";
export default function Contact() {
  return (
    <section className="h-[170vh] grid grid-rows-2 gap-1  px-20">
      <div className="flex flex-col justify-center items-center mb-60 p-50">
        <p className="">CONTACT US FOR</p>
        <p className="!text-[8rem] text-center text-base/30">
          INTERIOR <br /> STYLING
        </p>
      </div>
      <div className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto flex flex-col gap-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
            Hassle-Free, Every Time
          </h1>
          <div className="grid grid-cols-4 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
            {contacts.map((item, index) => {
              return (
                <div className="p-4 md:w-1/3 flex items-center" key={index}>
                  <div className="flex-grow pl-6">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2 text-center">
                      {item.title}
                    </h2>
                    <p className="leading-relaxed text-base text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
