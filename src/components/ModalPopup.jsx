import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        class = "h-8 w-28 border rounded-lg text-sm mt-6 text-white" style={{backgroundColor: "#2B69F5", fontFamily: "Roboto"}}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Submit Request
      </button>
      {showModal ? (
        <>
          <div
            class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div class="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 class="text-xl font-semibold " >
                    Request Limit Increase 
                  </h3>
                  <button
                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div class="relative p-6 flex-auto">
                  <p class="my-4 text-slate-500 text-lg leading-relaxed">
                    Your request has been successfully submitted.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                   <a href="./ExpenseBenefitsPage.html" class="text-white px-6 py-2 text-sm" style={{backgroundColor: "#2B69F5", fontFamily: "Roboto"}}>Close</a> 
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}