export const metadata = {
  title: 'Projects',
  description: 'Projects of me',
}

import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-2xl mx-auto text-center pb-12 md:pb-5">
            <h1 className="h1">Projects</h1>
          </div>
          {/* Projects */}
          <div className="flex flex-row flex-wrap justify-between items-center -mx-3 mb-14">
            <div className="max-w-2xl">
              <p className="text-gray-300 text-sm font-medium mb-1">03/2024 - 07/2024</p>
              <p className='text-xl font-bold w-80'> E-COMMERCE WEBSITE G2 STORE</p>
              <p className="text-gray-300 text-sm font-medium mb-1">Role: Front-end</p>
              <p className="text-gray-300 text-sm font-medium mb-1">https://github.com/Daongocthach/G2Store_FE</p>
              <p className="text-gray-300 text-sm font-medium mb-1">Customer website: https://g2store-956cf.web.app/</p>
              <p className="text-gray-300 text-sm font-medium mb-1">Seller website: https://g2storeseller.web.app/</p>
              <p className="text-gray-300 text-sm font-medium mb-1">Admin website: https://g2storeadmin.web.app/</p>
              <p className="text-gray-300 text-lg font-bold">E-commerce platform for sales, with features:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>Seller sell products, manage personal shops, view statistical reports, import/export Excel products.</li>
                <li>Customers create orders, view product information, purchase goods</li>
                <li>Administrators manage sellers, customers, products, sendnotifications, refund orders, view statistical reports.</li>
              </ul>
              <p className="text-gray-300 text-lg font-bold">Technologies:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>
                  <span className='font-bold'>Front-end: </span>ReactJs, Material UI, Redux, Tailwindcss, Axios, Vite, Firebase Hosting.
                </li>
                <li>
                  <span className='font-bold'>Back-end: </span>Java Spring Boot, Mysql..
                </li>
              </ul>
            </div>
            <div className="w-96">
              <img className='w-full h-full rounded-md' loading='lazy'
                src='https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/Screenshot%202024-08-06%20231719.png?alt=media&token=697a9c84-f3d7-453e-bb6b-3190ad757906' />
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center -mx-3 mb-14">
            <div className="max-w-2xl">
              <p className="text-gray-300 text-sm font-medium mb-1">01/2024 - 03/2024</p>
              <p className='text-xl font-bold w-80'>G2STORE_MOBILEAPP</p>
              <p className="text-gray-300 text-sm font-medium mb-1">https://github.com/Daongocthach/G2StoreMobileApp</p>
              <p className="text-gray-300 text-lg font-bold">Grocery store mobile app, with features:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>Customers create orders, view product information, make purchases</li>
                <li> Administrator: manage customer information, products, orders,
                  product categories, discount codes, view statistical reports.</li>
              </ul>
              <p className="text-gray-300 text-lg font-bold">Technologies:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>
                  <span className='font-bold'>Front-end: </span>React Native, Figma, Expo, Redux, Axios.
                </li>
                <li>
                  <span className='font-bold'>Back-end: </span>Java Spring Boot, Java Mail, Mysql.
                </li>
              </ul>
            </div>
            <div className="w-52">
              <img className='w-full h-full rounded-md' loading='lazy'
                src='https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/351045175-a38fa5a1-22d5-4ed0-bf1c-9e6156699c08.png?alt=media&token=75c1cc92-f2ed-40d2-9ecd-acc215c651bb' />
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center -mx-3 mb-14">
            <div className="max-w-2xl">
              <p className="text-gray-300 text-sm font-medium mb-1">02/2024 - 02/2024</p>
              <p className='text-xl font-bold w-80'>Yoga Hour</p>
              <p className="text-gray-300 text-sm font-medium mb-1">https://yoga-hour.web.app/home</p>
              <p className="text-gray-300 text-lg font-bold">Descriptions:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>A website helps users track time spent on goals.</li>
                <li>Change target name.</li>
                <li>Update working time.</li>
              </ul>
              <p className="text-gray-300 text-lg font-bold">Technologies:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>
                  ReactJs, Material UI, Firebase, Redux, Vite.
                </li>
              </ul>
            </div>
            <div className="w-96">
              <img className='w-full h-full rounded-md' loading='lazy'
                src='https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/355515878-fa77b484-afd2-42cb-9a50-56e86d5ff907.png?alt=media&token=e867004d-dc19-4887-b4ef-0588627f836e' />
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-between items-center -mx-3 mb-14">
            <div className="max-w-2xl">
              <p className="text-gray-300 text-sm font-medium mb-1">01/2024 - 02/2024</p>
              <p className='text-xl font-bold w-80'>MoneyManager</p>
              <p className="text-gray-300 text-sm font-medium mb-1">https://github.com/Daongocthach/Ecommerce_G2Store.git</p>
              <p className="text-gray-300 text-lg font-bold">E-commerce platform for sales, with features:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>Track expenses and income</li>
                <li>Save transactions and filter by date</li>
                <li>View detailed reports of financial activities</li>
                <li>Manage types of income and expenses</li>
                <li>Oversee and manage transactions.</li>
              </ul>
              <p className="text-gray-300 text-lg font-bold">Technologies:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>
                  React Native, Firebase, Expo, Redux.
                </li>
              </ul>
            </div>
            <div className="w-96">
              <img className='w-full h-full rounded-md' loading='lazy'
                src='https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/313719326-cba84a8d-79b4-4eef-898c-6cfde8c54194.png?alt=media&token=b83cfe8b-fe10-4509-be41-768dca71bdf8' />
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-between items-center -mx-3 mb-14">
          <div className="max-w-2xl">
              <p className="text-gray-300 text-sm font-medium mb-1">09/2023 - 12/2023</p>
              <p className='text-xl font-bold w-80'> E-COMMERCE WEBSITE G2STORE</p>
              <p className="text-gray-300 text-sm font-medium mb-1">https://github.com/Daongocthach/Ecommerce_G2Store.git</p>
              <p className="text-gray-300 text-lg font-bold">E-commerce platform for sales, with features:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>Sales and store management website.</li>
                <li>Customers create orders, view product information, make purchases</li>
                <li> Administrator: manage customer information, products, orders,
                  product categories, discount codes, view statistical reports.</li>
              </ul>
              <p className="text-gray-300 text-lg font-bold">Technologies:</p>
              <ul className='list-disc list-inside text-white ml-5' >
                <li>
                  <span className='font-bold'>Front-end: </span>ReactJs, Material UI, Redux, Axios, Vite.
                </li>
                <li>
                  <span className='font-bold'>Back-end: </span>Java Spring Boot, Java Mail, Mysql.
                </li>
              </ul>
            </div>
            <div className="w-96">
              <img className='w-full h-full rounded-md' loading='lazy'
                src='https://firebasestorage.googleapis.com/v0/b/g2store-956cf.appspot.com/o/355512564-b88eae25-345b-4476-9d66-c0269e1177ac.png?alt=media&token=7250f068-b496-48f2-8a99-884ebf486a1e' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
