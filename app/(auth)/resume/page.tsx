export const metadata = {
  title: 'Resume',
  description: 'Resume of me',
}


export default function SignUp() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-5">
            <h1 className="h1">Resume</h1>
          </div>
          {/* Resume */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center flex-wrap -mx-3">
              <div className="px-3">
                <a className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex flex-row justify-center items-center" 
                href='https://static.topcv.vn/topcv-cv-uploads/2e34b56b748d483be62b3dfbb91d7db5.pdf#toolbar=0&navpanes=0&scrollbar=0'>
                  <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" /><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                  <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                  <span className="flex-auto pl-16 pr-8 -ml-16">View CV Online</span>
                </a>
              </div>
            </div>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="h3 text-gray-400">Experience</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <div className="flex flex-row flex-wrap justify-between -mx-3 mb-4">
              <div className="flex flex-col mx-3">
                <p className="text-gray-300 text-sm font-medium mb-1">25/09/2023 - 03/12/2023</p>
                <p className='text-xl font-bold w-80'>Trung tâm công nghệ phần mềm - Đại học sư phạm kỹ thuật TP.HCM</p>
                <p className="text-gray-300 text-sm font-medium mb-1">Java Backend</p>
                <p className="text-gray-300 text-sm font-medium mb-1">TP.HCM</p>
              </div>
              <div className="mx-3">
                <label className="block text-gray-300 text-sm font-medium mb-1 w-80" htmlFor="full-name">
                  I designed and maintained scalable backend systems using Java, Spring Boot, and Hibernate.
                  I optimized performance, managed databases, and integrated with frontend applications.
                  Key achievements include make a ecomerce website to purchase and manage products.
                </label>
              </div>
            </div>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="h3 text-gray-400">Education</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <div className="flex flex-row justify-between items-center flex-wrap -mx-3 mb-4">
              <div className="flex flex-col mx-3">
                <p className="text-gray-300 text-sm font-medium mb-1">2020 - 2024</p>
                <p className='text-xl font-bold w-80'> HO CHI MINH CITY UNIVERSITY OF TECHNOLOGY AND
                  EDUCATION (UTE )</p>
                <p className="text-gray-300 text-sm font-medium mb-1">Major: Information Technology</p>
                <p className="text-gray-300 text-sm font-medium mb-1">GPA: 8.0/10</p>
              </div>
              <div className="mx-3">
                <label className="block text-gray-300 text-sm font-medium mb-1 w-80" htmlFor="full-name">
                  BACHELOR'S DEGREE IN INFORMATION TECHNOLOGY
                </label>
              </div>
            </div>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="h3 text-gray-400">Skills</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <div className="flex-wrap -mx-3 mb-4">
              <p className="text-gray-300 text-lg font-bold">
                Front-end:
                <span className='font-medium text-sm ml-1'>
                  ReactJs, React Native, Next Js, Redux, Tailwindcss, Figma
                </span>
              </p>
              <p className="text-gray-300 text-lg font-bold">
                Back-end:
                <span className='font-medium text-sm ml-1'>
                  Java Spring Boot, Node Js, ExpressJs
                </span>
              </p>
              <p className="text-gray-300 text-lg font-bold">
                Database:
                <span className='font-medium text-sm ml-1'>
                  Mysql, MongoDB
                </span>
              </p>
              <p className="text-gray-300 text-lg font-bold">
                Other:
                <span className='font-medium text-sm ml-1'>
                  ReactJs, React
                  Native, Next Js, Redux,
                  Tailwindcss, Figma
                </span>
              </p>
              <p className="text-gray-300 text-lg font-bold">
                Languages:
                <span className='font-medium text-sm ml-1'>
                  Javascript, Typescript, Java, C, C++, C#, Python
                </span>
              </p>
              <p className="text-gray-300 text-lg font-bold">
                Foreign Languages:
                <span className='font-medium text-sm ml-1'>
                  English (Toeic 635)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
