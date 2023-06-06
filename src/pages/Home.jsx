import React from 'react';
import Post from '../components/PreviewPost';
import { Pagination, PaginationItem } from '@mui/material';
import {useState , useEffect} from 'react';
import axios from '../axios';
import PreviewPost from '../components/PreviewPost';
import { Link, NavLink } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState();
    const [query, setQuery] = useState('react');
    const [page, setPage] = useState(1);
    const [pageQty, setPageQty] = useState(0)


    useEffect(() => {
		(async () => {
            const queryParameters = new URLSearchParams(window.location.search)
            const page = queryParameters.get("page")
				await axios.get(`/posts?page=${page || 1}`).then(
                    ({data}) => {
                        console.log(data);
                        setPosts(data.data);
                        setPage(data.meta.current_page);
                        setPageQty(data.meta.last_page);
                    }
                );
		})();
	}, [page ]);

    if(Array.isArray(posts)){
        return(
            <>
                {posts.map((item) => <PreviewPost title={item.title} content={item.content}/>)}
                <Pagination
                    count={10}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`?page=${item.page}`}
                            {...item}
                        />
                    )}
                />
            </>   
        )
    }
    return(
        <>
            загрузка....
        </>
    )


}