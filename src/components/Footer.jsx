import React, { useState } from 'react';

function DropdownMenu({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-1/3 px-14">
      { }
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between  w-full px-4 py-2 text-sm font-medium text-[#e2f0fb] bg-[#f6a019] hover:bg-[#e2f0fb] hover:text-[#f6a019] rounded-md"
      >
        {title}
        <span className={isOpen ? 'rotate-180' : 'rotate-0'}> ▼</span>
      </button>

      { }
      {isOpen && (
        <div className="mt-2 w-full rounded-md shadow-lg bg-[#e2f0fb] ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                className="block px-4 w-full py-2 text-sm text-[#f6a019] hover:bg-[#f6a019]  hover:text-[#e2f0fb] text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#f6a019] text-[#e2f0fb] py-8">
      <div className="flex justify-around">
        { }
        <DropdownMenu 
          title="Our Company"
          options={["About Us", "Careers", "Contact"]}
        />
        { }
        <DropdownMenu 
          title="Legal"
          options={["Privacy policy", "Terms and conditions", "Cookies politice"]}
        />
        { }
        <DropdownMenu 
          title="Services"
          options={["Guarantee", "Call Center", "Consultancy"]}
        />
      </div>
    </footer>
  );
}

export default Footer;