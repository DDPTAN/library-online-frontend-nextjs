"use client";

import "./button-update-transaction.module.css";

interface TransactionUpdateProps {
  transaction: object;
  setDataTransaction: React.Dispatch<React.SetStateAction<object>>;
  setModalUpdateTransaction: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ButtonUpdateTransaction({
  transaction,
  setModalUpdateTransaction,
  setDataTransaction,
}: TransactionUpdateProps) {
  return (
    <button
      type="button"
      className="px-3 py-1 font-medium rounded-md shadow-sm bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white hover:opacity-80"
      onClick={() => {
        setModalUpdateTransaction(true);
        setDataTransaction(transaction);
      }}
    >
      Update
    </button>
  );
}
