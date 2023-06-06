import React from 'react';
import Post from '../components/PreviewPost';

import {useState , useEffect} from 'react';
import axios from '../axios';
import PreviewPost from '../components/PreviewPost';

export default function Home() {
    const [data, setData] = useState();

    useEffect(() => {
		(async () => {
			try {
				const resp = await axios.get('/posts');
				if (resp.status === 200) {
					setData(resp.data.data)
				}
			} catch (error) {
				if (error.response.status === 401) {					return(
                        <>
                            <p>
                                Произошла ошибка
                            </p>
                        </>
                    );

				}
			}
		})();
	}, []);

    if(Array.isArray(data)){
        return(
            <>
                {data.map((item) => <PreviewPost title={item.title} content={item.content}/>)}
                <Pagination
                currentPage={19}
                onPageChange={1}
                totalPages={100}
                />
            </>
            
        )
    }
    return(
        <>
            aa
        </>
    )


}