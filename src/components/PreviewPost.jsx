import React from 'react';

export default function PreviewPost({title , content}) {
    
    return(
        <>
            <div className="block p-10 bg-white border shadow-xl rounded-lg shadowdark:border-gray-700 w-1/2 mb-3">
					<h5 className="my-2 text-2xl font-bold">
						{title}
					</h5>
					<p className="font-normal text-gray-700">
						{content}
					</p>
			</div>
        </>
    );
}