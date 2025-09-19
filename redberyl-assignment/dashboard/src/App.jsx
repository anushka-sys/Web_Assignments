import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Header from './components/topbar';
import FilterBar from './components/filterbar';
import CompaniesList from './components/companieslist';
import CompanyInfo from './components/companyinfo';

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col overflow-hidden">
      {/* Topbar */}
      <Header />

      {/* Content Area: Sidebar + Main */}
      <div className="flex flex-1 gap-[10px] overflow-hidden px-[10px] pb-[10px] mt-[6px]">

        {/* Sidebar with full height */}
        <div className="h-full overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main content matches sidebar height */}
        <main className="flex-1 bg-white shadow overflow-y-auto p-4 mt-[10px]">
          <FilterBar />

          {/* 👇 Add these two components below the FilterBar */}
          <div className="flex gap-4 mt-4">
            <CompaniesList onSelect={setSelectedCompany} />
            <CompanyInfo company={selectedCompany} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
