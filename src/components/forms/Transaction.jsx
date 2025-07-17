import React from "react";
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { deletetransaction } from "../../redux/feautures/transaction";
import { TrashIcon } from "@heroicons/react/24/outline";

function Transaction({ onAddClick }) {

  const [showdeletedmodel,setshowdeletedmodel] = useState(false);
  const [selectedid, setselectedid] = useState(null);
  const transactions = useSelector((state) => state.transaction.transaction);
  const dispatch = useDispatch();



  return (
    <>
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Transactions</h3>
          <button
            onClick={onAddClick}
            className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700 text-sm cursor-pointer"
          >
            ➕ Add Transaction
          </button>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-2">Description</th>
              <th>Category</th>
              <th>Date</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((t) => (
                <tr key={t.id} className="border-b">
                  <td className="py-2">{t.description}</td>
                  <td>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                      {t.category}
                    </span>
                  </td>
                  <td>{t.date}</td>
                  <td
                    className={`text-right ${
                      t.type === "income" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {t.type === "income"
                      ? `+$${t.amount}`
                      : `-$${Math.abs(t.amount)}`}
                  </td>
                  <td>
                  <button
                    onClick={()=>{
                          setselectedid(t.id),
                        setshowdeletedmodel(true);

                    }
                  }
                    className=" cursor-pointer p-1 text-black hover:text-red-700"
                  >
                 <TrashIcon className="h-5 w-5" />

                </button>
                  </td>
                </tr>
                
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-400">
                  No transactions yet
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {showdeletedmodel && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded shadow-lg text-center">
      <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
      <p className="mb-4 text-gray-600">Are you sure you want to delete this transaction?</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => {
            dispatch(deletetransaction(selectedid));
            setshowdeletedmodel(false);
          }}
          className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Yes, Delete
        </button>
        <button
          onClick={() => setshowdeletedmodel(false)}
          className= "bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    </>
  );
}

export default Transaction;
