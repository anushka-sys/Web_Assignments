import { useState } from "react";
import contactData from "../data/contactInfo.json";


const tabs = ["Details", "Locations", "Key Personnel", "Records", "Orders", "Services", "Subscriptions", "Contacts", "Account Manager"];

const CompanyInfo = ({ company }) => {
  const [activeTab, setActiveTab] = useState("Details");

  if (!company) return <div className="p-4">Select a company to view details</div>;

  const { info } = company;

  return (
    <div className="flex-1 p-4">
      <div className="w-full max-w-6xl mx-auto">

        {/* Company Name Box */}
        <div className="border border-gray-200 rounded p-4 bg-white shadow-sm w-full">
          <h2 className="text-xl font-semibold">
            {company.name}
            <span className="ml-2 text-sm px-2 py-0.5 bg-blue-100 text-blue-600 rounded">
              {company.domicile}
            </span>
          </h2>
          <p className="text-sm text-gray-500">
            {company.structure} | Member Managed -{" "}
            <a href="#" className="text-blue-600">Contact_Person</a>
          </p>
        </div>

   {/* Tabs */}
<div className="flex space-x-6 border-b mt-4 w-full">
  {tabs.map(tab => (
    <button
      key={tab}
      className={`pb-2 text-sm ${activeTab === tab ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ))}
</div>


        {/* Details Section with Header Inside */}
        {activeTab === "Details" && (
          <div className="border border-gray-200 rounded p-6 bg-white shadow-sm w-full mt-6">
            {/* General Info Header inside the box */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-gray-800">General Info</h3>
              <button className="text-blue-600 text-sm hover:underline flex items-center gap-1">
                <img src="/edit.png" alt="Edit" className="w-4 h-4" />
                Edit
              </button>
            </div>

            <div className="grid grid-cols-4 gap-6 text-sm">
              {Object.entries(info).map(([key, value]) => (
                <div key={key}>
                  <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1')}:</span><br />
                  <span className="text-gray-400">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Info Section */}
<div className="border border-gray-200 rounded p-6 bg-white shadow-sm w-full mt-6">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-base font-semibold text-gray-800">Contact Info</h3>
    <button className="text-blue-600 text-sm hover:underline flex items-center gap-1">
      <img src="/edit.png" alt="Edit" className="w-4 h-4" />
      Edit
    </button>
  </div>

  <div className="grid grid-cols-4 gap-6 text-sm">
    {contactData[company.id] ? (
      <>
        <div>
          <span className="font-semibold">Principal Address:</span><br />
          <span className="text-gray-400">{contactData[company.id].principalAddress}</span>
        </div>
        <div>
          <span className="font-semibold">Mailing Address:</span><br />
          <span className="text-gray-400">{contactData[company.id].mailingAddress}</span>
        </div>
        <div>
          <span className="font-semibold">Company Email:</span><br />
          <span className="text-gray-400">{contactData[company.id].email}</span>
        </div>
        <div>
          <span className="font-semibold">Company Phone:</span><br />
          <span className="text-gray-400">{contactData[company.id].phone}</span>
        </div>
      </>
    ) : (
      <div className="col-span-4 text-gray-500">No contact information available.</div>
    )}
  </div>
</div>


      </div>
    </div>
  );
};

export default CompanyInfo;