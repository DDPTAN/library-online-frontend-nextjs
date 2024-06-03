"use client";

import "./button-update-fine.module.css";

interface TransactionUpdateProps {
  fine: object;
  setDataFine: React.Dispatch<React.SetStateAction<object>>;
  setModalUpdateFine: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ButtonUpdateFine({
  fine,
  setModalUpdateFine,
  setDataFine,
}: TransactionUpdateProps) {
  return (
    <button
      type="button"
      className="ml-1 px-3 py-1 font-medium rounded-md shadow-sm bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 text-white hover:opacity-80"
      onClick={() => {
        setModalUpdateFine(true);
        setDataFine(fine);
      }}
    >
      Pay Fine
    </button>
  );
}
