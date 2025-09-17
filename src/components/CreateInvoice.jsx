import React, { useState, useRef, useEffect } from "react";


function CreateInvoice() {
  const [CreateInvoiceForm, SetCreateInvoiceForm] = useState();

    const inputref = useRef();

    useEffect(() => {
        if(CreateInvoiceForm){
            inputref.current.focus();
        }
    }, [CreateInvoiceForm])

  return (
    <div>

      <div 
      className={`relative p-8 bg-[#eaeaea] mb-5 w-[377px] rounded-3xl hover:bg-[#d1c1c1] hover:cursor-pointer z-50`}
      onClick={() => {
        SetCreateInvoiceForm(!CreateInvoiceForm)
        console.log(CreateInvoiceForm);
      }
    }
      >
        <div className="flex flex-col w-full items-center justify-center gap-3 ">
          <img className="h-20 w-20 " src="/add.png" />
          <h2 className="text-blue-500 text-3xl font-bold mt-8">
            Create New Invoice
          </h2>
          <p className="text-sm text-gray-500 ">
            Start by creating and sending new invoice
          </p>
        </div>
      </div>

        <div className="flex justify-center mt-5 p-2" >
            <form>
                <label className="text-blue-500 text-sm hover:cursor-pointer" >
                    <input
                    type="file"
                    className="hidden"
                    />
                    Or upload an existing invoice and set payment reminder.
                </label>
            </form>
        </div>

        
            {
                CreateInvoiceForm && 
                <div className="fixed inset-10 z-70 flex flex-col items-center justify-center w-[300px] h-[450px] bg-[#cdcaca] gap-8 rounded-3xl" >
                    <form className="flex flex-col gap-10 " >
                        <input 
                        type="text" 
                        placeholder="enter invoice details.."
                        className="border p-2 rounded-lg focus:outline-none focus:ring-0" 
                        ref={inputref}
                        />
                        <input 
                        type="text" 
                        placeholder="enter invoice details.."
                        className="border p-2 rounded-lg focus:outline-none focus:ring-0" 
                       
                        />
                        <input 
                        type="text" 
                        placeholder="enter invoice details.."
                        className="border p-2 rounded-lg focus:outline-none focus:ring-0" 
                       
                        />
                        <input 
                        type="text" 
                        placeholder="enter invoice details.."
                        className="border p-2 rounded-lg focus:outline-none focus:ring-0" 
                      
                        />
                    </form>
                    <button className="w-20 h-10 rounded-xl text-white font-bold bg-gradient-to-br from-red-500 to-yellow-200 hover:cursor-pointer" onClick={() => SetCreateInvoiceForm(false)} >Close</button>
                </div>

            }
        

    </div>
  );
}

export default CreateInvoice;
