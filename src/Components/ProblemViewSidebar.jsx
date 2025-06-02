import React from 'react';
import { Edit, ArrowRight } from 'lucide-react';
import MiniMap from './MiniMap'; // Adjust path if needed

const ProblemViewSidebar = () => {
  return (
<aside className="w-full bg-white border-l p-4 flex flex-col justify-between min-h-full">


     <div className="border rounded-lg overflow-hidden w-full">
  <div className="h-68">
    <MiniMap />
  </div>
  <button className="w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-teal-700 hover:underline">
    <Edit className="w-4 h-4" />
    Edit this area
  </button>
</div>



      
    


    </aside>
  );
};

export default ProblemViewSidebar;
