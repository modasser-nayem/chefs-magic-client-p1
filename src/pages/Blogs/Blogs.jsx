import React from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { MdPictureAsPdf } from "react-icons/md";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const questions = [
   {
      id: "1",
      question:
         "Tell us the differences between uncontrolled and controlled components?",
      answer:
         "In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.",
   },
   {
      id: "2",
      question: "How to validate React props using PropTypes?",
      answer: `
            1.PropTypes.any : The prop can be of any data type.
            1.PropTypes.bool : The prop should be a Boolean.
            3.PropTypes.number : The prop should be a number.
            4.PropTypes.string : The prop should be a string.
            5.PropTypes.func : The prop should be a function.
            6.PropTypes.array : The prop should be an array.`,
   },
   {
      id: "3",
      question: "Tell us the difference between nodejs and express js?",
      answer:
         "js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.",
   },
   {
      id: "4",
      question: "What is a custom hook, and why will you create a custom hook?",
      answer:
         "Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.",
   },
];

const Blogs = () => {
   return (
      <div className="blogs cs-container py-8 mx-auto w-[90%] md:w-[800px]">
         <div className="">
            <Pdf
               targetRef={ref}
               filename="chefs-magic.pdf"
            >
               {({ toPdf }) => (
                  <button
                     className="cs-btn mx-auto flex gap-2 items-center"
                     onClick={toPdf}
                  >
                     Download
                     <span>
                        <MdPictureAsPdf />
                     </span>
                  </button>
               )}
            </Pdf>
            <div
               ref={ref}
               className="text-start p-5 my-5"
            >
               <h3 className="text-3xl font-medium py-2.5 px-5 w-fit mx-auto text-center border-b-4 border-gray-500 mb-8">
                  This Blog have some React Js question
               </h3>
               {questions.map((q) => (
                  <div className="my-7">
                     <p
                        className="text-xl font-Montserrat font-semibold py-2"
                        key={q.id}
                     >
                        <span>{`${q.id}. `}</span>
                        {q.question}
                     </p>
                     <p className="font-Lato">{q.answer}</p>
                  </div>
               ))}
            </div>
         </div>
         {questions.map((question) => (
            <div
               key={question.id}
               tabIndex={0}
               className="collapse group collapse-arrow border border-base-300 rounded-box my-5"
            >
               <div className="collapse-title text-xl font-Montserrat font-bold bg-gray-200 group-focus:bg-yellow-cs group-focus:text-gray-700">
                  {question.question}
               </div>
               <div className="collapse-content bg-gray-200 text-black group-focus:bg-yellow-cs group-focus:text-gray-700">
                  <p className="text-lg font-Lato">{question.answer}</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Blogs;
