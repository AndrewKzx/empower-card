import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="h-8 w-full border rounded-lg text-sm mt-6 text-white"
        style={{ backgroundColor: "#2B69F5", fontFamily: "Roboto" }}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Submit Request
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-4/5 my-6 mx-auto max-w-xs">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-4">
                <div className="flex items-center justify-center border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg pl-10 font-semibold text-center">Request Limit Increase</h3> {/* Added text-center class */}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-xl block outline-none focus:outline-none">
                    </span>
                  </button>
                </div>
                <div className="relative p-4 flex-auto ">
                  <p className="my-2  text-slate-500 text-sm leading-relaxed">
                    Your request has been successfully submitted.
                  </p>
                </div>
                <div className="flex items-center justify-center pt-4 border-t border-solid border-slate-200 rounded-b">
                  <button type="button" onClick={() => setShowModal(false)}>
                    <a
                      href="./ExpenseBenefitsPage.html"
                      className="text-white px-20 py-2 text-sm rounded-full"
                      style={{ backgroundColor: "#2B69F5", fontFamily: "Roboto" }}
                    >
                      Close
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
